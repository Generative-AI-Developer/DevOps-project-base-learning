---
id: kubernetes-cks-project-03
track: kubernetes
level: certification
order: 3
title: "CKS Drill: Minimize Microservice Vulnerabilities (20%)"
prereqs: ["kubernetes-cks-project-02"]
skills: ["securityContext restricted", "Pod Security Admission", "secrets encryption", "mTLS/OPA idea"]
certDomains: ["CKS: Minimize Microservice Vulnerabilities"]
estimatedTime: "timed: 30 minutes"
---

# CKS Drill: Minimize Microservice Vulnerabilities (20%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **30 minutes**.

## 1. Objective
Lock down Pods: restricted securityContext, Pod Security Admission, and safer Secrets.

## 2. Real-world scenario
Make every Pod follow strict rules so a compromised app cannot do much.

## 3. Skills and concepts you will learn
- Restricted securityContext (non-root, drop caps, read-only, no priv-esc).
- Enforce Pod Security Admission (`restricted`).
- Encrypt Secrets at rest (idea + config).

## 4. Prerequisites
- CKS Project 2 completed.
- Read: `study/kubernetes/certification/cks/00-cks-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Label a namespace to **enforce** the `restricted` Pod Security standard.
2. Try to create a privileged/root Pod there; show it is **rejected**.
3. Create a compliant Pod (non-root, drop ALL caps, read-only fs, no privilege escalation) and show it runs.
4. Explain (or configure on a practice cluster) **encryption at rest** for Secrets (EncryptionConfiguration).

## 6. Tasks / challenges
- [ ] Namespace enforces `restricted`.
- [ ] Bad Pod rejected.
- [ ] Compliant Pod runs.
- [ ] Secret encryption explained/configured.

## 7. Expected outcome
Pods must be safe by policy; unsafe Pods are blocked. Within 30 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. The namespace has `pod-security.kubernetes.io/enforce=restricted`.
2. A privileged/root Pod is **rejected** (show the error).
3. A compliant Pod runs (show its securityContext: runAsNonRoot, drop ALL, readOnlyRootFilesystem, allowPrivilegeEscalation false).
4. You correctly describe (or configure) Secret encryption at rest.
5. You report your time.

## 9. Verification checklist
- [ ] Restricted enforced.
- [ ] Bad Pod blocked.
- [ ] Compliant Pod runs.
- [ ] Secret encryption covered.
- [ ] Evidence saved in `submissions/kubernetes/certification/cks/project-03/`.

## 10. Common mistakes
- Compliant Pod missing one field → rejected.
- Confusing enforce vs warn vs audit labels.

## 11. Hints
<details><summary>Hint 1</summary>Enforce: `kubectl label ns <ns> pod-security.kubernetes.io/enforce=restricted`.</details>
<details><summary>Hint 2</summary>Reuse the securityContext from CKAD Project 3 / Docker Advanced hardening.</details>
<details><summary>Hint 3</summary>Secret encryption: an EncryptionConfiguration file referenced by the apiserver `--encryption-provider-config` flag.</details>

## 12. Final challenge
Add an admission policy tool (OPA Gatekeeper or Kyverno) that blocks images from untrusted registries. Policy-as-code is a strong CKS skill.

## 13. What to submit (evidence)
Save the namespace label, the rejection, the compliant Pod, and your notes in `submissions/kubernetes/certification/cks/project-03/`. Then say: **"I submit CKS Project 3."**

---
**Remember:** Restricted Pods by policy; block unsafe ones; encrypt Secrets. 20% of CKS.
