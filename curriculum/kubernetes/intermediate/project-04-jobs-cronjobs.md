---
id: kubernetes-intermediate-project-04
track: kubernetes
level: intermediate
order: 4
title: "Run Tasks with Jobs and CronJobs"
prereqs: ["kubernetes-intermediate-project-03"]
skills: ["Job", "CronJob", "backoffLimit", "schedule", "restartPolicy"]
certDomains: ["CKAD: Application Deployment (batch)"]
estimatedTime: "60 minutes"
---

# Run Tasks with Jobs and CronJobs

**Status:** 🔒 Locked

## 1. Objective
Run a one-time task with a Job, and a scheduled task with a CronJob.

## 2. Real-world scenario
Your team needs a nightly database backup and a one-time data import. These are not "always-on" apps. You use a CronJob for the nightly task and a Job for the one-time task.

## 3. Skills and concepts you will learn
- Create a Job and read its logs.
- Create a CronJob with a schedule.
- Use the right `restartPolicy` and `backoffLimit`.

## 4. Prerequisites
- Kubernetes Intermediate Project 3 completed.
- Read: `study/kubernetes/intermediate/04-jobs-cronjobs.md`.

## 5. Step-by-step requirements
1. Create a **Job** that prints a message and finishes (with `restartPolicy: Never`, `backoffLimit: 2`).
2. Show the Job completed (`kubectl get jobs` shows `1/1`) and read its logs.
3. Create a **CronJob** that runs every minute and prints the date.
4. Wait ~2 minutes and show it created Job Pods (`kubectl get pods` / `kubectl get jobs`).
5. Delete the CronJob to stop it.

## 6. Tasks / challenges
- [ ] Job runs and completes.
- [ ] Job logs shown.
- [ ] CronJob created and firing.
- [ ] CronJob deleted at the end.

## 7. Expected outcome
You ran a one-time Job and a scheduled CronJob, and understand when to use each.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Job YAML (batch/v1, `restartPolicy: Never`, `backoffLimit`).
2. `kubectl get jobs` shows the Job as `COMPLETIONS 1/1`.
3. `kubectl logs job/<name>` shows the message.
4. You paste the CronJob YAML with a schedule (e.g. `*/1 * * * *`).
5. You show at least one Job/Pod created by the CronJob (`kubectl get jobs` over time).
6. You explain in one line why a Deployment is wrong for a one-time task.

## 9. Verification checklist
- [ ] Job completed + logs.
- [ ] CronJob fired.
- [ ] Cleaned up.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-04/`.

## 10. Common mistakes
- `restartPolicy: Always` on a Job (not allowed).
- Using a Deployment for a run-once task.
- Wrong cron schedule string.

## 11. Hints
<details><summary>Hint 1</summary>Quick job: `kubectl create job hello --image=busybox -- echo hi`. Quick cronjob: `kubectl create cronjob tick --image=busybox --schedule="*/1 * * * *" -- date`.</details>
<details><summary>Hint 2</summary>Job logs: `kubectl logs job/hello`. Cron Pods: `kubectl get pods --sort-by=.metadata.creationTimestamp`.</details>
<details><summary>Hint 3</summary>Full YAML is in `study/kubernetes/intermediate/04-jobs-cronjobs.md`, section 3.</details>

## 12. Final challenge
Make a Job with `completions: 3` and `parallelism: 2`, so it runs 3 successful Pods, 2 at a time. Show the completions counting up. This is a real batch pattern.

## 13. What to submit (evidence)
Save both YAMLs, the Job completion + logs, and the CronJob firing in `submissions/kubernetes/intermediate/project-04/`. Then say: **"I submit Kubernetes Intermediate Project 4."**

---
**Remember:** Job = run once. CronJob = on a schedule. `restartPolicy` = Never or OnFailure.
