---
id: kubernetes-advanced-study-etcd-backup
track: kubernetes
level: advanced
topic: etcd backup and restore
forProject: kubernetes-advanced-project-03
---

# Study: etcd Backup and Restore

> **Words to know**
> - **etcd** — the cluster's database. Holds ALL cluster state.
> - **Snapshot** — a saved copy of etcd at one moment.
> - **Restore** — bring etcd back from a snapshot.
> - **etcdctl** — the tool to talk to etcd.

## 1. Easy explanation (simple → deeper)
**etcd** stores everything about your cluster: every Pod, Service, Secret, config. If etcd is lost and you have no backup, the cluster state is **gone**.

So you make a **snapshot** (a backup file). If disaster happens, you **restore** from it. This is one of the most important CKA skills — and it is the same idea as the Linux backup project you did!

## 2. Key concepts and terms
- `etcdctl snapshot save` makes a backup.
- `etcdctl snapshot restore` restores to a new data folder.
- etcd needs certificates to talk to it (on a kubeadm control plane, they are in `/etc/kubernetes/pki/etcd/`).
- Set `ETCDCTL_API=3`.

## 3. Practical examples
```bash
# BACKUP (run on the control-plane node)
sudo ETCDCTL_API=3 etcdctl snapshot save /opt/etcd-backup.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# check the snapshot
sudo ETCDCTL_API=3 etcdctl snapshot status /opt/etcd-backup.db --write-out=table
```

## 4. Commands and config examples
```bash
# RESTORE (idea): restore to a new data dir, then point etcd at it
sudo ETCDCTL_API=3 etcdctl snapshot restore /opt/etcd-backup.db \
  --data-dir=/var/lib/etcd-restore
# then edit the etcd static pod manifest to use the new data dir, and let kubelet restart etcd
```

## 5. Hands-on exercises (kubeadm or killercoda)
1. Make an etcd snapshot. Check its status.
2. Create a test object (like a namespace) AFTER the backup.
3. Restore the snapshot and confirm the test object is gone (proves the restore worked).

## 6. Troubleshooting
- **Problem:** `context deadline exceeded` / cert errors.
  **Fix:** wrong endpoints or cert paths. Use the etcd cert files in `/etc/kubernetes/pki/etcd/`.
- **Problem:** cluster does not come back after restore.
  **Fix:** the etcd static Pod must point to the restored data dir. Check the manifest and kubelet logs.

## 7. Common mistakes and how to avoid them
- Forgetting `ETCDCTL_API=3`.
- Wrong cert paths.
- Not testing the restore.

## 8. Certification notes (what the exam wants)
- **CKA:** etcd backup and restore is a classic, high-value exam task. Practice it until it is automatic.
- Know the cert flags and the snapshot save/restore commands.

## 9. Practice questions and tasks
1. What does etcd store?
2. Which command makes a backup?
3. Why must you test a restore?

## 10. References
- Back up etcd: https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/ (checked: 2026-09-18)
- Video: **KodeKloud** — "etcd backup and restore" — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** etcd = the cluster database. `snapshot save` to back up, `snapshot restore` to recover. Same idea as your Linux backups.

<details><summary>Answers</summary>

1. All cluster state (every object).
2. `etcdctl snapshot save`.
3. A backup you cannot restore is useless — always test it.
</details>
