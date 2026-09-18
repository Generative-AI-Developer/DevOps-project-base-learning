---
id: kubernetes-intermediate-project-02
track: kubernetes
level: intermediate
order: 2
title: "Set Requests and Limits (and See QoS)"
prereqs: ["kubernetes-intermediate-project-01"]
skills: ["requests", "limits", "QoS classes", "OOMKilled", "kubectl top"]
certDomains: ["CKAD/CKA: resource management"]
estimatedTime: "60 minutes"
---

# Set Requests and Limits (and See QoS)

**Status:** 🔒 Locked

## 1. Objective
Add resource requests and limits to a Deployment, check its QoS class, and see an out-of-memory kill.

## 2. Real-world scenario
One app used all the node's memory and crashed others. The team now requires requests and limits on every container. You add them and prove they work.

## 3. Skills and concepts you will learn
- Set CPU/memory requests and limits.
- Read the QoS class.
- Cause and read an OOMKilled event.

## 4. Prerequisites
- Kubernetes Intermediate Project 1 completed.
- Read: `study/kubernetes/intermediate/02-resources.md`.

## 5. Step-by-step requirements
1. Create a Deployment with requests (`cpu: 250m`, `memory: 64Mi`) and limits (`cpu: 500m`, `memory: 128Mi`).
2. Show the QoS class with `kubectl describe pod` (look for `QoS Class`).
3. Make requests = limits for a second Pod and show its QoS class is `Guaranteed`.
4. **OOM demo:** run a Pod with `memory` limit `32Mi` and a container that allocates more (e.g. a small stress or a busybox loop). Show it becomes `OOMKilled` in `kubectl describe pod` / `kubectl get pod`.
5. If `kubectl top pods` works, show live usage.

## 6. Tasks / challenges
- [ ] Requests + limits set.
- [ ] QoS class shown (Burstable).
- [ ] A Guaranteed Pod shown.
- [ ] OOMKilled demonstrated.

## 7. Expected outcome
Your Pods have sensible requests/limits. You understand QoS and saw an OOM kill.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Deployment YAML with `resources.requests` and `resources.limits`.
2. `kubectl describe pod <name>` shows the QoS Class (e.g. `Burstable`).
3. You show a Pod where requests = limits and its QoS Class is `Guaranteed`.
4. You show a Pod that gets `OOMKilled` (in `kubectl get pod` reason or `kubectl describe pod` Last State).
5. You explain in one line what the scheduler uses `requests` for.
6. All YAML and commands shown.

## 9. Verification checklist
- [ ] Requests/limits set.
- [ ] QoS classes shown.
- [ ] OOMKilled shown.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-02/`.

## 10. Common mistakes
- Wrong units (`m` for CPU, `Mi`/`Gi` for memory).
- Memory limit too low → constant OOM.
- No requests → poor scheduling.

## 11. Hints
<details><summary>Hint 1</summary>Use the resources block in `study/kubernetes/intermediate/02-resources.md`, section 3.</details>
<details><summary>Hint 2</summary>OOM demo: a busybox container with `--limits=memory=32Mi` running a memory-filling command, or use `polinux/stress` with `stress --vm 1 --vm-bytes 100M`.</details>
<details><summary>Hint 3</summary>QoS: requests = limits for BOTH cpu and memory → `Guaranteed`. Some set → `Burstable`. None → `BestEffort`.</details>

## 12. Final challenge
Create a **LimitRange** in a namespace that gives default requests/limits to Pods that do not set their own. Create a Pod with no resources and show it inherited the defaults. (LimitRange is a CKA topic.)

## 13. What to submit (evidence)
Save the YAML, the QoS outputs, and the OOMKilled proof in `submissions/kubernetes/intermediate/project-02/`. Then say: **"I submit Kubernetes Intermediate Project 2."**

---
**Remember:** Request = guaranteed (scheduling); limit = max (runtime). Memory over limit = killed. Always set both.
