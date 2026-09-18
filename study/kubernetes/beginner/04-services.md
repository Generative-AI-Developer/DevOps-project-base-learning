---
id: kubernetes-beginner-study-services
track: kubernetes
level: beginner
topic: Services
forProject: kubernetes-beginner-project-04
---

# Study: Services (Stable Networking)

> **Words to know**
> - **Service** — a stable name and address for a set of Pods.
> - **ClusterIP** — a Service reachable only inside the cluster (the default).
> - **NodePort** — a Service reachable from outside on a node's port.
> - **Endpoint** — the actual Pod IPs a Service sends traffic to.

## 1. Easy explanation (simple → deeper)
Pods come and go. Their IP addresses change. So you cannot rely on a Pod's IP.

A **Service** gives a **stable** name and IP for a group of Pods. It also **load-balances** across them. You talk to the Service; it forwards to a healthy Pod.

Types you need now:
- **ClusterIP** (default): only inside the cluster.
- **NodePort**: opens a port on every node, so you can reach it from outside (good for testing).

## 2. Key concepts and terms
- A Service uses a **selector** (labels) to find its Pods.
- Inside the cluster, a Service is reachable by its **name** (DNS): `http://web` or `http://web.default.svc.cluster.local`.
- `port` = the Service port; `targetPort` = the Pod's container port.
- `kubectl expose` quickly makes a Service for a Deployment.

## 3. Practical examples
```yaml
apiVersion: v1
kind: Service
metadata:
  name: web
spec:
  selector:
    app: web          # matches Pods with label app=web
  ports:
    - port: 80         # service port
      targetPort: 80   # container port
  type: ClusterIP
```
```bash
kubectl expose deploy web --port=80 --target-port=80   # quick service
kubectl get svc
kubectl get endpoints web            # which Pods it points to
# test from inside the cluster:
kubectl run test --image=busybox -it --rm -- wget -qO- http://web
```

## 4. Commands and config examples
```bash
kubectl expose deploy web --port=80 --name=web --dry-run=client -o yaml > svc.yaml
kubectl get svc web -o wide
kubectl describe svc web          # selector + endpoints
# NodePort for outside access (testing):
kubectl expose deploy web --port=80 --type=NodePort --name=web-np
```

## 5. Hands-on exercises
1. Make a Deployment `web` (3 replicas). Expose it as a ClusterIP Service.
2. From a temporary Pod, `wget` the Service by name. It should answer.
3. Look at the endpoints — see the Pod IPs behind the Service.
4. Make a NodePort Service and reach it from outside.

## 6. Troubleshooting
- **Problem:** Service has no endpoints.
  **Fix:** the Service `selector` does not match any Pod labels. Fix the labels/selector.
- **Problem:** cannot reach a ClusterIP from your laptop.
  **Fix:** ClusterIP is inside-only. Use NodePort (or port-forward) for outside access.
- **`kubectl port-forward svc/web 8080:80`** is a handy way to test locally.

## 7. Common mistakes and how to avoid them
- Selector/label mismatch → no endpoints → nothing works.
- Confusing `port` and `targetPort`.
- Trying to reach ClusterIP from outside.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Services & Networking is ~20% of the exam.
- Know ClusterIP vs NodePort, selectors, endpoints, and `kubectl expose`.
- `kubectl port-forward` is great for quick testing.

## 9. Practice questions and tasks
1. Why do Pods need a Service in front of them?
2. What is the difference between ClusterIP and NodePort?
3. What does "no endpoints" usually mean?

## 10. References
- Services: https://kubernetes.io/docs/concepts/services-networking/service/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Kubernetes Services" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** A Service is a stable name + load balancer for Pods. It finds Pods by labels. ClusterIP inside, NodePort for outside.

<details><summary>Answers</summary>

1. Because Pod IPs change; a Service gives a stable name/IP and load-balances.
2. ClusterIP is inside-only; NodePort also opens a port on nodes for outside access.
3. The Service selector does not match any Pod labels.
</details>
