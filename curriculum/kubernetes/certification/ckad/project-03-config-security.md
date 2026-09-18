---
id: kubernetes-ckad-project-03
track: kubernetes
level: certification
order: 3
title: "CKAD Drill: Environment, Config and Security (25%)"
prereqs: ["kubernetes-ckad-project-02"]
skills: ["ConfigMaps", "Secrets", "ServiceAccounts", "securityContext", "resources"]
certDomains: ["CKAD: Application Environment, Configuration and Security"]
estimatedTime: "timed: 30 minutes"
---

# CKAD Drill: Environment, Config and Security (25%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **30 minutes**. This is the biggest CKAD domain.

## 1. Objective
Practice ConfigMaps, Secrets, ServiceAccounts, securityContext, and resources — fast.

## 2. Real-world scenario
Exam tasks like "inject this config and secret, run as non-root, and set resource limits".

## 3. Skills and concepts you will learn
- Config and secrets as env and files.
- ServiceAccount on a Pod.
- securityContext (non-root, drop capabilities).
- Requests/limits.

## 4. Prerequisites
- CKAD Project 2 completed.
- Read: `study/kubernetes/certification/ckad/00-ckad-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Create a ConfigMap and a Secret. Inject the ConfigMap as env and mount the Secret as a file in a Pod.
2. Create a ServiceAccount and set it on a Pod.
3. Add a `securityContext`: `runAsNonRoot: true`, `runAsUser: 10001`, and drop all capabilities.
4. Add resource requests and limits.
5. Verify: `printenv`, the mounted secret file, the SA, and non-root (`id`).

## 6. Tasks / challenges
- [ ] Config env + secret file.
- [ ] ServiceAccount set.
- [ ] securityContext non-root + drop caps.
- [ ] Requests/limits set.

## 7. Expected outcome
A Pod that is configured, uses a ServiceAccount, runs non-root with dropped capabilities, and has resource limits — within 30 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `printenv` shows the ConfigMap value; the Secret is readable as a mounted file.
2. `kubectl get pod <p> -o jsonpath='{.spec.serviceAccountName}'` shows your SA.
3. The Pod's `securityContext` sets `runAsNonRoot`, `runAsUser`, and `capabilities.drop: [ALL]` (show YAML + `id` inside is non-root).
4. The container has `resources.requests` and `resources.limits`.
5. You report your time.

## 9. Verification checklist
- [ ] Config + secret injected.
- [ ] SA set.
- [ ] Non-root + drop caps.
- [ ] Limits set.
- [ ] Evidence saved in `submissions/kubernetes/certification/ckad/project-03/`.

## 10. Common mistakes
- Putting secrets in a ConfigMap.
- Forgetting `runAsNonRoot` needs the image to support a non-root user.
- Missing requests or limits.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Beginner Projects 5/6 (Config/Secret) and Docker Advanced hardening ideas mapped to `securityContext`.</details>
<details><summary>Hint 2</summary>securityContext fields: `runAsNonRoot: true`, `runAsUser: 10001`, `capabilities: { drop: [ALL] }`, `allowPrivilegeEscalation: false`.</details>
<details><summary>Hint 3</summary>Check SA: `kubectl get pod <p> -o jsonpath='{.spec.serviceAccountName}'`.</details>

## 12. Final challenge
Add `readOnlyRootFilesystem: true` and a writable `emptyDir` for `/tmp`. Show the app still works. This mirrors your Docker hardening project.

## 13. What to submit (evidence)
Save the YAML, all verifications, and your time in `submissions/kubernetes/certification/ckad/project-03/`. Then say: **"I submit CKAD Project 3."**

---
**Remember:** config + secrets + SA + securityContext + resources. This domain is the biggest (25%).
