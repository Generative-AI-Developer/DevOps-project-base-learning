---
id: kubernetes-advanced-project-05
track: kubernetes
level: advanced
order: 5
title: "DaemonSets and Static Pods"
prereqs: ["kubernetes-advanced-project-04"]
skills: ["DaemonSet", "static Pod", "node agents", "tolerations for control plane"]
certDomains: ["CKA: Workloads & Scheduling"]
estimatedTime: "60 minutes"
---

# DaemonSets and Static Pods

**Status:** 🔒 Locked

## 1. Objective
Run a DaemonSet (one Pod per node) and create a static Pod (run by kubelet from a file).

## 2. Real-world scenario
Every node needs a log collector running on it. A DaemonSet does this automatically. And you learn static Pods, which is how the control plane itself runs.

## 3. Skills and concepts you will learn
- Create a DaemonSet; see one Pod per node.
- Create and remove a static Pod.
- Understand how control-plane parts run.

## 4. Prerequisites
- Kubernetes Advanced Project 4 completed.
- Read: `study/kubernetes/advanced/05-daemonsets-static-pods.md`.
- Multi-node cluster (kind multi-node or killercoda) helps show "one per node".

## 5. Step-by-step requirements
1. Create a DaemonSet (a simple logger). Show one Pod per node (`kubectl get pods -o wide -l app=logger`).
2. Explain (or show) how it would add a Pod when a new node joins.
3. (kubeadm/killercoda) Create a **static Pod** by placing a YAML file in `/etc/kubernetes/manifests/`. Show it appears with the node name added.
4. Remove the static Pod by deleting the file. Show it is gone.

## 6. Tasks / challenges
- [ ] DaemonSet runs one Pod per node.
- [ ] Static Pod created from a file.
- [ ] Static Pod name includes the node name.
- [ ] Static Pod removed by deleting the file.

## 7. Expected outcome
You can run node-wide agents with DaemonSets and manage static Pods like the kubelet does.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the DaemonSet YAML and show `kubectl get pods -o wide -l app=logger` with one Pod per node.
2. You explain in one line how a DaemonSet handles a new node.
3. You create a static Pod (drop a file in the manifests folder) and show it running with `<name>-<node>` naming — OR, if on kind/minikube where you cannot easily reach the manifests folder, you clearly explain the static Pod mechanism and show the existing control-plane static Pods.
4. You show removing a static Pod by deleting its file (or explain it for kind/minikube).
5. All commands shown.

## 9. Verification checklist
- [ ] DaemonSet one-per-node.
- [ ] Static Pod created/removed (or clearly explained).
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-05/`.

## 10. Common mistakes
- Expecting a DaemonSet Pod on a tainted control-plane node without a toleration.
- Trying to `kubectl delete` a static Pod (remove the file instead).

## 11. Hints
<details><summary>Hint 1</summary>DaemonSet YAML is in `study/kubernetes/advanced/05-daemonsets-static-pods.md`, section 3.</details>
<details><summary>Hint 2</summary>To also run on the control plane, add a toleration for its taint.</details>
<details><summary>Hint 3</summary>Static Pod: `sudo cp mypod.yaml /etc/kubernetes/manifests/`; watch `kubectl get pods -o wide`. Remove: delete the file.</details>

## 12. Final challenge
Add a toleration to your DaemonSet so it ALSO runs on the control-plane node. Show a Pod now runs there too. Node agents (like log/monitoring) usually need this.

## 13. What to submit (evidence)
Save the DaemonSet YAML, the one-per-node output, and the static Pod steps in `submissions/kubernetes/advanced/project-05/`. Then say: **"I submit Kubernetes Advanced Project 5."**

---
**Remember:** DaemonSet = one Pod per node. Static Pod = kubelet runs it from a file. That is how the control plane runs.
