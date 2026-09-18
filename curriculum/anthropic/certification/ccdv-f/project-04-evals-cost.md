---
id: anthropic-ccdv-f-project-04
track: anthropic
level: certification
order: 4
title: "CCDV-F Drill: Evals and Cost"
prereqs: ["anthropic-ccdv-f-project-03"]
skills: ["evals", "scoring", "caching", "effort/model tuning"]
certDomains: ["CCDV-F: evaluation", "CCDV-F: cost"]
estimatedTime: "timed: 25 minutes"
---

# CCDV-F Drill: Evals and Cost

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Measure quality with a small eval and cut cost without hurting it.

## 2. Real-world scenario
Exam tasks like "prove your change helped" and "reduce cost".

## 3. Skills and concepts you will learn
- Run a quick eval and score it.
- Apply one cost lever (caching/effort/model).
- Re-measure.

## 4. Prerequisites
- CCDV-F Project 3 completed.
- Read: `study/anthropic/certification/ccdv-f/00-ccdv-f-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Use a small eval (5–10 cases) and record the score.
2. Apply one cost lever (lower effort, smaller model, or caching).
3. Re-run the eval; record the new score.
4. Say whether quality held and cost dropped.

## 6. Tasks / challenges
- [ ] Eval score (before).
- [ ] Cost lever applied.
- [ ] Eval score (after).
- [ ] Conclusion.

## 7. Expected outcome
You measured quality and made a cost decision with proof.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show an eval score for a baseline.
2. You apply a named cost lever.
3. You re-run the eval and show the new score.
4. You state whether quality held and cost dropped.
5. You report your time.

## 9. Verification checklist
- [ ] Before/after scores.
- [ ] Cost lever named.
- [ ] Evidence saved in `submissions/anthropic/certification/ccdv-f/project-04/`.

## 10. Common mistakes
- Cutting cost with no eval.
- Only trying model swap (try effort/caching too).

## 11. Hints
<details><summary>Hint 1</summary>Reuse Intermediate Project 6 (eval) and Advanced Project 5 (cost).</details>
<details><summary>Hint 2</summary>Try `effort: "low"` first for easy tasks.</details>
<details><summary>Hint 3</summary>Compare Opus vs Haiku on the same eval.</details>

## 12. Final challenge
Design a 2-model cascade and estimate the saving while the eval holds.

## 13. What to submit (evidence)
Save the scores, the lever, and your time in `submissions/anthropic/certification/ccdv-f/project-04/`. Then say: **"I submit CCDV-F Project 4."**

---
**Remember:** Measure quality first, then cut cost, then re-measure. Proof beats guessing.
