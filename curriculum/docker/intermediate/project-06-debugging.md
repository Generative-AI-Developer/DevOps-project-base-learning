---
id: docker-intermediate-project-06
track: docker
level: intermediate
order: 6
title: "Debug Broken Containers"
prereqs: ["docker-intermediate-project-05"]
skills: ["docker ps -a", "logs", "inspect", "exit codes", "stats", "exec"]
certDomains: ["CKAD/CKA: troubleshooting (foundation)"]
estimatedTime: "60–90 minutes"
---

# Debug Broken Containers

**Status:** 🔒 Locked

## 1. Objective
Learn a clear method to debug containers: status, logs, inspect, exit codes, and resource use.

## 2. Real-world scenario
A container keeps crashing in production. The team asks: *"Find out why."* You must use a method, not guesses, to find and explain the cause.

## 3. Skills and concepts you will learn
- Read status and exit codes (`docker ps -a`).
- Read logs (`docker logs`).
- Inspect config, env, and mounts.
- Check resource use (`docker stats`).

## 4. Prerequisites
- Docker Intermediate Project 5 completed.
- Read: `study/docker/intermediate/06-debugging.md`.

## 5. Step-by-step requirements
1. **Broken case A (bad command):** run `docker run --name boom alpine sh -c "echo starting; exit 3"`. Find its exit code and explain it.
2. **Broken case B (wrong port):** run nginx but publish the wrong container port (e.g. `-p 8080:8081`). Show `curl` fails, then find the mistake with `docker inspect`/`docker port`, and fix it.
3. Use `docker inspect --format` to print the env vars and mounts of a running container.
4. Use `docker stats --no-stream` to show resource use.
5. Write a short "debug report": for each broken case, what the tools showed and what the cause was.

## 6. Tasks / challenges
- [ ] Find the exit code of the failing container.
- [ ] Diagnose the wrong-port case and fix it.
- [ ] Print env + mounts with inspect.
- [ ] Show resource use with stats.
- [ ] Write a short debug report.

## 7. Expected outcome
You found the cause of two broken containers using a clear method, and explained each in simple words.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show `docker ps -a` with the exited container and its **exit code 3**, and explain what caused it.
2. For the wrong-port case: you show the failing `curl`, then the fix (correct `-p`), then a working `curl`.
3. `docker inspect --format` output shows env vars and mounts of a container.
4. `docker stats --no-stream` output shown.
5. Your debug report explains the cause of each case in simple English.
6. All commands shown.

## 9. Verification checklist
- [ ] Exit code found + explained.
- [ ] Port bug fixed.
- [ ] Inspect + stats shown.
- [ ] Report written.
- [ ] Evidence saved in `submissions/docker/intermediate/project-06/`.

## 10. Common mistakes
- Guessing instead of reading logs and exit codes.
- Confusing host and container port order in `-p`.

## 11. Hints
<details><summary>Hint 1</summary>Exit code: `docker inspect --format '{{.State.ExitCode}}' boom`.</details>
<details><summary>Hint 2</summary>Port mapping check: `docker port <name>` shows what maps to what.</details>
<details><summary>Hint 3</summary>Env + mounts: `docker inspect --format '{{json .Config.Env}}' <name>` and `docker inspect --format '{{json .Mounts}}' <name>`.</details>

## 12. Final challenge
Create a memory limit and force an out-of-memory kill: run a container with `--memory=20m` that tries to use more, and show it exits with code `137`. Explain what 137 means.

## 13. What to submit (evidence)
Save all commands, outputs, and your debug report in `submissions/docker/intermediate/project-06/`. Then say: **"I submit Docker Intermediate Project 6."**

---
**Remember:** ps -a → logs → inspect → stats. A method beats guessing. The same method works for Kubernetes Pods.
