---
id: kubernetes-advanced-project-04
track: kubernetes
level: advanced
order: 4
title: "Control Where Pods Run"
prereqs: ["kubernetes-advanced-project-03"]
skills: ["nodeSelector", "taints", "tolerations", "affinity"]
certDomains: ["CKA: Workloads & Scheduling"]
estimatedTime: "60–90 minutes"
---

# Control Where Pods Run

**Status:** 🔒 Locked

## 1. Objective
Use labels, nodeSelector, taints, and tolerations to control which node runs a Pod.

## 2. Real-world scenario
You have special nodes (say, with SSDs). Only certain Pods should use them. You use labels + nodeSelector to place Pods, and taints to protect special nodes.

## 3. Skills and concepts you will learn
- Label nodes and use nodeSelector.
- Taint a node and see Pods avoid it.
- Add a toleration so a Pod can run on a tainted node.

## 4. Prerequisites
- Kubernetes Advanced Project 3 completed.
- Read: `study/kubernetes/advanced/04-scheduling.md`.
- A cluster with at least 2 nodes is best (kind can make multi-node clusters; or killercoda).

## 5. Step-by-step requirements
1. Label one node (e.g. `disk=ssd`). Create a Pod with a matching `nodeSelector`; show it landed on that node.
2. Taint a node `NoSchedule`. Create a normal Pod; show it does NOT land on the tainted node.
3. Add a matching toleration to a Pod; show it CAN now land on the tainted node.
4. Remove the taint at the end.

## 6. Tasks / challenges
- [ ] nodeSelector places a Pod correctly.
- [ ] Taint makes normal Pods avoid a node.
- [ ] Toleration lets a Pod land there.
- [ ] Taint removed.

## 7. Expected outcome
You can steer Pods to the right nodes and protect special nodes with taints.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You label a node and show a `nodeSelector` Pod landed on it (`kubectl get pod -o wide`).
2. You taint a node `NoSchedule` and show a normal Pod avoids it.
3. You add a matching toleration and show a Pod now lands on the tainted node.
4. You remove the taint (with the trailing `-`).
5. You explain in one line the difference between a taint and a toleration.
6. All commands + `-o wide` outputs shown.

## 9. Verification checklist
- [ ] nodeSelector works.
- [ ] Taint avoided by normal Pods.
- [ ] Toleration allows placement.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-04/`.

## 10. Common mistakes
- Confusing taint effects (NoSchedule vs NoExecute).
- Forgetting the trailing `-` to remove a taint.
- Single-node cluster — hard to show placement (use multi-node).

## 11. Hints
<details><summary>Hint 1</summary>Label + select: `kubectl label node <n> disk=ssd`, then `nodeSelector: { disk: ssd }`.</details>
<details><summary>Hint 2</summary>Taint: `kubectl taint node <n> gpu=true:NoSchedule`. Toleration example is in the study doc, section 3.</details>
<details><summary>Hint 3</summary>Multi-node kind: create a cluster with a config that has 2 workers.</details>

## 12. Final challenge
Use **podAntiAffinity** to make sure two replicas of a Deployment never run on the same node. Scale to 2 and show they land on different nodes. This is a real high-availability technique.

## 13. What to submit (evidence)
Save all commands + `-o wide` outputs in `submissions/kubernetes/advanced/project-04/`. Then say: **"I submit Kubernetes Advanced Project 4."**

---
**Remember:** nodeSelector picks nodes; taints keep Pods off; tolerations let them in; affinity gives richer rules.
