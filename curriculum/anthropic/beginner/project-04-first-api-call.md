---
id: anthropic-beginner-project-04
track: anthropic
level: beginner
order: 4
title: "Make Your First Claude API Call"
prereqs: ["anthropic-beginner-project-03"]
skills: ["API key safety", "anthropic SDK", "Messages API", "running a script"]
certDomains: ["CCDV-F: API integration"]
estimatedTime: "60 minutes"
---

# Make Your First Claude API Call

**Status:** 🔒 Locked

## 1. Objective
Write and run a small Python script that sends a message to Claude and prints the answer.

## 2. Real-world scenario
Every Claude app starts here: one API call. Once you can do this, you can build anything.

## 3. Skills and concepts you will learn
- Get and safely store an API key.
- Install the `anthropic` SDK.
- Send a message and read the reply.

## 4. Prerequisites
- Anthropic Beginner Project 3 completed.
- Read: `study/anthropic/beginner/04-first-api-call.md`.
- You need an Anthropic API key (free to create in the Console; small usage costs apply — practice with `claude-haiku-4-5` to keep it cheap).

## 5. Step-by-step requirements
1. Create an API key in the Anthropic Console.
2. Store it safely: `export ANTHROPIC_API_KEY="..."` (or a `.env` file — this repo ignores `.env`).
3. `pip install anthropic`.
4. Write `hello_claude.py` that sends a message and prints `message.content[0].text`.
5. Run it. Show the answer.
6. Change the message and run again. Show the new answer.

## 6. Tasks / challenges
- [ ] Key stored safely (env var, not in code).
- [ ] SDK installed.
- [ ] Script sends a message and prints the reply.
- [ ] Ran with two different messages.

## 7. Expected outcome
Your script talks to Claude and prints its answer. You did your first API call.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste `hello_claude.py`. The API key is **NOT** in the code (it comes from the environment).
2. The script uses the `anthropic` SDK and the Messages API (`client.messages.create`).
3. You show the printed answer for two different messages.
4. You state which model you used (and why — e.g. Haiku to keep practice cheap).
5. You confirm your key is not committed to git.

## 9. Verification checklist
- [ ] Key safe (env var).
- [ ] SDK call works.
- [ ] Two answers shown.
- [ ] Evidence saved in `submissions/anthropic/beginner/project-04/` (do NOT save your key!).

## 10. Common mistakes
- Hard-coding the API key.
- Committing the key to git.
- Forgetting `pip install anthropic`.

## 11. Hints
<details><summary>Hint 1</summary>Use the exact `hello_claude.py` in `study/anthropic/beginner/04-first-api-call.md`, section 3.</details>
<details><summary>Hint 2</summary>Cheap practice model: `model="claude-haiku-4-5"`.</details>
<details><summary>Hint 3</summary>Auth error? Check `echo $ANTHROPIC_API_KEY` shows your key.</details>

## 12. Final challenge
Add a **system prompt** to your script (from Project 3) so Claude always answers in simple English with one example. Show the difference.

## 13. What to submit (evidence)
Save the script (with NO key inside), the two answers, and your model note in `submissions/anthropic/beginner/project-04/`. Then say: **"I submit Anthropic Beginner Project 4."**

---
**Remember:** Install the SDK, keep the key in an env var, call the Messages API, read the reply. Never commit your key.
