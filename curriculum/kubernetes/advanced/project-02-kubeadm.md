---
id: kubernetes-advanced-project-02
track: kubernetes
level: advanced
order: 2
title: "Build a Cluster with kubeadm"
prereqs: ["kubernetes-advanced-project-01"]
skills: ["kubeadm init", "CNI install", "kubeadm join", "node lifecycle"]
certDomains: ["CKA: Installation & Configuration"]
estimatedTime: "2 hours"
---

# Build a Cluster with kubeadm

**Status:** 🔒 Locked

## 1. Objective
Build a real Kubernetes cluster from scratch with kubeadm: control plane + a worker + a network plugin.

## 2. Real-world scenario
Your company needs its own cluster (not a cloud one). You build it with kubeadm, the standard tool the CKA exam uses.

## 3. Skills and concepts you will learn
- `kubeadm init` for the control plane.
- Install a CNI so Pods can talk.
- `kubeadm join` for a worker.

## 4. Prerequisites
- Kubernetes Advanced Project 1 completed.
- Read: `study/kubernetes/advanced/02-kubeadm.md`.
- ⚠️ You need 2 Linux VMs (or use **killercoda.com** CKA playground, which gives you nodes ready to go). kind/minikube cannot do this project.

## 5. Step-by-step requirements
1. On the control-plane node, run `kubeadm init` (with a pod-network-cidr).
2. Set up `kubectl` (copy the admin kubeconfig).
3. Install a CNI (Flannel or Calico). Wait for the control-plane node to become `Ready`.
4. On the worker node, run the `kubeadm join` command.
5. Show `kubectl get nodes` with the control plane and worker both `Ready`.

## 6. Tasks / challenges
- [ ] `kubeadm init` succeeded.
- [ ] kubectl works.
- [ ] CNI installed; node Ready.
- [ ] Worker joined and Ready.

## 7. Expected outcome
A working 2-node cluster you built yourself, both nodes `Ready`.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show `kubeadm init` output (or the key success lines).
2. `kubectl get nodes` works (kubeconfig set up).
3. You show the CNI was installed (the node moves from `NotReady` to `Ready`).
4. `kubectl get nodes` shows BOTH the control plane and a worker as `Ready`.
5. You explain in one line why nodes were `NotReady` before the CNI.
6. All commands shown.

## 9. Verification checklist
- [ ] Control plane up.
- [ ] CNI installed.
- [ ] Worker joined.
- [ ] Both nodes Ready.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-02/`.

## 10. Common mistakes
- No CNI → nodes stay NotReady.
- Expired join token → make a new one.
- Wrong pod-network-cidr for the CNI.

## 11. Hints
<details><summary>Hint 1</summary>Use the exact flow in `study/kubernetes/advanced/02-kubeadm.md`, section 3.</details>
<details><summary>Hint 2</summary>Lost the join command? `kubeadm token create --print-join-command` on the control plane.</details>
<details><summary>Hint 3</summary>No VMs? Use killercoda.com's CKA scenarios — they give you real nodes in the browser.</details>

## 12. Final challenge
Practice an **upgrade**: `kubeadm upgrade plan`, then drain a node, upgrade it, and uncordon it. (On killercoda there are guided upgrade labs.) Upgrades are a real CKA task.

## 13. What to submit (evidence)
Save the init output, CNI step, join step, and final `kubectl get nodes` in `submissions/kubernetes/advanced/project-02/`. Then say: **"I submit Kubernetes Advanced Project 2."**

---
**Remember:** init → CNI → join. No CNI means NotReady. This is a real CKA skill.
