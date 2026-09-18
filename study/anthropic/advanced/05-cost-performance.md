---
id: anthropic-advanced-study-cost-performance
track: anthropic
level: advanced
topic: Cost and performance tuning
forProject: anthropic-advanced-project-05
---

# Study: Cost and Performance Tuning

> **Words to know**
> - **Latency** — how long a request takes.
> - **Effort** — how hard Claude thinks (higher = smarter but slower/costlier).
> - **Batch** — send many requests together at a lower price, but not instantly.
> - **Cascade** — use a cheap model first, a smart model only when needed.

## 1. Easy explanation (simple → deeper)
A working app can still be too slow or too costly. You tune it. The main levers, from "free wins" to "trade-offs":
1. **Caching** (free win) — cache big stable context (you did this).
2. **Shorter prompts / outputs** — send less, ask for less.
3. **Effort** — lower effort for easy tasks, higher only when needed.
4. **Model choice** — the smallest model that holds quality.
5. **Batch** — for non-urgent jobs, use the Batch API (about half price).

Always **measure** (with your eval) before and after a change.

## 2. Key concepts and terms
- **Free wins first:** caching, trimming input, trimming output.
- **Effort:** `output_config: {effort: "low"|"medium"|"high"}` — lower is cheaper/faster.
- **Model:** try the newest model at lower effort before building a complex multi-model cascade.
- **Batch API:** send many requests, get results later, ~50% cheaper.
- **Streaming** helps perceived speed (feels faster).

## 3. Practical examples
```python
# lower effort for a simple task (cheaper, faster)
msg = client.messages.create(
    model="claude-opus-5", max_tokens=200,
    output_config={"effort": "low"},
    messages=[{"role": "user", "content": "Classify: 'thanks!' -> happy or sad?"}],
)
```

## 4. Commands and config examples
```text
Levers, in order:
1. Cache stable context (cache_control).
2. Trim input (send only what is needed) and output (max_tokens, "be brief").
3. Effort: low for easy, high for hard.
4. Model: smallest that holds quality (measure!).
5. Batch API for non-urgent bulk work.
```

## 5. Hands-on exercises
1. Take a task and run it at effort low, medium, high. Compare quality and (roughly) cost.
2. Trim a long prompt; see if the answer stays good.
3. Read the Batch API docs; note when you would use it.

## 6. Troubleshooting
- **Problem:** the bill is high.
  **Fix:** cache, trim, lower effort, pick a smaller model, or batch. Measure each change.
- **Problem:** quality dropped after a change.
  **Fix:** your eval will show it — step back to the setting that held quality.

## 7. Common mistakes and how to avoid them
- Cutting cost without an eval — you cannot tell if quality dropped.
- Always max effort / biggest model — wasteful for easy tasks.
- Building a complex cascade before trying the simple lever (smaller/effort).

## 8. Certification notes (what the exam wants)
- **CCAR-F / CCAR-P:** cost/performance trade-offs and scaling are architect topics.
- Know the lever order: free wins → effort → model → batch, always measured.

## 9. Practice questions and tasks
1. What is the first, free lever to cut cost?
2. What does the Batch API give you?
3. Why measure with an eval when tuning cost?

## 10. References
- Batch API: https://docs.anthropic.com/en/docs/build-with-claude/batch-processing (checked: 2026-09-18)
- Pricing: https://www.anthropic.com/pricing (checked: 2026-09-18)

---
**Remember:** Free wins first (cache, trim), then effort, then model, then batch. Always measure with your eval.

<details><summary>Answers</summary>

1. Prompt caching (reuse stable context).
2. Cheaper (~50%) bulk processing, with results later (not instant).
3. So you know a cost change did not hurt quality.
</details>
