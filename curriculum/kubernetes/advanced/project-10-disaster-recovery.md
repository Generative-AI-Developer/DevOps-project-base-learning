---
id: kubernetes-advanced-project-10
track: kubernetes
level: advanced
order: 10
title: "Survive a Disaster (K8s Advanced Boss)"
prereqs: ["kubernetes-advanced-project-09"]
skills: ["cordon/drain/uncordon", "PodDisruptionBudget", "etcd restore", "HA thinking"]
certDomains: ["CKA: Cluster maintenance & troubleshooting"]
estimatedTime: "2 hours"
---

# Survive a Disaster (K8s Advanced Boss 🏆🏆)

**Status:** 🔒 Locked

This is the **final Kubernetes Advanced project**. Finish it to complete the level and unlock the **Certification Level** (CKAD, CKA, CKS). It combines your CKA skills into one disaster-recovery drill.

## 1. Objective
Do a full node-maintenance + recovery drill: run an app with HA settings, safely drain a node, restore from an etcd backup, and prove the app stayed available.

## 2. Real-world scenario
A node must go down for maintenance, and later someone deletes important objects. You must keep the app running through the maintenance, and restore the cluster after the deletion — with no lasting damage.

## 3. Skills and concepts you will learn
- Run an app with replicas + a PodDisruptionBudget.
- Cordon and drain a node safely.
- Restore etcd (from Project 3).
- Prove availability throughout.

## 4. Prerequisites
- Kubernetes Advanced Projects 1–9 completed.
- Read: `study/kubernetes/advanced/10-disaster-recovery.md`.
- Multi-node cluster + etcd access (kubeadm or killercoda).

## 5. Step-by-step requirements
1. Deploy an app `web` with **3 replicas**, spread across nodes (anti-affinity is a plus), plus a **PodDisruptionBudget** `minAvailable: 2`.
2. Start a loop that curls the app through its Service/Ingress.
3. **Node maintenance:** cordon + drain one worker node. Show Pods move to other nodes and the curl loop keeps working (no downtime).
4. Uncordon the node.
5. **Disaster + restore:** take an etcd snapshot, create a marker object, then restore the snapshot and show the marker is gone (state rolled back) — reusing your Project 3 skills.
6. Write a short "DR report": what you did, and how availability was kept.

## 6. Tasks / challenges
- [ ] App with 3 replicas + PDB.
- [ ] Node drained with no app downtime.
- [ ] Node uncordoned.
- [ ] etcd snapshot + restore done.
- [ ] DR report written.

## 7. Expected outcome
The app survived a node drain with no downtime, and you restored the cluster from an etcd backup. You proved both HA and DR.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `web` runs 3 replicas and has a PodDisruptionBudget (`kubectl get pdb`).
2. You cordon + drain a node and show Pods rescheduling to other nodes (`kubectl get pods -o wide`).
3. Your curl loop shows the app stayed reachable during the drain (no failed requests, or a clear near-zero failure explanation).
4. You uncordon the node and it accepts Pods again.
5. You show an etcd snapshot, a marker object created after it, and that the marker is gone after restore.
6. Your DR report explains what kept the app available (replicas spread across nodes + PDB).
7. All commands shown.

## 9. Verification checklist
- [ ] HA app + PDB.
- [ ] Drain with no downtime.
- [ ] etcd restore proven.
- [ ] DR report written.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-10/`.

## 10. Common mistakes
- Only 1–2 replicas on one node → downtime during drain.
- No PDB → drain can remove too many Pods.
- Not testing the etcd restore.

## 11. Hints
<details><summary>Hint 1</summary>Spread replicas: use `podAntiAffinity` (from Project 4's final challenge) so copies land on different nodes.</details>
<details><summary>Hint 2</summary>Drain: `kubectl drain <node> --ignore-daemonsets --delete-emptydir-data`. Watch Pods move with `kubectl get pods -o wide -w`.</details>
<details><summary>Hint 3</summary>Reuse your etcd save/restore commands from `study/kubernetes/advanced/03-etcd-backup.md`.</details>

## 12. Final challenge
Write a one-page **runbook** (in simple English) titled "How to safely take a node down and restore the cluster". List each step and each check. Real teams keep runbooks like this for emergencies.

## 13. What to submit (evidence)
Save all commands, the no-downtime proof, the etcd restore proof, and your DR report/runbook in `submissions/kubernetes/advanced/project-10/`. Then say: **"I submit Kubernetes Advanced Project 10."**

When it passes, you complete **Kubernetes Advanced** and unlock the **Certification Level** (CKAD, CKA, CKS)! 🎉🎉

---
**Remember:** HA = spread replicas + PDB. DR = etcd backup + restore. For nodes: cordon → drain → fix → uncordon.
