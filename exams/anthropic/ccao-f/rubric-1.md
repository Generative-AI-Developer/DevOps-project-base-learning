---
id: ccao-f-mock-1-rubric
cert: ccao-f
for: ccao-f-mock-1
---

# CCAO-F Mock Exam 1 — Rubric (for the mentor)

## Answer key
1-b · 2-b · 3-b · 4-c · 5-b · 6-b · 7-b · 8-b · 9-b · 10-b · 11-b · 12-b · 13-b · 14-b · 15-c

## Scoring
Each question = 1 point. Total 15.

## Domain scores (write into progress.json)
- **genai-concepts:** questions 1–5 → total 5
- **everyday-use:** questions 6–10 → total 5
- **responsible-use:** questions 11–15 → total 5

Each domain score = correct ÷ 5. Write to the mock node's `domainScores`.

## Pass / weak areas
- **Overall pass:** total correct ÷ 15 ≥ 0.72.
- For each domain < 0.66 (i.e. 3/5 or fewer), add to `progress.json.weakAreas`:
  `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "anthropic/certification/ccdv-f" }`
- Student redoes the matching drill (Projects 1–3) and retakes before CCDV-F unlocks.

## Mentor notes
- Give a short, simple-English explanation for any wrong answer.
- Encourage: this is a knowledge exam — a little review fixes most gaps.
