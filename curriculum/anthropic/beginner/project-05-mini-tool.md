---
id: anthropic-beginner-project-05
track: anthropic
level: beginner
order: 5
title: "Build a Tiny Claude Tool (Anthropic Beginner Boss)"
prereqs: ["anthropic-beginner-project-04"]
skills: ["prompt templates", "loops", "using the reply", "small app"]
certDomains: ["CCDV-F: building apps with Claude"]
estimatedTime: "60–90 minutes"
---

# Build a Tiny Claude Tool (Anthropic Beginner Boss 🏆)

**Status:** 🔒 Locked

This is the **last project** of Anthropic Beginner. Finish it to complete the level and unlock Anthropic Intermediate.

## 1. Objective
Build a small Python tool that takes several inputs, sends each to Claude, and uses the replies.

## 2. Real-world scenario
Your team has a list of short notes (or reviews, or logs). They want a one-line summary of each. You build a small tool that does it automatically with Claude.

## 3. Skills and concepts you will learn
- Build prompts from a template.
- Loop over many inputs.
- Use each reply (save/show).
- Combine everything from the Beginner level.

## 4. Prerequisites
- Anthropic Beginner Projects 1–4 completed.
- Read: `study/anthropic/beginner/05-use-the-reply.md`.

## 5. Step-by-step requirements
1. Make a list of at least 4 short notes (or reviews).
2. Write a Python tool that:
   - has a **system prompt** setting the role ("summarize in one simple sentence"),
   - loops over the notes,
   - sends each to Claude,
   - prints each summary AND saves them to a file `summaries.txt`.
3. Use a cheap model (Haiku) and short `max_tokens`.
4. Run it. Show the output and the saved file.

## 6. Tasks / challenges
- [ ] 4+ notes.
- [ ] System prompt used.
- [ ] Loop sends each note.
- [ ] Summaries printed AND saved to a file.

## 7. Expected outcome
One command turns your list of notes into a clean list of one-line summaries, saved to a file.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the tool's code (API key NOT in the code).
2. It uses a **system prompt** and a **loop** over the inputs.
3. It sends each note to Claude and prints a one-line summary for each.
4. It saves all summaries to `summaries.txt` (show the file).
5. You state the model you used and why.
6. Your key is not committed to git.

## 9. Verification checklist
- [ ] System prompt + loop.
- [ ] Summaries printed + saved.
- [ ] Key safe.
- [ ] Evidence saved in `submissions/anthropic/beginner/project-05/` (no key!).

## 10. Common mistakes
- Hard-coding the key.
- One giant prompt instead of a loop.
- Not saving the output.

## 11. Hints
<details><summary>Hint 1</summary>Start from the "summarize each note" example in `study/anthropic/beginner/05-use-the-reply.md`, section 3.</details>
<details><summary>Hint 2</summary>Save with `open("summaries.txt","a")` and write each summary line.</details>
<details><summary>Hint 3</summary>Use `model="claude-haiku-4-5"` and `max_tokens=100` to keep it cheap and short.</details>

## 12. Final challenge
Add a small menu: let the user type a new note, and the tool prints its summary right away. Now it is an interactive tool.

## 13. What to submit (evidence)
Save the code (no key), the printed output, and `summaries.txt` in `submissions/anthropic/beginner/project-05/`. Then say: **"I submit Anthropic Beginner Project 5."** When it passes, Anthropic Intermediate unlocks! 🎉

---
**Remember:** Template → send → use the reply → loop. You just built a real (tiny) Claude app.
