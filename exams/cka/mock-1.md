---
id: cka-mock-1
cert: cka
type: mock-exam
timeLimitMinutes: 120
passScore: 0.66
---

# CKA Mock Exam 1

## How this works
1. Set a timer for **120 minutes**. Do not stop it.
2. **Switch to the correct cluster/context for each task** (habit!). Use the official docs.
3. Each task lists its **weight** and **domain**.
4. Stop at time. Save evidence. The mentor grades with `rubric-1.md` and writes domain scores.
5. Any domain below **0.66** is a weak area to fix before you finish CKA.

## Tasks

### Task 1 — etcd backup (weight 12, Architecture/Install)
Take an etcd snapshot to `/opt/etcd-backup.db` using the etcd certs. Show `snapshot status`.

### Task 2 — RBAC (weight 8, Architecture/Install)
Create a ServiceAccount `viewer` in `ns1` that can only `get`/`list` pods. Prove with `auth can-i`.

### Task 3 — Static Pod (weight 5, Architecture/Install)
Create a static Pod `static-web` (nginx) on a node via the kubelet manifests folder. Show it running.

### Task 4 — Scheduling (weight 8, Workloads & Scheduling)
Taint a node `special=true:NoSchedule`. Create a Pod that tolerates it and lands there. Show `-o wide`.

### Task 5 — DaemonSet (weight 7, Workloads & Scheduling)
Create a DaemonSet that runs on all nodes including the control plane.

### Task 6 — Service (weight 8, Services & Networking)
Expose a Deployment `web` with a ClusterIP Service; prove endpoints and DNS from a temp Pod.

### Task 7 — NetworkPolicy (weight 8, Services & Networking)
Add a default-deny ingress in `ns2`, then allow only `app=client` to reach `web`. Prove allow + block.

### Task 8 — Storage (weight 8, Storage)
Create a PVC (1Gi), mount it in a Pod, write a file, and prove it survives a Pod restart.

### Task 9 — Node NotReady (weight 12, Troubleshooting)
A node is NotReady (kubelet stopped). Diagnose via kubelet logs and recover it to Ready.

### Task 10 — Broken Service (weight 8, Troubleshooting)
A Service returns nothing (wrong selector). Find why (empty endpoints) and fix it.

### Task 11 — CoreDNS (weight 10, Troubleshooting)
Cluster DNS is failing. Diagnose CoreDNS and restore name resolution.

**Total weight: 94.** Pass = score ≥ 0.66 of total AND no domain below 0.66.

## What to submit
For each task: commands + proof. Save under `submissions/kubernetes/certification/cka/mock-1/`.

---
**Remember:** Switch context first. Do easy points first. Verify. Troubleshooting is the biggest slice.
