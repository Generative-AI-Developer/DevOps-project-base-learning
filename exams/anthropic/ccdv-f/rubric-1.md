---
id: ccdv-f-mock-1-rubric
cert: ccdv-f
for: ccdv-f-mock-1
---

# CCDV-F Mock Exam 1 — Rubric (for the mentor)

## Part A answer key (3 points each)
1-b · 2-b · 3-b · 4-b · 5-b

## Part B grading (full/half/zero of the weight)
| Task | Weight | Full credit if... | Domain |
|---|---|---|---|
| 6 | 8 | correct Messages API call, system prompt, key from env, prints reply | api |
| 7 | 10 | uses output_config.format, valid JSON (3 fields), parsed + printed | structured |
| 8 | 10 | tool defined, tool_use handled, tool_result matched, final answer correct | tools |
| 9 | 8 | 2-step agent loop works, step limit present | agents |
| 10 | 10 | eval score before + after, one cost lever, correct conclusion | quality-cost |

Half credit: works but a detail is wrong (deprecated field, missing verify, hard-coded key = major deduction).

## Domain scores (write into progress.json)
- **knowledge:** Part A (questions 1–5) → total 15
- **api:** task 6 → 8
- **structured:** task 7 → 10
- **tools:** task 8 → 10
- **agents:** task 9 → 8
- **quality-cost:** task 10 → 10

Each domain score = earned ÷ its total. Write to the mock node's `domainScores`.

## Pass / weak areas
- **Overall pass:** total earned ÷ 61 ≥ 0.72.
- For each domain < 0.66, add to `progress.json.weakAreas`:
  `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "anthropic/certification/ccar-f" }`
- Student redoes the matching drill (Projects 1–4) and retakes before CCAR-F.

## Mentor notes
- Deduct hard for hard-coded keys or the deprecated `output_format`.
- Simple-English feedback per item.
