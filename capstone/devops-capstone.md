---
id: capstone-devops
track: capstone
level: capstone
order: 1
title: "Final DevOps Capstone — Build, Secure, and Run a Production System"
prereqs: ["kubernetes-cks-project-06", "docker-advanced-project-07", "linux-advanced-project-06"]
skills: ["Linux", "Docker", "Kubernetes", "networking", "security", "monitoring", "automation", "troubleshooting", "CI/CD", "AI helper (optional)"]
certDomains: ["All tracks combined"]
estimatedTime: "1–2 weeks (a real project)"
---

# Final DevOps Capstone 🏆🏆🏆

**Status:** 🔒 Locked (unlocks after you finish Kubernetes — including CKS — and the Docker + Linux tracks)

This is the **grand finale**. You combine EVERYTHING into one realistic production system. Finishing this proves you are **job-ready**.

## 1. Objective
Design, build, deploy, secure, monitor, troubleshoot, and document a complete, production-like system on Kubernetes — using every skill from the course.

## 2. Real-world scenario
A company hires you to take a small app all the way to production: containerize it, run it on Kubernetes, make it secure and reliable, watch it, automate the pipeline, and write the docs. This is a real DevOps engineer's job.

## 3. Skills and concepts you will use
- **Linux:** a hardened host, scripts, automation.
- **Docker:** a small, safe, multi-stage image, run as non-root.
- **Kubernetes:** Deployment + Service + Ingress + ConfigMap + Secret + PVC + probes + resources + HPA.
- **Networking:** Services, DNS, Ingress, NetworkPolicies.
- **Security (CKS):** non-root, dropped capabilities, Pod Security, NetworkPolicies, RBAC, image scanning, runtime alerts.
- **Monitoring & observability:** metrics, logs, dashboards, alerts.
- **Automation & CI/CD:** build → test → scan → deploy pipeline, with an eval/quality gate if you add the AI part.
- **Troubleshooting & DR:** fix broken things; back up and restore etcd; survive a node drain with no downtime.
- **(Optional) Anthropic bridge:** an AI helper that reads logs/manifests and explains problems in simple English.

## 4. Prerequisites
- **Kubernetes track complete** (Beginner → CKS).
- **Docker and Linux tracks complete.**
- A cluster you can use (kubeadm/VMs or killercoda for the admin parts; kind/minikube for most app parts).

## 5. Step-by-step requirements
1. **App + image:** containerize a small app with a multi-stage Dockerfile, non-root, `.dockerignore`, pinned version. Scan it with Trivy.
2. **Deploy on K8s:** Deployment (2+ replicas) + Service + Ingress, in its own namespace. Use ConfigMap + Secret. Add liveness/readiness probes and resource requests/limits.
3. **Data:** add a database with a PVC (data persists). Use a StatefulSet if it needs stable identity.
4. **Networking & security:** default-deny NetworkPolicy + only needed flows; run as non-root with dropped capabilities and read-only fs; enforce `restricted` Pod Security; least-privilege RBAC.
5. **Scale & reliability:** add an HPA; spread replicas across nodes; add a PodDisruptionBudget.
6. **Monitoring:** collect metrics (kubectl top / a metrics tool), central logs, and set up at least 2 alerts.
7. **Automation / CI/CD:** a pipeline that builds → tests → scans the image → deploys. Version your manifests.
8. **Troubleshooting & DR:** show a node drain with **no downtime**; back up and restore **etcd**; fix at least one broken component using the method.
9. **Documentation:** write clear docs (simple English): an architecture diagram, how to deploy, how to operate, and a runbook for 2 incidents.
10. **(Optional) AI helper:** add a small Claude tool/agent that reads `kubectl logs`/`describe` output and explains the likely problem in simple English (from Anthropic Advanced Project 6).

## 6. Tasks / challenges
- [ ] Small, safe image (multi-stage, non-root, scanned).
- [ ] Full K8s app (Deployment/Service/Ingress/Config/Secret/PVC/probes/resources).
- [ ] Security (NetworkPolicy, Pod Security, RBAC, hardening).
- [ ] Scale + reliability (HPA, anti-affinity, PDB).
- [ ] Monitoring + alerts.
- [ ] CI/CD pipeline.
- [ ] Troubleshooting + etcd backup/restore + no-downtime drain.
- [ ] Documentation + runbooks.
- [ ] (Optional) AI helper.

## 7. Expected outcome
A working, secure, observable, automated production-like system on Kubernetes, fully documented — the kind of thing you can show an employer.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. The app runs on Kubernetes, reachable through Ingress, with probes, resources, Config, Secret, and persistent data.
2. Security is real: non-root + dropped capabilities + read-only fs, `restricted` Pod Security, a default-deny NetworkPolicy with only needed flows, least-privilege RBAC, and a Trivy image scan.
3. Scale + reliability: an HPA works, replicas spread across nodes, and a PDB protects availability during a node drain (shown with **no downtime**).
4. Monitoring: you show metrics, logs, and at least 2 working alerts.
5. CI/CD: a pipeline builds → tests → scans → deploys (show it).
6. DR: you show an **etcd backup and restore**, and you fix at least one broken component using the method.
7. Documentation: a clear architecture diagram, deploy/operate guides, and 2 incident runbooks — all in simple English.
8. Everything is in your git repo (submissions folder), organized and readable.

## 9. Verification checklist
- [ ] App + security + scale + reliability all shown.
- [ ] Monitoring + alerts.
- [ ] CI/CD pipeline.
- [ ] etcd backup/restore + no-downtime drain.
- [ ] Docs + runbooks.
- [ ] Evidence saved in `submissions/capstone/`.

## 10. Common mistakes
- Skipping security (the most common gap).
- No monitoring or alerts.
- No DR test (backup you never restored).
- Poor or missing documentation.

## 11. Hints
<details><summary>Hint 1</summary>Reuse your track boss projects: Docker Advanced 7 (production service), K8s Intermediate 8 (multi-service app), K8s Advanced 10 (DR), CKS projects (security).</details>
<details><summary>Hint 2</summary>Build it in stages and test each stage. Keep all manifests in git.</details>
<details><summary>Hint 3</summary>For the AI helper, reuse Anthropic Advanced Project 6 (the log-helper agent) and point it at real `kubectl` output.</details>

## 12. Final challenge
Do a **full game-day**: break something on purpose (a bad deploy, a node down, a wrong NetworkPolicy), then recover using your runbooks — while the app stays up. Record what happened. This is exactly what strong DevOps teams practice.

## 13. What to submit (evidence)
Save your whole project in `submissions/capstone/`: all Dockerfiles and manifests, the CI/CD pipeline, security proofs, monitoring/alerts, the DR (etcd + drain) evidence, your documentation and runbooks, and (optionally) the AI helper. Then say: **"I submit the DevOps Capstone."**

When it passes, you have completed the **entire course**. You are job-ready — and ready to sit CKAD, CKA, and CKS with strong preparation. 🎉🎉🎉

---
**Remember:** Production = works + secure + reliable + observable + automated + documented. You have built every piece. Now put them together.
