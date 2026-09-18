---
id: kubernetes-cka-project-05
track: kubernetes
level: certification
order: 5
title: "CKA: Take the Mock Exam"
prereqs: ["kubernetes-cka-project-04"]
skills: ["timed full mock", "all CKA domains", "weak-area review"]
certDomains: ["CKA: full mock"]
estimatedTime: "mock: 120 minutes"
---

# CKA: Take the Mock Exam

**Status:** 🔒 Locked

This is the **last CKA project**. Take the full CKA Mock Exam. Passing it (with no weak domain) marks you **CKA-ready** and unlocks **CKS**.

## 1. Objective
Sit a timed, scored CKA mock that covers every domain, and find/fix your weak areas.

## 2. Real-world scenario
Your CKA rehearsal: 120 minutes, multiple clusters, real repairs.

## 3. Skills and concepts you will learn
- Full-exam pacing across many clusters.
- Weak-domain review.

## 4. Prerequisites
- CKA Projects 1–4 completed.
- Read: `study/kubernetes/certification/cka/00-cka-exam-guide.md`.
- A practice environment (killercoda CKA scenarios recommended).

## 5. Step-by-step requirements
1. Open `exams/cka/mock-1.md`. Set a 120-minute timer.
2. Do the 11 tasks. **Switch to the right cluster for each.**
3. Save all evidence under `submissions/kubernetes/certification/cka/mock-1/`.
4. Ask the mentor to grade with `exams/cka/rubric-1.md`.

## 6. Tasks / challenges
- [ ] Mock attempted within 120 min.
- [ ] Evidence saved per task.
- [ ] Domain scores recorded.
- [ ] Weak areas (if any) fixed.

## 7. Expected outcome
A domain-by-domain score and a clear picture of readiness.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You attempted the mock within the time limit and saved evidence for each task.
2. The mentor grades it with the rubric and writes `domainScores` into `progress.json`.
3. **Overall ≥ 0.66** AND **no domain below 0.66** (troubleshooting especially).
4. Any weak domain was fixed (redo its drill, re-score) before this passes.
5. You report your total time.

## 9. Verification checklist
- [ ] Mock graded.
- [ ] No weak domain remaining.
- [ ] Evidence saved in `submissions/kubernetes/certification/cka/project-05/` (+ mock folder).

## 10. Common mistakes
- Wrong cluster.
- Running out of time.
- Leaving troubleshooting points on the table.

## 11. Hints
<details><summary>Hint 1</summary>Do quick wins first (Service, RBAC, scheduling), then the heavy troubleshooting.</details>
<details><summary>Hint 2</summary>Always `kubectl config use-context <task>` before starting a task.</details>
<details><summary>Hint 3</summary>Weak domain? Redo that drill (Projects 1–4) and retake.</details>

## 12. Final challenge
Retake and beat your score + time. Aim for 80%+ with the troubleshooting domain strong.

## 13. What to submit (evidence)
Save the full mock evidence in `submissions/kubernetes/certification/cka/`. Then say: **"I submit CKA Project 5 (Mock Exam)."** When it passes with no weak domain, CKS unlocks! 🎉

---
**Remember:** Switch context, do easy points first, and be strong on troubleshooting (30%). Fix weak areas before CKS.
