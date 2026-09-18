---
id: anthropic-beginner-project-01
track: anthropic
level: beginner
order: 1
title: "Talk to Claude: Your First Good Prompt"
prereqs: []
skills: ["prompt writing", "being specific", "setting format"]
certDomains: ["CCAO-F: everyday Claude use", "CCDV-F: prompt engineering basics"]
estimatedTime: "30–45 minutes"
---

# Talk to Claude: Your First Good Prompt

**Status:** ▶️ Start
*(The real status lives in `progress.json`.)*

## 1. Objective
Learn to write clear prompts. You will turn weak prompts into strong prompts and see how the answers get better.

## 2. Real-world scenario
You work in a company. You must write a short, polite email to a customer. You want Claude to help, fast. If your prompt is weak, the email is bad. If your prompt is strong, the email is ready to send. Good prompting saves you time every day.

## 3. Skills and concepts you will learn
- **Being specific** — In simple words: giving exact details.
- **Giving context** — In simple words: pasting the text or facts Claude needs.
- **Setting the format** — In simple words: telling Claude the shape of the answer.
- **Iterating** — In simple words: improving the prompt and trying again.

## 4. Prerequisites
- A way to chat with Claude (the Claude app or website; no API key needed yet).
- Read this first: `study/anthropic/beginner/01-good-prompts.md`.

## 5. Step-by-step requirements
1. Pick a real task. Example: "Write a short thank-you email to a customer named Sara."
2. Write a **weak** prompt for it (one short vague line). Send it. Save the answer.
3. Write a **strong** prompt for the same task. Include: the task, the context, and 2–3 rules (length, tone, simple English). Send it. Save the answer.
4. Compare the two answers. Write what got better.
5. Improve once more (iterate): change one rule and try again.

## 6. Tasks / challenges
- [ ] Write 1 weak prompt and save Claude's answer.
- [ ] Write 1 strong prompt (task + context + rules) and save Claude's answer.
- [ ] Write 2–3 sentences: what got better and why.
- [ ] Do 1 iteration: change one rule, and save the new answer.

## 7. Expected outcome
You have two answers from Claude for the same task: one from a weak prompt, one from a strong prompt. The strong one is clearly better. You understand why.

## 8. Acceptance criteria (how I grade it)
The work passes only if ALL of these are true:
1. You show your **weak prompt** and Claude's answer to it.
2. You show your **strong prompt** and Claude's answer to it.
3. Your strong prompt clearly has: a **task**, some **context**, and at least **2 rules** (like length, tone, or "simple English").
4. You write 2–3 simple sentences comparing the two answers (what got better).
5. You show **one iteration**: a changed prompt and its new answer.

## 9. Verification checklist (check before you submit)
- [ ] My strong prompt has task + context + rules.
- [ ] I saved both prompts and both answers.
- [ ] I wrote my short comparison.
- [ ] I saved my evidence in `submissions/anthropic/beginner/project-01/`.

## 10. Common mistakes
- Strong prompt is still vague — add exact details and a clear format.
- No context — always give the facts (customer name, reason, etc.).
- Asking many things at once — keep it to one clear task.

## 11. Hints (ask for these — do not read unless you are stuck)
<details><summary>Hint 1 (small nudge)</summary>Use the prompt recipe: Task, Context, Rules. Start each line with that word.</details>
<details><summary>Hint 2 (bigger help)</summary>Weak: "Write a thank-you email." Strong: "Task: Write a short thank-you email to a customer named Sara. Context: She bought our online course. Rules: 4 sentences, warm and polite, simple English."</details>
<details><summary>Hint 3 (almost the answer)</summary>For the iteration, change one rule only — for example, change "4 sentences" to "2 short sentences" or change the tone from "polite" to "friendly". Then compare.</details>

## 12. Final challenge (a little harder)
Add an **example** to your strong prompt. Show Claude one short example of the style you want (this is called a "one-shot example"). See if the answer follows your style better.

## 13. What to submit (evidence)
Save a text file in `submissions/anthropic/beginner/project-01/` (for example `prompts.md`) with:
- Weak prompt + its answer.
- Strong prompt + its answer.
- Your short comparison (2–3 sentences).
- The iteration (changed prompt + new answer).

Then tell me: **"I submit Anthropic Beginner Project 1."**

---
**Remember:** Task + Context + Rules = a strong prompt. Try first. Submit when YOU are ready.
