---
id: anthropic-ccar-p-project-03
track: anthropic
level: certification
order: 3
title: "CCAR-P Drill: Cost Governance at Scale"
prereqs: ["anthropic-ccar-p-project-02"]
skills: ["cost tracking", "budgets", "admin usage/cost", "chargeback"]
certDomains: ["CCAR-P: cost governance"]
estimatedTime: "60 minutes"
---

# CCAR-P Drill: Cost Governance at Scale

**Status:** 🔒 Locked

## 1. Objective
Design how a big organization tracks and controls its Claude spend across many teams.

## 2. Real-world scenario
Many teams use Claude. Finance asks: "Who spends what? How do we set limits and avoid surprises?"

## 3. Skills and concepts you will learn
- Track spend by team/feature.
- Set budgets and alerts.
- Use the Admin usage/cost reports.

## 4. Prerequisites
- CCAR-P Project 2 completed.
- Read: `study/anthropic/certification/ccar-p/00-ccar-p-guide.md`.

## 5. Step-by-step requirements
1. Design a plan to attribute cost by team/feature (e.g. separate API keys/workspaces, tags in logs).
2. Set budgets and alert thresholds (e.g. alert at 80% of monthly budget).
3. List 3 levers to cut spend without hurting quality (caching, effort, model routing, batch).
4. Explain how you would report monthly cost to leadership (a simple dashboard).

## 6. Tasks / challenges
- [ ] Cost attribution plan.
- [ ] Budgets + alerts.
- [ ] 3 cost levers.
- [ ] Reporting plan.

## 7. Expected outcome
A clear cost-governance plan a real org could adopt.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Your attribution plan can tell which team/feature spent what (keys/workspaces/tags).
2. You set budgets and alert thresholds.
3. You list 3 sound cost levers.
4. You describe a simple monthly cost report.
5. Simple English.

## 9. Verification checklist
- [ ] Attribution.
- [ ] Budgets + alerts.
- [ ] Cost levers.
- [ ] Reporting.
- [ ] Evidence saved in `submissions/anthropic/certification/ccar-p/project-03/`.

## 10. Common mistakes
- No way to attribute cost.
- No budgets/alerts.
- Cutting cost with no eval (quality risk).

## 11. Hints
<details><summary>Hint 1</summary>Separate API keys or workspaces per team make attribution easy (Admin API can report usage).</details>
<details><summary>Hint 2</summary>Levers: caching first, then effort, then model routing, then batch.</details>
<details><summary>Hint 3</summary>Always verify quality with evals when cutting cost.</details>

## 12. Final challenge
Design a "cost guardrail": an automatic alert (or soft block) when a team passes its daily budget — like a resource quota in Kubernetes, but for spend.

## 13. What to submit (evidence)
Save the attribution plan, budgets/alerts, levers, and report in `submissions/anthropic/certification/ccar-p/project-03/`. Then say: **"I submit CCAR-P Project 3."**

---
**Remember:** Attribute spend, set budgets + alerts, use cost levers, report monthly. Governance = no surprises.
