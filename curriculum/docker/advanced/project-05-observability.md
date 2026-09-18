---
id: docker-advanced-project-05
track: docker
level: advanced
order: 5
title: "Make Your App Observable"
prereqs: ["docker-advanced-project-04"]
skills: ["logs to stdout", "log rotation", "docker stats", "health status"]
certDomains: ["CKA/CKAD: logging & metrics (foundation)"]
estimatedTime: "60 minutes"
---

# Make Your App Observable

**Status:** 🔒 Locked

## 1. Objective
Set up logs, log rotation, live metrics, and health so you can see what your app is doing.

## 2. Real-world scenario
An app failed last night and nobody knew until users complained. The team wants observability: good logs, rotation, metrics, and health — so problems are seen early.

## 3. Skills and concepts you will learn
- Log to stdout and view with `docker compose logs`.
- Set log rotation.
- Watch metrics with `docker stats`.
- Check health status.

## 4. Prerequisites
- Docker Advanced Project 4 completed.
- Read: `study/docker/advanced/05-observability.md`.

## 5. Step-by-step requirements
1. Compose with your app + a health check + log rotation (`max-size`, `max-file`).
2. Start it. Make some traffic (a few `curl` requests).
3. Show `docker compose logs --tail 50` for the app (proves logs go to stdout).
4. Show `docker stats --no-stream` for the app (metrics).
5. Show the app's health status (`docker ps` shows `(healthy)`).
6. Show the log driver config is applied (`docker inspect`).

## 6. Tasks / challenges
- [ ] Logs visible via `docker compose logs`.
- [ ] Log rotation configured.
- [ ] Metrics shown with stats.
- [ ] Health shown.

## 7. Expected outcome
You can see your app's logs, metrics, and health at any time. Logs rotate so they never fill the disk.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `compose.yaml` shows a `logging` block with `max-size` and `max-file`.
2. `docker compose logs --tail 50 <app>` shows real log lines (app logs to stdout).
3. `docker stats --no-stream` shows CPU and memory for the app.
4. `docker ps` shows the app `(healthy)` (health check present).
5. You explain in one sentence why apps should log to stdout, not a file inside the container.
6. All commands shown.

## 9. Verification checklist
- [ ] Logs + rotation.
- [ ] Metrics.
- [ ] Health.
- [ ] Evidence saved in `submissions/docker/advanced/project-05/`.

## 10. Common mistakes
- App logs to a file inside → logs lost. Log to stdout.
- No rotation → disk fills.
- No health check → cannot tell if the app is really working.

## 11. Hints
<details><summary>Hint 1</summary>Add the `logging` block from `study/docker/advanced/05-observability.md`, section 3.</details>
<details><summary>Hint 2</summary>Make traffic: `for i in $(seq 1 20); do curl -s http://localhost:8080/ >/dev/null; done`.</details>
<details><summary>Hint 3</summary>Metrics format: `docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"`.</details>

## 12. Final challenge
Add a real metrics tool: run `prom/prometheus` (or `cadvisor`) in your compose to collect container metrics, and open its web UI. This is a small preview of production monitoring.

## 13. What to submit (evidence)
Save `compose.yaml`, the logs, stats, and health outputs in `submissions/docker/advanced/project-05/`. Then say: **"I submit Docker Advanced Project 5."**

---
**Remember:** Logs (stdout + rotation), metrics (stats), health (checks). See everything, early.
