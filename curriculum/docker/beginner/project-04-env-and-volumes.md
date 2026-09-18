---
id: docker-beginner-project-04
track: docker
level: beginner
order: 4
title: "Keep Data Safe with Volumes and Config with Env Vars"
prereqs: ["docker-beginner-project-03"]
skills: ["-e env vars", "-v volumes", "persistence", "bind mounts"]
certDomains: ["CKAD: env, config, storage (foundation)"]
estimatedTime: "60–90 minutes"
---

# Keep Data Safe with Volumes and Config with Env Vars

**Status:** 🔒 Locked

## 1. Objective
Pass settings to a container with environment variables, and keep data safe using a volume.

## 2. Real-world scenario
Your team runs a database in Docker. They say: *"The password must come from a setting, and the data must NOT be lost when we restart the container."* Losing database data is a disaster. Volumes prevent it.

## 3. Skills and concepts you will learn
- Pass settings with `-e`.
- Create and mount a volume with `-v`.
- Prove data survives container removal.

## 4. Prerequisites
- Docker Beginner Project 3 completed.
- Read: `study/docker/beginner/04-env-and-volumes.md`.

## 5. Step-by-step requirements
1. **Env var test:** run alpine with `-e NAME=YourName` and print `Hello YourName`.
2. **Volume test (the main task):**
   - Create a volume `mydata`.
   - Run a container that mounts `mydata` at `/data`, and write a file: `echo "important" > /data/note.txt`.
   - Remove that container.
   - Run a **new** container with the **same** volume `mydata`, and show `/data/note.txt` still has "important".
3. Show `docker volume ls`.

## 6. Tasks / challenges
- [ ] Env var prints your name.
- [ ] Volume created.
- [ ] File written to the volume.
- [ ] First container removed.
- [ ] New container shows the file still exists (data survived!).

## 7. Expected outcome
You proved that data in a volume survives even after the container is removed. And you passed a setting with an env var.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. The `-e NAME=...` run prints `Hello YourName`.
2. You created a volume and wrote `/data/note.txt` in a container using it.
3. You removed that container (`docker rm`).
4. A **new** container using the same volume shows `note.txt` still contains "important" (`cat /data/note.txt`).
5. `docker volume ls` shows your volume.
6. You explain in one sentence why the data survived.

## 9. Verification checklist
- [ ] Env var works.
- [ ] Data survived container removal.
- [ ] Volume listed.
- [ ] Evidence saved in `submissions/docker/beginner/project-04/`.

## 10. Common mistakes
- Not using the **same** volume name on the second container.
- Writing to a path that is not the mounted one.
- Confusing volume (`name:/path`) with bind mount (`/host/path:/path`).

## 11. Hints
<details><summary>Hint 1</summary>Env: `docker run --rm -e NAME=Sara alpine sh -c 'echo "Hello $NAME"'`.</details>
<details><summary>Hint 2</summary>Write: `docker run --rm -v mydata:/data alpine sh -c 'echo important > /data/note.txt'`. Read back: `docker run --rm -v mydata:/data alpine cat /data/note.txt`.</details>
<details><summary>Hint 3</summary>Because the volume `mydata` lives outside any container, its files stay even after you remove the container.</details>

## 12. Final challenge
Run a real database with a volume:
`docker run -d --name db -e POSTGRES_PASSWORD=secret -v pgdata:/var/lib/postgresql/data postgres:16`.
Show it starts (`docker logs db`). Then stop + remove it, run it again with the same volume, and confirm it still starts fine (data kept). Clean up after.

## 13. What to submit (evidence)
Save all commands + output (especially the "data survived" proof) in `submissions/docker/beginner/project-04/`. Then say: **"I submit Docker Beginner Project 4."**

---
**Remember:** `-e` for settings, `-v` for data. Volumes keep data safe across container restarts and removals.
