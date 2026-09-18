---
id: anthropic-intermediate-project-03
track: anthropic
level: intermediate
order: 3
title: "Extract Clean Data with Structured Output"
prereqs: ["anthropic-intermediate-project-02"]
skills: ["JSON schema", "output_config format", "parsing", "data extraction"]
certDomains: ["CCDV-F: structured output"]
estimatedTime: "60 minutes"
---

# Extract Clean Data with Structured Output

**Status:** 🔒 Locked

## 1. Objective
Make Claude return exact JSON that fits a schema, then read the fields safely in your code.

## 2. Real-world scenario
Your app reads messy invoices (or reviews) and must save the name and total to a database. You need clean JSON, not a paragraph.

## 3. Skills and concepts you will learn
- Define a JSON schema.
- Ask for structured output.
- Parse and use the data.

## 4. Prerequisites
- Anthropic Intermediate Project 2 completed.
- Read: `study/anthropic/intermediate/03-structured-output.md`.

## 5. Step-by-step requirements
1. Pick a task: extract 3 fields from a sentence (e.g. from a fake invoice: name, total, date).
2. Define a JSON **schema** for those fields.
3. Call Claude with `output_config` `format` using your schema.
4. Parse the JSON in Python and print the fields.
5. Test on 3 different inputs; show clean JSON each time.

## 6. Tasks / challenges
- [ ] Schema with 3 fields.
- [ ] Structured output call.
- [ ] JSON parsed in Python.
- [ ] Works on 3 inputs.

## 7. Expected outcome
Claude returns valid JSON that fits your schema, and your code reads the fields with no cleanup.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the code (key not included) with a JSON schema and `output_config` `format`.
2. The output is valid JSON with your 3 fields (show it for 3 inputs).
3. Your code parses the JSON (`json.loads`) and prints the fields.
4. You handle a missing/edge case (say what happens if a field is not found).
5. You explain why structured output is safer than free text.

## 9. Verification checklist
- [ ] Schema + structured output.
- [ ] Valid JSON on 3 inputs.
- [ ] Parsed and used.
- [ ] Evidence saved in `submissions/anthropic/intermediate/project-03/`.

## 10. Common mistakes
- Just asking for JSON in text (not reliable) — use the schema/format.
- Not parsing before use.
- No plan for missing fields.

## 11. Hints
<details><summary>Hint 1</summary>Use the schema + call in `study/anthropic/intermediate/03-structured-output.md`, section 3.</details>
<details><summary>Hint 2</summary>Parse: `data = json.loads(msg.content[0].text)`.</details>
<details><summary>Hint 3</summary>Add the third field to the schema's `properties` and `required`.</details>

## 12. Final challenge
Extract a **list** of items (e.g. all products in an order) as a JSON array of objects. Handle 0, 1, and many items. Lists are common in real extraction tasks.

## 13. What to submit (evidence)
Save the code (no key), the JSON outputs, and your parsing in `submissions/anthropic/intermediate/project-03/`. Then say: **"I submit Anthropic Intermediate Project 3."**

---
**Remember:** Give a schema, use structured output, parse the JSON. Clean data beats messy text.
