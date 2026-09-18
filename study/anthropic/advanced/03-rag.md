---
id: anthropic-advanced-study-rag
track: anthropic
level: advanced
topic: RAG (retrieval)
forProject: anthropic-advanced-project-03
---

# Study: RAG (Give Claude the Right Facts)

> **Words to know**
> - **RAG** — Retrieval-Augmented Generation. In simple words: find the right facts first, then let Claude answer using them.
> - **Retrieve** — search your data for the pieces that match the question.
> - **Chunk** — a small piece of a document.
> - **Grounding** — making Claude answer from real facts, not guesses.

## 1. Easy explanation (simple → deeper)
Claude does not know your private files or the newest facts. **RAG** fixes this:
1. **Retrieve:** search your documents for the parts that match the question.
2. **Augment:** put those parts into the prompt.
3. **Generate:** Claude answers using those parts.

This gives correct, **grounded** answers from your own data, and lets Claude cite where it found them.

## 2. Key concepts and terms
- Split documents into **chunks** (small pieces).
- Find the chunks that match the question (by keyword, or by "embeddings" for meaning).
- Put the top chunks in the prompt, then ask the question.
- Ask Claude to answer ONLY from the given text, and say if it is not there.

## 3. Practical examples
```python
# very simple keyword RAG
docs = {
    "refunds": "Refunds take 5 business days after approval.",
    "hours": "Support is open 9am to 5pm, Monday to Friday.",
}

def answer(question):
    # 1) retrieve: pick the doc whose key appears in the question (toy example)
    picked = [t for k, t in docs.items() if k in question.lower()] or list(docs.values())
    context = "\n".join(picked)
    # 2) augment + 3) generate
    msg = client.messages.create(
        model="claude-opus-5", max_tokens=200,
        system="Answer ONLY from the CONTEXT. If not there, say you don't know.",
        messages=[{"role": "user",
                   "content": f"CONTEXT:\n{context}\n\nQUESTION: {question}"}],
    )
    return msg.content[0].text

print(answer("How long do refunds take?"))
```

## 4. Commands and config examples
```text
Real RAG uses "embeddings" (numbers that capture meaning) and a vector database
to find the best chunks. Start with keyword matching to learn the idea, then
move to embeddings for bigger data.
```

## 5. Hands-on exercises
1. Make 3 small "documents". Answer a question using only the matching one.
2. Ask a question NOT in the docs; check Claude says "I don't know".
3. Add the source (which doc) to the answer.

## 6. Troubleshooting
- **Problem:** Claude makes up an answer.
  **Fix:** tell it to answer ONLY from the context, and to say "I don't know" if missing.
- **Problem:** wrong chunk retrieved.
  **Fix:** improve retrieval (better keywords, or embeddings).

## 7. Common mistakes and how to avoid them
- Giving too much text (costly, confusing) — retrieve only the top few chunks.
- Not telling Claude to stay within the context — it may guess.
- No "I don't know" path.

## 8. Certification notes (what the exam wants)
- **CCAR-F / CCAR-P:** RAG is a key pattern for grounded, up-to-date answers.
- Know the 3 steps: retrieve → augment → generate, and grounding.

## 9. Practice questions and tasks
1. What are the 3 steps of RAG?
2. Why does RAG reduce made-up answers?
3. What is a chunk?

## 10. References
- Retrieval / embeddings: https://docs.anthropic.com/en/docs/build-with-claude/embeddings (checked: 2026-09-18)
- Contextual retrieval: https://www.anthropic.com/news/contextual-retrieval (checked: 2026-09-18)

---
**Remember:** RAG = retrieve the right facts → put them in the prompt → Claude answers from them. Ground answers; allow "I don't know".

<details><summary>Answers</summary>

1. Retrieve, augment, generate.
2. Claude answers from real facts you gave it, not from guesses.
3. A small piece of a document.
</details>
