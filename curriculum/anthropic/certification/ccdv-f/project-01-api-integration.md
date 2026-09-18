---
id: anthropic-ccdv-f-project-01
track: anthropic
level: certification
order: 1
title: "CCDV-F Drill: API Integration"
prereqs: ["anthropic-ccao-f-project-04"]
skills: ["SDK", "Messages API", "key safety", "error handling"]
certDomains: ["CCDV-F: API integration"]
estimatedTime: "timed: 25 minutes"
---

# CCDV-F Drill: API Integration

**Status:** 🔒 Locked (unlocks after CCAO-F is complete)

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Quickly build a correct, safe API integration: send a message, add a system prompt, and handle an error.

## 2. Real-world scenario
Exam tasks like "write code that calls Claude with a system prompt and prints the reply".

## 3. Skills and concepts you will learn
- Minimal API call from memory.
- Safe key handling.
- Basic error handling.

## 4. Prerequisites
- CCAO-F completed.
- Read: `study/anthropic/certification/ccdv-f/00-ccdv-f-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Write a script that calls `client.messages.create` with a system prompt and a user message; print the reply.
2. Make sure the key comes from an env var (not code).
3. Add a try/except that catches an API error and prints a friendly message.
4. Run it and show the output.

## 6. Tasks / challenges
- [ ] API call with system + user.
- [ ] Key from env var.
- [ ] Error handling.
- [ ] Runs and prints.

## 7. Expected outcome
A clean, safe API call with error handling, done fast.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Code (key not in code) calls the Messages API with a system prompt.
2. The key comes from the environment.
3. There is a try/except handling an API error.
4. You show the printed reply.
5. You report your time.

## 9. Verification checklist
- [ ] Safe key + system prompt.
- [ ] Error handling.
- [ ] Evidence saved in `submissions/anthropic/certification/ccdv-f/project-01/`.

## 10. Common mistakes
- Hard-coding the key.
- No error handling.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Beginner Project 4's script; add a system prompt and try/except.</details>
<details><summary>Hint 2</summary>Catch `anthropic.APIError` (or a specific subclass) and print a friendly message.</details>
<details><summary>Hint 3</summary>Key: `export ANTHROPIC_API_KEY=...`.</details>

## 12. Final challenge
Add a retry with a short wait on a rate-limit error. Robust apps retry safely.

## 13. What to submit (evidence)
Save the code (no key), the output, and your time in `submissions/anthropic/certification/ccdv-f/project-01/`. Then say: **"I submit CCDV-F Project 1."**

---
**Remember:** Safe key, system prompt, error handling. Fast and correct.
