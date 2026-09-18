---
id: kubernetes-intermediate-study-ingress
track: kubernetes
level: intermediate
topic: Ingress
forProject: kubernetes-intermediate-project-07
---

# Study: Ingress (One Door for Many Services)

> **Words to know**
> - **Ingress** — a rule set that routes outside HTTP traffic to Services by host or path.
> - **Ingress controller** — the actual proxy that does the routing (e.g. nginx-ingress).
> - **Host** — a domain name, like `shop.example.com`.
> - **Path** — a URL path, like `/api`.

## 1. Easy explanation (simple → deeper)
NodePort works but is ugly (random high ports). In production you want clean URLs and HTTPS. **Ingress** gives that.

Two parts:
1. **Ingress controller** — the proxy that runs in the cluster (you must install one, like nginx-ingress).
2. **Ingress resource** — the rules: "host `shop.local` path `/` → Service `web`; path `/api` → Service `api`".

This is the cluster version of the Docker reverse proxy you built earlier.

## 2. Key concepts and terms
- You must have an **ingress controller** installed first.
- Rules match by **host** and/or **path** and send to a **Service**.
- On kind/minikube you enable an ingress addon or install nginx-ingress.
- `minikube addons enable ingress` or install nginx-ingress via manifest/Helm.

## 3. Practical examples
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: shop
spec:
  rules:
    - host: shop.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web
                port: { number: 80 }
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: api
                port: { number: 80 }
```

## 4. Commands and config examples
```bash
kubectl get ingress
kubectl describe ingress shop
# test (map the host to the ingress IP in /etc/hosts, or use curl --resolve):
curl --resolve shop.local:80:<ingress-ip> http://shop.local/
```

## 5. Hands-on exercises
1. Install/enable an ingress controller (minikube addon, or nginx-ingress on kind).
2. Create two Services (`web`, `api`).
3. Create an Ingress that routes `/` → web and `/api` → api. Test both.

## 6. Troubleshooting
- **Problem:** Ingress has no address / 404.
  **Fix:** is the ingress controller installed and running? `kubectl get pods -n ingress-nginx`.
- **Problem:** host does not resolve.
  **Fix:** map the host to the ingress IP in `/etc/hosts`, or use `curl --resolve`.

## 7. Common mistakes and how to avoid them
- Creating an Ingress with no controller installed — nothing routes.
- Wrong `pathType` or Service name/port.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Ingress is part of Services & Networking.
- Know the Ingress resource shape, `pathType`, and that a controller must exist.

## 9. Practice questions and tasks
1. What are the two parts of Ingress?
2. How does Ingress decide where to send a request?
3. What must exist before an Ingress resource works?

## 10. References
- Ingress: https://kubernetes.io/docs/concepts/services-networking/ingress/ (checked: 2026-09-18)
- Ingress controllers: https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/ (checked: 2026-09-18)

---
**Remember:** Ingress = rules; the controller = the proxy that runs them. Route by host/path to Services. Install a controller first.

<details><summary>Answers</summary>

1. The Ingress controller (proxy) and the Ingress resource (rules).
2. By host and/or path, sending to a Service.
3. An ingress controller.
</details>
