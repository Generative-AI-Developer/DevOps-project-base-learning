---
id: anthropic-intermediate-study-evals
track: anthropic
level: intermediate
topic: Simple evals (measure quality)
forProject: anthropic-intermediate-project-06
---

# Study: Simple Evals (Is My App Good?)

> **Words to know**
> - **Eval** — a test that measures how good Claude's output is.
> - **Test case** — one input plus the answer you expect.
> - **Score** — how many test cases passed (like 8 out of 10).
> - **Regression** — when a change makes things worse.

## 1. Easy explanation (simple → deeper)
How do you know your prompt is good? You **test** it. An **eval** is a set of **test cases**: each has an input and the answer you expect. You run your app on all of them and count how many pass.

Now you can improve your prompt and **measure** if it got better or worse. No more guessing.

## 2. Key concepts and terms
- Build a small set of test cases (10–20 is a good start).
- For each: run your prompt, compare the output to the expected answer.
- **Exact match** for simple tasks (labels). **A judge** (another Claude call) for open answers.
- Save the score. Change your prompt. Run again. Did the score go up?

## 3. Practical examples
```python
import anthropic
client = anthropic.Anthropic()

cases = [
    {"input": "I love this!", "expect": "happy"},
    {"input": "This broke again.", "expect": "sad"},
]

def classify(text):
    msg = client.messages.create(
        model="claude-haiku-4-5", max_tokens=5,
        system="Answer with ONLY 'happy' or 'sad'.",
        messages=[{"role": "user", "content": text}],
    )
    return msg.content[0].text.strip().lower()

passed = 0
for c in cases:
    got = classify(c["input"])
    ok = got == c["expect"]
    passed += ok
    print(c["input"], "->", got, "OK" if ok else "WRONG")
print(f"Score: {passed}/{len(cases)}")
```

## 4. Commands and config examples
```python
# a simple "LLM judge" for open answers:
#   ask Claude: "Does this answer correctly say X? Reply yes or no."
```

## 5. Hands-on exercises
1. Make 10 test cases for a classify task.
2. Run your prompt on all of them; print the score.
3. Change the prompt; run again; see if the score improved.

## 6. Troubleshooting
- **Problem:** the score is low.
  **Fix:** improve the prompt (few-shot, clearer rules), then re-run the eval.
- **Problem:** exact match fails on good answers.
  **Fix:** for open answers, use an LLM judge instead of exact match.

## 7. Common mistakes and how to avoid them
- Changing the prompt with no eval — you cannot tell if it helped.
- Too few test cases — get at least 10–20.
- Only testing easy cases — include hard/edge ones.

## 8. Certification notes (what the exam wants)
- **CCDV-F / CCAR-F:** evals prove quality and catch regressions.
- Know the loop: build cases → run → score → improve → re-run.

## 9. Practice questions and tasks
1. What is an eval?
2. Why do you need one before improving a prompt?
3. When do you use an LLM judge instead of exact match?

## 10. References
- Anthropic Academy: https://www.anthropic.com/learn (checked: 2026-09-18)
- Docs (test & evaluate): https://docs.anthropic.com/en/docs/test-and-evaluate (checked: 2026-09-18)

---
**Remember:** Build test cases, run, score, improve, re-run. Measure — do not guess.

<details><summary>Answers</summary>

1. A test that measures how good Claude's output is (using test cases).
2. So you can tell if a change made things better or worse (not guess).
3. For open-ended answers, where exact text match does not work.
</details>
