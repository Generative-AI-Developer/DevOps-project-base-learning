---
id: anthropic-intermediate-project-06
track: anthropic
level: intermediate
order: 6
title: "Measure Quality with an Eval (Anthropic Intermediate Boss)"
prereqs: ["anthropic-intermediate-project-05"]
skills: ["evals", "test cases", "scoring", "prompt improvement loop"]
certDomains: ["CCDV-F: evaluation", "CCAR-F: quality measurement"]
estimatedTime: "90 minutes"
---

# Measure Quality with an Eval (Anthropic Intermediate Boss 🏆)

**Status:** 🔒 Locked

This is the **last project** of Anthropic Intermediate. Finish it to complete the level and unlock Anthropic Advanced.

## 1. Objective
Build a small eval (test set), score your prompt, improve the prompt, and prove the score went up.

## 2. Real-world scenario
Your team says: *"Prove the new prompt is better, not just different."* You build an eval and measure it — the professional way to improve an app.

## 3. Skills and concepts you will learn
- Build test cases (input + expected).
- Score your app.
- Improve the prompt and re-measure.

## 4. Prerequisites
- Anthropic Intermediate Projects 1–5 completed.
- Read: `study/anthropic/intermediate/06-evals.md`.

## 5. Step-by-step requirements
1. Pick a task (e.g. classify messages into 3 labels).
2. Build at least **10 test cases** (input + expected label), including a few hard ones.
3. Write an eval script that runs your prompt on all cases and prints the score (e.g. 7/10).
4. Improve the prompt (few-shot, clearer rules).
5. Run the eval again. Show the score went up (or explain what you learned).

## 6. Tasks / challenges
- [ ] 10+ test cases.
- [ ] Eval script prints a score.
- [ ] Prompt improved.
- [ ] Score compared before/after.

## 7. Expected outcome
You can measure your app's quality and prove an improvement with numbers.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the eval script (key not included) and your test cases (10+).
2. The script prints a score for version 1 of your prompt.
3. You improve the prompt and run the eval again, printing the new score.
4. You show the score changed and explain what made it better (or what you learned if it did not).
5. Your test set includes at least 2 hard/edge cases.

## 9. Verification checklist
- [ ] 10+ cases (with hard ones).
- [ ] Score before + after.
- [ ] Improvement explained.
- [ ] Evidence saved in `submissions/anthropic/intermediate/project-06/`.

## 10. Common mistakes
- Too few cases.
- Only easy cases.
- Changing the prompt without re-running the eval.

## 11. Hints
<details><summary>Hint 1</summary>Use the eval loop in `study/anthropic/intermediate/06-evals.md`, section 3.</details>
<details><summary>Hint 2</summary>Improve with few-shot examples (from Project 1) and a strict output rule.</details>
<details><summary>Hint 3</summary>For open-ended answers, add a simple LLM judge instead of exact match.</details>

## 12. Final challenge
Split your cases into "train" (to improve on) and "test" (to check honestly). Improve using train, then report the **test** score. This avoids fooling yourself — a real eval habit.

## 13. What to submit (evidence)
Save the eval script (no key), the test cases, and both scores in `submissions/anthropic/intermediate/project-06/`. Then say: **"I submit Anthropic Intermediate Project 6."** When it passes, Anthropic Advanced unlocks! 🎉

---
**Remember:** Build cases → run → score → improve → re-run. Measure quality; do not guess.
