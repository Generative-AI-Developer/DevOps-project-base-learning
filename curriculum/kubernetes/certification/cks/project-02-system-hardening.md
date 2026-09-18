---
id: kubernetes-cks-project-02
track: kubernetes
level: certification
order: 2
title: "CKS Drill: System Hardening (15%)"
prereqs: ["kubernetes-cks-project-01"]
skills: ["seccomp", "AppArmor", "minimize host", "reduce attack surface"]
certDomains: ["CKS: System Hardening"]
estimatedTime: "timed: 25 minutes"
---

# CKS Drill: System Hardening (15%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Harden the host and containers: seccomp, AppArmor, and reducing the attack surface.

## 2. Real-world scenario
You limit what containers can do on the host, so a break-in does less damage.

## 3. Skills and concepts you will learn
- Apply a seccomp profile (`RuntimeDefault`).
- Apply an AppArmor profile to a Pod.
- Reduce host attack surface (fewer services, least privilege — Linux skills!).

## 4. Prerequisites
- CKS Project 1 completed.
- Read: `study/kubernetes/certification/cks/00-cks-exam-guide.md`.
- Reuse your Linux Advanced hardening skills.

## 5. Step-by-step requirements (within the time limit)
1. Run a Pod with `securityContext.seccompProfile.type: RuntimeDefault`. Confirm it runs.
2. Apply an AppArmor profile to a container (annotation/securityContext depending on version) and show it is loaded.
3. On the node, show host hardening basics: only needed services running, non-root usage, updates. (Reuse Linux Advanced Project 4.)
4. Explain how each step reduces risk.

## 6. Tasks / challenges
- [ ] seccomp RuntimeDefault applied.
- [ ] AppArmor profile applied.
- [ ] Host hardening shown.

## 7. Expected outcome
Containers and host are more locked down, within 25 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. A Pod uses `seccompProfile: RuntimeDefault` and runs (show the YAML + `kubectl get pod`).
2. You apply an AppArmor profile to a container and show it is in effect (or clearly show the mechanism if your kernel/runtime lacks AppArmor, and do seccomp fully).
3. You show at least 3 host-hardening facts (services/updates/non-root) from the node.
4. You explain each step's security benefit in simple English.
5. You report your time.

## 9. Verification checklist
- [ ] seccomp applied.
- [ ] AppArmor applied/explained.
- [ ] Host hardening shown.
- [ ] Evidence saved in `submissions/kubernetes/certification/cks/project-02/`.

## 10. Common mistakes
- Forgetting seccomp makes some syscalls blocked — test the app.
- AppArmor profile not loaded on the node.

## 11. Hints
<details><summary>Hint 1</summary>seccomp: `securityContext: { seccompProfile: { type: RuntimeDefault } }`.</details>
<details><summary>Hint 2</summary>Reuse Linux Advanced Project 4 (hardening) for the host part.</details>
<details><summary>Hint 3</summary>Check AppArmor status on the node: `sudo aa-status`.</details>

## 12. Final challenge
Write a custom seccomp profile that blocks a specific syscall, apply it, and show the blocked call fails. Custom seccomp is an advanced CKS skill.

## 13. What to submit (evidence)
Save YAML, node hardening facts, and your time in `submissions/kubernetes/certification/cks/project-02/`. Then say: **"I submit CKS Project 2."**

---
**Remember:** seccomp + AppArmor + host hardening reduce what an attacker can do. 15% of CKS.
