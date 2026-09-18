---
id: kubernetes-intermediate-study-resources
track: kubernetes
level: intermediate
topic: Resource requests and limits
forProject: kubernetes-intermediate-project-02
---

# Study: Resource Requests and Limits

> **Words to know**
> - **Request** — how much CPU/memory a container is guaranteed. Used for scheduling.
> - **Limit** — the maximum a container may use.
> - **CPU units** — `1` = 1 CPU, `500m` = half a CPU (m = milli = 1/1000).
> - **Memory units** — `Mi` (mebibytes), `Gi` (gibibytes).

## 1. Easy explanation (simple → deeper)
Each container should say what it needs.
- **Request** = "I need at least this much." Kubernetes uses this to pick a node with room.
- **Limit** = "Never let me use more than this." Protects the node from a greedy container.

If a container passes its **memory limit**, it is killed (OOM). If it passes its **CPU limit**, it is slowed down (throttled), not killed.

## 2. Key concepts and terms
- `requests` affect **scheduling** (where the Pod goes).
- `limits` affect **runtime** (the cap).
- No request set → the scheduler guesses; can lead to bad placement.
- **QoS classes:** Guaranteed (requests = limits), Burstable (some set), BestEffort (none). Higher QoS = less likely to be evicted.

## 3. Practical examples
```yaml
containers:
  - name: app
    image: nginx:1.27
    resources:
      requests:
        cpu: "250m"
        memory: "64Mi"
      limits:
        cpu: "500m"
        memory: "128Mi"
```

## 4. Commands and config examples
```bash
kubectl top pods                     # live usage (needs metrics-server)
kubectl describe pod <name>          # shows requests/limits + QoS class
kubectl describe node <node>         # shows allocated vs capacity
```

## 5. Hands-on exercises
1. Add requests and limits to a Deployment.
2. Check the QoS class with `kubectl describe pod`.
3. Set a tiny memory limit and run a memory-heavy container; see it OOM-killed.

## 6. Troubleshooting
- **Problem:** Pod `Pending` with "Insufficient cpu/memory".
  **Fix:** the request is bigger than any node has free. Lower the request or free up space.
- **Problem:** container keeps getting OOMKilled.
  **Fix:** raise the memory limit, or fix the app's memory use.

## 7. Common mistakes and how to avoid them
- No requests → bad scheduling.
- Limit far below what the app needs → constant OOM kills.
- Setting CPU limit too low → the app is slow (throttled).

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** setting requests/limits is a common task.
- Know the units (`m` for CPU, `Mi`/`Gi` for memory) and QoS classes.
- **LimitRange** and **ResourceQuota** set defaults/caps per namespace (CKA).

## 9. Practice questions and tasks
1. What is the difference between a request and a limit?
2. What happens when a container passes its memory limit? Its CPU limit?
3. Which value does the scheduler use?

## 10. References
- Resources: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ (checked: 2026-09-18)
- Video: **KodeKloud** — "Requests and limits" — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** Request = guaranteed (for scheduling). Limit = maximum (for runtime). Memory over limit → killed; CPU over limit → throttled.

<details><summary>Answers</summary>

1. Request is the guaranteed amount (used to schedule); limit is the maximum allowed.
2. Over memory limit → OOMKilled; over CPU limit → throttled (slowed).
3. The request.
</details>
