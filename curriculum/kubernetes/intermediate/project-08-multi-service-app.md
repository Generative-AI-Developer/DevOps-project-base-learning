---
id: kubernetes-intermediate-project-08
track: kubernetes
level: intermediate
order: 8
title: "Build a Full Multi-Service App (K8s Intermediate Boss)"
prereqs: ["kubernetes-intermediate-project-07"]
skills: ["Deployment", "Service", "StatefulSet", "PVC", "ConfigMap", "Secret", "probes", "resources", "Ingress"]
certDomains: ["CKAD: end-to-end app (all domains)"]
estimatedTime: "2–3 hours"
---

# Build a Full Multi-Service App (K8s Intermediate Boss 🏆🏆)

**Status:** 🔒 Locked

This is the **last project** of Kubernetes Intermediate. Finish it to complete the level and unlock Kubernetes Advanced. It combines everything you learned.

## 1. Objective
Deploy a real multi-service app: frontend + API + database, with config, secrets, storage, probes, resources, and an Ingress.

## 2. Real-world scenario
Your team hands you a 3-part app (web, api, db). You must deploy it properly on Kubernetes: connected, healthy, configured, with persistent data, behind a clean URL.

## 3. Skills and concepts you will learn
- Combine all Intermediate objects into one working app.
- Wire parts by Service name.
- Verify end to end.

## 4. Prerequisites
- Kubernetes Intermediate Projects 1–7 completed.
- Read: `study/kubernetes/intermediate/08-multi-service-app.md`.
- An ingress controller installed (from Project 7).

## 5. Step-by-step requirements
In one namespace `shop`, deploy:
1. A **ConfigMap** (app settings) and a **Secret** (db password).
2. A **database**: StatefulSet + headless Service + PVC (persistent), using the Secret for its password.
3. An **API**: Deployment + Service, with a **liveness** + **readiness** probe and **requests/limits**, that reads the ConfigMap and Secret.
4. A **frontend**: Deployment + Service, with probes and resources.
5. An **Ingress**: `/` → web, `/api` → api.
6. Verify: everything Running/Ready, endpoints present, and the app reachable through the Ingress. Prove the db data persists across a Pod restart.

## 6. Tasks / challenges
- [ ] All parts in namespace `shop`.
- [ ] db is a StatefulSet with a PVC (data persists).
- [ ] api + web have probes and resources.
- [ ] Config + Secret used.
- [ ] Ingress routes `/` and `/api`.
- [ ] End-to-end test passes.

## 7. Expected outcome
A complete, healthy, connected app runs on Kubernetes, reachable through one Ingress, with persistent database data.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kubectl get all,ingress,pvc -n shop` shows every part running/ready.
2. The db is a **StatefulSet** with a PVC; you prove data survives a Pod restart.
3. The api Deployment shows **probes** and **requests/limits** in its YAML.
4. api and web use the **ConfigMap** and the api uses the **Secret** (show it in the YAML / `printenv`).
5. `curl` through the Ingress reaches **web** on `/` and **api** on `/api`.
6. All Services have endpoints (labels/selectors match).
7. You paste all YAML and the test outputs.

## 9. Verification checklist
- [ ] All parts running in one namespace.
- [ ] db data persists.
- [ ] Probes + resources present.
- [ ] Ingress routes correctly.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-08/`.

## 10. Common mistakes
- Parts in different namespaces.
- Missing probes/resources.
- Label/selector mismatch → no endpoints.
- Forgetting the ingress controller.

## 11. Hints
<details><summary>Hint 1</summary>Reuse your work: db from Project 6, PVC idea from 5, probes from 1, resources from 2, Ingress from 7, Config/Secret from Beginner 5/6.</details>
<details><summary>Hint 2</summary>Build it in parts and test each before adding the next. Check `kubectl get endpoints -n shop` often.</details>
<details><summary>Hint 3</summary>Structure is in `study/kubernetes/intermediate/08-multi-service-app.md`, section 3.</details>

## 12. Final challenge
Do a **zero-downtime rolling update** of the api while curling `/api` in a loop through the Ingress. Show no failed requests during the update. This proves your probes and Deployment are set up right.

## 13. What to submit (evidence)
Save all YAML, `kubectl get all,ingress,pvc -n shop`, the persistence proof, and the end-to-end tests in `submissions/kubernetes/intermediate/project-08/`. Then say: **"I submit Kubernetes Intermediate Project 8."** When it passes, Kubernetes Advanced unlocks! 🎉

---
**Remember:** Wire by Service name, one namespace, probes + resources, persistent db, Ingress in front. This is CKAD in one project.
