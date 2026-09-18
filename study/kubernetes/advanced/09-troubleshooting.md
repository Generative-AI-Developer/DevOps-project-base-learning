---
id: kubernetes-advanced-study-troubleshooting
track: kubernetes
level: advanced
topic: Cluster troubleshooting
forProject: kubernetes-advanced-project-09
---

# Study: Cluster Troubleshooting

> **Words to know**
> - **NotReady** — a node that is not healthy.
> - **kubelet** — the node agent; if it is down, the node breaks.
> - **Events** — messages that explain what happened (`kubectl describe`).
> - **CrashLoopBackOff** — a Pod that keeps crashing and restarting.

## 1. Easy explanation (simple → deeper)
Troubleshooting is the biggest part of CKA (~30%). The secret is a **method**, not luck. Work from the outside in:
1. **Objects:** `kubectl get pods/nodes` — what is broken?
2. **Details:** `kubectl describe` — read the Events.
3. **Logs:** `kubectl logs` (app) and `journalctl -u kubelet` (node).
4. **Node health:** is the kubelet running? is the node Ready?
5. **Control plane:** are the static Pods healthy?

## 2. Key concepts and terms
Common problems and where to look:
- **Pod Pending** → `describe pod` (no node/resources/PVC).
- **CrashLoopBackOff** → `kubectl logs` (app crashes).
- **ImagePullBackOff** → wrong image/registry.
- **Node NotReady** → `journalctl -u kubelet` on the node; is kubelet running? is the CNI ok?
- **Service not working** → check endpoints (labels), then DNS, then NetworkPolicy.

## 3. Practical examples
```bash
kubectl get nodes
kubectl describe node <node> | tail -30       # conditions + events
ssh <node>; sudo systemctl status kubelet ; journalctl -u kubelet | tail
kubectl get pods -A -o wide | grep -v Running  # anything not Running
kubectl describe pod <pod>                      # Events at the bottom
kubectl logs <pod> --previous                   # logs of the crashed instance
```

## 4. Commands and config examples
```bash
kubectl get events -A --sort-by=.lastTimestamp | tail
kubectl -n kube-system get pods                 # control-plane health
sudo crictl ps                                   # containers on a node (runtime)
```

## 5. Hands-on exercises
1. Break a Deployment with a bad image; find and fix it via `describe`/`logs`.
2. Stop the kubelet on a node (`systemctl stop kubelet`); see the node go `NotReady`; start it again.
3. Break a Service by changing a label; fix it by matching labels again.

## 6. Troubleshooting (method summary)
- Start wide (`get`), then narrow (`describe`, `logs`).
- Node problems → kubelet + `journalctl`.
- Control-plane problems → static Pods + `journalctl -u kubelet`.
- Networking → endpoints → DNS → NetworkPolicy.

## 7. Common mistakes and how to avoid them
- Guessing instead of reading Events and logs.
- Forgetting the node side (kubelet, runtime).
- Not using `--previous` for crashed Pods.

## 8. Certification notes (what the exam wants)
- **CKA:** Troubleshooting is ~30%. This method wins points fast.
- Practice: broken kubelet, wrong static Pod, failing Pods, broken Services.

## 9. Practice questions and tasks
1. What does CrashLoopBackOff mean, and where do you look?
2. A node is NotReady — what do you check on the node?
3. A Service has no endpoints — what is wrong?

## 10. References
- Debug clusters: https://kubernetes.io/docs/tasks/debug/debug-cluster/ (checked: 2026-09-18)
- Debug Pods: https://kubernetes.io/docs/tasks/debug/debug-application/ (checked: 2026-09-18)

---
**Remember:** Method beats luck. get → describe → logs → node (kubelet) → control plane. Read the Events.

<details><summary>Answers</summary>

1. The Pod keeps crashing; look at `kubectl logs <pod>` (and `--previous`).
2. Is the kubelet running? Check `systemctl status kubelet` and `journalctl -u kubelet`; also the CNI.
3. The Service selector does not match any Pod labels.
</details>
