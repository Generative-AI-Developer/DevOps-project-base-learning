---
id: ccar-p-mock-1
cert: ccar-p
type: mock-exam
timeLimitMinutes: 120
passScore: 0.72
---

# CCAR-P Mock Exam 1 (Professional Architect: enterprise design)

## How this works
1. Set a timer for **120 minutes**.
2. Part A is multiple-choice. Part B is enterprise design tasks.
3. The mentor grades with `rubric-1.md`; pass = **72%** overall AND no domain below 66%.
4. This is the last Anthropic mock — passing it completes the Certification Level.

> Original practice items in the exam style.

## Part A — Knowledge (domain: knowledge)
1. For huge non-urgent bulk jobs, use... (a) live API (b) Batch API (c) streaming (d) an agent
2. First choice before fine-tuning is usually... (a) fine-tune immediately (b) strong prompt + RAG + examples (c) a bigger model only (d) nothing
3. Reliability needs... (a) only the happy path (b) retries, fallbacks, timeouts (c) more prompts (d) no logging
4. To govern cost across teams, you... (a) ignore it (b) attribute spend + budgets + alerts (c) use one key for all (d) only use Opus
5. Observability means you can... (a) hide errors (b) see cost/latency/errors and alert (c) skip logs (d) avoid metrics

## Part B — Enterprise design tasks
6. **(domain: scale)** Design a 10M-requests/day architecture (routing, caching, batch, queue, rate limits) with a cost estimate. (weight 14)
7. **(domain: reliability)** Give reliability controls + a per-request logging plan + 3 alerts. (weight 12)
8. **(domain: cost-governance)** Design cost attribution by team + budgets + 3 cost levers. (weight 12)
9. **(domain: advanced-deployment)** Pick tools for 3 workloads (live/batch/Managed Agents) + an eval gate in CI. (weight 12)

**Total: Part A (5 × 3 = 15) + Part B (50) = 65.** Pass = ≥ 72% overall AND no domain below 66%.

## What to submit
Part A answers (letters). Part B designs. Save under
`submissions/anthropic/certification/ccar-p/mock-1/`.

---
**Remember:** Enterprise scale + reliability + cost governance + right advanced tools. Bring your DevOps discipline.
