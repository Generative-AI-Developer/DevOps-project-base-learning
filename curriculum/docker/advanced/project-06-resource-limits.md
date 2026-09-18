---
id: docker-advanced-project-06
track: docker
level: advanced
order: 6
title: "Set Limits and Auto-Restart"
prereqs: ["docker-advanced-project-05"]
skills: ["memory/cpu limits", "restart policies", "OOM (137)", "reliability"]
certDomains: ["CKAD/CKA: requests/limits, restartPolicy (foundation)"]
estimatedTime: "60 minutes"
---

# Set Limits and Auto-Restart

**Status:** 🔒 Locked

## 1. Objective
Protect the machine with resource limits, and keep the app up with a restart policy.

## 2. Real-world scenario
One buggy container used all the memory and crashed the server. The team wants limits on every container, and auto-restart for crashes.

## 3. Skills and concepts you will learn
- Set memory and CPU limits.
- See an OOM kill (exit 137).
- Use restart policies.

## 4. Prerequisites
- Docker Advanced Project 5 completed.
- Read: `study/docker/advanced/06-resource-limits.md`.

## 5. Step-by-step requirements
1. Run your app with `--memory 256m --cpus 0.5` and `--restart on-failure:3`.
2. Show the limits are active (`docker stats --no-stream`, `docker inspect` restart policy).
3. **OOM demo:** run a throwaway container with `--memory 64m` that tries to use more memory, and show it exits with code **137**.
4. **Restart demo:** run a container that crashes (`exit 1`) with `--restart on-failure:3`, and show Docker restarts it (RestartCount goes up).

## 6. Tasks / challenges
- [ ] App runs with memory + CPU limits.
- [ ] Restart policy set.
- [ ] OOM kill shown (137).
- [ ] Auto-restart shown (RestartCount rises).

## 7. Expected outcome
Your app has limits and auto-restart. You saw an OOM kill and an auto-restart in action.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show the `docker run` (or compose) with `--memory`, `--cpus`, and a restart policy.
2. `docker stats --no-stream` shows the memory limit.
3. The OOM demo container exits with code **137** (show `docker inspect --format '{{.State.ExitCode}}'`).
4. The restart demo shows RestartCount increasing (`docker inspect --format '{{.RestartCount}}'`).
5. You explain in one sentence what code 137 means.
6. All commands shown.

## 9. Verification checklist
- [ ] Limits active.
- [ ] OOM (137) shown.
- [ ] Auto-restart shown.
- [ ] Evidence saved in `submissions/docker/advanced/project-06/`.

## 10. Common mistakes
- No limits at all.
- `restart: always` on a broken app → infinite loop. Use `on-failure` with a max.
- Confusing exit 0 (clean) with non-zero (error).

## 11. Hints
<details><summary>Hint 1</summary>OOM demo: run a small script in a container with `--memory 64m` that keeps allocating memory (e.g. a Python list that grows). It will be killed with 137.</details>
<details><summary>Hint 2</summary>Crash + restart: `docker run -d --name crasher --restart on-failure:3 alpine sh -c "sleep 2; exit 1"`. Watch `docker inspect --format '{{.RestartCount}}' crasher`.</details>
<details><summary>Hint 3</summary>137 means the process was killed — usually out of memory.</details>

## 12. Final challenge
Write the Kubernetes equivalent of your limits as a Pod snippet: `resources.requests` and `resources.limits` for memory and CPU. You will use this exact YAML in the Kubernetes track.

## 13. What to submit (evidence)
Save the run/compose config, stats, the 137 proof, and the restart-count proof in `submissions/docker/advanced/project-06/`. Then say: **"I submit Docker Advanced Project 6."**

---
**Remember:** Limits protect the machine; restart policies keep apps up. Straight prep for K8s requests/limits.
