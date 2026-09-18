---
id: anthropic-ccar-f-study-guide
track: anthropic
level: certification
topic: CCAR-F study guide (architecture)
forProject: anthropic-ccar-f-project-01
---

# Study: CCAR-F Key Skills (Design)

> **Words to know**
> - **Architecture** — the big-picture design of a system (the parts and how they connect).
> - **Data privacy** — keeping personal/secret data safe and used correctly.
> - **Security framework** — a set of rules/controls to keep a system safe.
> - **Multi-model** — using different Claude models for different jobs.

## 1. Easy explanation (simple → deeper)
CCAR-F is the **architect** exam (foundations). You design Claude solutions: pick the right pattern (single call, workflow, RAG, agent), protect data, secure the system, and choose models wisely.

You do not write every line — you decide the **shape** of the system and the trade-offs.

## 2. Key concepts and terms
- **Pick the pattern:** single call → workflow → RAG → agent. Use the simplest that works.
- **Data privacy:** do not send data you should not; know retention; mask/limit personal data; use least access.
- **Security:** guardrails, prompt-injection defense (outside text = data), RBAC/least privilege, checked outputs.
- **Multi-model:** cheap model (Haiku) for bulk/easy, smart model (Opus) for hard; measure with evals.
- **Cost/latency:** caching, effort, batch — designed in from the start.

## 3. Practical examples
- A support bot: RAG over help docs + guardrails + Haiku for classification, Opus for hard cases.
- A data extractor: structured output + Batch API for cost.

## 4. Commands and config examples
Design work is mostly diagrams and decisions, not code. Know WHEN to use each pattern.

## 5. Hands-on exercises
1. For 3 use cases, pick the right pattern and say why.
2. List privacy controls for an app that handles customer data.
3. Sketch a multi-model plan (which model for which job).

## 6. Troubleshooting (exam mindset)
- Choose the simplest pattern that meets the need.
- Always include privacy + security in a design answer.
- Justify model choices with cost/quality.

## 7. Common mistakes and how to avoid them
- Reaching for an agent when a single call works.
- Forgetting privacy/security in the design.
- One model for everything.

## 8. Certification notes (what the exam wants)
- Pattern choice, data privacy, security frameworks, multi-model strategy, cost/latency design.

## 9. Practice questions and tasks
1. When do you use RAG vs an agent?
2. Name 3 data-privacy controls.
3. How does a multi-model design save money?

## 10. References
- Architecture patterns: https://docs.anthropic.com/en/docs/agents-and-tools (checked: 2026-09-18)
- Privacy: https://www.anthropic.com/legal/privacy (checked: 2026-09-18)

---
**Remember:** Design = right pattern + data privacy + security + smart model choice + cost/latency. Keep it as simple as the job allows.

<details><summary>Answers</summary>

1. RAG to answer from your data; an agent for open-ended multi-step tasks.
2. Least access, masking/limiting personal data, and knowing/limiting retention (any three).
3. Use a cheap model for easy/bulk work and a smart model only for hard cases.
</details>
