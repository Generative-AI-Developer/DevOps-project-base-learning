---
id: anthropic-intermediate-project-05
track: anthropic
level: intermediate
order: 5
title: "Cut Cost with Prompt Caching"
prereqs: ["anthropic-intermediate-project-04"]
skills: ["prompt caching", "cache_control", "usage inspection", "cost thinking"]
certDomains: ["CCDV-F: caching", "CCAR-F: cost optimization"]
estimatedTime: "60 minutes"
---

# Cut Cost with Prompt Caching

**Status:** 🔒 Locked

## 1. Objective
Use prompt caching on a big stable system prompt, and prove the cache worked by reading `usage`.

## 2. Real-world scenario
Your support bot sends the same long rulebook on every message. That is expensive. Caching the rulebook makes each call cheaper and faster.

## 3. Skills and concepts you will learn
- Mark stable content with `cache_control`.
- Keep the cached prefix identical.
- Verify the cache with `usage`.

## 4. Prerequisites
- Anthropic Intermediate Project 4 completed.
- Read: `study/anthropic/intermediate/05-prompt-caching.md`.

## 5. Step-by-step requirements
1. Write a **big** stable system prompt (a long set of rules — make it long enough to cache).
2. Mark it with `cache_control: {type: "ephemeral"}`.
3. Call Claude twice with different user questions (but the same cached system).
4. Print `usage` both times. Show `cache_read_input_tokens > 0` on the second call.
5. Then change one word in the cached part and show the cache breaks (read goes back to 0).

## 6. Tasks / challenges
- [ ] Big stable system prompt cached.
- [ ] Two calls, same cached prefix.
- [ ] Cache read shown on the second call.
- [ ] Cache break shown after a change.

## 7. Expected outcome
You proved caching works (cheaper second call) and that changing the prefix breaks it.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the code (key not included) with a cached system prompt (`cache_control`).
2. You show `usage` for two calls; the second shows `cache_read_input_tokens > 0`.
3. You show that changing the cached text makes the read drop to 0 (cache invalidated).
4. You explain in one line why stable content must go first and stay identical.
5. Code shown, key not included.

## 9. Verification checklist
- [ ] Cache hit shown.
- [ ] Cache break shown.
- [ ] Explanation written.
- [ ] Evidence saved in `submissions/anthropic/intermediate/project-05/`.

## 10. Common mistakes
- Changing text (dates/ids) inside the cached part.
- Prompt too small to cache.
- Not checking `usage`.

## 11. Hints
<details><summary>Hint 1</summary>Use the cached system example in `study/anthropic/intermediate/05-prompt-caching.md`, section 3.</details>
<details><summary>Hint 2</summary>Make the rules long (repeat a paragraph) so it passes the minimum cache size.</details>
<details><summary>Hint 3</summary>Compare `usage.cache_read_input_tokens` across calls.</details>

## 12. Final challenge
Estimate the savings: if the cached part is 5,000 tokens and you send 1,000 messages a day, roughly how much do you save vs no cache? (Use the pricing page and the cache read discount.)

## 13. What to submit (evidence)
Save the code (no key), the `usage` output for both calls, and the cache-break proof in `submissions/anthropic/intermediate/project-05/`. Then say: **"I submit Anthropic Intermediate Project 5."**

---
**Remember:** Cache the big stable part, keep it identical, verify with `usage`. Big savings on repeated context.
