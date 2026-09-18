---
id: anthropic-ccar-f-project-02
track: anthropic
level: certification
order: 2
title: "CCAR-F Drill: Data Privacy by Design"
prereqs: ["anthropic-ccar-f-project-01"]
skills: ["data privacy", "masking", "retention", "least access"]
certDomains: ["CCAR-F: data privacy"]
estimatedTime: "45 minutes"
---

# CCAR-F Drill: Data Privacy by Design

**Status:** 🔒 Locked

## 1. Objective
Design privacy controls for an app that handles personal data.

## 2. Real-world scenario
Your app processes customer messages that may contain personal data. You must protect it by design.

## 3. Skills and concepts you will learn
- Minimize and mask personal data.
- Least access to data.
- Retention awareness.

## 4. Prerequisites
- CCAR-F Project 1 completed.
- Read: `study/anthropic/certification/ccar-f/00-ccar-f-guide.md`.

## 5. Step-by-step requirements
1. List the personal data your app might touch.
2. Design 5 privacy controls (e.g. send only what is needed, mask names/emails before sending, least access, logging without secrets, clear retention).
3. Show a small before/after: a message with personal data → a masked version you would send.
4. Explain who can access the stored data and why (least access).

## 6. Tasks / challenges
- [ ] Personal data listed.
- [ ] 5 privacy controls.
- [ ] Masking example.
- [ ] Access plan.

## 7. Expected outcome
A clear, sensible privacy design for a real app.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You correctly identify the personal data at risk.
2. You list 5 sound privacy controls.
3. You show a masking before/after example.
4. Your access plan follows least access.
5. Simple English.

## 9. Verification checklist
- [ ] Data identified.
- [ ] 5 controls.
- [ ] Masking example.
- [ ] Access plan.
- [ ] Evidence saved in `submissions/anthropic/certification/ccar-f/project-02/`.

## 10. Common mistakes
- Sending more data than needed.
- Logging secrets.
- Everyone has access.

## 11. Hints
<details><summary>Hint 1</summary>Controls: minimize, mask, least access, safe logging, retention limits.</details>
<details><summary>Hint 2</summary>Mask emails like `s***@***.com` before sending.</details>
<details><summary>Hint 3</summary>This is "least privilege" from CKS, applied to data.</details>

## 12. Final challenge
Write a short data-flow diagram (text) showing where personal data enters, where it is masked, and where it is stored — with a control at each step.

## 13. What to submit (evidence)
Save the controls, the masking example, and the access plan in `submissions/anthropic/certification/ccar-f/project-02/`. Then say: **"I submit CCAR-F Project 2."**

---
**Remember:** Minimize, mask, least access, safe logging, retention limits. Privacy by design.
