---
id: <cert>-mock-NN
cert: <ckad|cka|cks|ccao-f|ccdv-f|ccar-f|ccar-p>
type: <mock-exam|timed-lab>
timeLimitMinutes: <e.g. 120>
passScore: 0.66            # fraction of total weight needed to pass (real CKA/CKAD ~66%)
---

<!-- SIMPLE ENGLISH rule applies. Tasks must be clear and testable. -->

# <Cert> Mock Exam NN

## How this works
1. Set a timer for **<N> minutes**. Do not stop it.
2. Do the tasks in any order. Harder tasks are worth more.
3. When time is up, stop. Submit your evidence.
4. The mentor grades each task with the rubric and writes your domain scores to `progress.json`.
5. Any domain below the threshold becomes a **weak area** you must fix before moving on.

## Rules for hands-on certs (CKAD / CKA / CKS)
- These exams are practical. You do real tasks on a real cluster.
- Use `kind` or `minikube` for practice. Use the official docs — they are allowed in the real exam.

## Tasks
### Task 1 — <name> (weight: N, domain: <exam domain>)
What to do. Clear and testable.

### Task 2 — <name> (weight: N, domain: <exam domain>)
...

## What to submit
- For each task: the commands + output, or the YAML/files you made.
- The mentor checks them against `rubric-NN.md`.

---
**Remember:** Speed + accuracy. In the real exam, time is short. Practice being fast and correct.
