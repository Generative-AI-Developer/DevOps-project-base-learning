---
id: kubernetes-cka-project-02
track: kubernetes
level: certification
order: 2
title: "CKA Drill: Workloads and Scheduling (15%)"
prereqs: ["kubernetes-cka-project-01"]
skills: ["Deployments", "DaemonSets", "taints/tolerations", "affinity", "manual scheduling"]
certDomains: ["CKA: Workloads and Scheduling"]
estimatedTime: "timed: 20 minutes"
---

# CKA Drill: Workloads and Scheduling (15%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **20 minutes**.

## 1. Objective
Practice placing and scaling workloads: DaemonSets, taints/tolerations, affinity, and manual scheduling.

## 2. Real-world scenario
Exam tasks like "run this only on nodes with label X" or "make this Pod tolerate the control-plane taint".

## 3. Skills and concepts you will learn
- DaemonSets with tolerations.
- nodeSelector / affinity placement.
- Taint a node and schedule around it.

## 4. Prerequisites
- CKA Project 1 completed.
- Read: `study/kubernetes/certification/cka/00-cka-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Create a DaemonSet that also runs on the control-plane node (add the toleration).
2. Label a node; use `nodeSelector` to place a Pod there.
3. Taint a node `NoSchedule`; show a normal Pod avoids it; add a toleration so a Pod can land.
4. Verify placements with `-o wide`.

## 6. Tasks / challenges
- [ ] DaemonSet on all nodes (incl. control plane).
- [ ] nodeSelector placement.
- [ ] Taint + toleration.

## 7. Expected outcome
You controlled where several workloads run, within 20 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. DaemonSet runs on every node including the control plane (show the toleration + `-o wide`).
2. A `nodeSelector` Pod landed on the labeled node.
3. A taint blocks a normal Pod; a toleration lets one land (both shown).
4. You report your time.

## 9. Verification checklist
- [ ] DaemonSet everywhere.
- [ ] Placement controlled.
- [ ] Evidence saved in `submissions/kubernetes/certification/cka/project-02/`.

## 10. Common mistakes
- DaemonSet skips control plane (missing toleration).
- Forgetting the trailing `-` to remove a taint.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Advanced Projects 4 (scheduling) and 5 (DaemonSets).</details>
<details><summary>Hint 2</summary>Control-plane taint is usually `node-role.kubernetes.io/control-plane:NoSchedule` — tolerate it.</details>
<details><summary>Hint 3</summary>Verify with `kubectl get pods -o wide`.</details>

## 12. Final challenge
Use `podAntiAffinity` so two replicas never share a node. Prove they spread. HA + scheduling in one.

## 13. What to submit (evidence)
Save YAML, `-o wide` proofs, and your time in `submissions/kubernetes/certification/cka/project-02/`. Then say: **"I submit CKA Project 2."**

---
**Remember:** nodeSelector/affinity place Pods; taints keep them off; tolerations let them in. 15% of CKA.
