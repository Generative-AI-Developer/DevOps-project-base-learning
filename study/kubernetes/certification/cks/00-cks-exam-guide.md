---
id: kubernetes-cks-study-exam-guide
track: kubernetes
level: certification
topic: CKS exam guide and security tools
forProject: kubernetes-cks-project-01
---

# Study: CKS Exam Guide and Security Tools

> **Words to know**
> - **Hardening** — making things harder to attack.
> - **CIS benchmark** — a checklist of security best practices.
> - **seccomp** — limits which system calls a container may make.
> - **AppArmor** — limits what a container may do on the host.
> - **Admission controller** — checks/blocks objects as they are created.

## 1. Easy explanation (simple → deeper)
CKS is about **security**. The whole idea is **least privilege**: give the smallest access, the smallest image, the fewest powers — and **watch** for anything strange.

You will use tools: **kube-bench** (check the cluster), **Trivy** (scan images), **Falco** (watch runtime), plus **seccomp/AppArmor**, **NetworkPolicies**, **RBAC**, and **audit logging**.

## 2. Key concepts and terms
- **Pod Security Admission** — enforces baseline/restricted Pod rules per namespace.
- **securityContext** — non-root, drop caps, read-only fs, no privilege escalation.
- **NetworkPolicy** — default-deny, allow only needed traffic.
- **Secrets** — encrypt at rest; limit who can read them (RBAC).
- **Image safety** — small/trusted base, scan for CVEs, allow only approved registries.
- **Runtime** — Falco alerts on odd behavior; audit logs record apiserver actions.

## 3. Practical examples
```bash
# scan an image for vulnerabilities
trivy image nginx:1.27
# check the cluster against CIS
kube-bench run --targets master
# a restricted Pod securityContext
#   runAsNonRoot, drop ALL caps, readOnlyRootFilesystem, allowPrivilegeEscalation: false
```

## 4. Commands and config examples
```bash
# label a namespace for restricted Pod Security
kubectl label ns prod pod-security.kubernetes.io/enforce=restricted
# seccomp: securityContext.seccompProfile.type: RuntimeDefault
# audit: apiserver flags --audit-policy-file and --audit-log-path
```

## 5. Hands-on exercises
1. Scan an image with Trivy; read the CVE list.
2. Apply a restricted securityContext to a Pod.
3. Add a default-deny NetworkPolicy to a namespace.

## 6. Troubleshooting (exam mindset)
- Many tasks are "make this Pod comply" — read the required policy carefully.
- Verify with the tool (Trivy, kube-bench, Falco output).
- Least privilege first; add back only what is needed.

## 7. Common mistakes and how to avoid them
- Leaving a Pod as root or privileged.
- Allowing all network traffic.
- Using a big base image with many CVEs.

## 8. Certification notes (what the exam wants)
- Know securityContext, Pod Security Admission, NetworkPolicies, RBAC, seccomp/AppArmor, image scanning, and runtime tools.
- Encrypt Secrets at rest; enable audit logging.

## 9. Practice questions and tasks
1. What does "least privilege" mean?
2. Which tool scans images for CVEs?
3. How do you enforce restricted Pod rules on a namespace?

## 10. References
- CKS curriculum: https://github.com/cncf/curriculum (checked: 2026-09-18)
- Pod Security: https://kubernetes.io/docs/concepts/security/pod-security-admission/ (checked: 2026-09-18)
- Trivy: https://aquasecurity.github.io/trivy/ · Falco: https://falco.org/docs/ (checked: 2026-09-18)

---
**Remember:** Least privilege everywhere: smallest image, fewest powers, least access, watch everything.

<details><summary>Answers</summary>

1. Give each user/app/container only the access it truly needs.
2. Trivy.
3. Label the namespace: `pod-security.kubernetes.io/enforce=restricted`.
</details>
