---
id: kubernetes-beginner-study-deployments
track: kubernetes
level: beginner
topic: ReplicaSets and Deployments
forProject: kubernetes-beginner-project-03
---

# Study: Deployments (Run Many Copies)

> **Words to know**
> - **Deployment** — an object that runs and manages many copies of a Pod.
> - **Replica** — one copy of the Pod. `replicas: 3` means 3 copies.
> - **ReplicaSet** — the thing a Deployment uses to keep the right number of Pods.
> - **Self-healing** — if a Pod dies, Kubernetes makes a new one.

## 1. Easy explanation (simple → deeper)
A bare Pod does not come back if it dies. A **Deployment** fixes this. It says "always keep N copies running". If one dies, Kubernetes makes a new one. This is **self-healing**.

A Deployment also makes **updates** easy: change the image, and Kubernetes replaces Pods slowly (a rolling update), with no downtime.

## 2. Key concepts and terms
- `replicas: 3` — how many copies you want.
- A `selector` + Pod `labels` connect the Deployment to its Pods.
- `kubectl scale` — change the number of replicas.
- `kubectl rollout` — manage and undo updates.
- Deployment → ReplicaSet → Pods (three layers).

## 3. Practical examples
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: nginx
          image: nginx:1.27
          ports:
            - containerPort: 80
```
```bash
kubectl apply -f deploy.yaml
kubectl get deploy,rs,pods
kubectl scale deploy web --replicas=5
kubectl set image deploy web nginx=nginx:1.27.1   # update
kubectl rollout status deploy web
kubectl rollout undo deploy web                    # go back
```

## 4. Commands and config examples
```bash
kubectl create deploy web --image=nginx:1.27 --replicas=3 --dry-run=client -o yaml > deploy.yaml
kubectl get pods -l app=web            # pods with this label
kubectl delete pod <one-web-pod>       # watch a new one appear (self-healing)
```

## 5. Hands-on exercises
1. Create a Deployment with 3 replicas (from YAML).
2. See 3 Pods. Delete one. Watch a new one appear.
3. Scale to 5. Then scale back to 2.
4. Update the image and check the rollout.

## 6. Troubleshooting
- **Problem:** Pods do not appear.
  **Fix:** the `selector.matchLabels` must match the Pod `template` labels exactly.
- **Problem:** rollout stuck.
  **Fix:** `kubectl rollout status` + `kubectl describe deploy` show why (often a bad image).

## 7. Common mistakes and how to avoid them
- Selector labels not matching template labels.
- Editing Pods directly instead of the Deployment — the Deployment will fight you.
- Forgetting `apps/v1` for Deployments.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Deployments, scaling, and rollouts are core, common tasks.
- Learn `kubectl create deploy ... --dry-run=client -o yaml`, `scale`, `set image`, `rollout undo` cold.

## 9. Practice questions and tasks
1. What does a Deployment give you that a bare Pod does not?
2. How do you scale a Deployment?
3. How do you undo a bad update?

## 10. References
- Deployments: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Kubernetes Deployment" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Deployment keeps N copies alive and updates them safely. Deployment → ReplicaSet → Pods.

<details><summary>Answers</summary>

1. Self-healing (keeps N copies) and easy rolling updates/rollbacks.
2. `kubectl scale deploy <name> --replicas=N`.
3. `kubectl rollout undo deploy <name>`.
</details>
