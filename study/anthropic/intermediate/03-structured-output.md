---
id: anthropic-intermediate-study-structured-output
track: anthropic
level: intermediate
topic: Structured output (clean JSON)
forProject: anthropic-intermediate-project-03
---

# Study: Structured Output (Clean JSON)

> **Words to know**
> - **JSON** — a simple data format your code can read, like `{"name": "Sara", "age": 5}`.
> - **Schema** — a description of the exact JSON shape you want.
> - **Structured output** — making Claude return data in an exact shape.
> - **Parse** — turn the text into real data your code can use.

## 1. Easy explanation (simple → deeper)
Sometimes you do not want a paragraph — you want **data**. For example: pull the name, date, and total from an invoice.

**Structured output** makes Claude return exact JSON that fits your **schema**. Then your code can read it safely, with no messy text to clean up.

## 2. Key concepts and terms
- Define the JSON **schema** you want (fields and types).
- Use the `output_config` `format` option to ask for that shape.
- The SDK helper `client.messages.parse(...)` can validate the reply against your schema for you.
- Always handle the case where the data is missing.

## 3. Practical examples
```python
import anthropic
client = anthropic.Anthropic()

schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "total": {"type": "number"},
    },
    "required": ["name", "total"],
}

msg = client.messages.create(
    model="claude-opus-5", max_tokens=300,
    output_config={"format": {"type": "json_schema", "schema": schema}},
    messages=[{"role": "user", "content":
        "Invoice: Customer Sara, amount due 42 dollars. Extract name and total."}],
)
print(msg.content[0].text)   # clean JSON that fits the schema
```

## 4. Commands and config examples
```python
import json
data = json.loads(msg.content[0].text)   # turn the JSON text into real data
print(data["name"], data["total"])
```

## 5. Hands-on exercises
1. Ask Claude to extract 2 fields from a sentence, as JSON.
2. Parse the JSON in Python and print the fields.
3. Add a third field. Update the schema and test again.

## 6. Troubleshooting
- **Problem:** the reply is not valid JSON.
  **Fix:** use `output_config` `format` with a schema, or the `parse()` helper. Do not just "ask nicely" for JSON.
- **Problem:** a field is missing.
  **Fix:** mark it `required` in the schema, and handle missing data in your code.

## 7. Common mistakes and how to avoid them
- Trusting free text to be valid JSON — use structured output.
- Not parsing the JSON before using it.
- No plan for missing/optional fields.

## 8. Certification notes (what the exam wants)
- **CCDV-F:** getting structured, machine-readable output is a core developer skill.
- Know that `output_config.format` is the current way (the old `output_format` is deprecated).

## 9. Practice questions and tasks
1. Why use structured output instead of a paragraph?
2. What is a schema?
3. How do you turn JSON text into real data in Python?

## 10. References
- Structured outputs: https://docs.anthropic.com/en/docs/build-with-claude/structured-outputs (checked: 2026-09-18)
- Messages API: https://docs.anthropic.com/en/api/messages (checked: 2026-09-18)

---
**Remember:** Want data, not prose? Give a schema and use structured output. Then parse the JSON before using it.

<details><summary>Answers</summary>

1. So your code can read exact fields safely, with no messy text to clean.
2. A description of the exact JSON shape (fields and types) you want.
3. `json.loads(text)`.
</details>
