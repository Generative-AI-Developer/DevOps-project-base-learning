---
id: anthropic-intermediate-study-prompt-caching
track: anthropic
level: intermediate
topic: Prompt caching and token cost
forProject: anthropic-intermediate-project-05
---

# Study: Prompt Caching (Save Money and Time)

> **Words to know**
> - **Prompt caching** — reusing a big, unchanging part of your prompt so you do not pay full price each time.
> - **Prefix** — the start of your prompt (system + early messages).
> - **Cache hit** — when Claude reuses the cached part (cheaper + faster).
> - **Invalidate** — break the cache by changing the cached part.

## 1. Easy explanation (simple → deeper)
Many apps send the **same big context** every time (like a long set of rules or a document). Paying full price for that each time is wasteful.

**Prompt caching** lets Claude remember that stable part. The next calls reuse it — **cheaper and faster**. This is a "cache hit".

The rule: the cached part must be **exactly the same** each time. Any change breaks (invalidates) the cache.

## 2. Key concepts and terms
- Mark stable content with `cache_control: {type: "ephemeral"}`.
- Put **stable** content first (system prompt, fixed rules, documents). Put **changing** content (the user's new question) last.
- Check `usage.cache_read_input_tokens` — if it is greater than 0, the cache worked.
- If it is always 0, something in the prefix keeps changing (like a timestamp).

## 3. Practical examples
```python
import anthropic
client = anthropic.Anthropic()

big_rules = "You are a support bot. (imagine a very long set of rules here) ..."

msg = client.messages.create(
    model="claude-opus-5", max_tokens=300,
    system=[
        {"type": "text", "text": big_rules,
         "cache_control": {"type": "ephemeral"}},   # cache this stable part
    ],
    messages=[{"role": "user", "content": "How do I reset my password?"}],
)
print(msg.usage)   # look for cache_read_input_tokens on later calls
```

## 4. Commands and config examples
```python
# run the same call twice; the second should show cache_read_input_tokens > 0
print(msg.usage.cache_creation_input_tokens)  # first call: creates the cache
print(msg.usage.cache_read_input_tokens)      # later calls: reads the cache (cheaper)
```

## 5. Hands-on exercises
1. Put a big stable system prompt with `cache_control`. Call it twice.
2. Print `usage` both times. See the cache read on the second call.
3. Change one word in the cached part; see the cache break (0 read).

## 6. Troubleshooting
- **Problem:** `cache_read_input_tokens` is always 0.
  **Fix:** something in the prefix changes each time (a date, a random id, unsorted JSON). Keep the cached part identical.
- **Problem:** the prompt is too short to cache.
  **Fix:** caching needs a minimum size; it helps most with big stable context.

## 7. Common mistakes and how to avoid them
- Putting changing text (timestamps, ids) inside the cached part — keep it stable.
- Expecting caching to help tiny prompts — it helps big, repeated context.

## 8. Certification notes (what the exam wants)
- **CCDV-F / CCAR-F:** caching is a key way to cut cost and latency.
- Know: stable content first, mark it with `cache_control`, verify with `usage`.

## 9. Practice questions and tasks
1. What does prompt caching save?
2. Where do you put stable vs changing content?
3. How do you check if the cache worked?

## 10. References
- Prompt caching: https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching (checked: 2026-09-18)
- Pricing: https://www.anthropic.com/pricing (checked: 2026-09-18)

---
**Remember:** Cache the big stable part (rules/documents) first; keep it identical; verify with `cache_read_input_tokens`. Cheaper + faster.

<details><summary>Answers</summary>

1. Money and time (you reuse the stable part instead of paying full price each call).
2. Stable content first (cached), changing content last.
3. Check `usage.cache_read_input_tokens` > 0.
</details>
