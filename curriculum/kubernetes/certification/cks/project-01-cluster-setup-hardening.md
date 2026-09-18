---
id: kubernetes-cks-project-01
track: kubernetes
level: certification
order: 1
title: "CKS Drill: Cluster Setup & Hardening (10% + 15%)"
prereqs: ["kubernetes-cka-project-05"]
skills: ["kube-bench/CIS", "NetworkPolicy default-deny", "RBAC least privilege", "Ingress TLS"]
certDomains: ["CKS: Cluster Setup", "CKS: Cluster Hardening"]
estimatedTime: "timed: 30 minutes"
---

# CKS Drill: Cluster Setup & Hardening (10% + 15%)

**Status:** 🔒 Locked (unlocks after CKA is complete)

⏱️ **Timed drill.** Set a timer for **30 minutes**.

## 1. Objective
Harden the cluster: default-deny networking, least-privilege RBAC, and CIS checks.

## 2. Real-world scenario
A security audit says the cluster is too open. You tighten networking and access.

## 3. Skills and concepts you will learn
- Run kube-bench (CIS checks).
- Default-deny NetworkPolicy.
- Tight RBAC.

## 4. Prerequisites
- CKA completed.
- Read: `study/kubernetes/certification/cks/00-cks-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Run `kube-bench` and read a few failed checks; fix or explain one.
2. Add a **default-deny** ingress NetworkPolicy to a namespace, then allow only one needed flow.
3. Create a tight RBAC Role (only what is needed) and prove with `auth can-i`.
4. (Bonus) Restrict access to the Secret resource via RBAC.

## 6. Tasks / challenges
- [ ] kube-bench run + one finding addressed.
- [ ] Default-deny + one allow.
- [ ] Tight RBAC verified.

## 7. Expected outcome
A more locked-down cluster: default-deny networking and least-privilege access, within 30 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kube-bench` output shown; you address or clearly explain one failed check.
2. A default-deny ingress policy applies to a namespace; you show a blocked Pod and one allowed flow.
3. An RBAC Role gives only needed verbs; `auth can-i` proves the limits.
4. You report your time.

## 9. Verification checklist
- [ ] CIS check addressed.
- [ ] Default-deny works.
- [ ] RBAC least privilege.
- [ ] Evidence saved in `submissions/kubernetes/certification/cks/project-01/`.

## 10. Common mistakes
- Allowing all traffic.
- Broad RBAC.
- Ignoring kube-bench findings.

## 11. Hints
<details><summary>Hint 1</summary>Default-deny ingress: a NetworkPolicy with `podSelector: {}` and `policyTypes: [Ingress]` and no ingress rules.</details>
<details><summary>Hint 2</summary>Reuse Advanced Projects 6 (NetworkPolicy) and 7 (RBAC).</details>
<details><summary>Hint 3</summary>Install kube-bench per its docs; run against the control plane and node.</details>

## 12. Final challenge
Restrict who can read Secrets in a namespace using RBAC, and prove a normal SA cannot read them. Protecting Secrets is a core CKS goal.

## 13. What to submit (evidence)
Save outputs, policies, and your time in `submissions/kubernetes/certification/cks/project-01/`. Then say: **"I submit CKS Project 1."**

---
**Remember:** Default-deny networking + least-privilege RBAC + CIS checks. Setup 10% + Hardening 15%.
