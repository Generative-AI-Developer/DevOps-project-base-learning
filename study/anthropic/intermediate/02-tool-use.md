---
id: anthropic-intermediate-study-tool-use
track: anthropic
level: intermediate
topic: Tool use (function calling)
forProject: anthropic-intermediate-project-02
---

# Study: Tool Use (Let Claude Call Your Code)

> **Words to know**
> - **Tool** — a function you let Claude use (like "get the weather").
> - **Tool use / function calling** — Claude asks to run a tool; your code runs it and gives the result back.
> - **input_schema** — a description of what inputs the tool needs (JSON shape).
> - **tool_result** — the answer you send back to Claude after running the tool.

## 1. Easy explanation (simple → deeper)
Claude cannot check live data or run your code by itself. **Tool use** fixes this:
1. You describe some **tools** (functions) to Claude.
2. Claude decides it needs a tool and asks to use it (with inputs).
3. **Your code runs the tool** and sends the result back.
4. Claude uses the result to write the final answer.

This is how Claude checks weather, reads a database, or does math with your code.

## 2. Key concepts and terms
- Each tool has: a `name`, a `description`, and an `input_schema` (what inputs it needs).
- When Claude wants a tool, the response `stop_reason` is `"tool_use"` and there is a `tool_use` block with the inputs.
- You run the function, then send a `tool_result` back (with the same `tool_use_id`).
- Claude then writes the final answer.
- The SDK has a **Tool Runner** helper that does this loop for you.

## 3. Practical examples
```python
import anthropic
client = anthropic.Anthropic()

tools = [{
    "name": "add_numbers",
    "description": "Add two numbers and return the sum.",
    "input_schema": {
        "type": "object",
        "properties": {"a": {"type": "number"}, "b": {"type": "number"}},
        "required": ["a", "b"],
    },
}]

def add_numbers(a, b):
    return a + b

msg = client.messages.create(
    model="claude-opus-5", max_tokens=1000, tools=tools,
    messages=[{"role": "user", "content": "What is 21 plus 21?"}],
)

# if Claude asked for a tool:
if msg.stop_reason == "tool_use":
    for block in msg.content:
        if block.type == "tool_use":
            result = add_numbers(**block.input)     # run YOUR code
            follow = client.messages.create(
                model="claude-opus-5", max_tokens=1000, tools=tools,
                messages=[
                    {"role": "user", "content": "What is 21 plus 21?"},
                    {"role": "assistant", "content": msg.content},
                    {"role": "user", "content": [
                        {"type": "tool_result", "tool_use_id": block.id,
                         "content": str(result)}
                    ]},
                ],
            )
            print(follow.content[0].text)
```

## 4. Commands and config examples
```python
# the SDK Tool Runner does the loop for you (beta helper):
#   from anthropic import beta_tool ; @beta_tool ... ; client.beta.messages.tool_runner(...)
# for learning, the manual loop above shows what really happens.
```

## 5. Hands-on exercises
1. Define an `add_numbers` tool. Ask Claude a math question. Run the tool and send the result back.
2. Add a second tool (like `get_length` of a word). See Claude pick the right one.
3. Print the `tool_use` block to see the inputs Claude sent.

## 6. Troubleshooting
- **Problem:** Claude answers without using the tool.
  **Fix:** make the tool description clear, and ask a question that truly needs it.
- **Problem:** error sending the result.
  **Fix:** the `tool_result` must use the same `tool_use_id`, and you must include the assistant's tool_use message in the history.

## 7. Common mistakes and how to avoid them
- Forgetting to send the assistant's `tool_use` message back in the history.
- Wrong `tool_use_id` on the result.
- A vague `input_schema` — describe each field.

## 8. Certification notes (what the exam wants)
- **CCDV-F:** tool use / function calling is a core developer skill.
- Know the flow: define tools → Claude asks → you run → send `tool_result` → final answer.

## 9. Practice questions and tasks
1. Why does Claude need tools?
2. What is `stop_reason` when Claude wants a tool?
3. What must match between the tool_use and the tool_result?

## 10. References
- Tool use: https://docs.anthropic.com/en/docs/build-with-claude/tool-use (checked: 2026-09-18)
- Tool use examples: https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview (checked: 2026-09-18)

---
**Remember:** Define tools → Claude asks to use one → your code runs it → send `tool_result` → Claude answers. The SDK Tool Runner can automate the loop.

<details><summary>Answers</summary>

1. So it can use live data or run your code (it cannot do that alone).
2. `"tool_use"`.
3. The `tool_use_id` (the result must reference the same id).
</details>
