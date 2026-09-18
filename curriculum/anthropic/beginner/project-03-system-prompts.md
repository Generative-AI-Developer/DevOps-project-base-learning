---
id: anthropic-beginner-project-03
track: anthropic
level: beginner
order: 3
title: "Give Claude a Role with a System Prompt"
prereqs: ["anthropic-beginner-project-02"]
skills: ["system prompt", "roles", "rules", "format control"]
certDomains: ["CCAO-F: everyday Claude use", "CCDV-F: prompt engineering"]
estimatedTime: "30–45 minutes"
---

# Give Claude a Role with a System Prompt

**Status:** 🔒 Locked

## 1. Objective
Use a system prompt to set Claude's role, rules, and answer style — and see how it changes the output.

## 2. Real-world scenario
Your company wants Claude to act as a polite support agent, always short and clear. You set this once in a system prompt so every answer follows the rule.

## 3. Skills and concepts you will learn
- Write a good system prompt (role + rules + format).
- Separate the role from the task.
- Control the answer style.

## 4. Prerequisites
- Anthropic Beginner Project 2 completed.
- Read: `study/anthropic/beginner/03-system-prompts.md`.
- You can do this in the Claude app/website (no API key needed yet), or with the API if you have a key.

## 5. Step-by-step requirements
1. Pick a role, e.g. "a friendly DevOps tutor for beginners".
2. Write a system prompt with: the role, 2 rules (like "use simple English", "under 5 sentences"), and one format rule ("end with one tip").
3. Ask a question WITHOUT the system prompt. Save the answer.
4. Ask the SAME question WITH the system prompt. Save the answer.
5. Write 2–3 sentences comparing them.

## 6. Tasks / challenges
- [ ] A clear system prompt (role + 2 rules + format).
- [ ] Answer without the system prompt saved.
- [ ] Answer with the system prompt saved.
- [ ] Comparison written.

## 7. Expected outcome
The system-prompt answer clearly follows your role, rules, and format. You can see the difference.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Your system prompt has a specific **role**, at least **2 rules**, and a **format** rule.
2. You show the answer WITHOUT the system prompt.
3. You show the answer WITH the system prompt.
4. The "with" answer clearly follows the rules (style/length/format changed).
5. Your comparison correctly names what changed.

## 9. Verification checklist
- [ ] Role + 2 rules + format.
- [ ] Both answers saved.
- [ ] Comparison written.
- [ ] Evidence saved in `submissions/anthropic/beginner/project-03/`.

## 10. Common mistakes
- Vague role ("be nice").
- Putting the task inside the system prompt (keep the task in the user message).
- No format rule, so the shape does not change.

## 11. Hints
<details><summary>Hint 1</summary>Template: "You are [role]. Rules: [rule 1]; [rule 2]. Always [format]."</details>
<details><summary>Hint 2</summary>Example role: "a patient tutor who explains cloud words to total beginners".</details>
<details><summary>Hint 3</summary>Keep the task (the question) in the user message, not the system prompt.</details>

## 12. Final challenge
Make two different system prompts for the SAME question — for example one "expert engineer" and one "explain-to-a-child". Compare how differently Claude answers. This shows the power of roles.

## 13. What to submit (evidence)
Save the system prompt, both answers, and your comparison in `submissions/anthropic/beginner/project-03/`. Then say: **"I submit Anthropic Beginner Project 3."**

---
**Remember:** System prompt = role + rules + format. It shapes every answer. Be specific.
