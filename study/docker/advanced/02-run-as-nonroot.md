---
id: docker-advanced-study-run-as-nonroot
track: docker
level: advanced
topic: Running containers as a non-root user
forProject: docker-advanced-project-02
---

# Study: Run as a Non-Root User

> **Words to know**
> - **root** — the super user (all powers). Default user inside many containers.
> - **Non-root user** — a normal, limited user. Much safer.
> - **UID** — user ID number. `root` is UID 0.
> - **Least privilege** — give the smallest powers needed.

## 1. Easy explanation (simple → deeper)
By default, many containers run as **root** inside. If an attacker breaks in, they have full powers. That is dangerous.

The fix: run the app as a **non-root user**. If someone breaks in, they have fewer powers. This is a simple, strong safety win.

## 2. Key concepts and terms
- In a Dockerfile: create a user and switch to it:
  ```dockerfile
  RUN adduser --disabled-password --uid 10001 appuser
  USER appuser
  ```
- At run time: `docker run --user 10001 ...`.
- Check who you are inside: `docker exec <c> id` (should not be uid=0).
- The app must be able to write only where it needs (own its files).

## 3. Practical examples
```dockerfile
FROM python:3.12-slim
RUN adduser --disabled-password --uid 10001 appuser
WORKDIR /app
COPY app.py .
USER appuser            # switch to non-root
EXPOSE 8000
CMD ["python", "app.py"]
```
```bash
docker build -t safeapp:1.0.0 .
docker run -d -p 8000:8000 --name safe safeapp:1.0.0
docker exec safe id     # uid should NOT be 0
```

## 4. Commands and config examples
```bash
docker run --user 10001:10001 safeapp:1.0.0   # force a non-root uid
docker exec <name> whoami
docker exec <name> id
```

## 5. Hands-on exercises
1. Add a non-root user to a Dockerfile and switch with `USER`.
2. Build and run. Check `id` inside — it must not be uid 0.
3. Try to write to a folder the user does not own — see it fail (that is the point).

## 6. Troubleshooting
- **Problem:** app cannot write files.
  **Fix:** make sure the app writes to a folder the non-root user owns (`chown` it in the build, or use a volume with the right permissions).
- **Problem:** port under 1024 fails as non-root.
  **Fix:** use a high port (like 8000) inside the container.

## 7. Common mistakes and how to avoid them
- Leaving the app as root — always add and switch to a non-root user.
- Ports below 1024 as non-root — use high ports.

## 8. Certification notes (what the exam wants)
- **CKS:** Pods should run as non-root. Kubernetes has `securityContext.runAsNonRoot: true` and `runAsUser`. This lesson is direct prep.
- Many exam points come from "do not run as root".

## 9. Practice questions and tasks
1. Why is running as root inside a container risky?
2. How do you switch users in a Dockerfile?
3. What UID is root?

## 10. References
- Dockerfile USER: https://docs.docker.com/reference/dockerfile/#user (checked: 2026-09-18)
- Video: **That DevOps Guy** — "Container security basics" — https://www.youtube.com/@MarcelDempers (checked: 2026-09-18)

---
**Remember:** Do not run as root. Add a non-root user and `USER` it. Less power = less risk.

<details><summary>Answers</summary>

1. If an attacker breaks in, they get full (root) powers inside the container.
2. `USER <name-or-uid>` (after creating the user).
3. UID 0.
</details>
