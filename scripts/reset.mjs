#!/usr/bin/env node
// Reset one project so you can redo it.
// Called by reset.sh:  bash reset.sh <name>   e.g.  linux-beginner-01
//
// It: (1) backs up your submission for that project (nothing is lost),
//     (2) sets the project back to ▶️ unlocked with a clean record.
// It does NOT touch other projects.

import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ppath = join(root, "progress.json");
const p = JSON.parse(readFileSync(ppath, "utf8"));
const name = (process.argv[2] || "").trim();
if (!name){ console.error("No project name given."); process.exit(1); }

let target = null;
for (const [track, t] of Object.entries(p.tracks)){
  for (const [lv, l] of Object.entries(t.levels)){
    const groups = l.exams ? Object.entries(l.exams) : [[null, l]];
    for (const [code, o] of groups){
      for (const [id, pr] of Object.entries(o.projects || {})){
        const nn = id.replace("project-", "");
        const dn = code ? `${code}-${nn}` : `${track}-${lv}-${nn}`;
        if (dn === name) target = { track, lv, code, id, pr };
      }
    }
  }
}
if (!target){ console.error(`Project "${name}" not found. Example names: linux-beginner-02, ckad-01, ccao-f-01`); process.exit(1); }

const { track, lv, code, id, pr } = target;
if (pr.status === "locked"){
  console.error(`"${name}" is still 🔒 locked (not started). Nothing to reset.`);
  process.exit(1);
}

// 1) back up the submission (if any)
const subDir = code ? join(root, "submissions", track, "certification", code, id)
                    : join(root, "submissions", track, lv, id);
let backedUp = "none";
if (existsSync(subDir) && readdirSync(subDir).length){
  const ts = new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);
  const dest = join(root, "submissions", ".reset-backups", `${name}-${ts}`);
  mkdirSync(dirname(dest), { recursive: true });
  renameSync(subDir, dest);
  backedUp = dest.replace(root + "/", "");
}

// 2) reset the project record
pr.status = "unlocked";
pr.attempts = 0;
pr.evidence = [];
pr.evaluation = { passedAt: null, criteriaMet: [], notes: "" };
pr.domainScores = {};

writeFileSync(ppath, JSON.stringify(p, null, 2) + "\n");
console.log(`✅ Reset "${name}" — status is now ▶️ unlocked, record cleared.`);
console.log(`   Old submission backed up to: ${backedUp}`);
