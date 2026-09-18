---
id: docker-intermediate-project-02
track: docker
level: intermediate
order: 2
title: "Run the Whole App with Docker Compose"
prereqs: ["docker-intermediate-project-01"]
skills: ["compose.yaml", "docker compose up/down", "service DNS", "depends_on"]
certDomains: ["CKAD: declarative app definitions (foundation)"]
estimatedTime: "60–90 minutes"
---

# Run the Whole App with Docker Compose

**Status:** 🔒 Locked

## 1. Objective
Replace all your `docker run` commands with one `compose.yaml`. Start and stop the whole app with one command.

## 2. Real-world scenario
Your teammate needs to run the app on their laptop. Instead of a long list of commands, you give them one file. They run `docker compose up` and it just works.

## 3. Skills and concepts you will learn
- Write `compose.yaml` with multiple services.
- Use service names for networking.
- Start/stop the whole app.

## 4. Prerequisites
- Docker Intermediate Project 1 completed.
- Read: `study/docker/intermediate/02-docker-compose.md`.

## 5. Step-by-step requirements
1. Write a `compose.yaml` with 3 services: `web` (nginx, port 8080), `db` (postgres with password + named volume), and `cache` (redis).
2. `docker compose up -d`.
3. Show `docker compose ps` (all up).
4. Prove `web` can resolve `db` by name: `docker compose exec web getent hosts db`.
5. Open `http://localhost:8080` (or `curl` it).
6. `docker compose down`.

## 6. Tasks / challenges
- [ ] `compose.yaml` has 3 services.
- [ ] Named volume for db.
- [ ] `up -d` starts everything.
- [ ] web resolves db by name.
- [ ] `down` cleans up.

## 7. Expected outcome
One file runs your whole 3-part app. One command starts it, one stops it.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the full `compose.yaml`.
2. `docker compose up -d` and `docker compose ps` show all 3 services running.
3. The db uses a **named volume** (show it in the file and in `docker volume ls`).
4. `docker compose exec web getent hosts db` returns an IP (name DNS works).
5. `curl -I http://localhost:8080` (or browser) shows the web works.
6. `docker compose down` output shown.

## 9. Verification checklist
- [ ] 3 services in one file.
- [ ] Named volume present.
- [ ] Service DNS works.
- [ ] Evidence saved in `submissions/docker/intermediate/project-02/`.

## 10. Common mistakes
- Tabs in YAML (use spaces).
- Missing top-level `volumes:` block.
- Wrong indentation → run `docker compose config` to check.

## 11. Hints
<details><summary>Hint 1</summary>Start from the example in `study/docker/intermediate/02-docker-compose.md`, section 3. Add a `cache` service using `redis:7`.</details>
<details><summary>Hint 2</summary>Check your file before running: `docker compose config` (it prints the parsed file or an error).</details>
<details><summary>Hint 3</summary>`docker compose up -d`, then `docker compose ps`, then `docker compose exec web getent hosts db`.</details>

## 12. Final challenge
Add a `build:` service: point one service at the `helloapp` Dockerfile you made in Docker Beginner Project 6, and run it with Compose (`docker compose up -d --build`). Now Compose builds AND runs your own app.

## 13. What to submit (evidence)
Save `compose.yaml`, the `up`/`ps` output, the name-DNS proof, and `down` in `submissions/docker/intermediate/project-02/`. Then say: **"I submit Docker Intermediate Project 2."**

---
**Remember:** One `compose.yaml` runs your whole app. This is the doorway to Kubernetes manifests.
