#!/usr/bin/env node
// Check the course files are consistent. No dependencies. Runs offline.
//
//   node scripts/validate.mjs
//
// ERRORS (exit 1): a real mismatch you should fix.
// WARN  (exit 0): something to improve, but not broken.
// INFO  (exit 0): planned content not authored yet — this is normal.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const progress = JSON.parse(readFileSync(join(root, "progress.json"), "utf8"));

const errors = [], warns = [], infos = [];

const REQUIRED_HEADINGS = [
  "## 1. Objective",
  "## 8. Acceptance criteria",
  "## 13. What to submit",
];

function curriculumDir(track, level, certCode) {
  return certCode
    ? join(root, "curriculum", track, "certification", certCode)
    : join(root, "curriculum", track, level);
}
function studyDir(track, level, certCode) {
  return certCode
    ? join(root, "study", track, "certification", certCode)
    : join(root, "study", track, level);
}
function listProjectFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => /^project-\d+.*\.md$/.test(f));
}
function fileForNode(dir, nodeKey) {
  if (!existsSync(dir)) return null;
  return readdirSync(dir).find((f) => f.startsWith(nodeKey) && f.endsWith(".md")) || null;
}

// Walk each level (normal + certification) and check both directions.
function checkLevel(track, levelName, level, certCode) {
  const dir = curriculumDir(track, levelName, certCode);
  const label = certCode ? `${track}/certification/${certCode}` : `${track}/${levelName}`;
  const nodes = level.projects || {};
  const nodeKeys = Object.keys(nodes);

  // 1) every authored node must have a file
  for (const key of nodeKeys) {
    const file = fileForNode(dir, key);
    if (!file) {
      errors.push(`Missing project file for progress node ${label}/${key} (looked in curriculum/${label}/)`);
      continue;
    }
    const text = readFileSync(join(dir, file), "utf8");
    for (const h of REQUIRED_HEADINGS) {
      if (!text.includes(h)) warns.push(`${label}/${file}: missing section "${h}"`);
    }
    // a study doc for this level should exist
    const sdir = studyDir(track, levelName, certCode);
    if (!existsSync(sdir) || readdirSync(sdir).filter((f) => f.endsWith(".md")).length === 0) {
      warns.push(`${label}: no study docs found in study/${label}/ (add a lesson before the project)`);
    }
  }

  // 2) every project file must have a node
  for (const file of listProjectFiles(dir)) {
    const key = (file.match(/^(project-\d+)/) || [])[1];
    if (key && !nodes[key]) {
      errors.push(`Project file curriculum/${label}/${file} has no entry in progress.json`);
    }
  }

  // 3) info: planned but not authored
  const planned = level.plannedProjects ?? nodeKeys.length;
  if (nodeKeys.length < planned) {
    infos.push(`${label}: ${nodeKeys.length}/${planned} projects authored (rest planned).`);
  }
}

for (const [track, t] of Object.entries(progress.tracks)) {
  for (const [levelName, level] of Object.entries(t.levels)) {
    if (level.exams) {
      for (const [code, ex] of Object.entries(level.exams)) checkLevel(track, "certification", ex, code);
    } else {
      checkLevel(track, levelName, level);
    }
  }
}

// 4) sanity: at least one startable project exists
let startable = 0;
for (const t of Object.values(progress.tracks))
  for (const lvl of Object.values(t.levels)) {
    const scan = (p) => Object.values(p.projects || {}).forEach((pr) => {
      if (["unlocked", "in_progress", "failed", "submitted"].includes(pr.status)) startable++;
    });
    if (lvl.exams) Object.values(lvl.exams).forEach(scan); else scan(lvl);
  }
if (startable === 0) warns.push("No startable project found (nothing is 'unlocked'). Is the student done, or is seeding wrong?");

// ---- report --------------------------------------------------------------
const line = (arr, tag) => arr.forEach((m) => console.log(`${tag} ${m}`));
console.log("— Course validation —");
line(errors, "❌ ERROR");
line(warns, "⚠️  WARN ");
line(infos, "ℹ️  INFO ");
console.log(`\nSummary: ${errors.length} error(s), ${warns.length} warning(s), ${infos.length} info.`);
process.exit(errors.length ? 1 : 0);
