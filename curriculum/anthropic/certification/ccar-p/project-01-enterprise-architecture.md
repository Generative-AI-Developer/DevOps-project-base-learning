---
id: anthropic-ccar-p-project-01
track: anthropic
level: certification
order: 1
title: "CCAR-P Drill: Enterprise Architecture at Scale"
prereqs: ["anthropic-ccar-f-project-05"]
skills: ["scaling", "batching", "caching", "routing", "queues"]
certDomains: ["CCAR-P: enterprise architecture"]
estimatedTime: "60 minutes"
---

# CCAR-P Drill: Enterprise Architecture at Scale

**Status:** 🔒 Locked (unlocks after CCAR-F is complete)

## 1. Objective
Design a Claude system that handles very high traffic, cheaply and reliably.

## 2. Real-world scenario
Your app must handle 10 million requests a day. A naive design would be slow and very costly. You design for scale.

## 3. Skills and concepts you will learn
- Scale with batching, caching, and model routing.
- Use queues and handle rate limits.
- Apply DevOps scaling ideas to AI.

## 4. Prerequisites
- CCAR-F completed.
- Read: `study/anthropic/certification/ccar-p/00-ccar-p-guide.md`.

## 5. Step-by-step requirements
1. Pick a high-traffic use case (e.g. classify 10M messages/day + answer some).
2. Draw (text) a scalable architecture: routing (Haiku vs Opus), caching, Batch API for bulk, a queue, and rate-limit handling.
3. Estimate the cost at scale, and how your design cuts it (vs Opus-for-everything).
4. Explain how it stays fast under load.

## 6. Tasks / challenges
- [ ] Scalable architecture diagram.
- [ ] Routing + caching + batch + queue.
- [ ] Cost estimate at scale.
- [ ] Latency plan.

## 7. Expected outcome
A design that handles huge traffic at controlled cost and good speed.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Your diagram includes routing, caching, and Batch API (for bulk), plus a queue and rate-limit handling.
2. Your cost estimate uses the price table and shows a clear saving vs Opus-for-everything.
3. You explain how the design stays fast under load.
4. You connect at least 2 ideas to your DevOps skills (queues, autoscaling, monitoring).
5. Simple English.

## 9. Verification checklist
- [ ] Scalable design.
- [ ] Cost estimate.
- [ ] Latency plan.
- [ ] DevOps links.
- [ ] Evidence saved in `submissions/anthropic/certification/ccar-p/project-01/`.

## 10. Common mistakes
- Opus for everything.
- No batching for bulk.
- No rate-limit/queue handling.

## 11. Hints
<details><summary>Hint 1</summary>Batch API for non-urgent bulk (~50% cheaper). Cache shared context. Route easy → Haiku.</details>
<details><summary>Hint 2</summary>Queue + workers smooth out spikes (like a K8s HPA + queue).</details>
<details><summary>Hint 3</summary>Handle 429 rate limits with backoff/retry.</details>

## 12. Final challenge
Add multi-region and failover thinking: what happens if one region/provider is down? Sketch a fallback. Reliability at scale is a CCAR-P must.

## 13. What to submit (evidence)
Save the architecture, cost estimate, and latency plan in `submissions/anthropic/certification/ccar-p/project-01/`. Then say: **"I submit CCAR-P Project 1."**

---
**Remember:** Scale = routing + caching + batch + queues + rate-limit handling. Your DevOps scaling skills apply directly.
