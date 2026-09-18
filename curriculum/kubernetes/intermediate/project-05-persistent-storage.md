---
id: kubernetes-intermediate-project-05
track: kubernetes
level: intermediate
order: 5
title: "Keep Data with a PersistentVolumeClaim"
prereqs: ["kubernetes-intermediate-project-04"]
skills: ["PVC", "PV", "StorageClass", "access modes", "data persistence"]
certDomains: ["CKA: Storage", "CKAD: config & storage"]
estimatedTime: "60–90 minutes"
---

# Keep Data with a PersistentVolumeClaim

**Status:** 🔒 Locked

## 1. Objective
Create a PVC, mount it in a Pod, and prove data survives when the Pod is deleted.

## 2. Real-world scenario
Your app saves user uploads. If the Pod restarts, the uploads must NOT be lost. You use a PVC so the data lives outside the Pod.

## 3. Skills and concepts you will learn
- Create a PVC and check it is `Bound`.
- Mount a PVC in a Pod.
- Prove persistence across Pod deletion.

## 4. Prerequisites
- Kubernetes Intermediate Project 4 completed.
- Read: `study/kubernetes/intermediate/05-persistent-storage.md`.
- Your cluster needs a default StorageClass (kind/minikube usually have one — check `kubectl get storageclass`).

## 5. Step-by-step requirements
1. Create a PVC `data-pvc` (1Gi, ReadWriteOnce). Show it is `Bound`.
2. Run a Pod that mounts it at `/data` and writes `hello` into `/data/file.txt`.
3. Delete that Pod.
4. Run a NEW Pod with the SAME PVC and show `/data/file.txt` still says `hello`.
5. Show `kubectl get pvc,pv`.

## 6. Tasks / challenges
- [ ] PVC Bound.
- [ ] Pod writes to the PVC.
- [ ] Pod deleted.
- [ ] New Pod reads the same data (survived!).

## 7. Expected outcome
Data written by one Pod is still there for a new Pod, because it lives in the PVC, not the Pod.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the PVC YAML and show `kubectl get pvc` as `Bound`.
2. A Pod mounts the PVC and writes `/data/file.txt` (show the write).
3. You delete that Pod.
4. A NEW Pod with the same `claimName` shows `/data/file.txt` still contains `hello` (`kubectl exec ... cat /data/file.txt`).
5. `kubectl get pvc,pv` output shown.
6. You explain in one line what the Pod mounts (PVC, not PV).

## 9. Verification checklist
- [ ] PVC Bound.
- [ ] Data survived Pod deletion.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-05/`.

## 10. Common mistakes
- Using `emptyDir` instead of a PVC.
- PVC `Pending` because there is no StorageClass.
- Mounting the PV directly instead of the PVC.

## 11. Hints
<details><summary>Hint 1</summary>Use the PVC + Pod YAML in `study/kubernetes/intermediate/05-persistent-storage.md`, section 3.</details>
<details><summary>Hint 2</summary>If PVC is Pending: `kubectl get storageclass`. On kind/minikube a default class should exist.</details>
<details><summary>Hint 3</summary>Read after re-create: `kubectl exec <new-pod> -- cat /data/file.txt`.</details>

## 12. Final challenge
Use the PVC with a real **postgres** Deployment (mount at `/var/lib/postgresql/data`). Create a table, delete the Pod, and prove the table is still there after the new Pod starts. This is real stateful storage.

## 13. What to submit (evidence)
Save the PVC/Pod YAML, the write, the delete, and the survive proof in `submissions/kubernetes/intermediate/project-05/`. Then say: **"I submit Kubernetes Intermediate Project 5."**

---
**Remember:** PV = storage, PVC = request, Pod mounts the PVC. Data in a PVC survives Pod restarts.
