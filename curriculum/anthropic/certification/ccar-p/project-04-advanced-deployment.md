---
id: anthropic-ccar-p-project-04
track: anthropic
level: certification
order: 4
title: "CCAR-P Drill: Advanced Deployment and Customization"
prereqs: ["anthropic-ccar-p-project-03"]
skills: ["Batch API", "Managed Agents", "customization/fine-tuning", "evals as CI gates"]
certDomains: ["CCAR-P: advanced deployment"]
estimatedTime: "60 minutes"
---

# CCAR-P Drill: Advanced Deployment and Customization

**Status:** 🔒 Locked

## 1. Objective
Choose the right advanced tools for a big deployment: Batch API, Managed Agents, customization, and evals as CI gates.

## 2. Real-world scenario
Your org runs several Claude workloads: nightly bulk jobs, long-running agents, and a core app. You pick the right tool for each and gate quality in CI.

## 3. Skills and concepts you will learn
- When to use the Batch API vs live calls.
- When to use Managed Agents (hosted, long-running) vs your own loop.
- Customization (prompt libraries, and fine-tuning where offered).
- Evals as CI gates (block a deploy if quality drops).

## 4. Prerequisites
- CCAR-P Project 3 completed.
- Read: `study/anthropic/certification/ccar-p/00-ccar-p-guide.md`.

## 5. Step-by-step requirements
1. For 3 workloads, choose: live API, Batch API, or Managed Agents — and justify.
2. Explain when you would consider customization/fine-tuning (and when a good prompt + RAG is enough).
3. Design an **eval gate** in CI: a deploy only ships if the eval score stays above a threshold.
4. Connect this to your DevOps CI/CD skills (from the Docker track).

## 6. Tasks / challenges
- [ ] 3 workloads → right tool + reason.
- [ ] Customization decision.
- [ ] Eval-gate design.
- [ ] DevOps/CI links.

## 7. Expected outcome
A clear advanced-deployment plan with quality gated in CI.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Your 3 tool choices (live/batch/Managed Agents) are correct with reasons.
2. You correctly say when to consider fine-tuning vs prompt+RAG (prompt+RAG first for most cases).
3. Your eval-gate blocks a deploy when quality drops below a threshold.
4. You connect the eval gate to CI/CD (from Docker Intermediate Project 7).
5. Simple English.

## 9. Verification checklist
- [ ] Tool choices justified.
- [ ] Customization decision.
- [ ] Eval gate.
- [ ] CI links.
- [ ] Evidence saved in `submissions/anthropic/certification/ccar-p/project-04/`.

## 10. Common mistakes
- Using live calls for huge non-urgent bulk (use Batch).
- Reaching for fine-tuning before trying prompt+RAG.
- Shipping with no eval gate.

## 11. Hints
<details><summary>Hint 1</summary>Batch API for non-urgent bulk; Managed Agents for hosted long-running agents; live API for interactive.</details>
<details><summary>Hint 2</summary>Fine-tuning is a last step — try strong prompts + RAG + examples first.</details>
<details><summary>Hint 3</summary>Eval gate = run the eval in CI; fail the pipeline if the score drops (like a test).</details>

## 12. Final challenge
Design the full CI/CD pipeline for a Claude app: build → run eval → (gate) → deploy → monitor. This is DevOps + AI together — exactly the Capstone spirit.

## 13. What to submit (evidence)
Save the tool choices, customization decision, and eval-gate design in `submissions/anthropic/certification/ccar-p/project-04/`. Then say: **"I submit CCAR-P Project 4."**

---
**Remember:** Right tool per workload (live/batch/Managed Agents), prompt+RAG before fine-tuning, and gate quality with evals in CI.
