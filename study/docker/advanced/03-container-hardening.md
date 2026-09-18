---
id: docker-advanced-study-container-hardening
track: docker
level: advanced
topic: Hardening containers at runtime
forProject: docker-advanced-project-03
---

# Study: Harden Containers at Runtime

> **Words to know**
> - **Capabilities** — small pieces of root power. You can drop the ones you do not need.
> - **Read-only filesystem** — the container cannot change its own files.
> - **no-new-privileges** — the process cannot gain more power later.
> - **Attack surface** — all the ways an attacker could get in. Smaller is better.

## 1. Easy explanation (simple → deeper)
Even a non-root container can be made safer. You remove powers it does not need:
1. **Drop capabilities** — take away root powers the app never uses.
2. **Read-only filesystem** — stop the app (or an attacker) from changing files.
3. **no-new-privileges** — stop the process from gaining more power.
4. **Limit resources** — stop one container from using everything.

Each step makes the container harder to attack.

## 2. Key concepts and terms
- `--cap-drop ALL` then add back only what you need with `--cap-add`.
- `--read-only` makes the root filesystem read-only; add `--tmpfs /tmp` for temp space.
- `--security-opt no-new-privileges:true`.
- `--memory` and `--cpus` limit resources.

## 3. Practical examples
```bash
docker run -d --name hard \
  --user 10001 \
  --cap-drop ALL \
  --read-only --tmpfs /tmp \
  --security-opt no-new-privileges:true \
  --memory 128m --cpus 0.5 \
  safeapp:1.0.0
```

## 4. Commands and config examples
```yaml
# in compose.yaml
services:
  app:
    image: safeapp:1.0.0
    user: "10001"
    read_only: true
    tmpfs: [/tmp]
    cap_drop: [ALL]
    security_opt: ["no-new-privileges:true"]
    mem_limit: 128m
    cpus: 0.5
```

## 5. Hands-on exercises
1. Run your safe app with `--cap-drop ALL` and `--read-only --tmpfs /tmp`.
2. Try to write to a read-only path inside — see it fail (good).
3. Add `--memory 128m` and check `docker stats`.

## 6. Troubleshooting
- **Problem:** app crashes with read-only.
  **Fix:** the app needs to write somewhere. Give it a `--tmpfs` or a writable volume for that path only.
- **Problem:** app needs a capability you dropped.
  **Fix:** add back only that one with `--cap-add`.

## 7. Common mistakes and how to avoid them
- Dropping a needed capability and not adding it back.
- Read-only without a writable temp path.
- No resource limits — one container can starve others.

## 8. Certification notes (what the exam wants)
- **CKS:** Kubernetes `securityContext` does all of this: `capabilities.drop`, `readOnlyRootFilesystem`, `allowPrivilegeEscalation: false`, resource limits. This lesson maps directly.

## 9. Practice questions and tasks
1. What does `--cap-drop ALL` do?
2. Why add a `--tmpfs` when using `--read-only`?
3. What does no-new-privileges prevent?

## 10. References
- Docker security: https://docs.docker.com/engine/security/ (checked: 2026-09-18)
- CKS security context (K8s): https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ (checked: 2026-09-18)

---
**Remember:** Drop powers, read-only files, no new privileges, limit resources. Smaller attack surface = safer.

<details><summary>Answers</summary>

1. Removes all Linux capabilities (extra root powers) from the container.
2. Because the app still needs somewhere to write temporary files.
3. It stops the process from gaining more privileges than it started with.
</details>
