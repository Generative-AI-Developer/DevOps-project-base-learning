---
id: anthropic-beginner-study-system-prompts
track: anthropic
level: beginner
topic: Roles and system prompts
forProject: anthropic-beginner-project-03
---

# Study: Give Claude a Role (System Prompts)

> **Words to know**
> - **System prompt** — special instructions that set Claude's role and rules for the whole chat.
> - **Role** — who Claude should act as (e.g. "a kind teacher").
> - **User message** — the normal message you send.
> - **Assistant message** — Claude's reply.

## 1. Easy explanation (simple → deeper)
A **system prompt** is like giving Claude a job description before the work starts. It sets the **role**, the **rules**, and the **style**.

Example: "You are a kind English teacher. Use simple words. Always give one example." Now every reply follows that rule.

The system prompt is separate from your normal (user) message. It shapes the whole conversation.

## 2. Key concepts and terms
- Put the **role** and **rules** in the system prompt.
- Put the **task** in the user message.
- Good system prompts are clear and short. They say the role, the rules, and the format.
- The system prompt is strong — Claude follows it closely.

## 3. Practical examples
System prompt:
> You are a helpful DevOps tutor. Explain in very simple English. Keep answers under 5 sentences. Always end with one tip.

User message:
> What is a container?

Now the answer will be simple, short, and end with a tip.

## 4. Commands and config examples
In the API (Python), the system prompt is a separate field:
```python
import anthropic
client = anthropic.Anthropic()

msg = client.messages.create(
    model="claude-opus-5",
    max_tokens=1000,
    system="You are a kind teacher. Use very simple English. Give one example.",
    messages=[
        {"role": "user", "content": "What is a container?"}
    ],
)
print(msg.content[0].text)
```

## 5. Hands-on exercises
1. Write a system prompt that makes Claude a "polite customer support agent".
2. Ask the same question with and without the system prompt. Compare.
3. Add a rule: "Always answer in 3 bullet points." See it change the shape.

## 6. Troubleshooting
- **Problem:** Claude ignores your style.
  **Fix:** put the style rule in the **system prompt**, and make it clear and specific.
- **Problem:** answers are too long.
  **Fix:** add a length rule in the system prompt ("under 5 sentences").

## 7. Common mistakes and how to avoid them
- Mixing the role and the task in one messy message — keep role/rules in the system prompt, task in the user message.
- Vague roles ("be helpful") — be specific ("a patient math tutor for beginners").

## 8. Certification notes (what the exam wants)
- **CCAO-F / CCDV-F:** know what a system prompt is and how it sets role, rules, and format.
- Know the difference between system, user, and assistant messages.

## 9. Practice questions and tasks
1. What does a system prompt set?
2. Where do you put the task — system or user message?
3. Why is "be helpful" a weak role?

## 10. References
- System prompts: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts (checked: 2026-09-18)
- Messages API: https://docs.anthropic.com/en/api/messages (checked: 2026-09-18)

---
**Remember:** System prompt = role + rules + style (for the whole chat). User message = the task. Be specific.

<details><summary>Answers</summary>

1. The role, rules, and style Claude should follow.
2. The task goes in the user message.
3. It is vague — Claude does better with a specific role and clear rules.
</details>
