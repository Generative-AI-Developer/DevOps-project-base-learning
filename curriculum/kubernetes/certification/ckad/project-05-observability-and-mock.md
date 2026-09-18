---
id: kubernetes-ckad-project-05
track: kubernetes
level: certification
order: 5
title: "CKAD Drill: Observability + Take the Mock Exam"
prereqs: ["kubernetes-ckad-project-04"]
skills: ["probes", "logs", "debugging", "timed mock exam"]
certDomains: ["CKAD: Observability and Maintenance", "CKAD: full mock"]
estimatedTime: "drill 20 min + mock 120 min"
---

# CKAD Drill: Observability + Take the Mock Exam

**Status:** 🔒 Locked

This is the **last CKAD project**. It has two parts: a short observability drill, then the **full CKAD Mock Exam**. Passing this (with no weak domain) marks you **CKAD-ready** and unlocks **CKA**.

## 1. Objective
Practice probes and debugging, then take a timed, scored mock exam that measures every CKAD domain.

## 2. Real-world scenario
This is your rehearsal for the real exam: 120 minutes, hands-on, scored against the domains.

## 3. Skills and concepts you will learn
- Probes and debugging under time pressure.
- Sitting a full timed mock.
- Seeing your weak domains.

## 4. Prerequisites
- CKAD Projects 1–4 completed.
- Read: `study/kubernetes/certification/ckad/00-ckad-exam-guide.md`.

## 5. Step-by-step requirements
**Part A — Observability drill (20 min):**
1. Add liveness + readiness probes to a Deployment; show it becomes READY.
2. Create a failing Pod; find the cause with `describe`/`logs`; write the reason.

**Part B — Mock Exam (120 min):**
3. Open `exams/ckad/mock-1.md`. Set a 120-minute timer. Do the 10 tasks.
4. Save all evidence under `submissions/kubernetes/certification/ckad/mock-1/`.
5. Ask the mentor to grade it with `exams/ckad/rubric-1.md`.

## 6. Tasks / challenges
- [ ] Probes drill done.
- [ ] Debug drill done.
- [ ] Mock exam attempted within 120 min.
- [ ] Evidence saved for grading.

## 7. Expected outcome
You complete the mock, get a score per domain, and know your weak areas (if any).

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Part A: probes make the Pod READY; the failing Pod's cause is correctly identified.
2. Part B: you attempted the mock within the time limit and saved evidence for each task.
3. The mentor grades the mock with the rubric and writes **domainScores** into `progress.json`.
4. **Overall score ≥ 0.66** AND **no domain below 0.66**. (If a domain is weak, it becomes a weak area — fix the matching drill and re-score before CKA unlocks.)
5. You report your total time.

## 9. Verification checklist
- [ ] Mock attempted + saved.
- [ ] Domain scores recorded.
- [ ] No weak domain remaining.
- [ ] Evidence saved in `submissions/kubernetes/certification/ckad/project-05/` (+ the mock folder).

## 10. Common mistakes
- Running out of time (practice speed!).
- Skipping verification.
- Leaving a weak domain unfixed.

## 11. Hints
<details><summary>Hint 1</summary>Do easy tasks first. Flag hard ones and return.</details>
<details><summary>Hint 2</summary>Use `--dry-run=client -o yaml` for every object.</details>
<details><summary>Hint 3</summary>If a domain is weak, redo that domain's drill (Projects 1–4) and take the mock again.</details>

## 12. Final challenge
Retake the mock and beat both your **score** and your **time**. Aim for 80%+ with time to spare.

## 13. What to submit (evidence)
Save Part A proofs and the full mock evidence in `submissions/kubernetes/certification/ckad/`. Then say: **"I submit CKAD Project 5 (Mock Exam)."** When it passes with no weak domain, CKA unlocks! 🎉

---
**Remember:** This is your rehearsal. Score ≥ 66% on every domain. Fix weak areas, then move to CKA.
