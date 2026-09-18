---
id: kubernetes-advanced-study-kubeadm
track: kubernetes
level: advanced
topic: Building and upgrading a cluster with kubeadm
forProject: kubernetes-advanced-project-02
---

# Study: kubeadm (Build and Upgrade a Cluster)

> **Words to know**
> - **kubeadm** — a tool that builds a Kubernetes cluster.
> - **Bootstrap** — start the cluster for the first time.
> - **join** — add a worker node to the cluster.
> - **CNI** — the network plugin that lets Pods talk (e.g. Calico, Flannel).

## 1. Easy explanation (simple → deeper)
`kubeadm` builds a real cluster step by step:
1. **`kubeadm init`** on the control-plane node — starts the cluster.
2. Install a **CNI** (network plugin) so Pods can talk.
3. **`kubeadm join`** on each worker — adds it to the cluster.

You can also **upgrade** the cluster version with kubeadm, one node at a time, safely.

## 2. Key concepts and terms
- `kubeadm init --pod-network-cidr=...` starts the control plane.
- After init, copy the admin kubeconfig to use `kubectl`.
- CNI must be installed or nodes stay `NotReady`.
- Upgrade order: control plane first, then workers. Drain a node before upgrading it.

## 3. Practical examples
```bash
# on the control-plane node
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
mkdir -p $HOME/.kube && sudo cp /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
kubectl apply -f <a CNI, e.g. Flannel or Calico manifest>

# on each worker node (use the token printed by init)
sudo kubeadm join <ip>:6443 --token <t> --discovery-token-ca-cert-hash sha256:<hash>
```

## 4. Commands and config examples
```bash
kubeadm token create --print-join-command   # get a fresh join command
kubectl get nodes                            # workers should become Ready after CNI
# upgrade (idea):
kubeadm upgrade plan
kubectl drain <node> --ignore-daemonsets
# ... apt install new kubeadm/kubelet, kubeadm upgrade apply/node ...
kubectl uncordon <node>
```

## 5. Hands-on exercises (use VMs or killercoda)
1. `kubeadm init` on a control plane. Set up kubectl.
2. Install a CNI. Watch the node become `Ready`.
3. Join one worker with `kubeadm join`.

## 6. Troubleshooting
- **Problem:** nodes stay `NotReady`.
  **Fix:** no CNI installed. Install one.
- **Problem:** join fails with a token error.
  **Fix:** tokens expire. Make a new one: `kubeadm token create --print-join-command`.

## 7. Common mistakes and how to avoid them
- Forgetting the CNI — nodes never become Ready.
- Not draining a node before upgrading it.
- Wrong pod-network-cidr for the chosen CNI.

## 8. Certification notes (what the exam wants)
- **CKA:** installing and upgrading with kubeadm is a real exam task.
- Know the init → CNI → join flow, and the drain/upgrade/uncordon order.

## 9. Practice questions and tasks
1. What are the 3 main steps to build a cluster with kubeadm?
2. Why do nodes stay NotReady after init?
3. What do you do to a node before upgrading it?

## 10. References
- kubeadm: https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ (checked: 2026-09-18)
- Upgrade: https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/ (checked: 2026-09-18)

---
**Remember:** init → install CNI → join. Upgrade control plane first, drain nodes before upgrading them.

<details><summary>Answers</summary>

1. `kubeadm init`, install a CNI, then `kubeadm join` the workers.
2. No network plugin (CNI) is installed yet.
3. Drain it (`kubectl drain`) so its Pods move away safely.
</details>
