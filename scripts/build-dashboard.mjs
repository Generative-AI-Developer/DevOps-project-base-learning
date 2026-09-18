#!/usr/bin/env node
// Build dashboard.html from progress.json.
// No dependencies. Runs offline. Safe to run any time.
//
//   node scripts/build-dashboard.mjs
//
// Then open dashboard.html in any browser.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const progress = JSON.parse(readFileSync(join(root, "progress.json"), "utf8"));

const ICON = {
  completed: "✅",
  active: "▶️",
  unlocked: "▶️",
  in_progress: "⏳",
  submitted: "⏳",
  failed: "❌",
  locked: "🔒",
};

// ---- helpers -------------------------------------------------------------

function levelStats(level) {
  const projects = level.projects || {};
  const ids = Object.keys(projects);
  const done = ids.filter((id) => projects[id].status === "completed").length;
  const authored = ids.length;
  const planned = level.plannedProjects ?? authored;
  const current =
    ids.map((id) => ({ id, ...projects[id] }))
       .find((p) => ["unlocked", "in_progress", "submitted", "failed"].includes(p.status)) || null;
  return { done, authored, planned, current };
}

function bar(done, planned) {
  const pct = planned ? Math.round((done / planned) * 100) : 0;
  return `<div class="bar"><div class="fill" style="width:${pct}%"></div></div>
          <span class="pct">${done}/${planned}</span>`;
}

function levelRow(name, level) {
  if (!level) return "";
  const s = levelStats(level);
  const icon = ICON[level.status] || "🔒";
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  const currentTxt = s.current
    ? `<div class="current">Now: ${ICON[s.current.status] || "▶️"} ${escapeHtml(s.current.title || s.current.id)}</div>`
    : "";
  const soon = s.authored === 0 && level.status !== "completed"
    ? `<div class="soon">content coming (${s.planned} planned)</div>`
    : "";
  return `<div class="level ${level.status}">
      <div class="level-head"><span class="ic">${icon}</span><b>${label}</b></div>
      ${bar(s.done, s.planned)}
      ${currentTxt}${soon}
    </div>`;
}

function certRow(exams) {
  return Object.entries(exams).map(([code, lvl]) => {
    const s = levelStats(lvl);
    const icon = ICON[lvl.status] || "🔒";
    return `<div class="level ${lvl.status}">
        <div class="level-head"><span class="ic">${icon}</span><b>${code.toUpperCase()}</b></div>
        ${bar(s.done, s.planned)}
      </div>`;
  }).join("");
}

function trackCard(key, track) {
  const levels = track.levels;
  const rows = ["beginner", "intermediate", "advanced"]
    .map((n) => levelRow(n, levels[n]))
    .join("");
  let cert = "";
  if (levels.certification) {
    cert = `<div class="cert">
        <div class="cert-title">🎓 Certification level ${ICON[levels.certification.status] || "🔒"}</div>
        <div class="cert-grid">${certRow(levels.certification.exams)}</div>
      </div>`;
  }
  return `<section class="card">
      <h3>${escapeHtml(track.title)}</h3>
      ${rows}${cert}
    </section>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---- overall numbers -----------------------------------------------------

let totalPlanned = 0, totalDone = 0;
for (const track of Object.values(progress.tracks)) {
  for (const lvl of Object.values(track.levels)) {
    if (lvl.exams) {
      for (const ex of Object.values(lvl.exams)) {
        const s = levelStats(ex); totalPlanned += s.planned; totalDone += s.done;
      }
    } else {
      const s = levelStats(lvl); totalPlanned += s.planned; totalDone += s.done;
    }
  }
}
const overall = totalPlanned ? Math.round((totalDone / totalPlanned) * 100) : 0;

const devopsKeys = Object.keys(progress.tracks).filter((k) => progress.tracks[k].line === "devops");
const anthropicKeys = Object.keys(progress.tracks).filter((k) => progress.tracks[k].line === "anthropic");

const weak = (progress.weakAreas || []).length
  ? `<ul>${progress.weakAreas.map((w) => `<li>⚠️ <b>${escapeHtml(w.domain)}</b> (score ${w.score}) — fix before ${escapeHtml(w.mustRemediateBefore || "next stage")}</li>`).join("")}</ul>`
  : `<p class="muted">None yet. 🎉</p>`;

const badges = (progress.achievements || []).length
  ? progress.achievements.map((a) => `<span class="badge">🏅 ${escapeHtml(a)}</span>`).join("")
  : `<span class="muted">No badges yet — earn your first one!</span>`;

const skills = (progress.skillsUnlocked || []).length
  ? progress.skillsUnlocked.map((s) => `<span class="skill">${escapeHtml(s)}</span>`).join("")
  : `<span class="muted">No skills unlocked yet.</span>`;

const cap = progress.capstone;
const capstone = cap
  ? `<div class="panel"><b>${ICON[cap.status] || "🔒"} ${escapeHtml(cap.title)}</b>
       <div class="muted" style="margin-top:6px">${escapeHtml(cap.unlocksAfter || "")}</div></div>`
  : "";

// ---- page ----------------------------------------------------------------

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>My Learning Dashboard</title>
<style>
  :root{ color-scheme: light dark; --bg:#0f1220; --panel:#191d33; --ink:#e9ecff; --muted:#9aa0c3;
         --line:#2a2f4d; --good:#39d98a; --accent:#6c7bff; }
  *{box-sizing:border-box}
  body{margin:0;font:15px/1.55 system-ui,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink);padding:24px}
  h1{margin:0 0 4px} .sub{color:var(--muted);margin:0 0 18px}
  .overall{display:flex;align-items:center;gap:14px;background:var(--panel);border:1px solid var(--line);
           border-radius:14px;padding:16px 18px;margin-bottom:22px}
  .ring{font-size:30px;font-weight:800;color:var(--good)}
  .lines{display:grid;grid-template-columns:2fr 1fr;gap:18px}
  @media(max-width:820px){.lines{grid-template-columns:1fr}}
  .line-title{margin:0 0 10px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
  .cards{display:grid;gap:14px}
  .devops .cards{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:14px 16px}
  .card h3{margin:0 0 12px}
  .level{padding:8px 0;border-top:1px dashed var(--line)}
  .level:first-of-type{border-top:0}
  .level-head{display:flex;align-items:center;gap:8px;margin-bottom:6px}
  .level.locked{opacity:.5}
  .ic{width:20px;text-align:center}
  .bar{height:8px;background:#0c0f1e;border-radius:6px;overflow:hidden;display:inline-block;width:70%;vertical-align:middle}
  .fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--good))}
  .pct{font-size:12px;color:var(--muted);margin-left:8px}
  .current{font-size:12.5px;margin-top:5px}
  .soon{font-size:12px;color:var(--muted);margin-top:4px;font-style:italic}
  .cert{margin-top:10px;border-top:1px solid var(--line);padding-top:10px}
  .cert-title{font-size:13px;margin-bottom:8px}
  .cert-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
  .cert .level{border:0;padding:4px 0}
  .panel{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:14px 16px;margin-top:18px}
  .badge,.skill{display:inline-block;background:#0c0f1e;border:1px solid var(--line);border-radius:20px;
                padding:3px 10px;margin:3px;font-size:12.5px}
  .muted{color:var(--muted)}
  footer{color:var(--muted);font-size:12px;margin-top:22px}
</style></head>
<body>
  <h1>My Learning Dashboard 🎮</h1>
  <p class="sub">Goal: ${escapeHtml(progress.student.goal || "")}</p>

  <div class="overall">
    <div class="ring">${overall}%</div>
    <div>
      <b>Overall progress</b><br>
      <span class="muted">${totalDone} of ${totalPlanned} planned projects completed</span>
    </div>
  </div>

  <div class="lines">
    <div class="devops">
      <p class="line-title">Main path · DevOps (Linux → Docker → Kubernetes)</p>
      <div class="cards">
        ${devopsKeys.map((k) => trackCard(k, progress.tracks[k])).join("")}
      </div>
    </div>
    <div class="anthropic">
      <p class="line-title">Side path · Anthropic / Claude</p>
      <div class="cards">
        ${anthropicKeys.map((k) => trackCard(k, progress.tracks[k])).join("")}
      </div>
    </div>
  </div>

  <div class="panel"><b>⚠️ Weak areas to fix</b>${weak}</div>
  <div class="panel"><b>🏅 Achievements</b><div style="margin-top:8px">${badges}</div></div>
  <div class="panel"><b>🧠 Skills unlocked</b><div style="margin-top:8px">${skills}</div></div>
  ${capstone}

  <footer>Generated from progress.json on ${new Date().toISOString().slice(0,10)} ·
    This page works offline. Re-run <code>node scripts/build-dashboard.mjs</code> after any change.</footer>
</body></html>`;

writeFileSync(join(root, "dashboard.html"), html);
console.log(`dashboard.html updated — overall ${overall}% (${totalDone}/${totalPlanned} projects).`);
