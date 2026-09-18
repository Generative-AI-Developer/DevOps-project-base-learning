---
id: kubernetes-beginner-project-08
track: kubernetes
level: beginner
order: 8
title: "Deploy a Full App (K8s Beginner Boss)"
prereqs: ["kubernetes-beginner-project-07"]
skills: ["Deployment", "Service", "ConfigMap", "Secret", "namespace", "labels", "wiring"]
certDomains: ["CKAD: Application Deployment & Config (core)"]
estimatedTime: "90 minutes"
---

# Deploy a Full App (K8s Beginner Boss 🏆)

**Status:** 🔒 Locked

This is the **last project** of Kubernetes Beginner. Finish it to complete the level and unlock Kubernetes Intermediate.

## 1. Objective
Deploy a small but complete app: a Deployment + Service + ConfigMap + Secret, in one namespace, wired together.

## 2. Real-world scenario
Your team gives you an app to deploy. It needs several copies, a stable address, settings, and a password. You put it all in YAML and deploy it cleanly in its own namespace.

## 3. Skills and concepts you will learn
- Combine all Beginner objects into one app.
- Deploy into a namespace.
- Verify everything works together.

## 4. Prerequisites
- Kubernetes Beginner Projects 1–7 completed.
- Read: `study/kubernetes/beginner/08-deploy-full-app.md`.

## 5. Step-by-step requirements
1. Create a namespace `shop`.
2. Write ONE YAML file (`app.yaml`) with (all in `shop`):
   - a **ConfigMap** (e.g. `WELCOME=...`),
   - a **Secret** (e.g. `API_KEY=...`),
   - a **Deployment** `web` (nginx:1.27, 2 replicas) that uses the ConfigMap (envFrom) and the Secret (secretKeyRef),
   - a **Service** `web` (ClusterIP) selecting the Deployment's Pods.
3. `kubectl apply -f app.yaml`.
4. Show `kubectl get all -n shop` (Deployment, ReplicaSet, Pods, Service).
5. Show the Service has endpoints.
6. `port-forward` the Service and `curl` it.
7. Show the ConfigMap and Secret values are in a Pod (`printenv`).

## 6. Tasks / challenges
- [ ] Namespace `shop` created.
- [ ] One YAML with 4 objects, all in `shop`.
- [ ] Deployment uses ConfigMap + Secret.
- [ ] Service has endpoints.
- [ ] App reachable via port-forward.

## 7. Expected outcome
A complete little app runs in the `shop` namespace: several copies, stable address, settings, and a secret — all wired together.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste `app.yaml` with ConfigMap, Secret, Deployment, and Service — all with `namespace: shop`.
2. `kubectl get all -n shop` shows the Deployment (2/2 ready), the Pods, and the Service.
3. `kubectl get endpoints web -n shop` shows Pod IPs (not empty).
4. `kubectl port-forward -n shop svc/web 8080:80` + `curl http://localhost:8080` works.
5. Inside a Pod, `printenv` shows BOTH the ConfigMap value and the Secret value.
6. Labels and selectors match (that is why endpoints exist).
7. All commands shown.

## 9. Verification checklist
- [ ] 4 objects, one namespace.
- [ ] Service has endpoints.
- [ ] Config + Secret reach the Pod.
- [ ] App reachable.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-08/`.

## 10. Common mistakes
- Objects in different namespaces.
- Label/selector mismatch → no endpoints.
- Forgetting to reference the ConfigMap/Secret in the Deployment.

## 11. Hints
<details><summary>Hint 1</summary>Start from the multi-object example in `study/kubernetes/beginner/08-deploy-full-app.md`, section 3. Add a Secret and use `secretKeyRef` in the Deployment.</details>
<details><summary>Hint 2</summary>Check wiring: `kubectl get endpoints web -n shop`. Empty means labels do not match.</details>
<details><summary>Hint 3</summary>Verify env: `kubectl exec -n shop deploy/web -- printenv | grep -E "WELCOME|API_KEY"`.</details>

## 12. Final challenge
Scale the Deployment to 4, do a rolling image update, and confirm the Service keeps working the whole time (no downtime) by curling it during the update via port-forward. This shows the real power of Deployments + Services.

## 13. What to submit (evidence)
Save `app.yaml`, `kubectl get all -n shop`, endpoints, the port-forward test, and the env proof in `submissions/kubernetes/beginner/project-08/`. Then say: **"I submit Kubernetes Beginner Project 8."** When it passes, Kubernetes Intermediate unlocks! 🎉

---
**Remember:** Deployment + Service + ConfigMap + Secret, one namespace, matching labels = a real app. This is the core of CKAD.
