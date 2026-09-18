---
id: anthropic-intermediate-project-02
track: anthropic
level: intermediate
order: 2
title: "Let Claude Use Your Tool"
prereqs: ["anthropic-intermediate-project-01"]
skills: ["tool definition", "tool_use flow", "tool_result", "function calling"]
certDomains: ["CCDV-F: tool use / function calling"]
estimatedTime: "60–90 minutes"
---

# Let Claude Use Your Tool

**Status:** 🔒 Locked

## 1. Objective
Build a tool that Claude can call, run it in your code, and send the result back so Claude finishes the answer.

## 2. Real-world scenario
Claude cannot know today's exchange rate or run your database query. You give it a tool so it can ask your code for real data.

## 3. Skills and concepts you will learn
- Define a tool with an input schema.
- Handle the `tool_use` response.
- Run the function and return a `tool_result`.

## 4. Prerequisites
- Anthropic Intermediate Project 1 completed.
- Read: `study/anthropic/intermediate/02-tool-use.md`.

## 5. Step-by-step requirements
1. Define a tool (start with `add_numbers`, or a `get_weather` that returns fake data).
2. Ask Claude a question that needs the tool.
3. Detect the `tool_use` block; print the inputs Claude sent.
4. Run your function with those inputs.
5. Send the `tool_result` back and print Claude's final answer.

## 6. Tasks / challenges
- [ ] Tool defined with an input schema.
- [ ] Claude asks to use the tool (`stop_reason == "tool_use"`).
- [ ] Your function runs with Claude's inputs.
- [ ] Final answer uses the tool's result.

## 7. Expected outcome
Claude asks for your tool, your code runs it, and Claude gives a correct final answer using the result.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the code (key not included) showing the tool definition with an `input_schema`.
2. You show that Claude returned a `tool_use` block, and you print the inputs it sent.
3. Your code runs the function with those inputs.
4. You send a `tool_result` (matching `tool_use_id`) and print Claude's final answer, which uses the result.
5. You explain the tool-use flow in one or two simple sentences.

## 9. Verification checklist
- [ ] Tool defined + used.
- [ ] Function ran with Claude's inputs.
- [ ] Final answer uses the result.
- [ ] Evidence saved in `submissions/anthropic/intermediate/project-02/`.

## 10. Common mistakes
- Not sending the assistant's tool_use message back in history.
- Wrong `tool_use_id`.
- Vague `input_schema`.

## 11. Hints
<details><summary>Hint 1</summary>Use the full manual-loop example in `study/anthropic/intermediate/02-tool-use.md`, section 3.</details>
<details><summary>Hint 2</summary>Print `msg.content` to see the tool_use block and its `input`.</details>
<details><summary>Hint 3</summary>The `tool_result` goes in a new user message and must include the same `tool_use_id`.</details>

## 12. Final challenge
Add a **second** tool and ask a question that needs both (or makes Claude choose). Show Claude picking the right tool. Then try the SDK **Tool Runner** helper to see the loop done for you.

## 13. What to submit (evidence)
Save the code (no key), the printed tool inputs, and the final answer in `submissions/anthropic/intermediate/project-02/`. Then say: **"I submit Anthropic Intermediate Project 2."**

---
**Remember:** Define tools → Claude asks → your code runs → send `tool_result` → Claude answers. This is function calling.
