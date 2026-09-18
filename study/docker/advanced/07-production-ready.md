---
id: docker-advanced-study-production-ready
track: docker
level: advanced
topic: Shipping a production-ready service
forProject: docker-advanced-project-07
---

# Study: Ship a Production-Ready Service

> **Words to know**
> - **Production-ready** — safe, small, reliable, and watchable enough for real users.
> - **Checklist** — a list you tick to make sure nothing is missed.

## 1. Easy explanation (simple → deeper)
Now you put everything together. A production-ready container service should be:
1. **Small** — multi-stage build, slim base.
2. **Safe** — non-root, dropped capabilities, read-only, no-new-privileges.
3. **Reliable** — health checks, resource limits, restart policy.
4. **Watchable** — logs to stdout with rotation, metrics.
5. **Behind a proxy** — one clean public door.
6. **Data-safe** — named volumes for data.

This is a **checklist** you will use in real jobs.

## 2. Key concepts and terms
The production checklist (tick each one):
- [ ] Multi-stage build, slim/distroless base
- [ ] Runs as non-root
- [ ] `cap_drop: [ALL]`, `read_only: true`, `no-new-privileges`
- [ ] Health check
- [ ] `mem_limit` + `cpus`
- [ ] `restart: unless-stopped`
- [ ] Logs to stdout + rotation
- [ ] Reverse proxy in front
- [ ] Named volume for data
- [ ] `.dockerignore` and a pinned image version

## 3. Practical examples
A hardened, reliable compose service:
```yaml
services:
  app:
    build: .
    image: myservice:1.0.0
    user: "10001"
    read_only: true
    tmpfs: [/tmp]
    cap_drop: [ALL]
    security_opt: ["no-new-privileges:true"]
    mem_limit: 256m
    cpus: 0.5
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "wget -qO- http://localhost:8000/ || exit 1"]
      interval: 10s
      retries: 3
    logging:
      driver: json-file
      options: { max-size: "10m", max-file: "3" }
```

## 4. Commands and config examples
```bash
docker compose up -d --build
docker compose ps            # healthy?
docker stats --no-stream     # within limits?
docker exec <app> id         # non-root?
```

## 5. Hands-on exercises
1. Take your app and apply every item on the checklist.
2. Verify each one with a command.
3. Write down which command proves each item.

## 6. Troubleshooting
- **Problem:** read-only breaks the app.
  **Fix:** add a `tmpfs` or a writable volume for the path it needs.
- **Problem:** health check fails.
  **Fix:** use a tool that exists in the image; test the command by hand inside.

## 7. Common mistakes and how to avoid them
- Doing some items but not all — use the full checklist.
- Not verifying — prove each item with a command.

## 8. Certification notes (what the exam wants)
- This checklist maps almost one-to-one to a secure, reliable Kubernetes Deployment (securityContext, probes, resources, restart). You are now ready for Kubernetes.

## 9. Practice questions and tasks
1. Name 3 things that make a service "safe".
2. Name 2 things that make it "reliable".
3. Why put it behind a proxy?

## 10. References
- Docker best practices: https://docs.docker.com/develop/dev-best-practices/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker best practices" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Small + Safe + Reliable + Watchable + Proxied + Data-safe = production-ready. Use the checklist.

<details><summary>Answers</summary>

1. Non-root, dropped capabilities, read-only filesystem (also: no-new-privileges, small image).
2. Health checks, resource limits, restart policy (any two).
3. To have one clean public door and keep the apps private behind it.
</details>
