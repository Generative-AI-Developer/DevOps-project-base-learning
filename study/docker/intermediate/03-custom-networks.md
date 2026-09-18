---
id: docker-intermediate-study-custom-networks
track: docker
level: intermediate
topic: Custom networks and isolation
forProject: docker-intermediate-project-03
---

# Study: Custom Networks and Isolation

> **Words to know**
> - **Isolation** — keeping parts apart so they cannot reach each other.
> - **Frontend network** — where the web part lives (open to users).
> - **Backend network** — where the database lives (private).
> - **Attach** — put a container on a network.

## 1. Easy explanation (simple → deeper)
For safety, you do not want everything on one big network. You split it:
- **frontend** network: web + anything users touch.
- **backend** network: database + private parts.

The web part joins **both** networks (it talks to users and to the db). The database joins **only** the backend. So the database is hidden from the outside. This is **isolation** — a key security idea.

## 2. Key concepts and terms
- A container can be on **more than one** network.
- Put the db on backend only. Put web on frontend + backend.
- In Compose, define multiple networks and attach each service to the ones it needs.

## 3. Practical examples
```yaml
services:
  web:
    image: nginx:1.27
    ports: ["8080:80"]
    networks: [frontend, backend]
  db:
    image: postgres:16
    environment: { POSTGRES_PASSWORD: secret }
    networks: [backend]          # backend only — hidden from frontend

networks:
  frontend:
  backend:
```

## 4. Commands and config examples
```bash
docker compose up -d
docker compose exec web getent hosts db   # works: web is on backend
# a frontend-only container could NOT reach db
docker network ls
docker network inspect <project>_backend
```

## 5. Hands-on exercises
1. Write a Compose file with `frontend` and `backend` networks.
2. Put `db` on backend only, `web` on both.
3. Prove `web` reaches `db`. Then reason: could a frontend-only service reach `db`? (No.)

## 6. Troubleshooting
- **Problem:** web cannot reach db.
  **Fix:** web must also be on the `backend` network.
- **Problem:** you wanted db private but it is reachable.
  **Fix:** remove db from the frontend network; keep it on backend only.

## 7. Common mistakes and how to avoid them
- Putting the db on the public/frontend network — it should be private.
- Forgetting to attach web to both networks.

## 8. Certification notes (what the exam wants)
- **CKS:** Kubernetes `NetworkPolicies` do this same isolation inside the cluster: allow only needed traffic.
- The idea "only connect what must connect" is core security.

## 9. Practice questions and tasks
1. Why split into frontend and backend networks?
2. Which networks should the web part join?
3. Which network should the database join?

## 10. References
- Compose networking: https://docs.docker.com/compose/how-tos/networking/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker networks" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Split networks to hide the database. Connect only what must connect. This is isolation.

<details><summary>Answers</summary>

1. To hide private parts (like the database) from the public part.
2. Both frontend and backend.
3. Backend only (private).
</details>
