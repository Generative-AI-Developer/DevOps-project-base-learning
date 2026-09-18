---
id: docker-beginner-project-05
track: docker
level: beginner
order: 5
title: "Connect Containers on a Network"
prereqs: ["docker-beginner-project-04"]
skills: ["docker network", "publish ports", "name-based DNS", "container-to-container"]
certDomains: ["CKAD/CKA: services & networking (foundation)"]
estimatedTime: "60 minutes"
---

# Connect Containers on a Network

**Status:** 🔒 Locked

## 1. Objective
Make two containers talk to each other by name on a private Docker network.

## 2. Real-world scenario
Your app has a web part and a database part. They must talk to each other, but only the web part should be open to the outside. You set up a private network so they can find each other by name.

## 3. Skills and concepts you will learn
- Create a user network.
- Put containers on the same network.
- Reach a container by its name.
- Publish only the port that needs outside access.

## 4. Prerequisites
- Docker Beginner Project 4 completed.
- Read: `study/docker/beginner/05-networking.md`.

## 5. Step-by-step requirements
1. Create a network `appnet`.
2. Run a container `db` (use `redis:7`) on `appnet`.
3. Run a container `app` (use `alpine` with `sleep 1000`) on `appnet`.
4. From `app`, prove you can reach `db` by name (ping or `getent hosts db`).
5. Run a container `lonely` NOT on `appnet`. Show it CANNOT reach `db` by name.
6. Clean up all containers and the network.

## 6. Tasks / challenges
- [ ] Network `appnet` created.
- [ ] `db` and `app` both on `appnet`.
- [ ] `app` reaches `db` by name (success).
- [ ] A container off the network fails to reach `db` (proves isolation).
- [ ] Everything cleaned up.

## 7. Expected outcome
Containers on the same network talk by name. A container off the network cannot. You understand private networking.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `docker network create appnet` shown.
2. `db` and `app` are both running on `appnet` (show `docker ps` + the `--network appnet` commands).
3. From `app`, a name lookup/ping of `db` **succeeds** (show output).
4. A container **not** on `appnet` **fails** to resolve/reach `db` (show the failure).
5. You cleaned up (containers + `docker network rm appnet`).
6. You explain in one sentence why the `lonely` container failed.

## 9. Verification checklist
- [ ] Same-network name access works.
- [ ] Off-network access fails.
- [ ] Cleaned up.
- [ ] Evidence saved in `submissions/docker/beginner/project-05/`.

## 10. Common mistakes
- Using the default bridge and expecting name DNS — make a user network.
- Forgetting `--network appnet` on one of the containers.

## 11. Hints
<details><summary>Hint 1</summary>`docker network create appnet`, then add `--network appnet` to each `docker run`.</details>
<details><summary>Hint 2</summary>Test: `docker exec app getent hosts db` (or `docker exec app ping -c 2 db`).</details>
<details><summary>Hint 3</summary>The `lonely` container fails because name-based DNS only works between containers on the **same** user network.</details>

## 12. Final challenge
Put an nginx `web` on `appnet` with `-p 8080:80`. From `app`, `curl http://web` (by name). From your browser, open `http://localhost:8080`. Show both work — one by name inside, one by published port outside.

## 13. What to submit (evidence)
Save all commands + output (success AND the isolation failure) in `submissions/docker/beginner/project-05/`. Then say: **"I submit Docker Beginner Project 5."**

---
**Remember:** Same network → talk by name. `-p` → open to the outside. This is the seed of Kubernetes Services.
