---
id: anthropic-beginner-study-claude-models
track: anthropic
level: beginner
topic: Claude models and when to pick which
forProject: anthropic-beginner-project-02
---

# Study: Claude Models — Which One to Pick

> **Words to know**
> - **Model** — one version of Claude. Bigger models are smarter; smaller models are faster and cheaper.
> - **Token** — a small piece of text (about 3–4 letters). You pay per token.
> - **Input tokens** — the text you send. **Output tokens** — the text Claude writes back.
> - **Context window** — how much text the model can read at once.

## 1. Easy explanation (simple → deeper)
Anthropic makes a family of Claude models. They trade **smartness** vs **speed and cost**:
- **Opus** — the most capable. Best for hard thinking. Costs more.
- **Sonnet** — a strong balance of smart and cheap.
- **Haiku** — the fastest and cheapest. Good for simple, high-volume jobs.

You pick the smallest model that still does the job well. That saves money.

## 2. Key concepts and terms (current models)
| Model | Model ID | Good for | Price (per 1M tokens, in / out) |
|---|---|---|---|
| Claude Opus 5 | `claude-opus-5` | hard reasoning, agents | $5 / $25 |
| Claude Sonnet 5 | `claude-sonnet-5` | balanced everyday use | $2 / $10 |
| Claude Haiku 4.5 | `claude-haiku-4-5` | fast, cheap, simple tasks | $1 / $5 |

> Prices can change. Always check the official pricing page before you rely on a number.
> **In simple words:** 1 million tokens is a LOT of text (roughly 750,000 words). For learning, your bills will be tiny.

## 3. Practical examples
- Writing a hard plan or debugging code → **Opus**.
- Summarizing an email, answering a normal question → **Sonnet**.
- Sorting 10,000 short messages into "spam / not spam" → **Haiku** (cheap and fast).

## 4. Commands and config examples
You choose the model by its **ID** in your code:
```python
model="claude-opus-5"     # smartest
model="claude-sonnet-5"   # balanced
model="claude-haiku-4-5"  # fast + cheap
```

## 5. Hands-on exercises
1. For each task, pick a model and say why:
   - "Translate one short sentence."
   - "Design a database for a big app."
   - "Label 5,000 reviews as happy or sad."
2. Look up the current Anthropic pricing page. Write today's price for each model.

## 6. Troubleshooting
- **Problem:** the model is slow or costly for a simple job.
  **Fix:** use a smaller model (Haiku or Sonnet).
- **Problem:** the answer is not smart enough.
  **Fix:** use a bigger model (Sonnet → Opus).

## 7. Common mistakes and how to avoid them
- Always using the biggest model — wastes money on easy tasks.
- Always using the smallest model — quality drops on hard tasks.
- Guessing prices — check the official page.

## 8. Certification notes (what the exam wants)
- **CCAO-F / CCDV-F:** know that Claude has different models, and how to choose (smart vs fast vs cheap).
- Know the words token, context window, input/output.

## 9. Practice questions and tasks
1. Which model is smartest? Which is cheapest?
2. What is a token?
3. When should you pick a smaller model?

## 10. References
- Models overview: https://docs.anthropic.com/en/docs/about-claude/models (checked: 2026-09-18)
- Pricing: https://www.anthropic.com/pricing (checked: 2026-09-18)
- Anthropic Academy: https://www.anthropic.com/learn (checked: 2026-09-18)

---
**Remember:** Opus = smartest, Sonnet = balanced, Haiku = fast + cheap. Pick the smallest model that does the job well.

<details><summary>Answers</summary>

1. Opus is smartest; Haiku is cheapest.
2. A small piece of text (about 3–4 letters); you pay per token.
3. When the task is simple or very high-volume, to save time and money.
</details>
