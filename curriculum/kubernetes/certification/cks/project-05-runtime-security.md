---
id: kubernetes-cks-project-05
track: kubernetes
level: certification
order: 5
title: "CKS Drill: Monitoring, Logging & Runtime Security (20%)"
prereqs: ["kubernetes-cks-project-04"]
skills: ["Falco", "audit logging", "runtime detection", "behavioral analytics"]
certDomains: ["CKS: Monitoring, Logging and Runtime Security"]
estimatedTime: "timed: 30 minutes"
---

# CKS Drill: Monitoring, Logging & Runtime Security (20%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **30 minutes**.

## 1. Objective
Watch for attacks at runtime: Falco alerts and apiserver audit logging.

## 2. Real-world scenario
You must detect if someone opens a shell in a container or does something odd. Falco and audit logs give you eyes.

## 3. Skills and concepts you will learn
- Install/use Falco to detect strange behavior.
- Enable apiserver audit logging.
- Read and reason about alerts.

## 4. Prerequisites
- CKS Project 4 completed.
- Read: `study/kubernetes/certification/cks/00-cks-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Install Falco (or use a cluster where it runs). Trigger an event: exec a shell into a Pod. Show Falco's alert.
2. Enable **audit logging** on the apiserver (audit policy file + log path). Show an audit log entry for an action you took.
3. Explain what each tool detects and why it matters.

## 6. Tasks / challenges
- [ ] Falco alert triggered and shown.
- [ ] Audit logging enabled + an entry shown.
- [ ] Explanation written.

## 7. Expected outcome
You can detect runtime events (Falco) and record apiserver actions (audit), within 30 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You trigger a Falco rule (e.g. "shell in a container") and show the alert output.
2. You enable audit logging (show the policy file + apiserver flags) and show one audit log entry for an action you performed. (If your lab cannot change the apiserver safely, show the exact config and demonstrate Falco fully.)
3. You explain in simple English what Falco and audit logs each detect.
4. You report your time.

## 9. Verification checklist
- [ ] Falco alert shown.
- [ ] Audit logging shown/explained.
- [ ] Explanation written.
- [ ] Evidence saved in `submissions/kubernetes/certification/cks/project-05/`.

## 10. Common mistakes
- Falco not running on the node.
- Wrong audit policy path/flags.
- Not testing (no alert produced).

## 11. Hints
<details><summary>Hint 1</summary>Trigger Falco: `kubectl exec -it <pod> -- sh` usually fires a "shell in container" rule.</details>
<details><summary>Hint 2</summary>Audit: apiserver flags `--audit-policy-file` and `--audit-log-path`; edit the static Pod manifest on a practice cluster.</details>
<details><summary>Hint 3</summary>killercoda has Falco + audit CKS scenarios.</details>

## 12. Final challenge
Write a custom Falco rule that alerts when a file in `/etc` is written inside a container, trigger it, and show the alert. Custom rules are a strong CKS skill.

## 13. What to submit (evidence)
Save the Falco alert, the audit config + entry, and your time in `submissions/kubernetes/certification/cks/project-05/`. Then say: **"I submit CKS Project 5."**

---
**Remember:** Falco watches runtime behavior; audit logs record apiserver actions. Detect early. 20% of CKS.
