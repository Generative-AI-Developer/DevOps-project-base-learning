---
id: docker-beginner-study-env-and-volumes
track: docker
level: beginner
topic: Environment variables and volumes
forProject: docker-beginner-project-04
---

# Study: Environment Variables and Volumes

> **Words to know**
> - **Environment variable (env var)** — a setting given to the app, like `PORT=3000`.
> - **Volume** — storage that lives outside the container, so data is not lost.
> - **Persist** — keep data even after the container is removed.
> - **Bind mount** — share a folder from your computer into the container.

## 1. Easy explanation (simple → deeper)
Two important needs:
1. **Configuration** — apps need settings (like a password or a port). You pass them as **environment variables** with `-e`.
2. **Saving data** — a container's own files disappear when you remove it. To keep data, you use a **volume** (storage that lives outside the container).

## 2. Key concepts and terms
- **`-e KEY=VALUE`** — set an environment variable.
- **`--env-file file`** — load many env vars from a file.
- **`-v myvol:/data`** — mount a named **volume** at `/data`.
- **`-v $(pwd)/site:/usr/share/nginx/html`** — a **bind mount** (share your folder).
- **`docker volume ls`** — list volumes.

## 3. Practical examples
- Pass a setting → `docker run -e APP_MODE=prod myapp`
- Keep database data → `docker run -d -e POSTGRES_PASSWORD=secret -v pgdata:/var/lib/postgresql/data postgres:16`
- Share a folder → `docker run -d -p 8080:80 -v $(pwd)/site:/usr/share/nginx/html nginx:1.27`

## 4. Commands and config examples
```bash
docker run --rm -e NAME=Sara alpine sh -c 'echo "Hello $NAME"'   # env var
docker volume create pgdata                                       # make a volume
docker run -d --name db -e POSTGRES_PASSWORD=secret \
  -v pgdata:/var/lib/postgresql/data postgres:16                  # persist DB data
docker volume ls                                                  # list volumes
```

## 5. Hands-on exercises
1. Run alpine with `-e NAME=YourName` and print "Hello YourName".
2. Make a volume `mydata`. Run a container that writes a file into `/data`, then remove the container. Run a new container with the same volume and show the file is still there.
3. Bind mount a folder into nginx and change the page live.

## 6. Troubleshooting
- **Problem:** data lost after `docker rm`.
  **Fix:** you did not use a volume. Mount one with `-v name:/path`.
- **Problem:** bind mount shows empty.
  **Fix:** the host path is wrong. Use a full path or `$(pwd)/folder`.

## 7. Common mistakes and how to avoid them
- Storing important data inside the container — always use a volume for data.
- Putting secrets in the image — pass them as env vars (better: use secrets, which you learn later).

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Kubernetes has the same ideas. Env vars → `env`/ConfigMaps/Secrets. Volumes → Kubernetes Volumes and PersistentVolumes.
- Understanding Docker volumes makes Kubernetes storage much easier.

## 9. Practice questions and tasks
1. How do you pass a setting to a container?
2. Why do you need a volume?
3. What is a bind mount?

## 10. References
- Docker volumes: https://docs.docker.com/storage/volumes/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker volumes" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** `-e` for settings, `-v` for data that must survive. Never keep important data only inside a container.

<details><summary>Answers</summary>

1. With an environment variable: `-e KEY=VALUE`.
2. So data is kept (persisted) even after the container is removed.
3. Sharing a folder from your computer into the container.
</details>
