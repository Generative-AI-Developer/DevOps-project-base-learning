---
id: ccdv-f-mock-1
cert: ccdv-f
type: mock-exam
timeLimitMinutes: 120
passScore: 0.72
---

# CCDV-F Mock Exam 1 (Developer: knowledge + build tasks)

## How this works
1. Set a timer for **120 minutes**.
2. Part A is multiple-choice (knowledge). Part B is small build tasks (write code + show output).
3. The mentor grades with `rubric-1.md` and writes domain scores. Pass = **72%** overall AND no domain below 66%.
4. Weak areas must be fixed before CCAR-F.

> Original practice items in the exam style — not real exam questions.

## Part A — Knowledge (domain: knowledge)
1. Today's structured-output field is... (a) `output_format` (b) `output_config.format` (c) `format_output` (d) none
2. The API key should live in... (a) the code (b) an env var (c) a public repo (d) the prompt
3. For long output you should... (a) lower max_tokens (b) use streaming (c) use Haiku only (d) retry
4. In tool use, the result must match the request by... (a) name (b) tool_use_id (c) model (d) time
5. To reduce repeated-context cost, use... (a) bigger model (b) prompt caching (c) more tokens (d) no system prompt

## Part B — Build tasks (write code + show output)
6. **(domain: api)** Write code that calls the Messages API with a system prompt and prints the reply. Key from env var. (weight 8)
7. **(domain: structured)** Extract 3 fields as JSON using `output_config.format`; parse and print them. (weight 10)
8. **(domain: tools)** Give Claude a tool, handle `tool_use`, return `tool_result`, print the final answer. (weight 10)
9. **(domain: agents)** Build a 2-step agent loop with a step limit. (weight 8)
10. **(domain: quality-cost)** Run a small eval (5 cases), apply one cost lever, re-run, and report both scores. (weight 10)

**Total weight (Part A: 5 × 3 = 15) + (Part B: 46) = 61.** Pass = ≥ 72% overall AND no domain below 66%.

## What to submit
Part A answers (letters). Part B: code (no key) + output for each. Save under
`submissions/anthropic/certification/ccdv-f/mock-1/`.

---
**Remember:** Safe keys, current APIs, verify each build task.
