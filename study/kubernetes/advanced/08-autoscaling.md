---
id: kubernetes-advanced-study-autoscaling
track: kubernetes
level: advanced
topic: Autoscaling with HPA
forProject: kubernetes-advanced-project-08
---

# Study: Autoscaling (HPA)

> **Words to know**
> - **HPA** — Horizontal Pod Autoscaler. Adds or removes Pod copies based on load.
> - **Horizontal scaling** — more copies (Pods). Vertical scaling — bigger Pods.
> - **metrics-server** — provides CPU/memory numbers the HPA needs.
> - **Target** — the value the HPA tries to keep (e.g. 50% CPU).

## 1. Easy explanation (simple → deeper)
When traffic goes up, you want more Pods. When it goes down, you want fewer (to save money). The **HPA** does this automatically.

It watches a metric (usually CPU %) and keeps it near a **target**. If CPU is too high, it adds Pods. If low, it removes Pods (down to a minimum).

The HPA needs the **metrics-server** to read CPU/memory.

## 2. Key concepts and terms
- HPA needs the target Deployment to have CPU **requests** set (so % makes sense).
- `minReplicas` and `maxReplicas` set the range.
- `kubectl top` must work (metrics-server installed).

## 3. Practical examples
```bash
# make sure metrics-server is installed, then:
kubectl autoscale deploy web --cpu-percent=50 --min=2 --max=10
kubectl get hpa
kubectl top pods
```
Or as YAML:
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata: { name: web }
spec:
  scaleTargetRef: { apiVersion: apps/v1, kind: Deployment, name: web }
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource: { name: cpu, target: { type: Utilization, averageUtilization: 50 } }
```

## 4. Commands and config examples
```bash
kubectl top nodes ; kubectl top pods      # needs metrics-server
kubectl get hpa -w                          # watch it scale
# make load to trigger scaling:
kubectl run load --image=busybox -it --rm -- sh -c "while true; do wget -q -O- http://web; done"
```

## 5. Hands-on exercises
1. Install metrics-server (if needed). Confirm `kubectl top pods` works.
2. Add CPU requests to a Deployment. Create an HPA (50% CPU, min 2, max 10).
3. Make load and watch the HPA add Pods. Stop the load and watch it scale down.

## 6. Troubleshooting
- **Problem:** HPA shows `<unknown>` for CPU.
  **Fix:** metrics-server is missing/not ready, or the Deployment has no CPU requests.
- **Problem:** it never scales.
  **Fix:** load is too low, or requests are set too high (so % stays low).

## 7. Common mistakes and how to avoid them
- No CPU requests → HPA cannot compute a percentage.
- No metrics-server → no metrics.
- Setting max too low → cannot handle spikes.

## 8. Certification notes (what the exam wants)
- **CKA/CKAD:** know `kubectl autoscale`, the HPA object, and that requests + metrics-server are required.

## 9. Practice questions and tasks
1. What does an HPA do?
2. What two things must exist for CPU-based HPA to work?
3. What is the difference between horizontal and vertical scaling?

## 10. References
- HPA: https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ (checked: 2026-09-18)
- metrics-server: https://github.com/kubernetes-sigs/metrics-server (checked: 2026-09-18)

---
**Remember:** HPA adds/removes Pods to keep a metric near a target. It needs CPU requests + metrics-server.

<details><summary>Answers</summary>

1. Automatically adds or removes Pod copies based on load.
2. CPU requests on the Deployment, and a working metrics-server.
3. Horizontal = more copies; vertical = bigger single Pods.
</details>
