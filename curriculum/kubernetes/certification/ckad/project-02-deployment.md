---
id: kubernetes-ckad-project-02
track: kubernetes
level: certification
order: 2
title: "CKAD Drill: Application Deployment (20%)"
prereqs: ["kubernetes-ckad-project-01"]
skills: ["Deployments", "rolling updates", "rollback", "scaling", "deployment strategies"]
certDomains: ["CKAD: Application Deployment"]
estimatedTime: "timed: 25 minutes"
---

# CKAD Drill: Application Deployment (20%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Practice Deployments, rolling updates, rollbacks, and scaling — fast.

## 2. Real-world scenario
Exam tasks like "update this Deployment to a new image and roll back the last change".

## 3. Skills and concepts you will learn
- Create/scale Deployments quickly.
- Rolling update + rollback.
- Read rollout history.

## 4. Prerequisites
- CKAD Project 1 completed.
- Read: `study/kubernetes/certification/ckad/00-ckad-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Create a Deployment `web` (nginx:1.27, 3 replicas).
2. Scale it to 5, then to 2.
3. Update the image to a new tag; check `rollout status`.
4. Roll back to the previous version.
5. Show `rollout history`.

## 6. Tasks / challenges
- [ ] Deployment created.
- [ ] Scaled up/down.
- [ ] Rolling update done.
- [ ] Rollback done.
- [ ] History shown.

## 7. Expected outcome
You performed a full deployment lifecycle within 25 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Deployment `web` runs the requested replicas.
2. You show scaling to 5 and back to 2.
3. You show a rolling update (`kubectl set image` + `rollout status`).
4. You show a successful `rollout undo`.
5. `kubectl rollout history deploy web` shown.
6. You report your time.

## 9. Verification checklist
- [ ] Full lifecycle done.
- [ ] Time recorded.
- [ ] Evidence saved in `submissions/kubernetes/certification/ckad/project-02/`.

## 10. Common mistakes
- Editing Pods instead of the Deployment.
- Forgetting to record the change cause (use `--record` or annotations if needed).

## 11. Hints
<details><summary>Hint 1</summary>`kubectl create deploy web --image=nginx:1.27 --replicas=3`.</details>
<details><summary>Hint 2</summary>`kubectl set image deploy web nginx=nginx:1.27.1 && kubectl rollout status deploy web`.</details>
<details><summary>Hint 3</summary>`kubectl rollout undo deploy web` and `kubectl rollout history deploy web`.</details>

## 12. Final challenge
Change the Deployment's update strategy `maxSurge`/`maxUnavailable` and explain how they affect the update speed and availability.

## 13. What to submit (evidence)
Save commands, outputs, and your time in `submissions/kubernetes/certification/ckad/project-02/`. Then say: **"I submit CKAD Project 2."**

---
**Remember:** create → scale → update → rollback → history. Fast and correct. 20% of CKAD.
