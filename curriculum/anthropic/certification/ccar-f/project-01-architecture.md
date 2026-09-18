---
id: anthropic-ccar-f-project-01
track: anthropic
level: certification
order: 1
title: "CCAR-F Drill: Choose the Right Architecture"
prereqs: ["anthropic-ccdv-f-project-05"]
skills: ["pattern choice", "RAG design", "agent design", "trade-offs"]
certDomains: ["CCAR-F: system architecture"]
estimatedTime: "45 minutes"
---

# CCAR-F Drill: Choose the Right Architecture

**Status:** 🔒 Locked (unlocks after CCDV-F is complete)

## 1. Objective
Design the right shape for 3 different Claude use cases (single call, workflow, RAG, or agent).

## 2. Real-world scenario
A client gives you 3 ideas. You must choose the simplest architecture that meets each need, and explain the trade-offs.

## 3. Skills and concepts you will learn
- When to use each pattern.
- RAG and agent design at a high level.
- Explaining trade-offs.

## 4. Prerequisites
- CCDV-F completed.
- Read: `study/anthropic/certification/ccar-f/00-ccar-f-guide.md`.

## 5. Step-by-step requirements
1. Pick 3 use cases (e.g. FAQ bot, invoice extractor, research helper).
2. For each: choose a pattern (single call / workflow / RAG / agent) and justify it.
3. Draw (in text) the components for one of them (e.g. the RAG one).
4. List the main trade-offs (cost, latency, complexity) for each choice.

## 6. Tasks / challenges
- [ ] 3 use cases with a chosen pattern + reason.
- [ ] A text diagram for one design.
- [ ] Trade-offs listed.

## 7. Expected outcome
You can pick and justify the right architecture for real needs.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Each use case has a sensible pattern choice with a clear reason.
2. At least one uses RAG or an agent appropriately (not over-engineered).
3. You provide a component diagram (text) for one design.
4. You list trade-offs (cost/latency/complexity) for each.
5. Simple English.

## 9. Verification checklist
- [ ] 3 justified choices.
- [ ] One diagram.
- [ ] Trade-offs.
- [ ] Evidence saved in `submissions/anthropic/certification/ccar-f/project-01/`.

## 10. Common mistakes
- Using an agent when a single call works.
- No trade-off analysis.

## 11. Hints
<details><summary>Hint 1</summary>Simplest first: single call → workflow → RAG → agent.</details>
<details><summary>Hint 2</summary>RAG for "answer from our docs"; agent for "open-ended multi-step".</details>
<details><summary>Hint 3</summary>Diagram: Input → (retrieve) → prompt → Claude → output → logs.</details>

## 12. Final challenge
Design a hybrid: a RAG bot that can also call one tool (e.g. check an order status). Show where each part fits.

## 13. What to submit (evidence)
Save your choices, diagram, and trade-offs in `submissions/anthropic/certification/ccar-f/project-01/`. Then say: **"I submit CCAR-F Project 1."**

---
**Remember:** Pick the simplest pattern that meets the need; justify with cost/latency/complexity.
