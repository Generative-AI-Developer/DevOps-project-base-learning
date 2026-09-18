---
id: kubernetes-beginner-project-06
track: kubernetes
level: beginner
order: 6
title: "Handle Passwords with Secrets"
prereqs: ["kubernetes-beginner-project-05"]
skills: ["Secret", "secretKeyRef", "mounted secrets", "base64 truth"]
certDomains: ["CKAD: App Config & Security (core)", "CKS: secrets (intro)"]
estimatedTime: "60 minutes"
---

# Handle Passwords with Secrets

**Status:** 🔒 Locked

## 1. Objective
Store a password in a Secret and give it to a Pod safely as an env var and as a file. Understand that base64 is not encryption.

## 2. Real-world scenario
Your app needs a database password. You must not put it in the image or a ConfigMap. You store it in a Secret and inject it into the Pod.

## 3. Skills and concepts you will learn
- Create a Secret.
- Use it as an env var (`secretKeyRef`).
- Mount it as a file.
- Decode base64 and understand its limits.

## 4. Prerequisites
- Kubernetes Beginner Project 5 completed.
- Read: `study/kubernetes/beginner/06-secrets.md`.

## 5. Step-by-step requirements
1. Create a Secret `db-secret` with `PASSWORD=s3cret`.
2. Show it is base64 in `kubectl get secret ... -o yaml`, and decode it with `base64 -d`.
3. Create a Pod that reads `PASSWORD` as an env var (`secretKeyRef`). Print it inside.
4. Mount the Secret as a file in a second Pod and read the file.
5. Write 2 sentences: why base64 is NOT enough, and one real way to protect Secrets (hint: encryption at rest, RBAC).

## 6. Tasks / challenges
- [ ] Secret created.
- [ ] base64 decoded (shown it is not encryption).
- [ ] Env var from Secret works.
- [ ] Secret mounted as a file.
- [ ] Short note on real protection.

## 7. Expected outcome
Your Pod gets a password from a Secret. You understand base64's limits and how real protection works.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kubectl get secret db-secret -o yaml` shows the value as base64.
2. You decode it with `base64 -d` and show it equals `s3cret`.
3. Inside a Pod, `printenv` shows `PASSWORD` (via `secretKeyRef`).
4. A second Pod mounts the Secret as a file; you `cat` the file inside.
5. Your note correctly says base64 is not encryption and names one real protection (encryption at rest, RBAC, or an external secret store).
6. All YAML and commands shown.

## 9. Verification checklist
- [ ] Secret used as env + file.
- [ ] base64 truth shown.
- [ ] Real-protection note written.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-06/`.

## 10. Common mistakes
- Believing base64 is secure.
- Wrong key name in `secretKeyRef`.
- Committing the plain Secret to git.

## 11. Hints
<details><summary>Hint 1</summary>Create: `kubectl create secret generic db-secret --from-literal=PASSWORD=s3cret`.</details>
<details><summary>Hint 2</summary>Decode: `kubectl get secret db-secret -o jsonpath='{.data.PASSWORD}' | base64 -d; echo`.</details>
<details><summary>Hint 3</summary>Env use: the `secretKeyRef` Pod example is in `study/kubernetes/beginner/06-secrets.md`, section 3.</details>

## 12. Final challenge
Make a `docker-registry` type Secret (`kubectl create secret docker-registry ...`) — the kind used to pull private images. Explain in one line where a Pod would use it (`imagePullSecrets`).

## 13. What to submit (evidence)
Save the Secret YAML, the decode proof, the env + file use, and your note in `submissions/kubernetes/beginner/project-06/`. Then say: **"I submit Kubernetes Beginner Project 6."**

---
**Remember:** Secret = sensitive settings, base64 by default (not safe alone). Real safety = encryption at rest + RBAC (CKS).
