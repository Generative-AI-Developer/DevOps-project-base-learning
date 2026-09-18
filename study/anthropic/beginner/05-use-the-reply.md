---
id: anthropic-beginner-study-use-the-reply
track: anthropic
level: beginner
topic: Use Claude's reply in a small program
forProject: anthropic-beginner-project-05
---

# Study: Use Claude's Reply in a Program

> **Words to know**
> - **Parse** — read a value out of the reply.
> - **Loop** — repeat something (like asking many questions).
> - **Input** — data you give the program.
> - **Prompt template** — a prompt with a blank you fill in.

## 1. Easy explanation (simple → deeper)
A real app does not just print Claude's answer. It **uses** it: saves it, shows it, or acts on it.

You will build a tiny tool: it takes some input, builds a prompt, sends it to Claude, and uses the reply. This is the shape of almost every Claude app.

## 2. Key concepts and terms
- Build the prompt with an f-string (a template with a blank).
- Get the text: `message.content[0].text`.
- Loop over a list to handle many inputs.
- Keep prompts clear (from Project 1).

## 3. Practical examples
A tiny "summarize each note" tool:
```python
import anthropic
client = anthropic.Anthropic()

notes = [
    "The server was slow at 2pm. We restarted nginx and it got better.",
    "A user could not log in. The password reset email was in spam.",
]

def summarize(text):
    msg = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=100,
        system="You summarize notes in ONE short sentence, simple English.",
        messages=[{"role": "user", "content": f"Summarize this note:\n{text}"}],
    )
    return msg.content[0].text.strip()

for n in notes:
    print("-", summarize(n))
```

## 4. Commands and config examples
```python
# read Claude's text safely
text = message.content[0].text
# use it: save to a file, show it, or make a decision
with open("out.txt", "a") as f:
    f.write(text + "\n")
```

## 5. Hands-on exercises
1. Make a list of 3 short notes. Summarize each with Claude.
2. Save all summaries to a file.
3. Add a simple menu: ask the user for a note, then print the summary.

## 6. Troubleshooting
- **Problem:** `IndexError` on `content[0]`.
  **Fix:** the reply may be empty or an error. Print the whole `message` to see what came back.
- **Problem:** the loop is slow/costly.
  **Fix:** use a small model (Haiku) and short `max_tokens`.

## 7. Common mistakes and how to avoid them
- Not stripping extra spaces/newlines from the reply (`.strip()`).
- Sending one huge prompt instead of looping over items.
- Forgetting to handle an empty or error reply.

## 8. Certification notes (what the exam wants)
- **CCDV-F:** building a small app that sends a prompt and uses the reply is the core developer skill.
- Know the request/response shape and how to loop.

## 9. Practice questions and tasks
1. Where is the reply text in the response?
2. Why use a loop for many inputs?
3. Which model is good for a cheap batch job?

## 10. References
- Messages API: https://docs.anthropic.com/en/api/messages (checked: 2026-09-18)
- Anthropic Academy: https://www.anthropic.com/learn (checked: 2026-09-18)

---
**Remember:** Build a prompt → send it → read `content[0].text` → use it (save/show/act). Loop for many inputs.

<details><summary>Answers</summary>

1. In `message.content[0].text`.
2. To handle each item separately and cleanly (better than one giant prompt).
3. `claude-haiku-4-5` (fast and cheap).
</details>
