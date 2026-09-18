---
id: kubernetes-beginner-project-04
track: kubernetes
level: beginner
order: 4
title: "Give Your App a Stable Address with a Service"
prereqs: ["kubernetes-beginner-project-03"]
skills: ["Service", "ClusterIP", "NodePort", "selectors/endpoints", "port-forward"]
certDomains: ["CKAD/CKA: Services & Networking (core)"]
estimatedTime: "60–90 minutes"
---

# Give Your App a Stable Address with a Service

**Status:** 🔒 Locked

## 1. Objective
Put a Service in front of your Deployment so it has a stable name and load-balances across Pods.

## 2. Real-world scenario
Your app has 3 Pods. Other apps must reach it reliably, even as Pods restart. A Service gives one stable address and spreads traffic across the Pods.

## 3. Skills and concepts you will learn
- Create a ClusterIP Service.
- Reach a Service by name from inside the cluster.
- See endpoints (the Pods behind it).
- Use NodePort / port-forward for outside testing.

## 4. Prerequisites
- Kubernetes Beginner Project 3 completed (you have a `web` Deployment).
- Read: `study/kubernetes/beginner/04-services.md`.

## 5. Step-by-step requirements
1. Make sure `web` Deployment (3 replicas, label `app: web`) is running.
2. Create a ClusterIP Service `web` (port 80 → targetPort 80, selector `app: web`).
3. Show `kubectl get svc web` and `kubectl get endpoints web` (should list Pod IPs).
4. From a temporary Pod, `wget -qO- http://web` — it must return the nginx page.
5. Use `kubectl port-forward svc/web 8080:80` and `curl http://localhost:8080` to reach it from your machine.

## 6. Tasks / challenges
- [ ] ClusterIP Service created.
- [ ] Endpoints list the Pod IPs.
- [ ] Reached by name from inside the cluster.
- [ ] Reached via port-forward from your machine.

## 7. Expected outcome
Your Deployment has a stable Service address. Traffic reaches the Pods by name and is load-balanced.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Service YAML (selector `app: web`, port 80, targetPort 80).
2. `kubectl get endpoints web` shows one or more Pod IPs (not empty).
3. From a temp Pod, `wget -qO- http://web` returns HTML (name DNS works).
4. `kubectl port-forward svc/web 8080:80` + `curl http://localhost:8080` works.
5. You explain in one sentence why a Service is needed instead of a Pod IP.
6. All commands shown.

## 9. Verification checklist
- [ ] Service + endpoints correct.
- [ ] Reached by name and by port-forward.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-04/`.

## 10. Common mistakes
- Selector does not match Pod labels → no endpoints.
- Mixing up `port` and `targetPort`.
- Trying to hit ClusterIP directly from the laptop (use port-forward or NodePort).

## 11. Hints
<details><summary>Hint 1</summary>Quick service: `kubectl expose deploy web --port=80 --target-port=80 --name=web`.</details>
<details><summary>Hint 2</summary>Test by name: `kubectl run test --image=busybox -it --rm -- wget -qO- http://web`.</details>
<details><summary>Hint 3</summary>If endpoints are empty, compare `kubectl get pods --show-labels` with the Service selector.</details>

## 12. Final challenge
Create a **NodePort** Service too, and reach the app from your host using the node's IP and the NodePort (`kubectl get svc` shows the port). Explain when you would use ClusterIP vs NodePort.

## 13. What to submit (evidence)
Save the Service YAML, endpoints, the in-cluster test, and the port-forward test in `submissions/kubernetes/beginner/project-04/`. Then say: **"I submit Kubernetes Beginner Project 4."**

---
**Remember:** A Service = stable name + load balancer, found by labels. ClusterIP inside; NodePort/port-forward for outside.
