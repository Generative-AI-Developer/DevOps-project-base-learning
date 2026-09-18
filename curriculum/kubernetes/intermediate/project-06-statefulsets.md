---
id: kubernetes-intermediate-project-06
track: kubernetes
level: intermediate
order: 6
title: "Run a Stateful App with a StatefulSet"
prereqs: ["kubernetes-intermediate-project-05"]
skills: ["StatefulSet", "volumeClaimTemplates", "headless Service", "stable identity"]
certDomains: ["CKAD/CKA: workloads & storage"]
estimatedTime: "60–90 minutes"
---

# Run a Stateful App with a StatefulSet

**Status:** 🔒 Locked

## 1. Objective
Create a StatefulSet with stable Pod names and one PVC per Pod, fronted by a headless Service.

## 2. Real-world scenario
You must run a database cluster where each member has a fixed name and its own storage. A Deployment cannot do this. A StatefulSet can.

## 3. Skills and concepts you will learn
- Create a headless Service.
- Create a StatefulSet with `volumeClaimTemplates`.
- See stable names and per-Pod storage.

## 4. Prerequisites
- Kubernetes Intermediate Project 5 completed.
- Read: `study/kubernetes/intermediate/06-statefulsets.md`.
- Cluster needs a default StorageClass.

## 5. Step-by-step requirements
1. Create a headless Service (`clusterIP: None`) for `app: db`.
2. Create a StatefulSet `db` with 3 replicas and a `volumeClaimTemplates` (1Gi each).
3. Show the Pod names are `db-0`, `db-1`, `db-2` (stable).
4. Show there is one PVC per Pod (`kubectl get pvc`).
5. Delete `db-1`. Show it returns with the SAME name and its own storage.

## 6. Tasks / challenges
- [ ] Headless Service created.
- [ ] StatefulSet with 3 stable Pods.
- [ ] One PVC per Pod.
- [ ] Deleted Pod returns with same name.

## 7. Expected outcome
Three Pods with stable names, each with its own storage. Deleting one brings it back with the same identity.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the headless Service (`clusterIP: None`) and the StatefulSet YAML (with `serviceName` and `volumeClaimTemplates`).
2. `kubectl get pods -l app=db` shows `db-0`, `db-1`, `db-2`.
3. `kubectl get pvc` shows one PVC per Pod (e.g. `data-db-0`, `data-db-1`, `data-db-2`).
4. You delete `db-1` and show it returns as `db-1` (same name).
5. You explain in one line why a StatefulSet is used instead of a Deployment here.
6. All commands shown.

## 9. Verification checklist
- [ ] Stable names.
- [ ] Per-Pod PVCs.
- [ ] Identity kept after delete.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-06/`.

## 10. Common mistakes
- Forgetting the headless Service.
- PVCs Pending (no StorageClass).
- Expecting random names like a Deployment.

## 11. Hints
<details><summary>Hint 1</summary>Use the full Service + StatefulSet example in `study/kubernetes/intermediate/06-statefulsets.md`, section 3.</details>
<details><summary>Hint 2</summary>`kubectl get pods -l app=db` and `kubectl get pvc` show the stable identity and per-Pod storage.</details>
<details><summary>Hint 3</summary>Delete test: `kubectl delete pod db-1` then `kubectl get pods -l app=db -w`.</details>

## 12. Final challenge
Write a file into `db-0`'s storage, delete `db-0`, and after it returns show the file is still there. This proves each Pod keeps its own data across restarts.

## 13. What to submit (evidence)
Save the YAMLs, the stable-name output, the per-Pod PVCs, and the delete/return proof in `submissions/kubernetes/intermediate/project-06/`. Then say: **"I submit Kubernetes Intermediate Project 6."**

---
**Remember:** StatefulSet = stable names + own storage + order. Databases love it; stateless web apps do not need it.
