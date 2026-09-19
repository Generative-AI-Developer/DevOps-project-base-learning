# DevOps + Anthropic Learning Game 🎮

Learn **Linux, Docker, Kubernetes, and Anthropic/Claude** by doing real projects. It works like a video game. You finish one stage to open the next.

Your big goal: **become job-ready** and **score strongly** on:
- Kubernetes certs: **CKAD, CKA, CKS**
- Anthropic certs: **CCAO-F, CCDV-F, CCAR-F, CCAR-P**

Plus a **language path**:
- **English** (Beginner → Intermediate → Advanced) — everyday and workplace English, with a vocabulary list in **English and Urdu (اردو)** for every lesson.

> All text here is in **simple English** on purpose. Short sentences. Easy words.

---

## How to play

The loop is always the same:

```
Study → Practice → Build → Submit → Get checked → Fix → Pass → Unlock next
```

1. **Study** — read a short lesson in `study/`.
2. **Practice** — do the small exercises.
3. **Build** — do the project in `curriculum/`. You write real commands, files, YAML, or code.
4. **Submit** — show your work. Paste your commands + output, or your files. Save them in `submissions/`.
5. **Get checked** — your mentor (Claude) checks your work against the rules.
6. **Fix** — if something is wrong, fix it and submit again.
7. **Pass → Unlock** — when it is correct, the next project opens.

Icons you will see:
- 🔒 Locked · ▶️ Start · ⏳ In progress · ❌ Fix & resubmit · ✅ Completed

**Rules:** You cannot skip a project or a level. The mentor will not give you the full answer first. You try, then ask for hints.

### To start
Open this folder in Claude Code and say: **"I want to start."**
Claude reads `progress.json` and gives you your current project.

### Read the lessons in your browser (the Course Reader)
```bash
node scripts/build-reader.mjs      # makes course.html
```
Then open **`course.html`** in any browser. Click any project on the left to read its **study lesson** and **project tasks** — with your locked/unlocked/done status. Works offline.

### To see your progress (a simple scoreboard, works offline)
```bash
node scripts/build-dashboard.mjs   # makes dashboard.html
```
Then open `dashboard.html` in any browser. This is just a progress map. No internet needed.

> **Tip:** `course.html` is the main page to read and study. `dashboard.html` is just your score. After you complete a project, re-run both scripts to refresh them.

### Grade a project yourself (instant, offline)
```bash
bash grade.sh                 # grades your current project
bash grade.sh linux-beginner-01   # grades a specific one
```
It prints ✅/❌ for the testable parts and a PASS/NEEDS-WORK verdict. For the full official grade, submit to Claude: say "I submit ...".

### Reset / redo a project
```bash
bash reset.sh                 # reset your current project
bash reset.sh linux-beginner-02   # reset a specific one
```
It backs up your old work (nothing is deleted for good — saved under `submissions/.reset-backups/`) and sets the project back to ▶️ so you can redo it. It asks you to confirm first, and never changes other projects.

---

## Two paths at the same time (parallel learning)

You study **two paths** side by side. They do **not** block each other.

- **Main path (DevOps):** Linux → Docker → Kubernetes. This is your main goal.
- **Side path (Anthropic):** Claude, prompts, API, tool use, agents. This is your side study.

Keep the side path **small** so two-at-once never feels heavy. A simple weekly plan:

| Day | Main path (Kubernetes line) | Side path (Anthropic) |
|-----|-----------------------------|------------------------|
| Mon–Fri | 1 lesson + 1 project (bigger block) | 1 small lesson (20–30 min) |
| Sat | Practice / mock exam / fix weak areas | — |
| Sun | Rest or light review | 1 small fun project |

About **70% time on the DevOps path, 30% on Anthropic**.

**Sprint before an exam:** when a real exam is close (like CKA), stop the side path for 2–3 weeks. Focus only on that exam. Then go back to parallel study.

---

## Set up your lab (you need this to practice)

You already have Linux. For containers and Kubernetes you need tools.

**Docker**
- Install Docker Engine (Linux) or Docker Desktop.
- Test: `docker run hello-world`

**Kubernetes (local practice cluster)**
- Easiest: `kind` (Kubernetes in Docker) or `minikube`.
- Test: `kubectl get nodes`
- For CKA cluster tasks (like `kubeadm`, etcd backup): use 2–3 small virtual machines.
- Also great and free in the browser: **killercoda.com** (ready-made K8s playgrounds).

**Anthropic / Claude API**
- Make a free account at the Anthropic Console and create an API key.
- Keep the key secret. Put it in a file named `.env` (this repo ignores `.env`, so it is not committed).
- In the Beginner lessons you will make your first small API call.

---

## About the Anthropic certificates (please read — honest note)

There are **two different things**:

1. **Anthropic Academy** — free online courses. Open to **everyone**. You get a free completion certificate. ✅ You can do these.
2. **Claude Certification Program (paid exams)** — CCAO-F, CCDV-F, CCAR-F, CCAR-P. These are paid and run by Pearson VUE.
   - ⚠️ **Important:** right now these paid exams need a **company email** from a company in the Claude Partner Network. A personal Gmail is **not accepted** at signup.
   - So the **paid exam** may not be open to you today.

**What this course does:** it teaches you **all the skills** for these certs and gives you practice exams. You build real, strong skills either way. If you later get a partner-company email, you will be ready to take the paid exam. If not, you still gain the knowledge and the free Academy certificate.

---

## Good free YouTube channels

The exact links live inside each study file (section 10). Trusted channels:

- **Linux:** Learn Linux TV · NetworkChuck · freeCodeCamp.org
- **Docker:** TechWorld with Nana · freeCodeCamp.org · NetworkChuck
- **Kubernetes:** TechWorld with Nana · KodeKloud · That DevOps Guy · CNCF
- **Anthropic / Claude:** Anthropic's official channel · Anthropic Academy (website)

---

## What is in this folder

| Folder / file | What it is |
|---|---|
| `curriculum/` | The projects you build |
| `study/` | Lessons to read before projects |
| `exams/` | Timed mock exams + grading rubrics |
| `progress.json` | Your progress (locked / unlocked / done) |
| `dashboard.html` | A picture of your progress (offline) |
| `submissions/` | Where you save your work |
| `templates/` | The format used to write content |
| `CLAUDE.md` | Rules for the AI mentor |
| `MENTOR.md` | Grading rules (works without any AI) |

---

## Your work is always yours

Everything is a plain file in git. Your progress and your projects never get lost. If your Claude plan stops, you keep all of it. You can even unlock stages by hand (see `MENTOR.md`, Part E).

**Remember:** Study a little, build a lot, submit your proof, fix mistakes, and keep moving. Step by step, you become job-ready.
