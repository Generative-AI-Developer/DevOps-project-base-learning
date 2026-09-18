---
id: anthropic-intermediate-project-04
track: anthropic
level: intermediate
order: 4
title: "Stream a Live Answer"
prereqs: ["anthropic-intermediate-project-03"]
skills: ["streaming", "text_stream", "get_final_message", "chat UX"]
certDomains: ["CCDV-F: streaming"]
estimatedTime: "45–60 minutes"
---

# Stream a Live Answer

**Status:** 🔒 Locked

## 1. Objective
Use streaming so a long answer appears live, piece by piece, like typing.

## 2. Real-world scenario
You are building a chat app. Users hate waiting for a big block of text. Streaming makes it feel fast and alive.

## 3. Skills and concepts you will learn
- Use `client.messages.stream(...)`.
- Print chunks live.
- Get the full answer at the end.

## 4. Prerequisites
- Anthropic Intermediate Project 3 completed.
- Read: `study/anthropic/intermediate/04-streaming.md`.

## 5. Step-by-step requirements
1. Write a script that asks for a longish answer (e.g. "explain containers in 2 paragraphs").
2. Use streaming to print the answer live (piece by piece).
3. Also use `get_final_message()` to save the full answer to a file.
4. Compare the feel to a normal `create()` call.

## 6. Tasks / challenges
- [ ] Streaming prints live.
- [ ] Full answer saved with `get_final_message()`.
- [ ] Compared to non-streaming.

## 7. Expected outcome
Your answer types out live, and you also keep the full text. You understand when to use streaming.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the streaming code (key not included) using `client.messages.stream(...)`.
2. You show that the answer printed live (describe or record it), looping over `text_stream`.
3. You use `get_final_message()` and save the full text to a file.
4. You explain in one line why streaming is better for long answers.
5. Code shown, key not included.

## 9. Verification checklist
- [ ] Live streaming works.
- [ ] Full answer saved.
- [ ] Explanation written.
- [ ] Evidence saved in `submissions/anthropic/intermediate/project-04/`.

## 10. Common mistakes
- Using `create()` for very long output (timeout risk).
- Forgetting `flush=True`.
- Not saving the final message.

## 11. Hints
<details><summary>Hint 1</summary>Use the streaming example in `study/anthropic/intermediate/04-streaming.md`, section 3.</details>
<details><summary>Hint 2</summary>`print(text, end="", flush=True)` inside the `for text in stream.text_stream` loop.</details>
<details><summary>Hint 3</summary>`final = stream.get_final_message()` then save `final.content[0].text`.</details>

## 12. Final challenge
Build a tiny **chat loop**: keep asking the user for input and stream Claude's reply each time, remembering the conversation (append messages). This is the core of a chat app.

## 13. What to submit (evidence)
Save the code (no key), a note that it streamed live, and the saved answer in `submissions/anthropic/intermediate/project-04/`. Then say: **"I submit Anthropic Intermediate Project 4."**

---
**Remember:** Streaming = live answer + no timeouts. Use `stream(...)` and `get_final_message()`.
