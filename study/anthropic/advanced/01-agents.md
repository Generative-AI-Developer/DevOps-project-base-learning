---
id: anthropic-advanced-study-agents
track: anthropic
level: advanced
topic: Agents
forProject: anthropic-advanced-project-01
---

# Study: Agents

> **Words to know**
> - **Agent** — a program where Claude works in steps, using tools, until a job is done.
> - **Loop** — repeat: Claude thinks → uses a tool → reads the result → thinks again.
> - **Tool Runner** — an SDK helper that runs the agent loop for you.
> - **Autonomy** — how much the agent decides by itself.

## 1. Easy explanation (simple → deeper)
A single call answers one question. An **agent** does a **multi-step job**: it thinks, uses a tool, reads the result, and repeats until finished.

Example: "Find the biggest file in this folder and tell me its size." The agent lists files (tool), reads results, maybe checks sizes (tool), then answers.

**Start simple.** Use an agent only when the task truly needs many steps and tools. For one-shot tasks, a single call is better.

## 2. Key concepts and terms
Four ways to build an agent (simple → advanced):
1. **Manual loop** — you write the `while` loop that keeps calling Claude while `stop_reason == "tool_use"`. Full control.
2. **Tool Runner** — the SDK runs the loop for you; you just write the tools. (`client.beta.messages.tool_runner`.)
3. **Managed Agents** — Anthropic runs the loop AND hosts a workspace (files, bash). Good for long jobs.
4. **Claude Agent SDK** — a ready-made coding/file agent (a separate product).

For learning, start with the manual loop or the Tool Runner.

## 3. Practical examples
The manual agent loop (idea):
```python
messages = [{"role": "user", "content": "Add 2+2, then multiply by 5."}]
while True:
    msg = client.messages.create(model="claude-opus-5", max_tokens=1000,
                                 tools=tools, messages=messages)
    messages.append({"role": "assistant", "content": msg.content})
    if msg.stop_reason != "tool_use":
        print(msg.content[0].text); break
    # run each requested tool, then append tool_result messages
    results = []
    for block in msg.content:
        if block.type == "tool_use":
            out = run_my_tool(block.name, block.input)
            results.append({"type": "tool_result", "tool_use_id": block.id,
                            "content": str(out)})
    messages.append({"role": "user", "content": results})
```

## 4. Commands and config examples
```python
# The SDK Tool Runner does this loop for you (beta helper):
#   runner = client.beta.messages.tool_runner(model=..., tools=[...], messages=[...])
#   final = runner.until_done()
```

## 5. Hands-on exercises
1. Give the agent 2 tools (add, multiply). Ask a 2-step math question.
2. Watch it use both tools in order.
3. Add a print inside the loop to see each step.

## 6. Troubleshooting
- **Problem:** the loop never ends.
  **Fix:** always break when `stop_reason != "tool_use"`; add a max-steps limit.
- **Problem:** the agent forgets earlier steps.
  **Fix:** append every assistant and tool_result message to `messages`.

## 7. Common mistakes and how to avoid them
- Using an agent for a one-shot task — a single call is simpler and cheaper.
- No step limit — runaway loops cost money. Add a max-steps guard.
- Not appending results to history.

## 8. Certification notes (what the exam wants)
- **CCAR-F / CCAR-P:** know the four ways to build agents and when to use each.
- Know the loop: think → tool → result → repeat → done.

## 9. Practice questions and tasks
1. What is an agent, in simple words?
2. When should you NOT use an agent?
3. What does the Tool Runner do for you?

## 10. References
- Agents overview: https://docs.anthropic.com/en/docs/agents-and-tools (checked: 2026-09-18)
- Tool use: https://docs.anthropic.com/en/docs/build-with-claude/tool-use (checked: 2026-09-18)

---
**Remember:** An agent loops: think → tool → result → repeat → done. Start simple; use an agent only when the task needs it. Add a step limit.

<details><summary>Answers</summary>

1. A program where Claude works in steps, using tools, until a job is done.
2. For one-shot tasks — a single call is simpler and cheaper.
3. It runs the agent loop for you, so you only write the tools.
</details>
