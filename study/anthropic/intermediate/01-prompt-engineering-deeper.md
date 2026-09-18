---
id: anthropic-intermediate-study-prompt-engineering-deeper
track: anthropic
level: intermediate
topic: Deeper prompt engineering
forProject: anthropic-intermediate-project-01
---

# Study: Deeper Prompt Engineering

> **Words to know**
> - **Few-shot** — giving Claude a few examples in the prompt.
> - **Zero-shot** — no examples, just the instruction.
> - **Structure** — using clear sections or tags so Claude reads the prompt easily.
> - **Step-by-step** — asking Claude to think through steps before answering.

## 1. Easy explanation (simple → deeper)
You know clear prompts. Now you make them **stronger**:
1. **Give examples** (few-shot): show 2–3 examples of input → output. Claude copies the pattern.
2. **Add structure**: use clear sections or XML-like tags (`<task>`, `<rules>`, `<example>`) so Claude does not get confused.
3. **Ask for steps**: for hard tasks, ask Claude to work step by step. This raises accuracy.

## 2. Key concepts and terms
- **Few-shot** is the strongest simple trick for consistent output.
- **Tags** like `<document>...</document>` clearly mark where your data starts and ends.
- **Order matters**: put instructions first, then the data, then the question.
- For long data, put the big text early and the question at the end.

## 3. Practical examples
Few-shot prompt (classify feelings):
```
Classify the feeling as happy or sad.

Example 1: "I love this!" -> happy
Example 2: "This broke again." -> sad

Now classify: "The update fixed everything." ->
```
Structured prompt with tags:
```
<task>Summarize the log in one sentence.</task>
<rules>Simple English. Under 20 words.</rules>
<log>
{paste the log here}
</log>
```

## 4. Commands and config examples
```python
prompt = """Classify the feeling as happy or sad.

Example 1: "I love this!" -> happy
Example 2: "This broke again." -> sad

Now classify: "The update fixed everything." ->"""

msg = client.messages.create(
    model="claude-haiku-4-5", max_tokens=10,
    messages=[{"role": "user", "content": prompt}],
)
print(msg.content[0].text.strip())
```

## 5. Hands-on exercises
1. Write a zero-shot prompt for a task. Then add 2 examples (few-shot). Compare.
2. Use tags (`<task>`, `<rules>`, `<data>`) to structure a prompt.
3. Add "Think step by step, then give the final answer" to a hard prompt.

## 6. Troubleshooting
- **Problem:** answers are inconsistent.
  **Fix:** add 2–3 examples (few-shot) to show the exact pattern.
- **Problem:** Claude mixes up instructions and data.
  **Fix:** wrap the data in clear tags.

## 7. Common mistakes and how to avoid them
- No examples for a tricky format — add few-shot.
- Data and instructions blended together — separate them with tags.

## 8. Certification notes (what the exam wants)
- **CCDV-F:** few-shot, structure, and step-by-step are core prompt-engineering skills.
- Know when to add examples and how to structure prompts.

## 9. Practice questions and tasks
1. What is few-shot prompting?
2. Why use tags in a prompt?
3. When does "think step by step" help?

## 10. References
- Prompt engineering: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview (checked: 2026-09-18)
- Use examples (multishot): https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting (checked: 2026-09-18)

---
**Remember:** Examples (few-shot) + structure (tags) + step-by-step = stronger, more consistent answers.

<details><summary>Answers</summary>

1. Giving Claude a few examples of input → output so it copies the pattern.
2. To clearly separate instructions from your data, so Claude does not get confused.
3. On hard, multi-step problems — it raises accuracy.
</details>
