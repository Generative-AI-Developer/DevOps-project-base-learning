---
id: kubernetes-cks-project-06
track: kubernetes
level: certification
order: 6
title: "CKS: Take the Mock Exam"
prereqs: ["kubernetes-cks-project-05"]
skills: ["timed full mock", "all CKS domains", "weak-area review"]
certDomains: ["CKS: full mock"]
estimatedTime: "mock: 120 minutes"
---

# CKS: Take the Mock Exam

**Status:** 🔒 Locked

This is the **last CKS project** and the last of the whole Certification Level. Take the full CKS Mock Exam. Passing it (with no weak domain) marks you **CKS-ready** and completes the certification tier. Then the **Capstone** awaits.

## 1. Objective
Sit a timed, scored CKS mock covering every security domain, and fix any weak areas.

## 2. Real-world scenario
Your CKS rehearsal: 120 minutes of hardening, policies, scanning, and runtime detection.

## 3. Skills and concepts you will learn
- Full-exam security pacing.
- Weak-domain review.

## 4. Prerequisites
- CKS Projects 1–5 completed.
- Read: `study/kubernetes/certification/cks/00-cks-exam-guide.md`.
- A practice environment with the tools (killercoda CKS scenarios recommended).

## 5. Step-by-step requirements
1. Open `exams/cks/mock-1.md`. Set a 120-minute timer.
2. Do the 11 tasks. Switch to the right cluster for each.
3. Save all evidence under `submissions/kubernetes/certification/cks/mock-1/`.
4. Ask the mentor to grade with `exams/cks/rubric-1.md`.

## 6. Tasks / challenges
- [ ] Mock attempted within 120 min.
- [ ] Evidence saved per task.
- [ ] Domain scores recorded.
- [ ] Weak areas fixed.

## 7. Expected outcome
A domain-by-domain security score and confidence you are CKS-ready.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You attempted the mock within the time limit and saved evidence for each task.
2. The mentor grades it with the rubric and writes `domainScores` into `progress.json`.
3. **Overall ≥ 0.66** AND **no domain below 0.66**.
4. Any weak domain was fixed (redo its drill, re-score) before this passes.
5. You report your total time.

## 9. Verification checklist
- [ ] Mock graded.
- [ ] No weak domain remaining.
- [ ] Evidence saved in `submissions/kubernetes/certification/cks/project-06/` (+ mock folder).

## 10. Common mistakes
- Leaving a Pod root/privileged.
- Allowing all traffic or all images.
- Not testing Falco/Trivy output.

## 11. Hints
<details><summary>Hint 1</summary>Do the "for real" tasks first (NetworkPolicy, RBAC, seccomp, Pod Security, Trivy, Falco).</details>
<details><summary>Hint 2</summary>For apiserver-level tasks (audit, encryption), use a throwaway cluster you can rebuild.</details>
<details><summary>Hint 3</summary>Weak domain? Redo that drill (Projects 1–5) and retake.</details>

## 12. Final challenge
Retake and beat your score + time. Aim for 80%+ across all six security domains.

## 13. What to submit (evidence)
Save the full mock evidence in `submissions/kubernetes/certification/cks/`. Then say: **"I submit CKS Project 6 (Mock Exam)."** When it passes with no weak domain, you complete the **Certification Level** — CKAD, CKA, and CKS! 🎉🎉🎉 Next: the Capstone.

---
**Remember:** Least privilege everywhere. Scan, restrict, watch. Fix weak areas, then take on the Capstone.
