---
id: kubernetes-intermediate-project-07
track: kubernetes
level: intermediate
order: 7
title: "Route Traffic with Ingress"
prereqs: ["kubernetes-intermediate-project-06"]
skills: ["Ingress controller", "Ingress rules", "host/path routing", "pathType"]
certDomains: ["CKAD/CKA: Services & Networking"]
estimatedTime: "90 minutes"
---

# Route Traffic with Ingress

**Status:** 🔒 Locked

## 1. Objective
Install an ingress controller and route outside traffic to two Services by path.

## 2. Real-world scenario
You want clean URLs: `shop.local/` goes to the website, `shop.local/api` goes to the API. One door, clear routing. That is Ingress.

## 3. Skills and concepts you will learn
- Install/enable an ingress controller.
- Write an Ingress resource.
- Route by path to different Services.

## 4. Prerequisites
- Kubernetes Intermediate Project 6 completed.
- Read: `study/kubernetes/intermediate/07-ingress.md`.
- You will install an ingress controller (minikube addon or nginx-ingress on kind).

## 5. Step-by-step requirements
1. Install/enable an ingress controller. Confirm its Pods are running.
2. Create two Deployments + Services: `web` and `api` (any small images; make their responses different so you can tell them apart).
3. Create an Ingress: host `shop.local`, `/` → `web`, `/api` → `api`.
4. Test both paths (use `/etc/hosts` mapping or `curl --resolve`).

## 6. Tasks / challenges
- [ ] Ingress controller running.
- [ ] Two Services created.
- [ ] Ingress routes `/` and `/api`.
- [ ] Both paths return the right app.

## 7. Expected outcome
One host serves two apps by path through Ingress. The apps stay private behind it.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show the ingress controller Pods running (e.g. `kubectl get pods -n ingress-nginx`).
2. You paste the Ingress YAML with two path rules (`/` → web, `/api` → api).
3. `curl` to `/` returns the **web** app's response.
4. `curl` to `/api` returns the **api** app's response.
5. You explain in one line how this is like the Docker reverse proxy you built earlier.
6. All commands shown.

## 9. Verification checklist
- [ ] Controller running.
- [ ] Two paths route correctly.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-07/`.

## 10. Common mistakes
- No controller installed → Ingress does nothing.
- Wrong Service name/port in the backend.
- Host not resolving → use `curl --resolve` or `/etc/hosts`.

## 11. Hints
<details><summary>Hint 1</summary>minikube: `minikube addons enable ingress`. kind: install nginx-ingress from the official manifest for kind.</details>
<details><summary>Hint 2</summary>Use the Ingress YAML in `study/kubernetes/intermediate/07-ingress.md`, section 3.</details>
<details><summary>Hint 3</summary>Test without editing hosts: `curl --resolve shop.local:80:<ingress-ip> http://shop.local/api`.</details>

## 12. Final challenge
Add **host-based** routing too: create a second host `api.local` that goes straight to the `api` Service. Now you route by both host and path. This is very close to a real production setup.

## 13. What to submit (evidence)
Save the Ingress YAML, controller status, and both path tests in `submissions/kubernetes/intermediate/project-07/`. Then say: **"I submit Kubernetes Intermediate Project 7."**

---
**Remember:** Ingress routes by host/path to Services, run by a controller. It is the cluster version of a reverse proxy.
