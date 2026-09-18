---
id: ccar-f-mock-1-rubric
cert: ccar-f
for: ccar-f-mock-1
---

# CCAR-F Mock Exam 1 — Rubric (for the mentor)

## Part A answer key (3 points each)
1-b · 2-b · 3-b · 4-b · 5-b

## Part B grading (full/half/zero of the weight)
| Task | Weight | Full credit if... | Domain |
|---|---|---|---|
| 6 | 12 | sensible pattern + components + trade-offs (not over-engineered) | architecture |
| 7 | 10 | 5 sound privacy controls + a masking example | privacy |
| 8 | 12 | 6 security controls + correct injection-defense rule | security |
| 9 | 10 | routing/cascade + cost estimate + quality check | multi-model |

Half credit: design exists but misses a key element (no trade-offs, no injection rule, no quality check).

## Domain scores (write into progress.json)
- **knowledge:** Part A → 15
- **architecture:** task 6 → 12
- **privacy:** task 7 → 10
- **security:** task 8 → 12
- **multi-model:** task 9 → 10

Each domain score = earned ÷ its total. Write to the mock node's `domainScores`.

## Pass / weak areas
- **Overall pass:** total earned ÷ 59 ≥ 0.72.
- For each domain < 0.66, add to `progress.json.weakAreas`:
  `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "anthropic/certification/ccar-p" }`
- Student redoes the matching drill (Projects 1–4) and retakes before CCAR-P.

## Mentor notes
- Reward simple, right-sized designs; penalize over-engineering.
- Require privacy + security in any full design answer.
