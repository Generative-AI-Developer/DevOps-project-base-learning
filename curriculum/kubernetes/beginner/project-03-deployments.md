---
id: kubernetes-beginner-project-03
track: kubernetes
level: beginner
order: 3
title: "Run Many Copies with a Deployment"
prereqs: ["kubernetes-beginner-project-02"]
skills: ["Deployment YAML", "replicas", "scale", "self-healing", "rollout"]
certDomains: ["CKAD: Application Deployment (core)", "CKA: Workloads & Scheduling"]
estimatedTime: "60–90 minutes"
---

# Run Many Copies with a Deployment

**Status:** 🔒 Locked

## 1. Objective
Create a Deployment with several replicas. See self-healing, scaling, and a rolling update.

## 2. Real-world scenario
Your app must stay up even if a Pod dies, and handle more users at busy times. A Deployment keeps copies running and lets you scale.

## 3. Skills and concepts you will learn
- Write a Deployment with replicas.
- See self-healing (delete a Pod, a new one appears).
- Scale up and down.
- Do a rolling update and undo it.

## 4. Prerequisites
- Kubernetes Beginner Project 2 completed.
- Read: `study/kubernetes/beginner/03-deployments.md`.

## 5. Step-by-step requirements
1. Create a Deployment `web` (nginx:1.27) with `replicas: 3` (from YAML).
2. Show 3 Pods with `kubectl get pods -l app=web`.
3. **Self-healing:** delete one Pod, then show a new Pod appears (still 3).
4. **Scale:** scale to 5, then back to 2.
5. **Update:** change the image to `nginx:1.27.1` (or another tag), and show `kubectl rollout status`.
6. **Undo:** roll back with `kubectl rollout undo`.

## 6. Tasks / challenges
- [ ] Deployment with 3 replicas.
- [ ] Self-healing proven.
- [ ] Scaled up and down.
- [ ] Rolling update done.
- [ ] Rollback done.

## 7. Expected outcome
You control a set of Pods with one Deployment: it heals, scales, updates, and rolls back.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Deployment YAML (kind: Deployment, apps/v1, replicas 3, matching labels).
2. `kubectl get pods -l app=web` shows 3 Pods running.
3. You delete one Pod and show a replacement Pod appears (count back to 3).
4. You show scaling to 5 and back to 2 (`kubectl get deploy web`).
5. You show a rolling update (`kubectl set image ...` + `kubectl rollout status deploy web`).
6. You show a successful `kubectl rollout undo deploy web`.

## 9. Verification checklist
- [ ] Self-healing shown.
- [ ] Scale up/down shown.
- [ ] Update + rollback shown.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-03/`.

## 10. Common mistakes
- Selector labels not matching template labels → no Pods.
- Deleting the Deployment instead of a Pod for the self-healing test.
- Bad image tag → rollout stuck (read describe).

## 11. Hints
<details><summary>Hint 1</summary>Generate: `kubectl create deploy web --image=nginx:1.27 --replicas=3 --dry-run=client -o yaml > deploy.yaml`.</details>
<details><summary>Hint 2</summary>Self-heal test: `kubectl delete pod <one-web-pod>` then `kubectl get pods -l app=web` — a new one is created.</details>
<details><summary>Hint 3</summary>Update: `kubectl set image deploy web nginx=nginx:1.27.1`, then `kubectl rollout status deploy web`, then `kubectl rollout undo deploy web`.</details>

## 12. Final challenge
Use `kubectl rollout history deploy web` to see the versions. Roll back to a **specific** revision with `--to-revision=N`. Managing revisions is a real CKAD skill.

## 13. What to submit (evidence)
Save the YAML and all command outputs (self-heal, scale, update, undo) in `submissions/kubernetes/beginner/project-03/`. Then say: **"I submit Kubernetes Beginner Project 3."**

---
**Remember:** A Deployment keeps N copies alive and updates them safely. Scale, update, and undo with `kubectl`.
