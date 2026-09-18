---
id: docker-intermediate-study-docker-compose
track: docker
level: intermediate
topic: Docker Compose
forProject: docker-intermediate-project-02
---

# Study: Docker Compose

> **Words to know**
> - **Compose** — a tool to run many containers with one YAML file.
> - **YAML** — a simple text format for settings (spaces matter!).
> - **Service** — one container definition in the Compose file.
> - **`docker compose up`** — start everything. **`down`** — stop and remove everything.

## 1. Easy explanation (simple → deeper)
In Project 1 you typed many `docker run` commands. That is slow and easy to get wrong.

**Docker Compose** puts your whole app in one file: `compose.yaml`. Then one command starts it all. Another stops it all. It is clear, repeatable, and easy to share.

## 2. Key concepts and terms
- File name: `compose.yaml` (or `docker-compose.yml`).
- Top key: `services:` — each service is one container.
- Common fields: `image`, `build`, `ports`, `environment`, `volumes`, `depends_on`.
- Compose makes a network automatically. Services talk by their **service name**.
- Commands: `docker compose up -d`, `docker compose ps`, `docker compose logs`, `docker compose down`.

## 3. Practical examples
```yaml
# compose.yaml
services:
  web:
    image: nginx:1.27
    ports:
      - "8080:80"
    depends_on:
      - db
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - dbdata:/var/lib/postgresql/data

volumes:
  dbdata:
```
```bash
docker compose up -d        # start all
docker compose ps           # see services
docker compose logs -f web  # follow web logs
docker compose down         # stop and remove all
```

## 4. Commands and config examples
```bash
docker compose up -d          # start in background
docker compose up -d --build  # rebuild images first
docker compose ps             # list services
docker compose exec web sh    # shell into a service
docker compose down           # stop + remove (keeps named volumes)
docker compose down -v        # also remove volumes (careful!)
```

## 5. Hands-on exercises
1. Write the `compose.yaml` above.
2. `docker compose up -d`. Check `docker compose ps`.
3. Open `http://localhost:8080`.
4. `docker compose down` to clean up.

## 6. Troubleshooting
- **Problem:** YAML error / bad indentation.
  **Fix:** YAML uses spaces, not tabs. Keep indentation even. Check with `docker compose config`.
- **Problem:** service cannot reach db.
  **Fix:** use the **service name** (`db`) as the host. Compose networks them together.

## 7. Common mistakes and how to avoid them
- Tabs in YAML — use spaces only.
- Forgetting the top-level `volumes:` block when you use a named volume.
- Using `down -v` by mistake — it deletes your data volumes.

## 8. Certification notes (what the exam wants)
- Compose YAML looks a lot like Kubernetes YAML. Learning Compose makes Kubernetes manifests easier.
- The idea "declare services in a file, then apply" is the same in both.

## 9. Practice questions and tasks
1. What does `docker compose up -d` do?
2. How do services find each other in Compose?
3. What is the danger of `docker compose down -v`?

## 10. References
- Compose docs: https://docs.docker.com/compose/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker Compose" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** One `compose.yaml` = your whole app. `up` to start, `down` to stop. Services talk by name.

<details><summary>Answers</summary>

1. Starts all services in the background.
2. By their service name (Compose puts them on one network).
3. It deletes the named volumes too — you can lose your data.
</details>
