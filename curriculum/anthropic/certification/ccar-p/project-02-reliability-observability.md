---
id: anthropic-ccar-p-project-02
track: anthropic
level: certification
order: 2
title: "CCAR-P Drill: Reliability and Observability"
prereqs: ["anthropic-ccar-p-project-01"]
skills: ["retries/backoff", "fallbacks", "timeouts", "logging/metrics/alerts"]
certDomains: ["CCAR-P: reliability & observability"]
estimatedTime: "60 minutes"
---

# CCAR-P Drill: Reliability and Observability

**Status:** 🔒 Locked

## 1. Objective
Design reliability controls and observability for a production Claude system.

## 2. Real-world scenario
Requests sometimes fail or slow down. The business needs the system to stay up and needs to SEE what is happening.

## 3. Skills and concepts you will learn
- Retries with backoff, fallbacks, timeouts.
- Log cost/latency/model per request.
- Dashboards and alerts.

## 4. Prerequisites
- CCAR-P Project 1 completed.
- Read: `study/anthropic/certification/ccar-p/00-ccar-p-guide.md`.

## 5. Step-by-step requirements
1. List reliability controls: retries with backoff, a fallback model, timeouts, graceful failure messages.
2. Design what to log per request (model, tokens, cost, latency, success/error).
3. Design 3 dashboards and 3 alerts (e.g. error-rate spike, latency high, cost spike).
4. Connect these to your DevOps monitoring work (from the Linux/K8s tracks).

## 6. Tasks / challenges
- [ ] Reliability controls.
- [ ] Per-request logging plan.
- [ ] 3 dashboards + 3 alerts.
- [ ] DevOps links.

## 7. Expected outcome
A reliable, observable design a team could run in production.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Your reliability controls include retries/backoff, a fallback, and timeouts.
2. Your logging plan captures cost, latency, model, and outcome per request.
3. You define 3 useful dashboards and 3 sensible alerts.
4. You connect at least 2 items to your DevOps monitoring skills.
5. Simple English.

## 9. Verification checklist
- [ ] Reliability controls.
- [ ] Logging plan.
- [ ] Dashboards + alerts.
- [ ] Evidence saved in `submissions/anthropic/certification/ccar-p/project-02/`.

## 10. Common mistakes
- Only the happy path (no retries/fallbacks).
- No per-request cost/latency logging.
- No alerts.

## 11. Hints
<details><summary>Hint 1</summary>Reuse your Linux/K8s monitoring ideas: collect metrics, set thresholds, alert.</details>
<details><summary>Hint 2</summary>Fallback: if the main model errors, retry then drop to a simpler model or a safe message.</details>
<details><summary>Hint 3</summary>Alerts: error rate, p95 latency, and daily cost.</details>

## 12. Final challenge
Write a one-page incident runbook: "Claude API errors are spiking — what do we check and do?" Real enterprises keep these.

## 13. What to submit (evidence)
Save the controls, logging plan, dashboards/alerts, and runbook in `submissions/anthropic/certification/ccar-p/project-02/`. Then say: **"I submit CCAR-P Project 2."**

---
**Remember:** Retries + fallbacks + timeouts, and log/dashboard/alert everything. Same discipline as DevOps monitoring.
