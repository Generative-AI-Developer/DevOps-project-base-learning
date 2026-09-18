---
id: ckad-mock-1
cert: ckad
type: mock-exam
timeLimitMinutes: 120
passScore: 0.66
---

# CKAD Mock Exam 1

## How this works
1. Set a timer for **120 minutes**. Do not stop it.
2. Do the tasks in any order. Use the official Kubernetes docs (allowed in the real exam).
3. Each task lists its **weight** and **domain**.
4. When time is up, stop. Save your evidence.
5. The mentor grades with `rubric-1.md` and writes your domain scores into `progress.json`.
6. Any domain below **0.66** becomes a **weak area** you must fix before CKA.

> Work in the namespaces the tasks name. Create them if missing.

## Tasks

### Task 1 — Pod with command (weight 5, Design & Build)
In namespace `ex1`, create a Pod `busy` (image `busybox`) that runs `sleep 3600`.

### Task 2 — Multi-container + init (weight 8, Design & Build)
In `ex1`, create a Pod with an init container that writes `/data/ready` and a main container that waits for it, sharing an `emptyDir`.

### Task 3 — Deployment + rolling update (weight 10, Deployment)
In `ex2`, create Deployment `web` (nginx:1.27, 4 replicas). Update it to `nginx:1.27.1` and confirm the rollout. Then roll it back.

### Task 4 — Config + Secret (weight 10, Config & Security)
In `ex2`, create a ConfigMap `cfg` (`MODE=prod`) and a Secret `sec` (`KEY=abc`). Run a Pod that gets `MODE` as env and mounts `sec` as a file.

### Task 5 — securityContext (weight 8, Config & Security)
In `ex2`, create a Pod that runs as `runAsNonRoot`, `runAsUser: 10001`, drops all capabilities, and has requests/limits.

### Task 6 — Service (weight 8, Services & Networking)
In `ex3`, expose the `web` Deployment as a ClusterIP Service `web-svc` on port 80. Prove it has endpoints.

### Task 7 — NetworkPolicy (weight 8, Services & Networking)
In `ex3`, add a NetworkPolicy so only Pods labeled `role=client` may reach `web` Pods. Prove a non-client Pod is blocked.

### Task 8 — Probes (weight 8, Observability)
In `ex3`, add liveness + readiness probes (httpGet `/` port 80) to the `web` Deployment. Show it is `READY`.

### Task 9 — Logs & debug (weight 7, Observability)
In `ex3`, a Pod `broken` fails (create one with a wrong command). Find the cause from `describe`/`logs` and write the reason.

### Task 10 — Job (weight 6, Design & Build)
In `ex1`, create a Job that prints "done" and completes. Show `1/1`.

**Total weight: 78.** Pass = score ≥ 0.66 of the total AND no domain below 0.66.

## What to submit
For each task: the YAML/commands and a `kubectl get`/`describe` proof. Save under
`submissions/kubernetes/certification/ckad/mock-1/`.

---
**Remember:** Flag hard tasks, do easy points first, verify each answer. Speed + accuracy.
