---
id: docker-advanced-project-04
track: docker
level: advanced
order: 4
title: "Put a Reverse Proxy in Front"
prereqs: ["docker-advanced-project-03"]
skills: ["reverse proxy", "nginx proxy_pass", "routing", "single entry point"]
certDomains: ["CKAD/CKA: Ingress (foundation)"]
estimatedTime: "60–90 minutes"
---

# Put a Reverse Proxy in Front

**Status:** 🔒 Locked

## 1. Objective
Run a reverse proxy that forwards requests to your app behind it. Only the proxy is public.

## 2. Real-world scenario
You have two apps and want one public door. A reverse proxy sends `/` to the website and `/api` to the API. Users see one address; the proxy routes behind the scenes.

## 3. Skills and concepts you will learn
- Configure nginx as a reverse proxy.
- Route paths to different services.
- Keep apps private behind the proxy.

## 4. Prerequisites
- Docker Advanced Project 3 completed.
- Read: `study/docker/advanced/04-reverse-proxy.md`.

## 5. Step-by-step requirements
1. Compose with 3 services: `proxy` (nginx, the only public one on 8080), `web` (a page), and `api` (return some text/JSON — you can reuse `helloapp`).
2. Write an `nginx.conf` that routes `/` → `web` and `/api` → `api`.
3. Start it. `curl http://localhost:8080/` → the web page; `curl http://localhost:8080/api` → the api response.
4. Show that `web` and `api` do NOT publish ports themselves.

## 6. Tasks / challenges
- [ ] Only `proxy` publishes a port.
- [ ] `/` routes to `web`.
- [ ] `/api` routes to `api`.
- [ ] Both work through the single door.

## 7. Expected outcome
One public address serves two apps by path. The apps stay private behind the proxy.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste `compose.yaml` and `nginx.conf`.
2. Only `proxy` has a `ports:` entry (web and api do not).
3. `curl http://localhost:8080/` returns the web content.
4. `curl http://localhost:8080/api` returns the api content.
5. You explain in one sentence how this is like Kubernetes Ingress.
6. Cleaned up with `docker compose down`.

## 9. Verification checklist
- [ ] Single public door.
- [ ] Two paths route correctly.
- [ ] Apps private.
- [ ] Evidence saved in `submissions/docker/advanced/project-04/`.

## 10. Common mistakes
- Publishing app ports too — only the proxy should.
- Wrong service name in `proxy_pass`.
- 502 errors → proxy cannot reach the upstream (check network + names).

## 11. Hints
<details><summary>Hint 1</summary>Use the proxy example in `study/docker/advanced/04-reverse-proxy.md`, section 3. Add a second `location /api { proxy_pass http://api:8000/; }`.</details>
<details><summary>Hint 2</summary>Mount the conf: `./nginx.conf:/etc/nginx/conf.d/default.conf:ro`.</details>
<details><summary>Hint 3</summary>Test both paths with `curl -i http://localhost:8080/` and `curl -i http://localhost:8080/api`.</details>

## 12. Final challenge
Run **two copies** of `api` and let the proxy balance between them (nginx `upstream` block with two servers). Refresh a few times and show requests hitting different copies (add a copy id to the response). This previews load balancing, which Kubernetes Services do automatically.

## 13. What to submit (evidence)
Save `compose.yaml`, `nginx.conf`, and both `curl` results in `submissions/docker/advanced/project-04/`. Then say: **"I submit Docker Advanced Project 4."**

---
**Remember:** The proxy is the front door; apps hide behind it. This is exactly what Kubernetes Ingress does.
