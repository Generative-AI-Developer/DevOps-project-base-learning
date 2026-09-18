---
id: kubernetes-intermediate-project-03
track: kubernetes
level: intermediate
order: 3
title: "Init Containers and a Sidecar"
prereqs: ["kubernetes-intermediate-project-02"]
skills: ["initContainers", "sidecar", "emptyDir sharing", "per-container logs"]
certDomains: ["CKAD: multi-container patterns"]
estimatedTime: "60–90 minutes"
---

# Init Containers and a Sidecar

**Status:** 🔒 Locked

## 1. Objective
Build a Pod with an init container (setup first) and a sidecar (helper alongside), sharing a volume.

## 2. Real-world scenario
Your app needs a setup step before it starts, and a helper that ships its logs. You use an init container for setup and a sidecar for the helper.

## 3. Skills and concepts you will learn
- Add an init container that runs first.
- Add a sidecar that runs alongside.
- Share files with an `emptyDir`.
- Read logs of a specific container.

## 4. Prerequisites
- Kubernetes Intermediate Project 2 completed.
- Read: `study/kubernetes/intermediate/03-init-sidecar.md`.

## 5. Step-by-step requirements
1. Create a Pod with:
   - an **init container** that writes a file into a shared volume (e.g. `echo hello > /data/init.txt`), then exits,
   - a **main** container that appends the time to `/data/log.txt` every 2 seconds,
   - a **sidecar** container that tails `/data/log.txt`.
   All three share an `emptyDir` volume mounted at `/data`.
2. Watch the Pod go from `Init:...` to `Running`.
3. Show the init file exists (`kubectl exec ... cat /data/init.txt`).
4. Show the sidecar's logs contain the time lines (`kubectl logs <pod> -c sidecar`).

## 6. Tasks / challenges
- [ ] Init container runs first and writes the file.
- [ ] Main writes to the shared volume.
- [ ] Sidecar reads the shared volume.
- [ ] Per-container logs shown.

## 7. Expected outcome
An init container prepares data, and a sidecar shares the main container's files — all in one Pod.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Pod YAML with `initContainers`, two `containers`, and a shared `emptyDir`.
2. You show the Pod passing through an `Init:` phase before `Running` (`kubectl get pods`).
3. `kubectl exec <pod> -c app -- cat /data/init.txt` shows the init container's file.
4. `kubectl logs <pod> -c sidecar` shows the time lines the main container wrote.
5. You explain in one line the difference between an init container and a sidecar.
6. All commands shown.

## 9. Verification checklist
- [ ] Init ran first.
- [ ] Sidecar shares files.
- [ ] Per-container logs shown.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-03/`.

## 10. Common mistakes
- Not sharing the volume in all containers.
- Forgetting `-c <container>` for logs/exec.
- Init container that never exits (it must finish).

## 11. Hints
<details><summary>Hint 1</summary>Use the two examples in `study/kubernetes/intermediate/03-init-sidecar.md`, section 3, and combine them into one Pod.</details>
<details><summary>Hint 2</summary>Watch phases: `kubectl get pods -w` shows `Init:0/1` → `Running`.</details>
<details><summary>Hint 3</summary>Logs of the sidecar: `kubectl logs <pod> -c sidecar`.</details>

## 12. Final challenge
Turn the sidecar into a real "adapter": make it transform the log (e.g. add a prefix) and write to a second file. This is the adapter pattern — a known CKAD multi-container pattern.

## 13. What to submit (evidence)
Save the Pod YAML and all outputs in `submissions/kubernetes/intermediate/project-03/`. Then say: **"I submit Kubernetes Intermediate Project 3."**

---
**Remember:** Init runs first and exits; sidecar runs alongside. Share files with `emptyDir`. Read logs with `-c`.
