---
id: anthropic-advanced-project-03
track: anthropic
level: advanced
order: 3
title: "Build a Grounded Q&A with RAG"
prereqs: ["anthropic-advanced-project-02"]
skills: ["retrieval", "grounding", "context injection", "I-don't-know path"]
certDomains: ["CCAR-F: RAG architecture", "CCDV-F: grounded answers"]
estimatedTime: "90 minutes"
---

# Build a Grounded Q&A with RAG

**Status:** 🔒 Locked

## 1. Objective
Build a small Q&A tool that answers ONLY from your own documents, and says "I don't know" when the answer is missing.

## 2. Real-world scenario
Your company has a help-center. You want a bot that answers from those pages only — no made-up facts. That is RAG.

## 3. Skills and concepts you will learn
- Retrieve the matching document(s).
- Put them in the prompt (augment).
- Ground the answer; allow "I don't know".

## 4. Prerequisites
- Anthropic Advanced Project 2 completed.
- Read: `study/anthropic/advanced/03-rag.md`.

## 5. Step-by-step requirements
1. Make 3–5 small "documents" (facts about a fake product).
2. Write a `answer(question)` function that:
   - retrieves the matching document(s) (keyword match is fine),
   - puts them in the prompt,
   - tells Claude to answer ONLY from the context and say "I don't know" if missing.
3. Test with 3 questions that ARE in the docs (correct answers).
4. Test with 1 question NOT in the docs (should say "I don't know").
5. Add the source (which document) to each answer.

## 6. Tasks / challenges
- [ ] Retrieval picks the right doc.
- [ ] Answers only from context.
- [ ] "I don't know" for missing info.
- [ ] Source shown.

## 7. Expected outcome
Your bot answers correctly from your docs and refuses to guess when the info is missing.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the code (key not included) showing retrieve → augment → generate.
2. For 3 in-doc questions, the answers are correct AND come from the documents.
3. For 1 out-of-doc question, the bot says it does not know (it does not make something up).
4. Each answer shows its source document.
5. You explain in one line why RAG reduces made-up answers.

## 9. Verification checklist
- [ ] Grounded answers.
- [ ] "I don't know" works.
- [ ] Source shown.
- [ ] Evidence saved in `submissions/anthropic/advanced/project-03/`.

## 10. Common mistakes
- Not telling Claude to stay within the context.
- No "I don't know" path.
- Dumping all docs instead of retrieving the top ones.

## 11. Hints
<details><summary>Hint 1</summary>Use the simple keyword-RAG example in `study/anthropic/advanced/03-rag.md`, section 3.</details>
<details><summary>Hint 2</summary>System prompt: "Answer ONLY from the CONTEXT. If it is not there, say 'I don't know'."</details>
<details><summary>Hint 3</summary>Return the doc key/name as the source next to the answer.</details>

## 12. Final challenge
Upgrade retrieval: instead of keyword match, score each chunk by how many question words it contains, and pick the top 2. This is a small step toward real (embedding-based) RAG.

## 13. What to submit (evidence)
Save the code (no key), the 3 correct answers, the "I don't know" case, and sources in `submissions/anthropic/advanced/project-03/`. Then say: **"I submit Anthropic Advanced Project 3."**

---
**Remember:** RAG = retrieve → augment → generate. Ground answers in your data; allow "I don't know".
