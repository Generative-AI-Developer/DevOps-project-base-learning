---
id: kubernetes-advanced-study-scheduling
track: kubernetes
level: advanced
topic: Scheduling - taints, tolerations, affinity
forProject: kubernetes-advanced-project-04
---

# Study: Scheduling (Where Pods Go)

> **Words to know**
> - **Scheduling** — deciding which node runs a Pod.
> - **Taint** — a "keep off" mark on a node.
> - **Toleration** — a Pod's permission to ignore a taint.
> - **Affinity** — rules that pull a Pod toward (or away from) certain nodes.
> - **nodeSelector** — the simple way to pick nodes by label.

## 1. Easy explanation (simple → deeper)
By default the scheduler picks any node with room. But sometimes you want control:
- **nodeSelector:** "run only on nodes with this label" (simple).
- **Taints + tolerations:** a node says "keep off" (taint); only Pods with a matching **toleration** may land there. Used for special nodes (e.g. GPU nodes, control plane).
- **Affinity/anti-affinity:** softer, richer rules ("prefer this zone", "do not put two copies on the same node").

## 2. Key concepts and terms
- Label a node: `kubectl label node <n> disk=ssd`.
- nodeSelector: `nodeSelector: { disk: ssd }` in the Pod spec.
- Taint a node: `kubectl taint node <n> key=value:NoSchedule`.
- Toleration: matches the taint so the Pod can run there.
- `nodeName` forces a Pod onto one node (rarely used).

## 3. Practical examples
```yaml
# nodeSelector
spec:
  nodeSelector:
    disk: ssd
  containers: [{ name: c, image: nginx:1.27 }]
---
# toleration (to run on a tainted node)
spec:
  tolerations:
    - key: "gpu"
      operator: "Equal"
      value: "true"
      effect: "NoSchedule"
```

## 4. Commands and config examples
```bash
kubectl label node <node> disk=ssd
kubectl taint node <node> gpu=true:NoSchedule
kubectl describe node <node> | grep -i taint
kubectl get pod <pod> -o wide          # which node did it land on?
kubectl taint node <node> gpu=true:NoSchedule-   # remove the taint (trailing -)
```

## 5. Hands-on exercises
1. Label a node. Use `nodeSelector` to force a Pod onto it.
2. Taint a node `NoSchedule`. Show a normal Pod avoids it.
3. Add a matching toleration and show the Pod can now land there.

## 6. Troubleshooting
- **Problem:** Pod stuck `Pending`.
  **Fix:** no node matches the nodeSelector/affinity, or all nodes are tainted. `kubectl describe pod` shows the reason.
- **Problem:** Pod lands where you did not want.
  **Fix:** you did not set a nodeSelector/affinity or taint.

## 7. Common mistakes and how to avoid them
- Taint effect confusion: `NoSchedule` (block new), `PreferNoSchedule` (avoid), `NoExecute` (evict existing).
- Forgetting the trailing `-` to remove a taint.

## 8. Certification notes (what the exam wants)
- **CKA:** "Workloads & Scheduling". Know nodeSelector, taints/tolerations, and node affinity.
- The control-plane node is tainted by default (that is why your apps do not run there).

## 9. Practice questions and tasks
1. What is a taint, and what is a toleration?
2. How do you pin a Pod to nodes with a label?
3. What are the three taint effects?

## 10. References
- Taints/tolerations: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/ (checked: 2026-09-18)
- Affinity: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/ (checked: 2026-09-18)

---
**Remember:** nodeSelector = simple pick. Taint = "keep off"; toleration = "I may enter". Affinity = richer rules.

<details><summary>Answers</summary>

1. A taint marks a node "keep off"; a toleration lets a Pod ignore that taint.
2. `nodeSelector` (or node affinity) with a matching node label.
3. NoSchedule, PreferNoSchedule, NoExecute.
</details>
