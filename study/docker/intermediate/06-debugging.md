---
id: docker-intermediate-study-debugging
track: docker
level: intermediate
topic: Debugging containers
forProject: docker-intermediate-project-06
---

# Study: Debugging Containers

> **Words to know**
> - **Debug** — find out why something is broken.
> - **Exit code** — the number a container returns when it stops. `0` = ok.
> - **`docker inspect`** — show all details of a container.
> - **`docker stats`** — live CPU/memory use of containers.

## 1. Easy explanation (simple → deeper)
When a container does not work, you need a method. The best order:
1. **`docker ps -a`** — is it running or exited? What exit code?
2. **`docker logs`** — what did it say before it stopped?
3. **`docker exec`** — go inside and look around (if it is running).
4. **`docker inspect`** — check config, env, mounts, network.
5. **`docker stats`** — is it out of CPU or memory?

## 2. Key concepts and terms
- **Exit code 0** = clean stop. **Non-zero** = error. `137` often means killed (out of memory or `kill -9`).
- **`docker logs --tail 50 NAME`** — last 50 log lines.
- **`docker inspect NAME`** — big JSON; use `--format` to pick fields.
- **`docker events`** — a live stream of what Docker is doing.
- **Restart policy:** `--restart on-failure` tries again if it crashes.

## 3. Practical examples
```bash
docker ps -a                                   # status + exit code
docker logs --tail 50 web                       # recent logs
docker inspect --format '{{.State.ExitCode}}' web
docker inspect --format '{{json .Config.Env}}' web
docker stats --no-stream                        # one snapshot of usage
docker exec -it web sh                          # look inside
```

## 4. Commands and config examples
```bash
docker inspect --format '{{.State.Status}} {{.State.ExitCode}}' <name>
docker inspect --format '{{range .Mounts}}{{.Source}}->{{.Destination}} {{end}}' <name>
docker top <name>            # processes inside the container
docker diff <name>           # files changed since start
```

## 5. Hands-on exercises
1. Run a container that fails on purpose: `docker run --name boom alpine sh -c "exit 1"`. Check its exit code.
2. Read the logs of a running container with `--tail`.
3. Use `docker inspect --format` to print a container's env vars and mounts.
4. Use `docker stats --no-stream` to see resource use.

## 6. Troubleshooting (common cases)
- **Exits at once, code non-zero** → app crash; read `docker logs`.
- **Code 137** → killed, often out of memory; check `docker stats` and limits.
- **Cannot connect** → wrong port publish, or app listens on 127.0.0.1.
- **File/config missing** → check mounts with `docker inspect`.

## 7. Common mistakes and how to avoid them
- Guessing instead of reading logs — always read `docker logs` first.
- Ignoring the exit code — it tells you a lot.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** the same method works for Pods: `kubectl get pods` (status), `kubectl logs`, `kubectl describe`, `kubectl exec`. Learn the pattern here.
- Reading exit codes and logs fast saves exam time.

## 9. Practice questions and tasks
1. What does exit code 137 often mean?
2. Which command shows recent logs only?
3. How do you see a container's env vars?

## 10. References
- Docker CLI docs: https://docs.docker.com/reference/cli/docker/ (checked: 2026-09-18)
- Video: **That DevOps Guy** — "Debugging containers" — https://www.youtube.com/@MarcelDempers (checked: 2026-09-18)

---
**Remember:** ps -a → logs → exec → inspect → stats. Read, do not guess. This method works for Kubernetes too.

<details><summary>Answers</summary>

1. The container was killed — often out of memory (or a `kill -9`).
2. `docker logs --tail N NAME`.
3. `docker inspect --format '{{json .Config.Env}}' NAME`.
</details>
