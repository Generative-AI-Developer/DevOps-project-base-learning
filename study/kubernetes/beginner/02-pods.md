---
id: kubernetes-beginner-study-pods
track: kubernetes
level: beginner
topic: Pods
forProject: kubernetes-beginner-project-02
---

# Study: Pods

> **Words to know**
> - **Pod** — the smallest thing Kubernetes runs. It holds one (or a few) containers.
> - **Manifest** — a YAML file that describes what you want.
> - **apply** — send a manifest to the cluster (`kubectl apply -f file.yaml`).
> - **kind** (in YAML) — the type of object (Pod, Deployment, Service...).

## 1. Easy explanation (simple → deeper)
In Kubernetes you do not run containers directly. You run **Pods**. A Pod is a small wrapper around one container (sometimes a few that must stay together).

You describe a Pod in a **YAML manifest**, then **apply** it. Kubernetes creates it and keeps it running.

> Note: you rarely create bare Pods in real work. You use Deployments (next lesson). But learning Pods first makes everything else clear.

## 2. Key concepts and terms
- A Pod has: a name, one or more containers, each with an `image`.
- `kubectl run` makes a quick Pod. `kubectl apply -f` uses a YAML file.
- `kubectl get pods`, `kubectl describe pod`, `kubectl logs`, `kubectl exec` — same ideas as Docker.
- Pods are **ephemeral** — if one dies, it is gone (a Deployment would replace it).

## 3. Practical examples
A Pod manifest:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web
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
kubectl apply -f pod.yaml
kubectl get pods
kubectl logs web
kubectl exec -it web -- sh
kubectl delete pod web
```

## 4. Commands and config examples
```bash
kubectl run tmp --image=nginx:1.27           # quick pod
kubectl get pod web -o yaml                   # see the full object
kubectl describe pod web                       # events + details
kubectl run test --image=busybox -it --rm -- sh   # throwaway shell pod
# generate YAML without creating (great for the exam):
kubectl run web --image=nginx:1.27 --dry-run=client -o yaml > pod.yaml
```

## 5. Hands-on exercises
1. Write `pod.yaml` for an nginx pod. `apply` it. Check `get pods`.
2. See its logs and describe it.
3. `exec` into it and run `ls`.
4. Delete it.

## 6. Troubleshooting
- **Problem:** Pod stuck in `ImagePullBackOff`.
  **Fix:** wrong image name/tag, or no internet. Check the image with `kubectl describe pod`.
- **Problem:** Pod `CrashLoopBackOff`.
  **Fix:** the app keeps crashing. Read `kubectl logs`.
- **Problem:** Pod `Pending`.
  **Fix:** no node has room, or it is waiting. `kubectl describe pod` shows why.

## 7. Common mistakes and how to avoid them
- Wrong indentation in YAML — use spaces, keep it even.
- Wrong `apiVersion`/`kind` — Pod is `apiVersion: v1`, `kind: Pod`.
- Expecting a bare Pod to restart itself after delete — it will not. Use a Deployment.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** you create Pods and read their status a lot. Learn to generate YAML fast with `--dry-run=client -o yaml`.
- `kubectl describe pod` + `kubectl logs` solve most Pod problems.

## 9. Practice questions and tasks
1. What is a Pod?
2. How do you apply a manifest?
3. What does `ImagePullBackOff` mean?

## 10. References
- Pods: https://kubernetes.io/docs/concepts/workloads/pods/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Kubernetes Pods" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** A Pod wraps a container. Write YAML, `apply`, then `get`/`describe`/`logs`. Generate YAML with `--dry-run=client -o yaml`.

<details><summary>Answers</summary>

1. The smallest unit Kubernetes runs — a wrapper around one (or a few) containers.
2. `kubectl apply -f file.yaml`.
3. Kubernetes could not pull the container image (wrong name/tag or no access).
</details>
