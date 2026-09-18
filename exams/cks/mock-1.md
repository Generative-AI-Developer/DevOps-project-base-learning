---
id: cks-mock-1
cert: cks
type: mock-exam
timeLimitMinutes: 120
passScore: 0.66
---

# CKS Mock Exam 1

## How this works
1. Set a timer for **120 minutes**. Do not stop it.
2. Switch to the correct cluster per task. Use the allowed docs (Kubernetes, Falco, Trivy).
3. Each task lists its **weight** and **domain**.
4. Stop at time. Save evidence. The mentor grades with `rubric-1.md` and writes domain scores.
5. Any domain below **0.66** is a weak area to fix before CKS is complete.

## Tasks

### Task 1 — Default-deny (weight 8, Cluster Hardening)
In `ns1`, add a default-deny ingress NetworkPolicy, then allow only `app=api` to reach `app=db`.

### Task 2 — RBAC on Secrets (weight 8, Cluster Hardening)
Ensure a ServiceAccount `sa1` in `ns1` CANNOT read Secrets, but CAN list Pods. Prove with `auth can-i`.

### Task 3 — kube-bench (weight 6, Cluster Setup)
Run kube-bench; fix or clearly explain one failed CIS control.

### Task 4 — seccomp (weight 8, System Hardening)
Run a Pod with `seccompProfile: RuntimeDefault`. Show it applied.

### Task 5 — AppArmor (weight 7, System Hardening)
Apply an AppArmor profile to a container (or clearly show the mechanism). Show it in effect.

### Task 6 — Pod Security restricted (weight 10, Minimize Vulnerabilities)
Enforce `restricted` on `ns2`. Show a privileged Pod is rejected and a compliant Pod runs.

### Task 7 — Secret encryption (weight 10, Minimize Vulnerabilities)
Show/enable encryption at rest for Secrets (EncryptionConfiguration), or clearly explain and show the config.

### Task 8 — Image scan (weight 10, Supply Chain)
Scan two images with Trivy; report high/critical CVEs; pick the safer one and justify.

### Task 9 — Image allowlist (weight 10, Supply Chain)
Add a policy (Kyverno/OPA) that blocks images not from a trusted registry. Show a bad Pod rejected.

### Task 10 — Falco (weight 10, Runtime Security)
Trigger a Falco rule (shell in a container) and show the alert.

### Task 11 — Audit logging (weight 8, Runtime Security)
Enable apiserver audit logging (or show the config) and show one audit entry.

**Total weight: 95.** Pass = score ≥ 0.66 of total AND no domain below 0.66.

## What to submit
For each task: commands + proof. Save under `submissions/kubernetes/certification/cks/mock-1/`.

---
**Remember:** Least privilege everywhere. Scan, restrict, watch. Verify each task.
