---
id: anthropic-ccdv-f-study-guide
track: anthropic
level: certification
topic: CCDV-F study guide (developer skills)
forProject: anthropic-ccdv-f-project-01
---

# Study: CCDV-F Key Skills

> **Words to know**
> - **SDK** — the library that calls Claude (`anthropic`).
> - **Messages API** — the main endpoint (`client.messages.create`).
> - **Structured output** — exact JSON via `output_config.format`.
> - **Tool use** — Claude calls your functions; you return `tool_result`.

## 1. Easy explanation (simple → deeper)
CCDV-F is the **developer** exam. You must be able to build with Claude: call the API, prompt well, get structured output, use tools/agents, and measure quality and cost.

You already built all of this in the Intermediate and Advanced levels. This guide is your quick review.

## 2. Key concepts and terms (developer checklist)
- **API call:** `client.messages.create(model, max_tokens, system, messages)`; key in an env var.
- **Models:** `claude-opus-5` (default), `claude-sonnet-5`, `claude-haiku-4-5`.
- **Prompting:** few-shot, tags, step-by-step.
- **Structured output:** `output_config: {format: {...}}`; parse with `json.loads`.
- **Streaming:** `client.messages.stream(...)` + `get_final_message()`.
- **Tool use:** define tools → handle `tool_use` → return `tool_result`.
- **Caching:** `cache_control` on stable content; verify with `usage`.
- **Evals + cost:** measure quality; tune with effort/model/caching/batch.

## 3. Practical examples
```python
msg = client.messages.create(
    model="claude-opus-5", max_tokens=500,
    system="You are a helpful assistant.",
    messages=[{"role": "user", "content": "Summarize: ..."}],
)
```

## 4. Commands and config examples
```bash
pip install anthropic
export ANTHROPIC_API_KEY="..."   # never commit
```

## 5. Hands-on exercises
1. From memory, write a minimal API call.
2. Write a structured-output call with a 2-field schema.
3. Sketch the tool-use loop in 5 lines.

## 6. Troubleshooting (exam mindset)
- Read code questions carefully; watch for the deprecated `output_format` (use `output_config.format`).
- Remember: never hard-code the key; handle errors; use streaming for long output.

## 7. Common mistakes and how to avoid them
- Hard-coding the key.
- Using the old `output_format`.
- Forgetting to return `tool_result` with the matching id.

## 8. Certification notes (what the exam wants)
- SDK usage, prompting, structured output, tool use, streaming, caching, evals, cost.
- Safe key handling and error handling.

## 9. Practice questions and tasks
1. Which field gives structured output today?
2. How do you keep the API key safe?
3. What must match between tool_use and tool_result?

## 10. References
- API docs: https://docs.anthropic.com/en/api/messages (checked: 2026-09-18)
- Build with Claude: https://docs.anthropic.com/en/docs/build-with-claude (checked: 2026-09-18)

---
**Remember:** Build confidently: API call, prompting, structured output, tools, streaming, caching, evals, cost — with safe keys.

<details><summary>Answers</summary>

1. `output_config: {format: {...}}` (not the deprecated `output_format`).
2. In an environment variable; never in code or git.
3. The `tool_use_id`.
</details>
