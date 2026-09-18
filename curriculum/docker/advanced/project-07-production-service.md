---
id: docker-advanced-project-07
track: docker
level: advanced
order: 7
title: "Ship a Production-Ready Service (Docker Track Boss)"
prereqs: ["docker-advanced-project-06"]
skills: ["multi-stage", "non-root", "hardening", "health", "limits", "proxy", "volumes", "observability"]
certDomains: ["CKAD: deployment", "CKS: hardening", "CKA: reliability"]
estimatedTime: "2–3 hours"
---

# Ship a Production-Ready Service (Docker Track Boss 🏆🏆)

**Status:** 🔒 Locked

This is the **final Docker project**. Finish it to complete the **whole Docker track**. You will combine every Docker skill. After this, you are ready for Kubernetes.

## 1. Objective
Package and run a full service that ticks every item on the production checklist: small, safe, reliable, watchable, proxied, and data-safe.

## 2. Real-world scenario
Your service goes live next week. It must pass a production review: small image, non-root, hardened, health-checked, resource-limited, auto-restart, good logs, behind a proxy, with safe data. You build it to this standard.

## 3. Skills and concepts you will learn
- Combine multi-stage, security, health, limits, proxy, volumes, and observability into one service.
- Verify every item.

## 4. Prerequisites
- All Docker Advanced projects 1–6 completed.
- Read: `study/docker/advanced/07-production-ready.md`.

## 5. Step-by-step requirements
Build a `compose.yaml` for a real small app (reuse `helloapp` or similar) plus an nginx `proxy`, meeting the **production checklist**:
1. App image built with a **multi-stage** Dockerfile, slim base.
2. App runs **non-root**.
3. App hardened: `cap_drop: [ALL]`, `read_only: true` (+ tmpfs), `no-new-privileges`.
4. App has a **health check**.
5. App has `mem_limit`, `cpus`, and `restart: unless-stopped`.
6. Logs to stdout with **rotation**.
7. A **reverse proxy** in front (only the proxy is public).
8. A **named volume** for any data.
9. `.dockerignore` present and image version pinned.

## 6. Tasks / challenges
- [ ] Every checklist item applied.
- [ ] Each item proven with a command.
- [ ] The whole stack starts with `docker compose up -d --build` and works.

## 7. Expected outcome
One `docker compose up` starts a production-ready service that passes every checklist item, and you can prove each one.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the multi-stage `Dockerfile`, `compose.yaml`, `nginx.conf`, and `.dockerignore`.
2. `docker compose ps` shows the app `(healthy)` and reachable **through the proxy** (`curl http://localhost:8080/`).
3. `docker exec <app> id` shows **non-root**.
4. `docker inspect` shows the hardening (read-only, cap_drop, no-new-privileges) and the limits.
5. The `compose.yaml` shows `restart:`, `logging:` with rotation, and a **named volume**.
6. You provide a filled **checklist** (each item) with the command that proves it.
7. Only the proxy publishes a port.

## 9. Verification checklist
- [ ] All 9 checklist items applied AND proven.
- [ ] Stack works through the proxy.
- [ ] Evidence saved in `submissions/docker/advanced/project-07/`.

## 10. Common mistakes
- Missing one or two checklist items — do all of them.
- Not proving each item — attach the command output.
- App breaks under read-only — add a tmpfs/volume for its write path.

## 11. Hints
<details><summary>Hint 1</summary>Start from the hardened compose service in `study/docker/advanced/07-production-ready.md`, section 3, and add the proxy from Project 4.</details>
<details><summary>Hint 2</summary>Make a small table: Item | Command | Result. Fill one row per checklist item.</details>
<details><summary>Hint 3</summary>Health test tool must exist in your base image (e.g. `wget` in alpine, or `pg_isready` for postgres).</details>

## 12. Final challenge
Write a one-page "production readiness report" for your service: each checklist item, its status, and the proof. This is a real document DevOps teams use before going live. Keep it in simple English.

## 13. What to submit (evidence)
Save all files, the working proof through the proxy, the filled checklist with proofs, and your readiness report in `submissions/docker/advanced/project-07/`. Then say: **"I submit Docker Advanced Project 7."**

When it passes, you complete the **entire Docker track**! 🎉🎉 Next stop: Kubernetes.

---
**Remember:** Small + Safe + Reliable + Watchable + Proxied + Data-safe. This is production. And it maps straight to a secure Kubernetes Deployment.
