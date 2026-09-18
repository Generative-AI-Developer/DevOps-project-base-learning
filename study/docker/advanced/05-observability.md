---
id: docker-advanced-study-observability
track: docker
level: advanced
topic: Observability - logs, health, metrics
forProject: docker-advanced-project-05
---

# Study: Observability (Logs, Health, Metrics)

> **Words to know**
> - **Observability** — being able to see what your system is doing. In simple words: knowing what is happening inside.
> - **Logs** — messages the app writes.
> - **Metrics** — numbers about health (CPU, memory, requests).
> - **Logging driver** — how Docker sends logs somewhere.

## 1. Easy explanation (simple → deeper)
In production, you must **see** what is happening. Three pillars:
1. **Logs** — what the app says (events, errors).
2. **Metrics** — numbers (CPU, memory, request count).
3. **Health** — is it working right now (health checks).

Docker gives you logs (`docker logs`, `docker compose logs`) and live metrics (`docker stats`). Real teams add tools like Prometheus (metrics) and Loki/ELK (logs).

## 2. Key concepts and terms
- **Log to stdout/stderr:** apps in containers should print logs to the screen, not to files. Docker collects them.
- **Logging drivers:** `json-file` (default), `local`, or send to a system (`syslog`, `fluentd`).
- **`docker stats`** — live CPU/memory per container.
- **Health checks** (from the earlier lesson) tell you readiness.

## 3. Practical examples
```bash
docker compose logs -f              # follow all service logs
docker compose logs --tail 100 web  # last 100 lines of one service
docker stats                        # live metrics (Ctrl+C to stop)
docker events                       # live stream of docker events
```
Set a log driver in compose:
```yaml
services:
  web:
    image: nginx:1.27
    logging:
      driver: json-file
      options: { max-size: "10m", max-file: "3" }   # rotate logs
```

## 4. Commands and config examples
```bash
docker inspect --format '{{.HostConfig.LogConfig.Type}}' <name>   # which log driver
docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"
```

## 5. Hands-on exercises
1. Follow logs of a running app with `docker compose logs -f`.
2. Set log rotation (`max-size`, `max-file`) in compose.
3. Watch `docker stats` while the app handles some `curl` requests.

## 6. Troubleshooting
- **Problem:** logs are huge and fill the disk.
  **Fix:** set `max-size` and `max-file` to rotate them.
- **Problem:** no logs at all.
  **Fix:** the app writes to a file inside instead of stdout. Make it log to stdout/stderr.

## 7. Common mistakes and how to avoid them
- App logs to a file inside the container — logs get lost. Log to stdout.
- No log rotation — disk fills.

## 8. Certification notes (what the exam wants)
- **CKA/CKAD:** `kubectl logs` and `kubectl top` are the Kubernetes versions. Same idea.
- **CKS:** logging and runtime monitoring (like Falco) are part of the exam.

## 9. Practice questions and tasks
1. Where should a container app send its logs?
2. Why set `max-size` on logs?
3. Which command shows live metrics?

## 10. References
- Docker logging: https://docs.docker.com/config/containers/logging/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Monitoring & logging" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Log to stdout, rotate logs, watch metrics with `docker stats`, and use health checks. See everything.

<details><summary>Answers</summary>

1. To stdout/stderr (the screen), so Docker collects them.
2. So logs rotate and do not fill the disk.
3. `docker stats`.
</details>
