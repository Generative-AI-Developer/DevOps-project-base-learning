---
id: docker-intermediate-project-01
track: docker
level: intermediate
order: 1
title: "Run a Multi-Container App by Hand"
prereqs: ["docker-beginner-project-06"]
skills: ["multi-container", "shared network", "name DNS", "service roles"]
certDomains: ["CKAD: multi-tier apps (foundation)"]
estimatedTime: "60 minutes"
---

# Run a Multi-Container App by Hand

**Status:** 🔒 Locked

## 1. Objective
Run an app with 3 parts (web, database, cache) as separate containers that talk over one network.

## 2. Real-world scenario
Your app has a website, a database, and a cache. They must work as a team. Before using Compose, you set it up by hand to understand how the parts connect.

## 3. Skills and concepts you will learn
- Connect multiple containers on one network.
- Use container names as hostnames.
- Publish only the web port.

## 4. Prerequisites
- Docker Beginner completed.
- Read: `study/docker/intermediate/01-multi-container.md`.

## 5. Step-by-step requirements
1. Create a network `shopnet`.
2. Run `db` = `postgres:16` with `POSTGRES_PASSWORD=secret` and a volume `shopdata`.
3. Run `cache` = `redis:7`.
4. Run `web` = `nginx:1.27` with `-p 8080:80`.
5. All 3 on `shopnet`.
6. From `web`, prove name access to `db` and `cache` (`getent hosts db`, `getent hosts cache`).
7. Show `docker ps` (all 3 running). Clean up after.

## 6. Tasks / challenges
- [ ] Network created.
- [ ] db, cache, web all on the network.
- [ ] web publishes 8080.
- [ ] web resolves db and cache by name.
- [ ] All cleaned up.

## 7. Expected outcome
Three containers run as a team. The web part can reach the db and cache by name. Only web is open to the outside.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `docker network create shopnet` shown.
2. `docker ps` shows `db`, `cache`, `web` all running, with `web` publishing 8080.
3. `db` uses the `shopdata` volume and `POSTGRES_PASSWORD` (show the run command).
4. From `web`, `getent hosts db` and `getent hosts cache` both return an IP (name DNS works).
5. You cleaned up (containers + network + optionally the volume).
6. All commands shown.

## 9. Verification checklist
- [ ] 3 parts on one network.
- [ ] Name DNS works from web.
- [ ] Only web published.
- [ ] Evidence saved in `submissions/docker/intermediate/project-01/`.

## 10. Common mistakes
- One part on a different network — it cannot be reached.
- Publishing the db port — not needed, less safe.
- Postgres missing its password env var.

## 11. Hints
<details><summary>Hint 1</summary>See the full command set in `study/docker/intermediate/01-multi-container.md`, section 4.</details>
<details><summary>Hint 2</summary>Test name DNS: `docker exec web getent hosts db`.</details>
<details><summary>Hint 3</summary>Cleanup: `docker rm -f web db cache && docker network rm shopnet`.</details>

## 12. Final challenge
Count how many `docker run` commands and flags you needed. Write them down. In the next project you will replace all of them with ONE Compose file. This shows why Compose is so useful.

## 13. What to submit (evidence)
Save all commands + output in `submissions/docker/intermediate/project-01/`. Then say: **"I submit Docker Intermediate Project 1."**

---
**Remember:** Many parts, one network, talk by name. This is the hand-made version of what Compose and Kubernetes automate.
