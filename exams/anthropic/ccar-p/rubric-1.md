---
id: ccar-p-mock-1-rubric
cert: ccar-p
for: ccar-p-mock-1
---

# CCAR-P Mock Exam 1 — Rubric (for the mentor)

## Part A answer key (3 points each)
1-b · 2-b · 3-b · 4-b · 5-b

## Part B grading (full/half/zero of the weight)
| Task | Weight | Full credit if... | Domain |
|---|---|---|---|
| 6 | 14 | scalable design (routing+caching+batch+queue+rate limits) + cost estimate | scale |
| 7 | 12 | retries/fallbacks/timeouts + per-request logging + 3 alerts | reliability |
| 8 | 12 | cost attribution + budgets + 3 cost levers | cost-governance |
| 9 | 12 | correct tool per workload + eval gate in CI | advanced-deployment |

Half credit: design exists but misses a key element (no cost estimate, no fallbacks, no attribution, no eval gate).

## Domain scores (write into progress.json)
- **knowledge:** Part A → 15
- **scale:** task 6 → 14
- **reliability:** task 7 → 12
- **cost-governance:** task 8 → 12
- **advanced-deployment:** task 9 → 12

Each domain score = earned ÷ its total. Write to the mock node's `domainScores`.

## Pass / weak areas
- **Overall pass:** total earned ÷ 65 ≥ 0.72.
- For each domain < 0.66, add to `progress.json.weakAreas`:
  `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "capstone" }`
- Student redoes the matching drill (Projects 1–4) and retakes to complete CCAR-P.

## Mentor notes
- Expect enterprise-grade answers: reliability, observability, cost governance in every design.
- Reward connections to the student's DevOps skills (queues, autoscaling, monitoring, CI/CD).
