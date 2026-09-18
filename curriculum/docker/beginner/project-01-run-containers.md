---
id: docker-beginner-project-01
track: docker
level: beginner
order: 1
title: "Run and Manage Your First Containers"
prereqs: ["linux-advanced-project-06"]
skills: ["docker run", "ps", "logs", "exec", "stop/rm", "ports"]
certDomains: ["CKAD: understanding containers (foundation)"]
estimatedTime: "60 minutes"
---

# Run and Manage Your First Containers

**Status:** 🔒 Locked (unlocks when Docker Beginner opens)

## 1. Objective
Run containers, look inside them, read their logs, and clean them up.

## 2. Real-world scenario
Your team says: *"Run our web server in a container, check it works, and look at its logs."* This is the most basic Docker task, and you do it many times a day.

## 3. Skills and concepts you will learn
- `docker run` with `-d`, `-p`, `--name`.
- List with `docker ps`.
- Read `docker logs`.
- Enter a container with `docker exec`.
- Stop and remove containers.

## 4. Prerequisites
- Linux track completed.
- Docker installed (`docker run hello-world` works).
- Read: `study/docker/beginner/01-run-containers.md`.

## 5. Step-by-step requirements
1. Run `hello-world` and show the message.
2. Run **nginx** in the background, named `web`, on port `8080`.
3. Show it in `docker ps`.
4. Prove it serves a page: `curl -I http://localhost:8080` (show `HTTP/... 200`).
5. Show the container logs.
6. Open a shell inside `web`, run `ls /usr/share/nginx/html`, then exit.
7. Stop and remove `web`. Prove it is gone with `docker ps -a`.

## 6. Tasks / challenges
- [ ] hello-world runs.
- [ ] nginx runs in background on 8080 with name `web`.
- [ ] `curl -I` returns 200.
- [ ] Logs shown.
- [ ] Shell entered and `ls` run inside.
- [ ] Container stopped and removed.

## 7. Expected outcome
You ran a web server in a container, tested it, looked inside, and cleaned up.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `hello-world` output shown.
2. `docker ps` shows `web` running with `0.0.0.0:8080->80/tcp`.
3. `curl -I http://localhost:8080` shows `200`.
4. `docker logs web` output shown.
5. `docker exec -it web ...` output shows the html folder listing.
6. After cleanup, `docker ps -a` does not list `web`.
7. All commands shown.

## 9. Verification checklist
- [ ] nginx served a 200.
- [ ] Logs + exec shown.
- [ ] Cleaned up.
- [ ] Evidence saved in `submissions/docker/beginner/project-01/`.

## 10. Common mistakes
- Port order wrong — it is `-p host:container` (`8080:80`).
- Forgetting `-d` — terminal gets stuck. (Press Ctrl+C, then use `-d`.)
- Not removing the container after stopping.

## 11. Hints
<details><summary>Hint 1</summary>`docker run -d --name web -p 8080:80 nginx`.</details>
<details><summary>Hint 2</summary>Enter and list: `docker exec -it web ls /usr/share/nginx/html`.</details>
<details><summary>Hint 3</summary>Cleanup: `docker stop web && docker rm web`. Check with `docker ps -a`.</details>

## 12. Final challenge
Run a second nginx named `web2` on port `8081` at the same time. Show both in `docker ps`. Then remove both in one command: `docker rm -f web web2`.

## 13. What to submit (evidence)
Save all commands + output in `submissions/docker/beginner/project-01/`. Then say: **"I submit Docker Beginner Project 1."**

---
**Remember:** `run -d -p --name`, then `ps`, `logs`, `exec`, `stop`, `rm`. This is your daily Docker.
