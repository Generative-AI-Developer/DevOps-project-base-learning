---
id: anthropic-intermediate-study-streaming
track: anthropic
level: intermediate
topic: Streaming responses
forProject: anthropic-intermediate-project-04
---

# Study: Streaming (Show the Answer as It Types)

> **Words to know**
> - **Streaming** — getting the answer piece by piece as Claude writes it (like live typing).
> - **Chunk** — a small piece of the streamed answer.
> - **Timeout** — when a request waits too long and fails.

## 1. Easy explanation (simple → deeper)
Without streaming, you wait for the whole answer, then it appears at once. For long answers, that feels slow.

With **streaming**, the answer appears **as Claude writes it**, like live typing. This feels fast and is nicer for chat apps. It also avoids **timeouts** on long answers.

## 2. Key concepts and terms
- Use `client.messages.stream(...)` instead of `create(...)`.
- Loop over `stream.text_stream` to print each chunk.
- Use `stream.get_final_message()` to get the whole answer at the end.
- Streaming is recommended for long answers or high `max_tokens`.

## 3. Practical examples
```python
import anthropic
client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-opus-5", max_tokens=1000,
    messages=[{"role": "user", "content": "Write a short story about a brave cat."}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)   # prints live, piece by piece
    print()
    final = stream.get_final_message()     # the whole message if you need it
```

## 4. Commands and config examples
```python
# get the full text at the end without handling each chunk:
with client.messages.stream(model="claude-haiku-4-5", max_tokens=500,
        messages=[{"role":"user","content":"List 5 Linux tips."}]) as stream:
    final = stream.get_final_message()
print(final.content[0].text)
```

## 5. Hands-on exercises
1. Ask for a long answer with streaming; watch it type live.
2. Use `get_final_message()` to also save the whole answer.
3. Compare how streaming feels vs a normal `create()` call.

## 6. Troubleshooting
- **Problem:** long answers fail with a timeout.
  **Fix:** use streaming; it avoids the timeout.
- **Problem:** nothing prints until the end.
  **Fix:** add `flush=True` to `print`, and loop over `text_stream`.

## 7. Common mistakes and how to avoid them
- Using `create()` for very long answers (may time out) — use streaming.
- Forgetting `flush=True`, so text does not show live.

## 8. Certification notes (what the exam wants)
- **CCDV-F:** streaming for chat UIs and long outputs is a core skill.
- Know `client.messages.stream(...)` and `get_final_message()`.

## 9. Practice questions and tasks
1. Why use streaming?
2. Which method gives the whole answer at the end?
3. When is streaming especially important?

## 10. References
- Streaming: https://docs.anthropic.com/en/docs/build-with-claude/streaming (checked: 2026-09-18)
- Python SDK: https://github.com/anthropics/anthropic-sdk-python (checked: 2026-09-18)

---
**Remember:** Streaming shows the answer live and avoids timeouts on long outputs. Use `stream(...)` + `get_final_message()`.

<details><summary>Answers</summary>

1. To show the answer live (feels fast) and avoid timeouts on long answers.
2. `stream.get_final_message()`.
3. For long answers or high `max_tokens`.
</details>
