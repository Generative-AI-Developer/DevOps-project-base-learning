---
id: anthropic-beginner-project-02
track: anthropic
level: beginner
order: 2
title: "Choose the Right Claude Model"
prereqs: ["anthropic-beginner-project-01"]
skills: ["model choice", "tokens", "pricing", "cost thinking"]
certDomains: ["CCAO-F: Claude fundamentals", "CCDV-F: model selection"]
estimatedTime: "30–45 minutes"
---

# Choose the Right Claude Model

**Status:** 🔒 Locked

## 1. Objective
Learn to pick the best Claude model for a task, balancing smartness, speed, and cost.

## 2. Real-world scenario
Your company will send millions of requests to Claude. Picking the right model for each job can save a lot of money — or waste it. You must choose wisely.

## 3. Skills and concepts you will learn
- The Claude model family (Opus, Sonnet, Haiku).
- Tokens and pricing.
- Matching a model to a task.

## 4. Prerequisites
- Anthropic Beginner Project 1 completed.
- Read: `study/anthropic/beginner/02-claude-models.md`.

## 5. Step-by-step requirements
1. Write down 5 different tasks (mix of easy and hard).
2. For each task, choose Opus, Sonnet, or Haiku, and write **why**.
3. Look up the **current** official prices for the 3 models. Write them down (with the date).
4. Estimate: if a task sends 1,000 tokens in and gets 1,000 tokens out, roughly what does one call cost on each model? (Use the price table.)
5. Write 2 sentences: your rule for choosing a model.

## 6. Tasks / challenges
- [ ] 5 tasks listed with a chosen model + reason.
- [ ] Current prices written (with date).
- [ ] A simple cost estimate for one call on each model.
- [ ] Your model-choice rule written.

## 7. Expected outcome
You can choose a model for any task and explain the cost trade-off.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You list 5 tasks, each with a model choice AND a clear reason.
2. At least one task uses each of Opus, Sonnet, and Haiku (you show you understand all three).
3. You wrote the current prices (from the official page) with today's date.
4. Your cost estimate uses the prices correctly (input + output).
5. Your model-choice rule is sensible (smallest model that does the job well).

## 9. Verification checklist
- [ ] 5 tasks + reasons.
- [ ] Prices with date.
- [ ] Cost estimate.
- [ ] Rule written.
- [ ] Evidence saved in `submissions/anthropic/beginner/project-02/`.

## 10. Common mistakes
- Picking Opus for everything (costly).
- Picking Haiku for hard tasks (low quality).
- Using old prices — always check the live page.

## 11. Hints
<details><summary>Hint 1</summary>Hard thinking → Opus. Everyday → Sonnet. Simple + high volume → Haiku.</details>
<details><summary>Hint 2</summary>Cost of one call ≈ (input tokens ÷ 1,000,000 × input price) + (output tokens ÷ 1,000,000 × output price).</details>
<details><summary>Hint 3</summary>Get live prices from https://www.anthropic.com/pricing.</details>

## 12. Final challenge
Design a 2-model plan for a real app: use a cheap model (Haiku) to do a first pass on many items, and a smart model (Opus/Sonnet) only for the hard ones. Explain how this saves money.

## 13. What to submit (evidence)
Save your task list, prices, cost estimate, and rule in `submissions/anthropic/beginner/project-02/`. Then say: **"I submit Anthropic Beginner Project 2."**

---
**Remember:** Pick the smallest model that does the job well. That is smart engineering AND smart spending.
