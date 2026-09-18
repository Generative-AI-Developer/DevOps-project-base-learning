---
id: docker-advanced-study-resource-limits
track: docker
level: advanced
topic: Resource limits and restart policies
forProject: docker-advanced-project-06
---

# Study: Resource Limits and Restart Policies

> **Words to know**
> - **Resource limit** — a cap on how much CPU or memory a container may use.
> - **Restart policy** — what Docker does if a container stops (restart it or not).
> - **OOM** — Out Of Memory. When a process uses too much memory and gets killed.

## 1. Easy explanation (simple → deeper)
In production, you must protect the machine and keep apps running.
1. **Limits** stop one container from eating all CPU/memory and starving others.
2. **Restart policies** bring an app back if it crashes.

Together they make your app **reliable** and **fair**.

## 2. Key concepts and terms
- **`--memory 256m`** — max memory. If passed, the app is killed (OOM, code 137).
- **`--cpus 0.5`** — max half a CPU.
- **Restart policies:**
  - `no` — never restart (default).
  - `on-failure` — restart only if it crashes (non-zero exit).
  - `always` — always restart.
  - `unless-stopped` — restart unless you stopped it by hand.

## 3. Practical examples
```bash
docker run -d --name app --memory 256m --cpus 0.5 --restart on-failure:5 myapp:1.0.0
```
In compose:
```yaml
services:
  app:
    image: myapp:1.0.0
    mem_limit: 256m
    cpus: 0.5
    restart: unless-stopped
```

## 4. Commands and config examples
```bash
docker stats --no-stream          # see usage vs limits
docker inspect --format '{{.HostConfig.RestartPolicy.Name}}' <name>
docker inspect --format '{{.State.ExitCode}}' <name>   # 137 = OOM/killed
```

## 5. Hands-on exercises
1. Run a container with `--memory 128m` and try to use more; see it killed (137).
2. Run with `--restart on-failure` and make it crash; watch it restart.
3. Check the restart policy with `docker inspect`.

## 6. Troubleshooting
- **Problem:** container keeps getting killed (137).
  **Fix:** it needs more memory, or has a leak. Raise the limit or fix the app.
- **Problem:** crashed app does not come back.
  **Fix:** set a restart policy (`on-failure` or `unless-stopped`).

## 7. Common mistakes and how to avoid them
- No limits — one container can crash the whole machine.
- `restart: always` on a broken app — it loops forever. Use `on-failure` with a max, and fix the app.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Kubernetes uses `resources.requests` and `resources.limits`, and restart is built into Pods (`restartPolicy`). This lesson maps to those.
- Setting requests/limits is a common exam task.

## 9. Practice questions and tasks
1. What does exit code 137 mean?
2. Which restart policy restarts only on a crash?
3. Why set resource limits?

## 10. References
- Docker resource limits: https://docs.docker.com/config/containers/resource_constraints/ (checked: 2026-09-18)
- Restart policies: https://docs.docker.com/config/containers/start-containers-automatically/ (checked: 2026-09-18)

---
**Remember:** Limits protect the machine; restart policies keep apps up. This maps to K8s requests/limits and restartPolicy.

<details><summary>Answers</summary>

1. The container was killed — often out of memory (OOM).
2. `on-failure`.
3. To stop one container from using all resources and hurting others.
</details>
