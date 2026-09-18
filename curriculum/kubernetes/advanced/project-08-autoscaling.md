---
id: kubernetes-advanced-project-08
track: kubernetes
level: advanced
order: 8
title: "Autoscale an App with HPA"
prereqs: ["kubernetes-advanced-project-07"]
skills: ["HPA", "metrics-server", "CPU requests", "scale up/down under load"]
certDomains: ["CKA/CKAD: scaling"]
estimatedTime: "60–90 minutes"
---

# Autoscale an App with HPA

**Status:** 🔒 Locked

## 1. Objective
Set up a Horizontal Pod Autoscaler and watch it add Pods under load, then remove them when load drops.

## 2. Real-world scenario
Traffic is spiky. At busy times you need more Pods; at quiet times, fewer (to save money). An HPA does this automatically.

## 3. Skills and concepts you will learn
- Install/confirm metrics-server.
- Add CPU requests.
- Create an HPA and trigger scaling.

## 4. Prerequisites
- Kubernetes Advanced Project 7 completed.
- Read: `study/kubernetes/advanced/08-autoscaling.md`.
- metrics-server must work (`kubectl top pods`). On minikube: `minikube addons enable metrics-server`.

## 5. Step-by-step requirements
1. Confirm `kubectl top pods` works (install metrics-server if needed).
2. Create a Deployment `web` with a CPU **request** (e.g. `100m`).
3. Create an HPA: 50% CPU, min 2, max 10.
4. Generate load (a busy loop hitting the Service).
5. Watch the HPA add Pods (`kubectl get hpa -w`, `kubectl get pods`).
6. Stop the load; watch it scale back down (this can take a few minutes).

## 6. Tasks / challenges
- [ ] metrics-server works.
- [ ] Deployment has CPU requests.
- [ ] HPA created.
- [ ] Scaled UP under load.
- [ ] Scaled DOWN after load.

## 7. Expected outcome
The app grows more Pods under load and shrinks when idle, automatically.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kubectl top pods` returns real numbers (metrics-server works).
2. The Deployment has a CPU `request` (show the YAML).
3. You paste the HPA (or the `kubectl autoscale` command) with min/max and target.
4. Under load, `kubectl get hpa` shows CPU above target and the replica count **increasing** (show it).
5. After stopping load, the replica count **decreases** back toward min (show it, noting it may take minutes).
6. You explain in one line why CPU requests are needed for a CPU HPA.

## 9. Verification checklist
- [ ] metrics working.
- [ ] Scale up shown.
- [ ] Scale down shown.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-08/`.

## 10. Common mistakes
- No CPU requests → HPA shows `<unknown>`.
- No metrics-server.
- Not enough load to trigger scaling.

## 11. Hints
<details><summary>Hint 1</summary>Create HPA fast: `kubectl autoscale deploy web --cpu-percent=50 --min=2 --max=10`.</details>
<details><summary>Hint 2</summary>Load: `kubectl run load --image=busybox -it --rm -- sh -c "while true; do wget -q -O- http://web; done"` (run a couple of these).</details>
<details><summary>Hint 3</summary>Watch: `kubectl get hpa -w` and `kubectl get pods -w` in another terminal.</details>

## 12. Final challenge
Scale on **memory** instead of CPU, or use a custom target. Explain when memory-based scaling makes more sense than CPU-based.

## 13. What to submit (evidence)
Save the Deployment + HPA, the scale-up and scale-down evidence in `submissions/kubernetes/advanced/project-08/`. Then say: **"I submit Kubernetes Advanced Project 8."**

---
**Remember:** HPA keeps a metric near a target by adding/removing Pods. Needs CPU requests + metrics-server.
