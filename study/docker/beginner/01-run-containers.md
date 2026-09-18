---
id: docker-beginner-study-run-containers
track: docker
level: beginner
topic: Running and managing containers
forProject: docker-beginner-project-01
---

# Study: Run and Manage Containers

> **Words to know**
> - **Image** — a saved package with an app inside. The recipe.
> - **Container** — a running copy of an image. The meal.
> - **Registry** — an online store of images (like Docker Hub).
> - **Detached** — running in the background (`-d`).

## 1. Easy explanation (simple → deeper)
Docker runs apps in **containers**. A container comes from an **image**.

Think of it like cooking:
- **Image** = the recipe (saved, does not change).
- **Container** = the meal you cook from it (running, you can have many).

You can start, stop, list, and remove containers. You can also look inside a running one.

## 2. Key concepts and terms
- **`docker run IMAGE`** — start a container from an image.
- **`-d`** — run in the background (detached).
- **`-p 8080:80`** — connect port 8080 on your machine to port 80 in the container.
- **`--name web`** — give the container a name.
- **`docker ps`** — list running containers. `-a` shows stopped ones too.
- **`docker logs NAME`** — see a container's output.
- **`docker exec -it NAME bash`** — open a shell inside a running container.
- **`docker stop/rm NAME`** — stop and remove.

## 3. Practical examples
- Run nginx in background → `docker run -d --name web -p 8080:80 nginx`
- See it → `docker ps`
- Open the site → visit `http://localhost:8080`
- Look inside → `docker exec -it web bash`
- Logs → `docker logs web`
- Clean up → `docker stop web && docker rm web`

## 4. Commands and config examples
```bash
docker run hello-world              # test docker works
docker run -d --name web -p 8080:80 nginx   # background web server
docker ps                            # running containers
docker ps -a                         # all containers (incl. stopped)
docker logs web                      # container output
docker exec -it web bash             # shell inside (exit to leave)
docker stop web                      # stop it
docker rm web                        # remove it
docker run --rm alpine echo "hi"     # run once, auto-remove after
```

## 5. Hands-on exercises
1. Run `hello-world`. Read the message.
2. Run nginx in the background on port 8080. Open it in a browser.
3. List running containers. Read the logs of nginx.
4. Open a shell inside the nginx container, run `ls`, then exit.
5. Stop and remove the container.

## 6. Troubleshooting
- **Problem:** `port is already allocated`.
  **Fix:** another program uses that port. Pick a different one, like `-p 8081:80`.
- **Problem:** `permission denied` running docker.
  **Fix:** add your user to the `docker` group, or use `sudo docker ...`.
- **Problem:** container exits right away.
  **Fix:** check `docker logs NAME`. Some images need a command to keep running.

## 7. Common mistakes and how to avoid them
- Forgetting `-d` — the container holds your terminal. Use `-d` for servers.
- Wrong port order — it is `host:container` (`-p 8080:80`).
- Not cleaning up — stopped containers pile up. Remove them.

## 8. Certification notes (what the exam wants)
- Kubernetes runs containers too. Understanding `docker run`, `logs`, and `exec` helps you understand Pods.
- `kubectl logs` and `kubectl exec` are the Kubernetes versions of these.

## 9. Practice questions and tasks
1. What is the difference between an image and a container?
2. What does `-p 8080:80` mean?
3. How do you open a shell inside a running container?

## 10. References
- Docker get started: https://docs.docker.com/get-started/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker Tutorial for Beginners" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Image = recipe, container = running meal. `run`, `ps`, `logs`, `exec`, `stop`, `rm`.

<details><summary>Answers</summary>

1. An image is the saved package (recipe); a container is a running copy of it (the meal).
2. Connect port 8080 on your computer to port 80 inside the container.
3. `docker exec -it NAME bash` (or `sh`).
</details>
