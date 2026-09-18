---
id: kubernetes-intermediate-study-statefulsets
track: kubernetes
level: intermediate
topic: StatefulSets
forProject: kubernetes-intermediate-project-06
---

# Study: StatefulSets

> **Words to know**
> - **Stateful** — an app that remembers data (like a database). Opposite of stateless.
> - **StatefulSet** — a controller for stateful apps. Gives each Pod a stable name and its own storage.
> - **Stable identity** — Pod names stay the same: `db-0`, `db-1`, `db-2`.
> - **Headless Service** — a Service with no cluster IP, used to give each Pod a DNS name.

## 1. Easy explanation (simple → deeper)
A Deployment is great for **stateless** apps (any Pod is the same). But some apps are **stateful** (databases): each Pod needs a **stable name** and its **own storage**.

A **StatefulSet** gives:
1. **Stable names:** `db-0`, `db-1`, `db-2` (not random).
2. **Own storage:** each Pod gets its own PVC (via `volumeClaimTemplates`).
3. **Ordered** start and stop: `db-0` first, then `db-1`, etc.

It uses a **headless Service** so each Pod gets its own DNS name.

## 2. Key concepts and terms
- `volumeClaimTemplates` — makes one PVC per Pod automatically.
- Pod DNS: `db-0.dbsvc.namespace.svc.cluster.local`.
- Deleting a StatefulSet does not delete its PVCs by default (data is kept).

## 3. Practical examples
```yaml
apiVersion: v1
kind: Service
metadata: { name: dbsvc }
spec:
  clusterIP: None            # headless
  selector: { app: db }
  ports: [{ port: 5432 }]
---
apiVersion: apps/v1
kind: StatefulSet
metadata: { name: db }
spec:
  serviceName: dbsvc
  replicas: 3
  selector: { matchLabels: { app: db } }
  template:
    metadata: { labels: { app: db } }
    spec:
      containers:
        - name: c
          image: busybox
          command: ["sh","-c","hostname; sleep 3600"]
          volumeMounts: [{ name: data, mountPath: /data }]
  volumeClaimTemplates:
    - metadata: { name: data }
      spec:
        accessModes: ["ReadWriteOnce"]
        resources: { requests: { storage: 1Gi } }
```

## 4. Commands and config examples
```bash
kubectl get statefulset,pods,pvc
kubectl get pods -l app=db          # names: db-0, db-1, db-2
kubectl exec db-0 -- hostname       # stable name
```

## 5. Hands-on exercises
1. Create a headless Service + a StatefulSet with 3 replicas.
2. See the stable Pod names `db-0/1/2` and one PVC per Pod.
3. Delete `db-1`; watch it come back with the same name and its own storage.

## 6. Troubleshooting
- **Problem:** Pods stuck `Pending`.
  **Fix:** PVCs cannot bind (no StorageClass). Check `kubectl get pvc`.
- **Problem:** no stable DNS.
  **Fix:** you need the headless Service (`clusterIP: None`) named in `serviceName`.

## 7. Common mistakes and how to avoid them
- Using a Deployment for a database that needs stable identity/storage.
- Forgetting the headless Service.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** know when to use a StatefulSet vs a Deployment, and `volumeClaimTemplates`.
- Stable names and per-Pod storage are the key ideas.

## 9. Practice questions and tasks
1. When do you use a StatefulSet instead of a Deployment?
2. What does `volumeClaimTemplates` do?
3. What is a headless Service for?

## 10. References
- StatefulSets: https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "StatefulSet" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** StatefulSet = stable names + own storage + order. For databases, not stateless web apps.

<details><summary>Answers</summary>

1. For stateful apps (like databases) that need stable names and their own storage.
2. Creates one PVC per Pod automatically.
3. To give each Pod its own stable DNS name.
</details>
