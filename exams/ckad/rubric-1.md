---
id: ckad-mock-1-rubric
cert: ckad
for: ckad-mock-1
---

# CKAD Mock Exam 1 — Rubric (for the mentor)

Grade each task: full, half, or zero of its weight. Then compute domain scores.

## Per-task grading
| Task | Weight | Full credit if... | Domain |
|---|---|---|---|
| 1 | 5 | Pod `busy` in `ex1` runs `sleep 3600` | design-build |
| 2 | 8 | init writes `/data/ready`; main waits/reads; shared emptyDir | design-build |
| 3 | 10 | Deployment 4 replicas; update applied + rollout ok; rollback done | deployment |
| 4 | 10 | `MODE` env from ConfigMap; `sec` mounted as a file | config-security |
| 5 | 8 | runAsNonRoot + runAsUser 10001 + drop ALL caps + requests/limits | config-security |
| 6 | 8 | Service `web-svc` has endpoints; reachable by name | services-networking |
| 7 | 8 | Only `role=client` reaches `web`; non-client blocked (shown) | services-networking |
| 8 | 8 | liveness + readiness present; Pod READY | observability |
| 9 | 7 | correct root cause named from describe/logs | observability |
| 10 | 6 | Job completes `1/1` with logs | design-build |

Half credit: the object exists but a detail is wrong (wrong value, missing verify, wrong namespace).

## Domain scores (write into progress.json)
Compute each domain = (points earned in that domain) ÷ (total weight in that domain):
- **design-build:** tasks 1,2,10 → total 19
- **deployment:** task 3 → total 10
- **config-security:** tasks 4,5 → total 18
- **services-networking:** tasks 6,7 → total 16
- **observability:** tasks 8,9 → total 15

Write to the mock project node's `domainScores`, e.g.:
```json
"domainScores": { "design-build": 0.8, "deployment": 1.0, "config-security": 0.6, "services-networking": 0.75, "observability": 0.9 }
```

## Pass / weak areas
- **Overall pass:** total earned ÷ 78 ≥ 0.66.
- For each domain scoring **< 0.66**, add to `progress.json.weakAreas`:
  `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "kubernetes/certification/cka" }`
- The student must redo the matching CKAD drill(s) and re-score that domain **≥ 0.66** before CKA unlocks.

## Mentor notes
- Give short, simple-English feedback per task: what was right, what to fix.
- Note the time taken. In the real exam, unfinished tasks score zero — speed matters.
