---
id: kubernetes-advanced-study-daemonsets-static-pods
track: kubernetes
level: advanced
topic: DaemonSets and static Pods
forProject: kubernetes-advanced-project-05
---

# Study: DaemonSets and Static Pods

> **Words to know**
> - **DaemonSet** — runs one copy of a Pod on every node (or some nodes).
> - **Static Pod** — a Pod the kubelet runs directly from a file, not from the apiserver.
> - **Node agent** — a program that must run on each node (like a log collector).

## 1. Easy explanation (simple → deeper)
Two special ways to run Pods:
1. **DaemonSet:** "run one copy on every node." Great for node agents: log collectors, monitoring, network plugins.
2. **Static Pod:** the kubelet runs it from a **file on the node** (`/etc/kubernetes/manifests/`), even if the apiserver is down. The control-plane parts (apiserver, etcd...) are static Pods.

## 2. Key concepts and terms
- DaemonSet automatically adds a Pod when a new node joins.
- DaemonSet Pods often need tolerations to run on tainted nodes (like the control plane).
- Static Pod: drop a Pod YAML in the manifests folder; kubelet runs it. Its name gets the node name added.
- You cannot delete a static Pod with `kubectl` — remove the file instead.

## 3. Practical examples
```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata: { name: node-logger }
spec:
  selector: { matchLabels: { app: logger } }
  template:
    metadata: { labels: { app: logger } }
    spec:
      containers:
        - name: logger
          image: busybox
          command: ["sh","-c","while true; do echo log from $(hostname); sleep 10; done"]
```

## 4. Commands and config examples
```bash
kubectl get daemonset -A
kubectl get pods -o wide -l app=logger      # one per node
# static pod (on a node):
sudo cp mypod.yaml /etc/kubernetes/manifests/   # kubelet starts it
kubectl get pods -o wide                          # shows <name>-<nodename>
sudo rm /etc/kubernetes/manifests/mypod.yaml      # remove to stop it
```

## 5. Hands-on exercises
1. Create a DaemonSet. Show one Pod runs on each node.
2. Add a node (or scale a kind cluster) and watch a new DaemonSet Pod appear.
3. (kubeadm/killercoda) Create a static Pod by dropping a file in the manifests folder.

## 6. Troubleshooting
- **Problem:** DaemonSet skips the control-plane node.
  **Fix:** the control plane is tainted; add a toleration to the DaemonSet.
- **Problem:** `kubectl delete` will not remove a Pod.
  **Fix:** it may be a static Pod — remove its file from the manifests folder.

## 7. Common mistakes and how to avoid them
- Expecting a DaemonSet on tainted nodes without a toleration.
- Trying to delete a static Pod with kubectl.

## 8. Certification notes (what the exam wants)
- **CKA:** know DaemonSets and static Pods (how to create/find/remove them).
- Remember control-plane components ARE static Pods.

## 9. Practice questions and tasks
1. What does a DaemonSet do?
2. Where do static Pod files live?
3. How do you remove a static Pod?

## 10. References
- DaemonSet: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ (checked: 2026-09-18)
- Static Pods: https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/ (checked: 2026-09-18)

---
**Remember:** DaemonSet = one Pod per node. Static Pod = kubelet runs it from a file. Control-plane parts are static Pods.

<details><summary>Answers</summary>

1. Runs one copy of a Pod on every (or selected) node.
2. `/etc/kubernetes/manifests/` (kubelet's manifest path).
3. Remove its file from the manifests folder.
</details>
