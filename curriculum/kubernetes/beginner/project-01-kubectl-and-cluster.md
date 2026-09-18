---
id: kubernetes-beginner-project-01
track: kubernetes
level: beginner
order: 1
title: "Meet Your Cluster with kubectl"
prereqs: ["docker-advanced-project-07"]
skills: ["kubectl get/describe", "cluster-info", "contexts", "explain", "namespaces intro"]
certDomains: ["CKA/CKAD/CKS: kubectl fluency (core)"]
estimatedTime: "60 minutes"
---

# Meet Your Cluster with kubectl

**Status:** 🔒 Locked (unlocks when Kubernetes Beginner opens)

## 1. Objective
Set up a small cluster and explore it with `kubectl`. Get comfortable listing and describing things.

## 2. Real-world scenario
Your first day on a Kubernetes team. Your boss says: *"Log in, check the cluster is healthy, and show me the nodes and the system pods."* You must be at home in `kubectl`.

## 3. Skills and concepts you will learn
- Start a local cluster (kind or minikube).
- List and describe cluster objects.
- Check your context.
- Use `kubectl explain`.

## 4. Prerequisites
- Docker track completed (kind runs on Docker).
- kubectl + kind (or minikube) installed.
- Read: `study/kubernetes/beginner/01-kubectl-and-cluster.md`.

## 5. Step-by-step requirements
1. Create a cluster: `kind create cluster` (or `minikube start`).
2. Show the nodes: `kubectl get nodes -o wide`.
3. Show cluster info: `kubectl cluster-info`.
4. Show your current context: `kubectl config current-context`.
5. Show all pods in all namespaces: `kubectl get pods -A`.
6. Describe one system pod: `kubectl describe pod -n kube-system <a-pod-name>`.
7. Use `kubectl explain pod.spec` and read a bit.

## 6. Tasks / challenges
- [ ] Cluster running (node is `Ready`).
- [ ] `kubectl get nodes` works.
- [ ] `cluster-info` shown.
- [ ] `get pods -A` shows system pods.
- [ ] One pod described.
- [ ] `explain` tried.

## 7. Expected outcome
You have a running cluster and can explore it confidently with `kubectl`.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kubectl get nodes` shows at least one node in `Ready` state.
2. `kubectl cluster-info` output shown.
3. `kubectl config current-context` output shown.
4. `kubectl get pods -A` shows pods in `kube-system`.
5. `kubectl describe pod -n kube-system <name>` output shown (any system pod).
6. You paste a few lines from `kubectl explain pod.spec`.
7. All commands shown.

## 9. Verification checklist
- [ ] Node Ready.
- [ ] Explored with get/describe/explain.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-01/`.

## 10. Common mistakes
- Cluster not started → connection refused. Start it first.
- Wrong context → acting on the wrong cluster.

## 11. Hints
<details><summary>Hint 1</summary>`kind create cluster` then `kubectl get nodes`. Wait until the node is `Ready`.</details>
<details><summary>Hint 2</summary>Set `alias k=kubectl` to type faster. `k get pods -A` lists everything.</details>
<details><summary>Hint 3</summary>Pick any pod name from `kubectl get pods -n kube-system`, then `kubectl describe pod -n kube-system <that-name>`.</details>

## 12. Final challenge
Turn on kubectl autocomplete and the `k` alias for this session (see the kubectl docs cheat sheet). Being fast in the terminal is worth real exam points.

## 13. What to submit (evidence)
Save all command outputs in `submissions/kubernetes/beginner/project-01/`. Then say: **"I submit Kubernetes Beginner Project 1."**

---
**Remember:** `kubectl get`, `describe`, `explain`. Check your context. This is your home for the whole K8s journey.
