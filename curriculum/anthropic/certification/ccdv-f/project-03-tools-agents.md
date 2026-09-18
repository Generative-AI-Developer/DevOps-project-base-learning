---
id: anthropic-ccdv-f-project-03
track: anthropic
level: certification
order: 3
title: "CCDV-F Drill: Tool Use and Agents"
prereqs: ["anthropic-ccdv-f-project-02"]
skills: ["tool use", "tool_result", "agent loop", "step limit"]
certDomains: ["CCDV-F: tool use / agents"]
estimatedTime: "timed: 30 minutes"
---

# CCDV-F Drill: Tool Use and Agents

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **30 minutes**.

## 1. Objective
Build a tool-using agent that solves a 2-step task, fast.

## 2. Real-world scenario
Exam tasks like "give Claude a tool and complete a multi-step request".

## 3. Skills and concepts you will learn
- Define a tool + handle `tool_use`.
- Return `tool_result`.
- A small agent loop with a step limit.

## 4. Prerequisites
- CCDV-F Project 2 completed.
- Read: `study/anthropic/certification/ccdv-f/00-ccdv-f-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Define 2 tools (e.g. add, multiply).
2. Run an agent loop that solves a 2-step task.
3. Add a step limit.
4. Print each step and the final answer.

## 6. Tasks / challenges
- [ ] 2 tools.
- [ ] 2-step task solved.
- [ ] Step limit present.

## 7. Expected outcome
A correct multi-step agent, done fast.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Code (no key) defines 2 tools and handles `tool_use` → `tool_result`.
2. The agent uses both tools to solve a 2-step task correctly.
3. A step limit is present.
4. You show the step prints and final answer.
5. You report your time.

## 9. Verification checklist
- [ ] Multi-tool agent works.
- [ ] Step limit.
- [ ] Evidence saved in `submissions/anthropic/certification/ccdv-f/project-03/`.

## 10. Common mistakes
- Wrong `tool_use_id`.
- No step limit.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Advanced Project 1 (agent loop) + Intermediate Project 2 (tool use).</details>
<details><summary>Hint 2</summary>Break when `stop_reason != "tool_use"`.</details>
<details><summary>Hint 3</summary>Or use the SDK Tool Runner.</details>

## 12. Final challenge
Handle a failing tool (return `tool_result` with an error) and let the agent recover.

## 13. What to submit (evidence)
Save the code (no key), step prints, and your time in `submissions/anthropic/certification/ccdv-f/project-03/`. Then say: **"I submit CCDV-F Project 3."**

---
**Remember:** Tools → tool_use → tool_result → loop with a step limit.
