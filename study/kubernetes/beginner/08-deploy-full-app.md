---
id: kubernetes-beginner-study-deploy-full-app
track: kubernetes
level: beginner
topic: Deploy a full app on Kubernetes
forProject: kubernetes-beginner-project-08
---

# Study: Deploy a Full App

> **Words to know**
> - **Manifest set** — several YAML files (or one file with `---` between them) that describe a whole app.
> - **Wire together** — connect the parts (Deployment + Service + Config + Secret).

## 1. Easy explanation (simple → deeper)
Now you combine everything you learned into one small app:
- A **Deployment** runs the app Pods.
- A **Service** gives it a stable address.
- A **ConfigMap** holds settings.
- A **Secret** holds a password.
- All in one **namespace**, with clear **labels**.

This is a real, small Kubernetes app.

## 2. Key concepts and terms
- Put many objects in one file, separated by `---`.
- Apply the whole folder: `kubectl apply -f ./app/`.
- Check everything: `kubectl get all -n <ns>`.
- Test the Service by name from inside, or with `port-forward`.

## 3. Practical examples
```yaml
# one file, several objects
apiVersion: v1
kind: ConfigMap
metadata: { name: web-config, namespace: shop }
data: { WELCOME: "Hello from Kubernetes" }
---
apiVersion: apps/v1
kind: Deployment
metadata: { name: web, namespace: shop }
spec:
  replicas: 2
  selector: { matchLabels: { app: web } }
  template:
    metadata: { labels: { app: web } }
    spec:
      containers:
        - name: nginx
          image: nginx:1.27
          ports: [{ containerPort: 80 }]
          envFrom: [{ configMapRef: { name: web-config } }]
---
apiVersion: v1
kind: Service
metadata: { name: web, namespace: shop }
spec:
  selector: { app: web }
  ports: [{ port: 80, targetPort: 80 }]
```

## 4. Commands and config examples
```bash
kubectl create namespace shop
kubectl apply -f app.yaml
kubectl get all -n shop
kubectl port-forward -n shop svc/web 8080:80
curl http://localhost:8080
```

## 5. Hands-on exercises
1. Write one YAML file with a ConfigMap + Deployment + Service in a `shop` namespace.
2. Apply it. Check `kubectl get all -n shop`.
3. Test the Service with `port-forward`.

## 6. Troubleshooting
- **Problem:** Service has no endpoints.
  **Fix:** Deployment Pod labels must match the Service selector.
- **Problem:** wrong namespace.
  **Fix:** every object needs the same namespace; use `-n shop`.

## 7. Common mistakes and how to avoid them
- Objects in different namespaces that should be together.
- Label/selector mismatch → Service finds no Pods.

## 8. Certification notes (what the exam wants)
- **CKAD:** deploying and wiring app parts is the heart of the exam.
- Practice doing this fast: generate YAML, edit, apply, verify.

## 9. Practice questions and tasks
1. How do you put several objects in one file?
2. How do you see everything in a namespace?
3. What connects a Service to its Pods?

## 10. References
- Deploy an app: https://kubernetes.io/docs/tutorials/kubernetes-basics/ (checked: 2026-09-18)
- Video: **KodeKloud** — "Kubernetes for Beginners" (freeCodeCamp) — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** Deployment + Service + ConfigMap + Secret, same namespace, matching labels = a working app.

<details><summary>Answers</summary>

1. Separate them with `---` in one file.
2. `kubectl get all -n <namespace>`.
3. Matching labels (Service selector = Pod labels).
</details>
