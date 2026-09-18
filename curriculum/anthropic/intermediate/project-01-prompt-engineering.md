---
id: anthropic-intermediate-project-01
track: anthropic
level: intermediate
order: 1
title: "Build a Reliable Classifier with Few-Shot Prompting"
prereqs: ["anthropic-beginner-project-05"]
skills: ["few-shot", "structure/tags", "step-by-step", "consistency"]
certDomains: ["CCDV-F: prompt engineering techniques"]
estimatedTime: "60 minutes"
---

# Build a Reliable Classifier with Few-Shot Prompting

**Status:** 🔒 Locked (unlocks when Anthropic Intermediate opens)

## 1. Objective
Use few-shot examples and structure to make Claude classify text reliably (same format every time).

## 2. Real-world scenario
Your team needs to sort support messages into "bug", "question", or "praise". The output must be exactly one of those words, every time. Few-shot prompting makes it reliable.

## 3. Skills and concepts you will learn
- Few-shot prompting.
- Structured prompts with tags.
- Making output consistent.

## 4. Prerequisites
- Anthropic Beginner completed.
- Read: `study/anthropic/intermediate/01-prompt-engineering-deeper.md`.

## 5. Step-by-step requirements
1. Pick a classify task with 3 labels (e.g. bug / question / praise).
2. Write a **zero-shot** prompt. Test it on 5 messages. Note any wrong or messy outputs.
3. Rewrite as a **few-shot** prompt (2–3 examples per pattern) with clear tags.
4. Test on the same 5 messages. The output should be exactly one label each time.
5. Compare: how did few-shot improve consistency?

## 6. Tasks / challenges
- [ ] Zero-shot version tested.
- [ ] Few-shot version with examples + tags.
- [ ] Tested on the same 5 messages.
- [ ] Output is exactly one label each time.

## 7. Expected outcome
Your few-shot classifier returns exactly one clean label for every message.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show the zero-shot prompt and its outputs on 5 messages.
2. You show the few-shot prompt (with 2–3 examples and clear structure/tags).
3. The few-shot version returns **exactly one** of the allowed labels for all 5 messages.
4. You explain how few-shot improved consistency.
5. Code shown (key not included).

## 9. Verification checklist
- [ ] Both versions tested.
- [ ] Few-shot output is clean/consistent.
- [ ] Comparison written.
- [ ] Evidence saved in `submissions/anthropic/intermediate/project-01/`.

## 10. Common mistakes
- No examples → messy or varying output.
- Blending data and instructions → use tags.
- Allowing extra words → tell Claude to answer with ONLY the label.

## 11. Hints
<details><summary>Hint 1</summary>Add: "Answer with ONLY one word: bug, question, or praise."</details>
<details><summary>Hint 2</summary>Use the few-shot format from `study/anthropic/intermediate/01-prompt-engineering-deeper.md`, section 3.</details>
<details><summary>Hint 3</summary>Wrap each message in `<message>...</message>` so Claude knows where it starts and ends.</details>

## 12. Final challenge
Add a "confidence" idea: ask Claude to also give a short reason, but keep the label on its own line so your code can still read just the label. Balance reliability with useful detail.

## 13. What to submit (evidence)
Save both prompts, the outputs, and your comparison in `submissions/anthropic/intermediate/project-01/`. Then say: **"I submit Anthropic Intermediate Project 1."**

---
**Remember:** Few-shot + tags + a strict output rule = reliable, consistent results.
