# MENTOR.md — The Mentor & Grading Rules (works with any AI, a teacher, or you)

This file explains **how to be the mentor and how to grade**, without needing Claude. Any AI, any teacher, or the student can follow it. This keeps the course working even if the Claude subscription stops.

> Write and speak in **simple English**. Short sentences. Common words. Explain hard words the first time.

---

## Part A — Be the mentor

1. Read `progress.json`. Find the project that is `unlocked` or `active`.
2. Open that project file in `curriculum/...`. Read its study docs in `study/...`.
3. Tell the student the **objective** and the **requirements** in simple English.
4. Give the project. **Do not give the full answer.**
5. Let the student try.
6. Give **hints only when asked**. Give them slowly: small nudge first, then more, then almost the answer.
7. Be strict but kind. Encourage the student. Use real-world reasons.

---

## Part B — Grade a submission

### Step 1: Ask for evidence
Never accept "I finished it" alone. Ask for real proof, such as:
- Commands and their output (copy-paste).
- Files: Dockerfile, docker-compose.yml, Kubernetes YAML, shell scripts, code.
- Logs, terminal output, or screenshots.
- A short note in the student's own words: "How I solved it."

The student saves evidence in: `submissions/<track>/<level>/<project-id>/`.

### Step 2: Check against acceptance criteria
Open the project file. Look at section **8. Acceptance criteria**.
- Go through **each** criterion, one by one.
- For each one, decide: **met** or **not met**. Write a short reason.

### Step 3: Decide pass or fail
- **PASS** = every criterion is met.
- **FAIL** = one or more criteria are not met.

### Step 4: Give feedback
- If PASS: say what they did well. Then unlock the next stage (Part C).
- If FAIL: list exactly what to fix, in simple steps. Be kind. Ask them to fix and submit again. Do **not** unlock anything.

A failed project must be fixed and resubmitted before the student moves on.

---

## Part C — Update the state (`progress.json`)

When a project **passes**:
1. In the project node, set:
   - `"status": "completed"`
   - `"evaluation": { "passedAt": "<today>", "criteriaMet": [ ... ], "notes": "..." }`
   - increase `"attempts"` by 1
   - add the evidence file paths to `"evidence"`
2. Unlock the next project in the same level: set its `"status": "unlocked"`.
3. If **all** projects in the level are `completed`:
   - set the level `"status": "completed"`
   - unlock the next level: set it `"status": "active"` and its Project 1 `"status": "unlocked"`
4. Apply the order rules:
   - **DevOps line:** Docker Beginner opens after Linux Beginner is complete. Kubernetes Beginner opens after Docker Beginner is complete.
   - **Kubernetes cert level** opens after Kubernetes Advanced is complete. **CKS** opens only after **CKA** is complete.
   - **Anthropic** is independent and always open.
5. Add any earned badge to `"achievements"` and new skills to `"skillsUnlocked"`.
6. Recompute `"overallPercent"` = completed projects ÷ total planned projects × 100 (rounded).

When a project **fails**:
- set `"status": "failed"`, increase `"attempts"`, write `evaluation.notes` with what to fix. Unlock nothing.

Then run: `node scripts/build-dashboard.mjs` to refresh `dashboard.html`.

---

## Part D — Timed exams and weak areas

For a mock exam or timed lab (`exams/...`):
1. The student sets a timer (see the exam's `timeLimitMinutes`). They stop when time is up.
2. Grade each task with its `rubric-NN.md`. Add up the weighted score.
3. For each exam **domain**, compute a score from 0 to 1. Write these into the project node's `"domainScores"`.
4. If a domain score is **below the pass threshold** (default 0.66):
   - add it to `progress.json.weakAreas` as:
     `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "<next stage id>" }`
   - Block that next stage. The student must pass extra practice on that weak domain first.
5. Passing the whole exam needs the total score ≥ `passScore` **and** no blocking weak area.

---

## Part E — Manual unlock (no AI at all)

If there is no AI and no teacher, the student can self-study:
1. Do the project using its study doc and acceptance criteria (they are written to be self-checkable).
2. To unlock the next stage by hand: open `progress.json`, set the current project to `"completed"`, and set the next project to `"unlocked"` (follow Part C rules).
3. Run `node scripts/build-dashboard.mjs`.

This is why the course is safe: **the files are yours forever.**

---

## Part F — Grading English (language) tasks

The **English** track is different from the technical tracks. English submissions are **written English** (an introduction, an email, a dialogue, interview answers). Grade them on:
1. **Vocabulary/phrases** — did the student use the target words from the lesson (the number the project asks for), correctly?
2. **Understandable** — can a reader understand the message?
3. **Tone** — is it appropriate (polite / professional) for the situation?

Do **not** require perfect grammar. Small mistakes are normal for a learner — mark PASS if the criteria above are met, then **gently show 1–3 fixes** in simple English (and a short Urdu hint if it helps). A failed submission is only one that misses the acceptance criteria (e.g., too few vocabulary words, wrong task, or not understandable). English tasks have no shell auto-checker — you are the grader.

---
**Remember:** Ask for proof. Check every criterion. Never let the student skip. Keep the English simple.
