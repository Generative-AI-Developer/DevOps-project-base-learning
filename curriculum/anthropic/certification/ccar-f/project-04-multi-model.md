---
id: anthropic-ccar-f-project-04
track: anthropic
level: certification
order: 4
title: "CCAR-F Drill: Multi-Model Deployment"
prereqs: ["anthropic-ccar-f-project-03"]
skills: ["model selection", "cascades", "routing", "cost/quality"]
certDomains: ["CCAR-F: multi-model deployment"]
estimatedTime: "45 minutes"
---

# CCAR-F Drill: Multi-Model Deployment

**Status:** 🔒 Locked

## 1. Objective
Design a multi-model plan: use the cheap model for easy work and the smart model only when needed.

## 2. Real-world scenario
Your app has millions of requests. A smart routing plan cuts cost a lot while keeping quality.

## 3. Skills and concepts you will learn
- Route work to the right model.
- Design a cascade (cheap first, smart on hard).
- Balance cost and quality with evals.

## 4. Prerequisites
- CCAR-F Project 3 completed.
- Read: `study/anthropic/certification/ccar-f/00-ccar-f-guide.md`.

## 5. Step-by-step requirements
1. Pick an app with mixed work (easy + hard requests).
2. Design a routing/cascade plan: which model for which case, and how you decide.
3. Estimate the cost saving vs using Opus for everything (use the price table).
4. Say how you would check quality did not drop (evals).

## 6. Tasks / challenges
- [ ] Routing/cascade plan.
- [ ] Decision rule (easy vs hard).
- [ ] Cost-saving estimate.
- [ ] Quality-check plan.

## 7. Expected outcome
A clear multi-model plan that saves money and keeps quality.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Your plan sends easy/bulk work to a cheap model and hard cases to a smart model.
2. You give a clear rule for deciding easy vs hard.
3. Your cost-saving estimate uses the price table correctly.
4. You describe how you would verify quality with an eval.
5. Simple English.

## 9. Verification checklist
- [ ] Routing plan.
- [ ] Decision rule.
- [ ] Cost estimate.
- [ ] Quality check.
- [ ] Evidence saved in `submissions/anthropic/certification/ccar-f/project-04/`.

## 10. Common mistakes
- One model for everything.
- No way to decide easy vs hard.
- No quality check.

## 11. Hints
<details><summary>Hint 1</summary>Haiku for classify/bulk; Opus/Sonnet for hard reasoning.</details>
<details><summary>Hint 2</summary>Decision rule: a cheap first pass flags "uncertain" cases for the smart model.</details>
<details><summary>Hint 3</summary>Note: a cascade uses more than one model, so caches are per-model — mention that trade-off.</details>

## 12. Final challenge
Compare your cascade to "just use the newest model at low effort". Sometimes one model at low effort is simpler and cheaper. Which wins for your app, and why?

## 13. What to submit (evidence)
Save the plan, decision rule, estimate, and quality-check in `submissions/anthropic/certification/ccar-f/project-04/`. Then say: **"I submit CCAR-F Project 4."**

---
**Remember:** Cheap model for easy/bulk, smart model for hard. Decide with a rule; verify with evals.
