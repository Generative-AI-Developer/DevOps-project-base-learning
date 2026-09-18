---
id: docker-advanced-study-reverse-proxy
track: docker
level: advanced
topic: Reverse proxy and advanced networking
forProject: docker-advanced-project-04
---

# Study: Reverse Proxy in Front of Your App

> **Words to know**
> - **Reverse proxy** — a server in front that takes requests and sends them to the right app behind it.
> - **Upstream** — the app behind the proxy.
> - **Route** — a rule that says "this path goes to this app".
> - **TLS/HTTPS** — secure, encrypted web traffic.

## 1. Easy explanation (simple → deeper)
In production, users do not hit your app directly. They hit a **reverse proxy** first. The proxy:
- sends each request to the right app (routing),
- can serve many apps behind one door,
- can add HTTPS (encryption),
- can balance load across copies.

Common proxies: **nginx** and **Traefik**.

## 2. Key concepts and terms
- The proxy is the only container that publishes a port (like 80/443).
- Apps behind it do **not** publish ports; the proxy reaches them by name on a shared network.
- A path like `/api` can route to the `api` service, and `/` to the `web` service.

## 3. Practical examples
nginx as a reverse proxy (compose):
```yaml
services:
  proxy:
    image: nginx:1.27
    ports: ["8080:80"]
    volumes: ["./nginx.conf:/etc/nginx/conf.d/default.conf:ro"]
    depends_on: [web]
  web:
    image: nginx:1.27   # pretend this is your app
```
`nginx.conf`:
```nginx
server {
  listen 80;
  location / {
    proxy_pass http://web:80;   # send to the "web" service by name
  }
}
```

## 4. Commands and config examples
```bash
docker compose up -d
curl -I http://localhost:8080     # hits the proxy, which forwards to web
```

## 5. Hands-on exercises
1. Write a compose with a `proxy` (nginx) and a `web` app behind it.
2. Only the proxy publishes a port.
3. `curl` the proxy and confirm you reach the app behind it.

## 6. Troubleshooting
- **Problem:** 502 Bad Gateway.
  **Fix:** the proxy cannot reach the app. Check the service name in `proxy_pass` and that both are on the same network.
- **Problem:** config not applied.
  **Fix:** mount the conf file to the right path and reload/restart the proxy.

## 7. Common mistakes and how to avoid them
- Publishing app ports too — only the proxy needs a public port.
- Wrong upstream name in `proxy_pass`.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Kubernetes **Ingress** is the cluster version of a reverse proxy. It routes outside traffic to Services. This lesson prepares you for Ingress.

## 9. Practice questions and tasks
1. What is a reverse proxy?
2. Which container publishes a port when using a proxy?
3. What Kubernetes object is like a reverse proxy?

## 10. References
- nginx as proxy: https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/ (checked: 2026-09-18)
- Traefik: https://doc.traefik.io/traefik/ (checked: 2026-09-18)

---
**Remember:** The proxy is the front door. Apps sit behind it, reached by name. This is like Kubernetes Ingress.

<details><summary>Answers</summary>

1. A server in front that forwards requests to the right app behind it.
2. Only the proxy.
3. Ingress.
</details>
