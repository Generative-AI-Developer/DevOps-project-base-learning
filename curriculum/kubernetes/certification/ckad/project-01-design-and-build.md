---
id: kubernetes-ckad-project-01
track: kubernetes
level: certification
order: 1
title: "CKAD Drill: Application Design and Build (20%)"
prereqs: ["kubernetes-advanced-project-10"]
skills: ["Pods", "multi-container", "init", "Jobs/CronJobs", "dry-run speed"]
certDomains: ["CKAD: Application Design and Build"]
estimatedTime: "timed: 25 minutes"
---

# CKAD Drill: Application Design and Build (20%)

**Status:** 🔒 Locked (unlocks when the Certification Level opens)

⏱️ **Timed drill.** Set a timer for **25 minutes**. Work fast, generate YAML, verify.

## 1. Objective
Practice building Pods, multi-container Pods, init containers, and Jobs quickly — the CKAD "Design and Build" domain.

## 2. Real-world scenario
The exam gives short tasks like "create a Pod that...". You must do them fast and correctly.

## 3. Skills and concepts you will learn
- Fast Pod/Job creation with `--dry-run`.
- Multi-container and init container patterns.
- Batch workloads.

## 4. Prerequisites
- All Kubernetes Beginner/Intermediate/Advanced completed.
- Read: `study/kubernetes/certification/ckad/00-ckad-exam-guide.md`.

## 5. Step-by-step requirements (do all within the time limit)
1. Create a Pod `p1` (image `busybox`) that runs `sleep 3600`.
2. Create a Pod with an **init container** that writes a file, and a main container that reads it (shared `emptyDir`).
3. Create a **Job** that prints a message and completes; show `COMPLETIONS 1/1`.
4. Create a **CronJob** that runs every minute.
5. Verify each with `kubectl get`.

## 6. Tasks / challenges
- [ ] Pod created fast (dry-run).
- [ ] Init + main sharing a volume.
- [ ] Job completes.
- [ ] CronJob scheduled.

## 7. Expected outcome
All four objects created correctly within 25 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `p1` runs `sleep 3600` (show `kubectl get pod p1`).
2. The init+main Pod shows the init file readable by the main container.
3. The Job shows `1/1` completions and its logs.
4. The CronJob exists with a valid schedule.
5. You report how long it took (aim: under 25 min).

## 9. Verification checklist
- [ ] All 4 objects correct.
- [ ] Time recorded.
- [ ] Evidence saved in `submissions/kubernetes/certification/ckad/project-01/`.

## 10. Common mistakes
- Hand-writing YAML (slow).
- Wrong `restartPolicy` for the Job.
- Not verifying.

## 11. Hints
<details><summary>Hint 1</summary>`kubectl run p1 --image=busybox --dry-run=client -o yaml -- sleep 3600 > p1.yaml`.</details>
<details><summary>Hint 2</summary>Reuse the init/sidecar YAML from Intermediate Project 3.</details>
<details><summary>Hint 3</summary>`kubectl create job j --image=busybox -- echo hi` and `kubectl create cronjob c --image=busybox --schedule="*/1 * * * *" -- date`.</details>

## 12. Final challenge
Redo the whole drill and beat your time. Speed is the point of this domain.

## 13. What to submit (evidence)
Save the YAML, `kubectl get` proofs, and your time in `submissions/kubernetes/certification/ckad/project-01/`. Then say: **"I submit CKAD Project 1."**

---
**Remember:** Generate, apply, verify — fast. This domain is 20% of CKAD.
