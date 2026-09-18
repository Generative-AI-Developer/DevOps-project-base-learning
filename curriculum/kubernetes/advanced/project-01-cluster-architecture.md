---
id: kubernetes-advanced-project-01
track: kubernetes
level: advanced
order: 1
title: "Map Your Cluster's Components"
prereqs: ["kubernetes-intermediate-project-08"]
skills: ["control plane parts", "kube-system", "static pods", "kubelet"]
certDomains: ["CKA: Cluster Architecture"]
estimatedTime: "60 minutes"
---

# Map Your Cluster's Components

**Status:** 🔒 Locked (unlocks when Kubernetes Advanced opens)

## 1. Objective
Find and explain every main part of your cluster: apiserver, etcd, scheduler, controller-manager, kubelet, and more.

## 2. Real-world scenario
Before you can fix a cluster, you must know how it is built. Your team asks: *"Show me every control-plane part and explain its job."*

## 3. Skills and concepts you will learn
- Identify control-plane components.
- Find static Pods and the kubelet.
- Explain each part in simple words.

## 4. Prerequisites
- Kubernetes Intermediate completed.
- Read: `study/kubernetes/advanced/01-cluster-architecture.md`.
- Best on a kubeadm cluster or killercoda (to see static Pods and kubelet). kind/minikube work for most of it.

## 5. Step-by-step requirements
1. List nodes; say which is the control plane.
2. List `kube-system` Pods; find apiserver, etcd, scheduler, controller-manager, coredns, kube-proxy.
3. (On kubeadm/killercoda) Show `/etc/kubernetes/manifests/` static Pod files.
4. (On a node) Show `systemctl status kubelet` and a few `journalctl -u kubelet` lines.
5. Write a short table: component → its job (in simple English).

## 6. Tasks / challenges
- [ ] Nodes listed, control plane identified.
- [ ] All main kube-system parts found.
- [ ] Static Pods shown (if available).
- [ ] kubelet status/logs shown (if available).
- [ ] Component → job table written.

## 7. Expected outcome
You can name every main part of the cluster and say what it does.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kubectl get nodes` shown, with the control-plane node identified.
2. `kubectl get pods -n kube-system` shows apiserver, etcd, scheduler, controller-manager, and coredns.
3. You show either the static Pod files (`/etc/kubernetes/manifests/`) OR clearly explain where they live if your setup hides them (kind/minikube).
4. You provide a table mapping each component to its job in simple English.
5. All commands shown.

## 9. Verification checklist
- [ ] All main parts identified.
- [ ] Jobs explained simply.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-01/`.

## 10. Common mistakes
- Mixing up scheduler (placement) and controller-manager (keeps desired state).
- Not knowing etcd is the database.

## 11. Hints
<details><summary>Hint 1</summary>`kubectl get pods -n kube-system -o wide` lists the control-plane Pods.</details>
<details><summary>Hint 2</summary>On kubeadm/killercoda: `ls /etc/kubernetes/manifests/` shows etcd, apiserver, scheduler, controller-manager as static Pods.</details>
<details><summary>Hint 3</summary>kubelet is a systemd service — use the skills from the Linux track: `systemctl status kubelet`, `journalctl -u kubelet`.</details>

## 12. Final challenge
Draw (in text) the flow of `kubectl apply -f pod.yaml`: which component receives it, where the state is stored, which component schedules it, and which one runs it. Understanding this flow makes CKA troubleshooting much easier.

## 13. What to submit (evidence)
Save all outputs and your component table in `submissions/kubernetes/advanced/project-01/`. Then say: **"I submit Kubernetes Advanced Project 1."**

---
**Remember:** apiserver, etcd, scheduler, controllers, kubelet — know each job. This is the map you use to fix things.
