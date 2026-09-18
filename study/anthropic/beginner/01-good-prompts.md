---
id: anthropic-beginner-study-good-prompts
track: anthropic
level: beginner
topic: Writing clear prompts (prompt engineering basics)
forProject: anthropic-beginner-project-01
---

# Study: Write a Good Prompt

> **Words to know**
> - **Claude** — an AI assistant made by Anthropic. You talk to it in normal language.
> - **Prompt** — the message you send to Claude.
> - **Prompt engineering** — In simple words: the skill of writing prompts that get good answers.
> - **Context** — the extra information you give so Claude understands your need.
> - **Output** — the answer Claude writes back.

## 1. Easy explanation (simple → deeper)

Claude is smart, but it cannot read your mind. It only knows what you write.

Think of Claude like a very fast helper who just joined your team today. 🧑‍💻
- If you say "fix it", the helper does not know what "it" is.
- If you say "Fix the spelling mistakes in this email, and keep it polite", the helper knows exactly what to do.

So the secret is simple: **say clearly what you want.**

A good prompt usually has these parts:
1. **The task** — what you want (e.g. "Write a summary").
2. **The context** — the details or the text to work on.
3. **The rules** — how you want it (e.g. "in 3 bullet points, simple English").
4. **The example** (optional) — show one example of a good answer.

## 2. Key concepts and terms
- **Be specific** — In simple words: give exact details, not vague words.
- **Give context** — In simple words: paste the text or facts Claude needs.
- **Set the format** — In simple words: tell Claude the shape of the answer (list, table, short, long).
- **Iterate** — In simple words: if the answer is not perfect, change your prompt and try again.

## 3. Practical examples

**Weak prompt:**
> Tell me about Linux.

**Strong prompt:**
> Explain what Linux is to a total beginner.
> Use very simple English. Use 3 short bullet points. Give one real-life example.

The strong prompt gives a much better answer, because it says the **audience**, the **format**, and asks for an **example**.

## 4. Commands and config examples
You do not need code for this lesson. You just write text prompts. Here is a simple prompt "recipe" you can copy:

```
Task: <what you want Claude to do>
Text/Context: <paste the text or facts here>
Rules: <format, length, tone, language>
Example (optional): <show one good example>
```

## 5. Hands-on exercises (do these now)
1. Take a weak prompt: "Help with my CV." Rewrite it to be strong (add task, context, rules).
2. Ask Claude to explain "what is a container" in simple English, in 3 bullets.
3. Ask the same question again, but this time say: "Explain it to a 12-year-old with a fun example." See how the answer changes.

## 6. Troubleshooting
- **Problem:** The answer is too long.
  **Fix:** Add a rule: "Answer in 3 short bullet points."
- **Problem:** The answer is too hard to read.
  **Fix:** Add: "Use very simple English. Explain hard words."
- **Problem:** Claude misunderstood you.
  **Fix:** Give more context. Show one example of what a good answer looks like.

## 7. Common mistakes and how to avoid them
- **Too vague** ("make it better") — instead say exactly what "better" means.
- **No context** — always paste the text or facts Claude needs.
- **Many questions in one messy prompt** — ask one clear thing at a time.

## 8. Certification notes (what the exam wants)
- For **CCAO-F** (Associate) and **CCDV-F** (Developer): you must know good prompting basics — being specific, giving context, setting the format, and using examples.
- Remember the idea of **iteration**: improve the prompt step by step.

## 9. Practice questions and tasks
1. Name 3 parts of a good prompt.
2. Why is "fix it" a weak prompt?
3. Rewrite this weak prompt to be strong: "Write about dogs."

## 10. References (official docs + good free resources)
- Anthropic docs — Prompt engineering overview: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview (checked: 2026-09-18)
- Anthropic Academy (free courses): https://www.anthropic.com/learn (checked: 2026-09-18)
- Video: **Anthropic** official YouTube channel — search "prompt engineering" — https://www.youtube.com/@anthropic-ai (checked: 2026-09-18)

*(If a link changed, search the title on the official Anthropic site.)*

---
**Remember:** Say the **task**, give the **context**, set the **rules**. Clear prompt → clear answer.

<details><summary>Answers to practice questions</summary>

1. Task, context, rules (and optionally an example).
2. Because "it" has no context — Claude does not know what to fix or how.
3. Example strong version: "Write a short, friendly paragraph (4 sentences) about why dogs make good pets. Use simple English. Give one real example."
</details>
