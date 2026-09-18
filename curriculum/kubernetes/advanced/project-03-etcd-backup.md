---
id: kubernetes-advanced-project-03
track: kubernetes
level: advanced
order: 3
title: "Back Up and Restore etcd"
prereqs: ["kubernetes-advanced-project-02"]
skills: ["etcdctl snapshot save", "snapshot restore", "etcd certs", "disaster recovery"]
certDomains: ["CKA: Cluster maintenance (high value)"]
estimatedTime: "90 minutes"
---

# Back Up and Restore etcd

**Status:** 🔒 Locked

## 1. Objective
Make an etcd snapshot, then restore it — and prove the restore actually rolled the cluster back.

## 2. Real-world scenario
Someone deleted important objects by mistake. With an etcd backup, you can restore the cluster to before the mistake. This is a top CKA skill.

## 3. Skills and concepts you will learn
- Make an etcd snapshot with the right certs.
- Check the snapshot.
- Restore and prove it worked.

## 4. Prerequisites
- Kubernetes Advanced Project 2 completed.
- Read: `study/kubernetes/advanced/03-etcd-backup.md`.
- ⚠️ Needs a kubeadm control plane (or killercoda). kind/minikube hide etcd.

## 5. Step-by-step requirements
1. Make an etcd snapshot to a file (use the etcd certs).
2. Check the snapshot with `snapshot status`.
3. Create a marker object AFTER the backup (e.g. `kubectl create namespace after-backup`).
4. Restore the snapshot (to a new data dir) and make etcd use it.
5. Prove the restore worked: the `after-backup` namespace should be GONE (because it was created after the snapshot).

## 6. Tasks / challenges
- [ ] Snapshot saved.
- [ ] Snapshot status checked.
- [ ] Marker object created after backup.
- [ ] Restore done.
- [ ] Marker object gone after restore (proof).

## 7. Expected outcome
You backed up etcd and restored it. The state rolled back to the snapshot moment.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show the `etcdctl snapshot save` command (with cert flags) and the created file.
2. `etcdctl snapshot status <file> --write-out=table` output shown.
3. You created a marker object after the backup (show it existed).
4. You restored the snapshot and made etcd use the restored data.
5. After restore, the marker object is **gone** (`kubectl get ns` no longer shows `after-backup`).
6. You explain in one line why the marker disappeared.

## 9. Verification checklist
- [ ] Snapshot + status.
- [ ] Restore performed.
- [ ] Rollback proven (marker gone).
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-03/`.

## 10. Common mistakes
- Forgetting `ETCDCTL_API=3` or wrong cert paths.
- Not testing the restore.
- Restore data dir not wired into the etcd static Pod.

## 11. Hints
<details><summary>Hint 1</summary>Use the exact save command in `study/kubernetes/advanced/03-etcd-backup.md`, section 3.</details>
<details><summary>Hint 2</summary>killercoda has a guided "etcd backup/restore" CKA scenario — great for safe practice.</details>
<details><summary>Hint 3</summary>After restore, the etcd static Pod manifest must point to the restored `--data-dir`; kubelet restarts etcd from it.</details>

## 12. Final challenge
Time yourself: do a full backup + restore in under 15 minutes. In the real CKA exam, speed matters. Practice until it is smooth.

## 13. What to submit (evidence)
Save the save/status/restore commands and the proof the marker namespace is gone in `submissions/kubernetes/advanced/project-03/`. Then say: **"I submit Kubernetes Advanced Project 3."**

---
**Remember:** etcd snapshot save + restore = cluster time machine. A classic CKA task. Practice it until it is automatic.
