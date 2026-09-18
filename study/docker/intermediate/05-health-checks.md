---
id: docker-intermediate-study-health-checks
track: docker
level: intermediate
topic: Health checks
forProject: docker-intermediate-project-05
---

# Study: Health Checks

> **Words to know**
> - **Health check** — a test Docker runs to see if a container is really working.
> - **Healthy / unhealthy** — the result of the health check.
> - **`depends_on` with condition** — wait for one service to be healthy before starting another.

## 1. Easy explanation (simple → deeper)
A container can be "running" but not actually **working** (for example, the app is stuck). A **health check** is a small test Docker runs again and again. If the test passes, the container is **healthy**. If it fails, it is **unhealthy**.

This helps you and Docker know the truth, and lets one service **wait** for another to be ready.

## 2. Key concepts and terms
- In a Dockerfile: `HEALTHCHECK CMD <test>`.
- In Compose: a `healthcheck:` block with `test`, `interval`, `timeout`, `retries`.
- `depends_on` with `condition: service_healthy` waits for health, not just start.

## 3. Practical examples
Dockerfile health check:
```dockerfile
FROM nginx:1.27
HEALTHCHECK --interval=10s --timeout=3s --retries=3 \
  CMD curl -f http://localhost/ || exit 1
```
Compose health check + wait:
```yaml
services:
  db:
    image: postgres:16
    environment: { POSTGRES_PASSWORD: secret }
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 3s
      retries: 5
  web:
    image: nginx:1.27
    depends_on:
      db:
        condition: service_healthy
```

## 4. Commands and config examples
```bash
docker ps                       # STATUS shows (healthy) or (unhealthy)
docker inspect --format '{{.State.Health.Status}}' <container>
docker compose up -d            # web waits until db is healthy
```

## 5. Hands-on exercises
1. Add a `healthcheck` to a postgres service in Compose.
2. `docker compose up -d`. Watch `docker ps` until db shows `(healthy)`.
3. Make `web` wait for db with `condition: service_healthy`.

## 6. Troubleshooting
- **Problem:** container stuck "unhealthy".
  **Fix:** the test command is wrong, or the app is truly failing. Run the test by hand inside the container.
- **Problem:** the health tool is missing (like `curl`).
  **Fix:** use a tool that exists in the image, or install one, or use `CMD-SHELL` with a built-in.

## 7. Common mistakes and how to avoid them
- Using a tool not in the image (like `curl` in a slim image).
- Interval too short — wastes resources. Use a sensible interval.

## 8. Certification notes (what the exam wants)
- **CKAD:** Kubernetes has **liveness**, **readiness**, and **startup** probes — the same idea as health checks. This lesson is direct prep.
- "Running" is not the same as "ready". Probes/health checks tell the difference.

## 9. Practice questions and tasks
1. Why is "running" not the same as "healthy"?
2. What does `depends_on: condition: service_healthy` do?
3. Where does `docker ps` show health?

## 10. References
- Dockerfile HEALTHCHECK: https://docs.docker.com/reference/dockerfile/#healthcheck (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker healthcheck" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Health checks prove a container really works. This is the Docker version of Kubernetes probes.

<details><summary>Answers</summary>

1. A container can run but be stuck or broken; the health check tests if it actually works.
2. It makes a service wait until another service is healthy before starting.
3. In the STATUS column (it shows `(healthy)` or `(unhealthy)`).
</details>
