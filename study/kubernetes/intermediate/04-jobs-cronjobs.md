---
id: kubernetes-intermediate-study-jobs-cronjobs
track: kubernetes
level: intermediate
topic: Jobs and CronJobs
forProject: kubernetes-intermediate-project-04
---

# Study: Jobs and CronJobs

> **Words to know**
> - **Job** — runs a Pod until the task finishes successfully, then stops.
> - **CronJob** — a Job on a schedule (like Linux cron).
> - **Completions** — how many times the Job must succeed.
> - **backoffLimit** — how many retries before the Job is failed.

## 1. Easy explanation (simple → deeper)
Deployments run apps **forever**. But some tasks should run **once** and finish: a backup, a data import, a report. For these you use a **Job**.

A **CronJob** runs a Job on a **schedule** (for example, every night). This is the Kubernetes version of Linux cron.

## 2. Key concepts and terms
- A Job runs a Pod until it exits `0` (success).
- `completions` and `parallelism` control how many and how fast.
- `backoffLimit` = retries before giving up.
- CronJob uses a cron schedule string: `"0 2 * * *"` = 2 AM daily.
- `restartPolicy` for Jobs must be `Never` or `OnFailure` (not `Always`).

## 3. Practical examples
```yaml
apiVersion: batch/v1
kind: Job
metadata: { name: hello }
spec:
  backoffLimit: 3
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: hello
          image: busybox
          command: ["sh","-c","echo Hello Job; sleep 3"]
---
apiVersion: batch/v1
kind: CronJob
metadata: { name: every-min }
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
            - name: tick
              image: busybox
              command: ["sh","-c","date; echo tick"]
```

## 4. Commands and config examples
```bash
kubectl create job hello --image=busybox -- echo "hi"     # quick job
kubectl get jobs
kubectl get pods --selector=job-name=hello
kubectl logs job/hello
kubectl create cronjob tick --image=busybox --schedule="*/1 * * * *" -- date
kubectl get cronjobs
```

## 5. Hands-on exercises
1. Create a Job that prints a message and finishes. Read its logs.
2. Create a CronJob that runs every minute. Watch new Pods appear each minute.
3. Delete the CronJob to stop it.

## 6. Troubleshooting
- **Problem:** Job Pod keeps restarting.
  **Fix:** `restartPolicy` must be `Never` or `OnFailure`, not `Always`.
- **Problem:** CronJob makes too many old Pods.
  **Fix:** set `successfulJobsHistoryLimit` and `failedJobsHistoryLimit`.

## 7. Common mistakes and how to avoid them
- Using a Deployment for a one-time task (it will restart forever). Use a Job.
- `restartPolicy: Always` on a Job (not allowed).
- Wrong cron schedule string.

## 8. Certification notes (what the exam wants)
- **CKAD:** Jobs and CronJobs are a common task.
- Know `restartPolicy`, `backoffLimit`, `completions`, and the schedule format.

## 9. Practice questions and tasks
1. When do you use a Job instead of a Deployment?
2. What restartPolicy values are allowed for a Job?
3. What does a CronJob add over a Job?

## 10. References
- Jobs: https://kubernetes.io/docs/concepts/workloads/controllers/job/ (checked: 2026-09-18)
- CronJobs: https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/ (checked: 2026-09-18)

---
**Remember:** Job = run once to success. CronJob = Job on a schedule. `restartPolicy` must be Never/OnFailure.

<details><summary>Answers</summary>

1. For a task that runs once and finishes (backup, import, report).
2. `Never` or `OnFailure`.
3. A schedule, so the Job runs again and again over time.
</details>
