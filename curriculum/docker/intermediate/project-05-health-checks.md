---
id: docker-intermediate-project-05
track: docker
level: intermediate
order: 5
title: "Add Health Checks and Startup Order"
prereqs: ["docker-intermediate-project-04"]
skills: ["healthcheck", "service_healthy", "depends_on", "readiness thinking"]
certDomains: ["CKAD: probes (foundation)"]
estimatedTime: "60 minutes"
---

# Add Health Checks and Startup Order

**Status:** 🔒 Locked

## 1. Objective
Add a health check to a service and make another service wait until it is healthy.

## 2. Real-world scenario
The web app sometimes starts before the database is ready, and it crashes. The fix: make the web wait until the database is truly **healthy**, not just started.

## 3. Skills and concepts you will learn
- Add a `healthcheck` to a Compose service.
- Read health in `docker ps`.
- Use `depends_on: condition: service_healthy`.

## 4. Prerequisites
- Docker Intermediate Project 4 completed.
- Read: `study/docker/intermediate/05-health-checks.md`.

## 5. Step-by-step requirements
1. Compose file with a `db` (postgres) that has a `healthcheck` using `pg_isready`.
2. A `web` service that uses `depends_on: db: condition: service_healthy`.
3. Start it. Watch `docker ps` until db shows `(healthy)`.
4. Show that `web` started only after db became healthy (check the timing / logs).

## 6. Tasks / challenges
- [ ] db has a working healthcheck.
- [ ] `docker ps` shows db `(healthy)`.
- [ ] web waits for db health.
- [ ] You can show the health status via `docker inspect`.

## 7. Expected outcome
The db reports healthy, and the web starts only after that. No more "started too early" crashes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `compose.yaml` shows a `healthcheck` on db (with `test`, `interval`, `retries`).
2. `docker ps` output shows db STATUS as `(healthy)`.
3. `web` uses `depends_on` with `condition: service_healthy` (show the file).
4. `docker inspect --format '{{.State.Health.Status}}' <db>` returns `healthy`.
5. You explain in one sentence why "running" is not the same as "healthy".
6. Cleaned up with `docker compose down`.

## 9. Verification checklist
- [ ] Healthcheck works.
- [ ] web waits for health.
- [ ] Health status shown.
- [ ] Evidence saved in `submissions/docker/intermediate/project-05/`.

## 10. Common mistakes
- Using `curl` in a slim image that has no curl — use a tool that exists (postgres has `pg_isready`).
- Forgetting the `condition:` — plain `depends_on` waits only for start, not health.

## 11. Hints
<details><summary>Hint 1</summary>Use the exact healthcheck + depends_on example in `study/docker/intermediate/05-health-checks.md`, section 3.</details>
<details><summary>Hint 2</summary>db healthcheck test: `["CMD-SHELL", "pg_isready -U postgres"]`.</details>
<details><summary>Hint 3</summary>Check status: `docker inspect --format '{{.State.Health.Status}}' $(docker compose ps -q db)`.</details>

## 12. Final challenge
Break the healthcheck on purpose (use a wrong test). Watch db become `(unhealthy)` and see that `web` never starts. Then fix it. This shows why the check matters.

## 13. What to submit (evidence)
Save `compose.yaml`, `docker ps` (healthy), the inspect output, and your explanation in `submissions/docker/intermediate/project-05/`. Then say: **"I submit Docker Intermediate Project 5."**

---
**Remember:** Health checks prove readiness. This is exactly what Kubernetes probes do.
