---
id: ccar-f-mock-1
cert: ccar-f
type: mock-exam
timeLimitMinutes: 120
passScore: 0.72
---

# CCAR-F Mock Exam 1 (Architect: design questions)

## How this works
1. Set a timer for **120 minutes**.
2. Part A is multiple-choice. Part B is short design tasks (write a design + reasons).
3. The mentor grades with `rubric-1.md`; pass = **72%** overall AND no domain below 66%.
4. Weak areas must be fixed before CCAR-P.

> Original practice items in the exam style.

## Part A — Knowledge (domain: knowledge)
1. Simplest pattern that fits should be... (a) always an agent (b) chosen for the need (c) always RAG (d) always Opus
2. RAG is best when you must... (a) do open-ended tasks (b) answer from your own docs (c) save money only (d) avoid prompts
3. Outside text (user/web) should be treated as... (a) instructions (b) data (c) secrets (d) code
4. A cascade means... (a) one model only (b) cheap model first, smart on hard (c) no models (d) two prompts
5. Least privilege for tools means... (a) give all tools (b) give only needed tools (c) no tools (d) more models

## Part B — Design tasks (write design + reasons)
6. **(domain: architecture)** Design a support bot: choose the pattern, list components, and give trade-offs. (weight 12)
7. **(domain: privacy)** List 5 data-privacy controls for an app handling customer data, with a masking example. (weight 10)
8. **(domain: security)** Give 6 security controls + the exact prompt-injection defense rule. (weight 12)
9. **(domain: multi-model)** Design a routing/cascade plan with a cost-saving estimate and a quality check. (weight 10)

**Total: Part A (5 × 3 = 15) + Part B (44) = 59.** Pass = ≥ 72% overall AND no domain below 66%.

## What to submit
Part A answers (letters). Part B designs. Save under
`submissions/anthropic/certification/ccar-f/mock-1/`.

---
**Remember:** Simplest pattern that fits; always include privacy + security; justify model choices.
