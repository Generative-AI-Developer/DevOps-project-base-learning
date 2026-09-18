---
id: kubernetes-beginner-study-secrets
track: kubernetes
level: beginner
topic: Secrets
forProject: kubernetes-beginner-project-06
---

# Study: Secrets (Sensitive Settings)

> **Words to know**
> - **Secret** — an object for sensitive data (passwords, tokens, keys).
> - **base64** — a way to encode text. NOT encryption. In simple words: it hides text, but anyone can decode it.
> - **Mount** — make a Secret appear as files in a Pod.

## 1. Easy explanation (simple → deeper)
A **Secret** is like a ConfigMap, but for **sensitive** data: passwords, API keys, tokens.

⚠️ Important truth: by default, Secret values are only **base64 encoded**, not encrypted. Base64 is easy to decode. So a Secret is a bit safer than a ConfigMap (it is handled more carefully, less shown in logs), but it is **not** strong protection by itself. Real security needs more (you learn this in CKS).

## 2. Key concepts and terms
- Make one: `kubectl create secret generic db-secret --from-literal=PASSWORD=s3cret`.
- Use as env: `valueFrom: {secretKeyRef: {name: db-secret, key: PASSWORD}}`.
- Mount as files: a `volume` of type `secret`.
- `kubectl get secret NAME -o yaml` shows base64. Decode with `base64 -d`.

## 3. Practical examples
```yaml
apiVersion: v1
kind: Pod
metadata: { name: db-user }
spec:
  containers:
    - name: app
      image: busybox
      command: ["sh","-c","echo pw=$DB_PASSWORD; sleep 3600"]
      env:
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: PASSWORD
```

## 4. Commands and config examples
```bash
kubectl create secret generic db-secret --from-literal=PASSWORD=s3cret
kubectl get secret db-secret -o jsonpath='{.data.PASSWORD}' | base64 -d ; echo
kubectl exec db-user -- printenv | grep DB_PASSWORD
```

## 5. Hands-on exercises
1. Create a Secret with a password.
2. Show it is base64 (and decode it — see it is not real encryption).
3. Use it as an env var in a Pod. Print it inside.
4. Mount a Secret as a file and read it.

## 6. Troubleshooting
- **Problem:** value looks like gibberish in `get secret -o yaml`.
  **Fix:** that is base64. Decode with `base64 -d`.
- **Problem:** Pod cannot find the secret key.
  **Fix:** check the Secret name and key spelling in `secretKeyRef`.

## 7. Common mistakes and how to avoid them
- Thinking base64 = secure. It is not. Do not commit Secrets to git in plain form.
- Putting secrets in a ConfigMap by mistake.

## 8. Certification notes (what the exam wants)
- **CKAD:** creating and using Secrets (env + volume) is core.
- **CKS:** goes deeper — encryption at rest for Secrets, limiting who can read them (RBAC), and external secret stores.

## 9. Practice questions and tasks
1. What is a Secret for?
2. Is base64 the same as encryption?
3. How do you decode a Secret value?

## 10. References
- Secrets: https://kubernetes.io/docs/concepts/configuration/secret/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "ConfigMap & Secret" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Secret = sensitive settings, base64 by default (not encrypted). Use env or files. Real protection comes later (CKS).

<details><summary>Answers</summary>

1. Holding sensitive data like passwords, tokens, and keys.
2. No — base64 only hides text; anyone can decode it.
3. `... | base64 -d`.
</details>
