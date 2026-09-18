---
id: anthropic-advanced-project-05
track: anthropic
level: advanced
order: 5
title: "Tune Cost and Speed (with Proof)"
prereqs: ["anthropic-advanced-project-04"]
skills: ["effort", "trimming", "model choice", "batch", "measure with eval"]
certDomains: ["CCAR-F: cost optimization", "CCAR-P: scaling"]
estimatedTime: "90 minutes"
---

# Tune Cost and Speed (with Proof)

**Status:** 🔒 Locked

## 1. Objective
Make a task cheaper and/or faster without hurting quality — and prove it with your eval.

## 2. Real-world scenario
Your app works but costs too much. You must cut cost while keeping quality. You measure before and after.

## 3. Skills and concepts you will learn
- Use effort levels.
- Trim input/output.
- Choose the right model.
- Measure with your eval (from Intermediate Project 6).

## 4. Prerequisites
- Anthropic Advanced Project 4 completed.
- Read: `study/anthropic/advanced/05-cost-performance.md`.
- Reuse your eval from Anthropic Intermediate Project 6.

## 5. Step-by-step requirements
1. Take a task + its eval (10+ cases).
2. Record a **baseline**: model, effort, and eval score.
3. Try at least **2 cost levers** (e.g. lower effort, smaller model, shorter prompt, caching).
4. Re-run the eval after each change. Record the score.
5. Pick the setting that keeps quality but costs less. Explain your choice.

## 6. Tasks / challenges
- [ ] Baseline recorded.
- [ ] 2+ cost levers tried.
- [ ] Eval re-run for each.
- [ ] Best setting chosen with a reason.

## 7. Expected outcome
You cut cost (or improved speed) while keeping the eval score, and you can prove it.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show the baseline: model, effort, and eval score.
2. You try at least **2** cost levers (name them) and re-run the eval for each.
3. You show the scores for each setting (a small table).
4. You pick a setting that costs less AND keeps quality (or explain the trade-off).
5. You explain in one line why measuring with an eval matters here.

## 9. Verification checklist
- [ ] Baseline + 2 levers.
- [ ] Eval re-run each time.
- [ ] Best setting chosen.
- [ ] Evidence saved in `submissions/anthropic/advanced/project-05/`.

## 10. Common mistakes
- Cutting cost with no eval (quality may drop silently).
- Only trying the biggest lever (model) — try effort and trimming too.
- Not recording numbers.

## 11. Hints
<details><summary>Hint 1</summary>Levers order: cache → trim → effort → model → batch (from the study doc).</details>
<details><summary>Hint 2</summary>Try `effort: "low"` first for easy tasks; re-check the eval.</details>
<details><summary>Hint 3</summary>Compare `claude-opus-5` vs `claude-haiku-4-5` on the same eval.</details>

## 12. Final challenge
Design a 2-model **cascade**: Haiku handles the easy cases; only the hard/uncertain ones go to Opus. Estimate the cost saving and check the eval still holds.

## 13. What to submit (evidence)
Save the baseline, the levers tried, the score table, and your final choice in `submissions/anthropic/advanced/project-05/`. Then say: **"I submit Anthropic Advanced Project 5."**

---
**Remember:** Free wins first (cache/trim), then effort, then model, then batch. Always measure with your eval.
