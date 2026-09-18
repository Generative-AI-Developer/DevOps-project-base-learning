---
id: kubernetes-advanced-study-cluster-architecture
track: kubernetes
level: advanced
topic: Cluster architecture and components
forProject: kubernetes-advanced-project-01
---

# Study: Cluster Architecture

> **Words to know**
> - **Control plane** — the brain of the cluster (makes decisions).
> - **Worker node** — a machine that runs your app Pods.
> - **etcd** — the cluster's database. Stores all cluster state.
> - **kubelet** — the agent on each node that runs Pods.

## 1. Easy explanation (simple → deeper)
A cluster has two kinds of machines:
1. **Control plane** — the brain.
2. **Worker nodes** — run the apps.

**Control plane parts:**
- **kube-apiserver** — the front door. Everything talks to it.
- **etcd** — the database. Stores all state (the "source of truth").
- **kube-scheduler** — decides which node runs each new Pod.
- **kube-controller-manager** — keeps the desired state (restarts, replicas).

**On every node:**
- **kubelet** — runs and watches Pods.
- **kube-proxy** — handles Service networking.
- **container runtime** — actually runs containers (e.g. containerd).

## 2. Key concepts and terms
- You (`kubectl`) → **apiserver** → **etcd** (save) → controllers/scheduler act → **kubelet** runs Pods.
- If **etcd** is lost with no backup, the cluster state is lost. So back it up!
- Control-plane parts often run as **static Pods** (managed by kubelet from files in `/etc/kubernetes/manifests`).

## 3. Practical examples
```bash
kubectl get nodes                        # control-plane + workers
kubectl get pods -n kube-system          # apiserver, etcd, scheduler, controllers, coredns...
kubectl get componentstatuses            # (older) health of control-plane parts
```

## 4. Commands and config examples
```bash
kubectl -n kube-system get pods -o wide
ls /etc/kubernetes/manifests/            # static pod files (on a kubeadm control plane)
sudo systemctl status kubelet            # kubelet is a systemd service (from Linux track!)
journalctl -u kubelet | tail             # kubelet logs
```

## 5. Hands-on exercises
1. List nodes and label which is the control plane.
2. List `kube-system` Pods. Find apiserver, etcd, scheduler, controller-manager, coredns.
3. On a kubeadm node, look at `/etc/kubernetes/manifests/`.

## 6. Troubleshooting
- **Problem:** `kubectl` does not respond.
  **Fix:** the apiserver may be down. On the control-plane node, check the static Pod and `journalctl -u kubelet`.
- **Problem:** Pods do not schedule.
  **Fix:** the scheduler may be down, or nodes are `NotReady`.

## 7. Common mistakes and how to avoid them
- Not knowing which part does what — then you cannot fix problems.
- Ignoring etcd backups.

## 8. Certification notes (what the exam wants)
- **CKA:** "Cluster Architecture, Installation and Configuration" is ~25%.
- Know each component's job, that control-plane parts are static Pods (kubeadm), and that kubelet is a systemd service.

## 9. Practice questions and tasks
1. What does etcd store?
2. What does the scheduler do?
3. Where do static Pod files live on a kubeadm node?

## 10. References
- Components: https://kubernetes.io/docs/concepts/overview/components/ (checked: 2026-09-18)
- Video: **KodeKloud** — "Kubernetes architecture" — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** apiserver = front door, etcd = database, scheduler = placement, controllers = keep desired state, kubelet = runs Pods.

<details><summary>Answers</summary>

1. All cluster state (the source of truth).
2. Decides which node runs each new Pod.
3. `/etc/kubernetes/manifests/`.
</details>
