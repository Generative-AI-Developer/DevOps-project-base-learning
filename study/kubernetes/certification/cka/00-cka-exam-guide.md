---
id: kubernetes-cka-study-exam-guide
track: kubernetes
level: certification
topic: CKA exam guide and speed tips
forProject: kubernetes-cka-project-01
---

# Study: CKA Exam Guide and Speed Tips

> **Words to know**
> - **kubeadm** — builds/upgrades the cluster.
> - **etcd** — cluster database (backup/restore is a top task).
> - **kubeconfig** — the file that says how to reach a cluster and as who.
> - **drain/cordon** — safely take a node down.

## 1. Easy explanation (simple → deeper)
CKA is the **admin** exam. You will: fix broken nodes, back up etcd, set RBAC, manage storage, and repair Services. **Troubleshooting is 30%** — the biggest slice.

Speed and a clear method win. Use the docs (they are open), but know where things are.

## 2. Key concepts and terms (admin toolkit)
- `journalctl -u kubelet` — node problems (Linux skill!).
- `/etc/kubernetes/manifests/` — control-plane static Pods.
- `etcdctl snapshot save/restore` — backup/restore.
- `kubectl drain/cordon/uncordon` — node maintenance.
- `kubectl auth can-i` — check RBAC.
- Switch clusters/contexts fast: `kubectl config use-context <name>` (the exam has many clusters!).

## 3. Practical examples
```bash
kubectl config get-contexts          # the exam lists several
kubectl config use-context <name>    # ALWAYS switch to the task's cluster first
sudo systemctl status kubelet
journalctl -u kubelet | tail
```

## 4. Commands and config examples
```bash
alias k=kubectl
kubectl get nodes -o wide
kubectl -n kube-system get pods
ETCDCTL_API=3 etcdctl snapshot save /opt/e.db --cacert=... --cert=... --key=...
```

## 5. Hands-on exercises
1. Practice switching contexts (the exam penalizes working on the wrong cluster).
2. Do a timed etcd backup + restore.
3. Do a timed drain + uncordon.

## 6. Troubleshooting (exam mindset)
- **Read the task's cluster/context first.** Switch to it. This is the #1 CKA mistake.
- Use the method: get → describe → logs → node (kubelet) → control plane.
- Verify your fix.

## 7. Common mistakes and how to avoid them
- Working on the wrong cluster (switch context first!).
- Forgetting the node side (kubelet, systemd).
- Not verifying.

## 8. Certification notes (what the exam wants)
- Troubleshooting 30%, Architecture/Install 25% — practice these most.
- Know etcd backup/restore, kubeadm upgrade, RBAC, static Pods cold.

## 9. Practice questions and tasks
1. What is the #1 mistake on a multi-cluster exam?
2. Where do you look for a NotReady node?
3. Which command backs up etcd?

## 10. References
- CKA curriculum: https://github.com/cncf/curriculum (checked: 2026-09-18)
- Video: **KodeKloud** — "CKA" course — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** Switch to the task's cluster first. Method beats luck. Troubleshooting is 30%.

<details><summary>Answers</summary>

1. Working on the wrong cluster — always `use-context` first.
2. The node's kubelet: `systemctl status kubelet`, `journalctl -u kubelet`.
3. `etcdctl snapshot save`.
</details>
