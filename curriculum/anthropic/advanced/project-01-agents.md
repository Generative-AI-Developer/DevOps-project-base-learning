---
id: anthropic-advanced-project-01
track: anthropic
level: advanced
order: 1
title: "Build a Multi-Step Agent"
prereqs: ["anthropic-intermediate-project-06"]
skills: ["agent loop", "multi-tool", "step limits", "history management"]
certDomains: ["CCAR-F: agent design", "CCDV-F: agents"]
estimatedTime: "90 minutes"
---

# Build a Multi-Step Agent

**Status:** 🔒 Locked (unlocks when Anthropic Advanced opens)

## 1. Objective
Build an agent that uses more than one tool, in more than one step, to finish a small job.

## 2. Real-world scenario
A one-shot call cannot do "list the files, find the biggest, and report its size". An agent can: it uses tools step by step until the job is done.

## 3. Skills and concepts you will learn
- Write (or run) the agent loop.
- Give the agent 2+ tools.
- Add a step limit for safety.

## 4. Prerequisites
- Anthropic Intermediate completed.
- Read: `study/anthropic/advanced/01-agents.md`.

## 5. Step-by-step requirements
1. Define 2 tools (e.g. `add(a,b)` and `multiply(a,b)`, OR `list_files()` and `file_size(name)`).
2. Build the agent loop (manual loop or the SDK Tool Runner).
3. Ask a question that needs **two steps** (e.g. "add 2 and 3, then multiply by 10").
4. Add a **max-steps** limit (e.g. stop after 6 steps).
5. Print each step so you can see the agent working.

## 6. Tasks / challenges
- [ ] 2 tools defined.
- [ ] Agent loop runs.
- [ ] A 2-step task solved correctly.
- [ ] A max-steps limit is present.

## 7. Expected outcome
Your agent uses tools in order and reaches the right final answer, safely.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the agent code (key not included) with 2 tools.
2. The agent uses **both** tools across steps to solve the task (show the step prints).
3. The final answer is correct.
4. There is a **max-steps** guard so the loop cannot run forever.
5. You explain in one line when to use an agent vs a single call.

## 9. Verification checklist
- [ ] Multi-tool, multi-step run.
- [ ] Correct final answer.
- [ ] Step limit present.
- [ ] Evidence saved in `submissions/anthropic/advanced/project-01/`.

## 10. Common mistakes
- No step limit (runaway loop).
- Not appending assistant/tool_result messages to history.
- Using an agent for a one-shot task.

## 11. Hints
<details><summary>Hint 1</summary>Use the manual loop in `study/anthropic/advanced/01-agents.md`, section 3.</details>
<details><summary>Hint 2</summary>Add `steps = 0` and `if steps > 6: break` inside the loop.</details>
<details><summary>Hint 3</summary>Or try the SDK Tool Runner to see the loop done for you.</details>

## 12. Final challenge
Give the agent a tool that can fail (e.g. `read_file` on a missing file). Handle the error: return a `tool_result` with an error message and let the agent recover. Real agents must handle tool errors.

## 13. What to submit (evidence)
Save the agent code (no key), the step prints, and the final answer in `submissions/anthropic/advanced/project-01/`. Then say: **"I submit Anthropic Advanced Project 1."**

---
**Remember:** Agent loop: think → tool → result → repeat → done. Give it tools, a step limit, and good history.
