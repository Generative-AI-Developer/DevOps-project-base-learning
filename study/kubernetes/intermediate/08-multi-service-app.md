---
id: kubernetes-intermediate-study-multi-service-app
track: kubernetes
level: intermediate
topic: A full multi-service app
forProject: kubernetes-intermediate-project-08
---

# Study: A Full Multi-Service App

> **Words to know**
> - **Multi-service app** — an app made of several parts (frontend, backend, database).
> - **Wire together** — connect the parts so they work as one.

## 1. Easy explanation (simple → deeper)
Now you combine the whole Intermediate level into one real app:
- a **frontend** Deployment + Service,
- a **backend/API** Deployment + Service (with probes, requests/limits),
- a **database** StatefulSet + headless Service + PVC (persistent data),
- **ConfigMap** + **Secret** for settings,
- an **Ingress** as the front door.

This looks like a real production app, and it is exactly the kind of task CKAD tests.

## 2. Key concepts and terms
- Keep everything in one namespace.
- Frontend talks to backend by Service name; backend talks to db by Service name.
- Probes + resources on each Deployment.
- Ingress routes outside traffic in.

## 3. Practical examples (structure)
```
namespace: shop
├─ ConfigMap (app settings)
├─ Secret (db password)
├─ StatefulSet db + headless Service dbsvc + PVCs
├─ Deployment api + Service api (probes, resources, uses Secret+Config)
├─ Deployment web + Service web (probes, resources)
└─ Ingress  (/ -> web, /api -> api)
```

## 4. Commands and config examples
```bash
kubectl apply -f app/            # apply the whole folder
kubectl get all,ingress,pvc -n shop
kubectl get endpoints -n shop
# test through the ingress, and test api->db connectivity
```

## 5. Hands-on exercises
1. Build each part (you already know them all).
2. Wire them: web → api → db, all by Service name.
3. Test end to end through the Ingress.

## 6. Troubleshooting
- Use the method: `kubectl get pods` (status) → `kubectl describe` → `kubectl logs` → check endpoints and labels.
- No endpoints → label/selector mismatch.
- api cannot reach db → wrong Service name or namespace.

## 7. Common mistakes and how to avoid them
- Parts in different namespaces.
- Missing probes or resources on a Deployment.
- Forgetting the Ingress controller.

## 8. Certification notes (what the exam wants)
- **CKAD:** this ties together most of the exam: deployment, config, storage, networking, and observability.
- Practice building it fast, all from YAML.

## 9. Practice questions and tasks
1. How do the app parts find each other?
2. Which part needs persistent storage?
3. What routes outside traffic in?

## 10. References
- Example app: https://kubernetes.io/docs/tutorials/stateless-application/guestbook/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Kubernetes full app" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Wire parts by Service name, keep them in one namespace, add probes + resources, and route with Ingress.

<details><summary>Answers</summary>

1. By Service name (DNS) inside the cluster.
2. The database (StatefulSet + PVC).
3. The Ingress (with its controller).
</details>
