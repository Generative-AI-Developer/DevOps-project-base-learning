---
id: anthropic-beginner-study-first-api-call
track: anthropic
level: beginner
topic: Your first Claude API call
forProject: anthropic-beginner-project-04
---

# Study: Your First Claude API Call

> **Words to know**
> - **API** — a way for your code to talk to Claude. In simple words: your program sends a message and gets an answer.
> - **API key** — your secret password for the API. Keep it safe.
> - **SDK** — a ready-made library that makes API calls easy (`anthropic` for Python).
> - **Messages API** — the main Claude endpoint you send messages to.

## 1. Easy explanation (simple → deeper)
So far you talked to Claude in the app. Now you talk to Claude from **code**. This lets you build real apps.

Steps:
1. Get an **API key** from the Anthropic Console.
2. Install the **SDK** (`pip install anthropic`).
3. Write a short script that sends a message and prints the answer.

⚠️ **Keep your API key secret.** Never put it in code you share or commit to git. Use an environment variable.

## 2. Key concepts and terms
- Set the key as an environment variable: `ANTHROPIC_API_KEY`.
- The SDK reads it automatically.
- You send a list of `messages`; each has a `role` (`user`) and `content` (your text).
- You get back a message; the text is in `content[0].text`.
- `max_tokens` limits how long the answer can be.

## 3. Practical examples
```python
# hello_claude.py
import anthropic

client = anthropic.Anthropic()   # reads ANTHROPIC_API_KEY from the environment

message = client.messages.create(
    model="claude-opus-5",       # smartest; for cheap practice you can use claude-haiku-4-5
    max_tokens=300,
    messages=[
        {"role": "user", "content": "Say hello and tell me one fun fact about Linux."}
    ],
)

print(message.content[0].text)
```
Run it:
```bash
pip install anthropic
export ANTHROPIC_API_KEY="sk-ant-...your key..."
python hello_claude.py
```

## 4. Commands and config examples
```bash
# keep your key out of code — put it in a .env or export it
export ANTHROPIC_API_KEY="sk-ant-..."   # do NOT commit this
```
```python
# add a system prompt too
client.messages.create(
    model="claude-haiku-4-5", max_tokens=200,
    system="You are a friendly helper. Use simple English.",
    messages=[{"role": "user", "content": "What is Docker?"}],
)
```

## 5. Hands-on exercises
1. Get an API key from the Anthropic Console.
2. Install the SDK and set the key as an environment variable.
3. Run the `hello_claude.py` script. Read the answer.
4. Change the message and run again.

## 6. Troubleshooting
- **Problem:** `authentication_error`.
  **Fix:** the API key is missing or wrong. Check `echo $ANTHROPIC_API_KEY`.
- **Problem:** `ModuleNotFoundError: anthropic`.
  **Fix:** run `pip install anthropic`.
- **Problem:** the answer is cut off.
  **Fix:** raise `max_tokens`.

## 7. Common mistakes and how to avoid them
- Putting the API key directly in the code — use an environment variable.
- Committing the key to git — add it to `.gitignore` (this repo already ignores `.env`).
- Forgetting `max_tokens`.

## 8. Certification notes (what the exam wants)
- **CCDV-F (Developer):** making an API call, using the SDK, and handling the key safely are core.
- Know the Messages API shape: model, max_tokens, messages, system.

## 9. Practice questions and tasks
1. Where should the API key live?
2. Which command installs the Python SDK?
3. What does `max_tokens` do?

## 10. References
- Get started (API): https://docs.anthropic.com/en/docs/get-started (checked: 2026-09-18)
- Messages API: https://docs.anthropic.com/en/api/messages (checked: 2026-09-18)
- Python SDK: https://github.com/anthropics/anthropic-sdk-python (checked: 2026-09-18)

---
**Remember:** Install the SDK, keep the key in an env var, send `messages`, read `content[0].text`. Never commit your key.

<details><summary>Answers</summary>

1. In an environment variable (like `ANTHROPIC_API_KEY`), never in shared code.
2. `pip install anthropic`.
3. It limits how long Claude's answer can be.
</details>
