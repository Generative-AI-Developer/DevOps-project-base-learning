---
id: anthropic-ccdv-f-project-02
track: anthropic
level: certification
order: 2
title: "CCDV-F Drill: Prompting and Structured Output"
prereqs: ["anthropic-ccdv-f-project-01"]
skills: ["few-shot", "structured output", "parsing"]
certDomains: ["CCDV-F: prompt engineering", "CCDV-F: structured output"]
estimatedTime: "timed: 25 minutes"
---

# CCDV-F Drill: Prompting and Structured Output

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Combine few-shot prompting with structured output to extract clean, reliable JSON.

## 2. Real-world scenario
Exam tasks like "extract these fields as JSON, reliably".

## 3. Skills and concepts you will learn
- Few-shot for consistency.
- Structured output (`output_config.format`).
- Parse and use JSON.

## 4. Prerequisites
- CCDV-F Project 1 completed.
- Read: `study/anthropic/certification/ccdv-f/00-ccdv-f-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Define a JSON schema (3 fields).
2. Use structured output to extract those fields from 3 different inputs.
3. Parse the JSON and print the fields.
4. Handle a missing field cleanly.

## 6. Tasks / challenges
- [ ] Schema (3 fields).
- [ ] Valid JSON on 3 inputs.
- [ ] Parsed + printed.
- [ ] Missing-field case handled.

## 7. Expected outcome
Reliable structured extraction, done fast.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Code (no key) uses `output_config.format` with a 3-field schema.
2. Valid JSON for 3 inputs (shown).
3. JSON parsed and fields printed.
4. A missing-field case is handled.
5. You report your time.

## 9. Verification checklist
- [ ] Structured output works.
- [ ] Parsed + edge case.
- [ ] Evidence saved in `submissions/anthropic/certification/ccdv-f/project-02/`.

## 10. Common mistakes
- Using the deprecated `output_format`.
- Not parsing before use.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Intermediate Project 3 (structured output) + Project 1 (few-shot).</details>
<details><summary>Hint 2</summary>`data = json.loads(msg.content[0].text)`.</details>
<details><summary>Hint 3</summary>Mark fields `required` and handle KeyError.</details>

## 12. Final challenge
Extract a JSON **list** of items and handle 0/1/many. Lists appear often in real extraction.

## 13. What to submit (evidence)
Save the code (no key), the JSON, and your time in `submissions/anthropic/certification/ccdv-f/project-02/`. Then say: **"I submit CCDV-F Project 2."**

---
**Remember:** Few-shot + structured output = reliable JSON. Parse before use.
