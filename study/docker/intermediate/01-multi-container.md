---
id: docker-intermediate-study-multi-container
track: docker
level: intermediate
topic: Running a multi-container app by hand
forProject: docker-intermediate-project-01
---

# Study: Multi-Container Apps (By Hand)

> **Words to know**
> - **Multi-container app** — an app made of several containers working together.
> - **Tier** — one layer of the app (web tier, database tier).
> - **Service** — one part of the app (like "web" or "db").

## 1. Easy explanation (simple → deeper)
Real apps have parts:
- a **web** part (what users see),
- a **database** part (where data is saved),
- sometimes a **cache** part (for speed).

Each part runs in its own container. They talk over a shared network. In this lesson you connect them **by hand** with `docker run`. In the next lesson, Compose does it for you.

## 2. Key concepts and terms
- Put all parts on the **same user network** so they talk by name.
- Give each part a clear `--name`.
- Only publish the port that users need (usually the web part).
- The web part connects to the database using the database's **container name** as the host.

## 3. Practical examples
A web app + redis cache:
```bash
docker network create shopnet
docker run -d --name cache --network shopnet redis:7
docker run -d --name web --network shopnet -p 8080:80 \
  -e CACHE_HOST=cache nginx:1.27
```
The web container reaches the cache at hostname `cache`.

## 4. Commands and config examples
```bash
docker network create shopnet
docker run -d --name db --network shopnet \
  -e POSTGRES_PASSWORD=secret -v shopdata:/var/lib/postgresql/data postgres:16
docker run -d --name cache --network shopnet redis:7
docker run -d --name web --network shopnet -p 8080:80 nginx:1.27
docker ps
docker exec web getent hosts db     # web can find db by name
```

## 5. Hands-on exercises
1. Make a network. Run a `db` (postgres) and a `cache` (redis) on it.
2. Run a `web` (nginx) on the same network, publish port 8080.
3. From `web`, prove you can resolve `db` and `cache` by name.

## 6. Troubleshooting
- **Problem:** web cannot reach db.
  **Fix:** same network? correct name? Check `docker network inspect shopnet`.
- **Problem:** db keeps restarting.
  **Fix:** check `docker logs db`. Postgres needs `POSTGRES_PASSWORD`.

## 7. Common mistakes and how to avoid them
- Different networks for parts that must talk — put them together.
- Publishing the database port to the world — usually not needed and unsafe.

## 8. Certification notes (what the exam wants)
- This is the mental model for Kubernetes: many Pods (parts) on a shared network, talking through Services.
- Doing it by hand first makes Compose and Kubernetes easy.

## 9. Practice questions and tasks
1. Why put all parts on the same network?
2. How does the web part find the database?
3. Which part usually publishes a port?

## 10. References
- Docker multi-container: https://docs.docker.com/get-started/workshop/07_multi_container/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker multi-container" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Many parts, one network, talk by name. Publish only what users need.

<details><summary>Answers</summary>

1. So they can find and talk to each other by name.
2. By using the database container's name as the hostname.
3. The web part (the one users reach).
</details>
