---
id: docker-beginner-study-images
track: docker
level: beginner
topic: Docker images, tags, and registries
forProject: docker-beginner-project-02
---

# Study: Docker Images

> **Words to know**
> - **Image** — a saved package with an app and its files.
> - **Tag** — a label for an image version, like `nginx:1.27` or `node:20`.
> - **Registry** — an online store of images. **Docker Hub** is the default.
> - **Layer** — an image is built in layers, stacked on top of each other.

## 1. Easy explanation (simple → deeper)
An **image** is a read-only package. You **pull** it from a registry, and you **run** it to make a container.

Images have **tags** for versions:
- `nginx:latest` — the newest (but "latest" can change!).
- `nginx:1.27` — a fixed version (better for real work).

Images are made of **layers**. Shared layers are stored once, which saves space and time.

## 2. Key concepts and terms
- **`docker pull IMAGE:TAG`** — download an image.
- **`docker images`** — list local images.
- **`docker rmi IMAGE`** — remove an image.
- **`docker tag SRC NEW`** — give an image a new name/tag.
- **`docker inspect IMAGE`** — see details.
- **`docker history IMAGE`** — see the layers.

## 3. Practical examples
- Pull a fixed version → `docker pull nginx:1.27`
- List images → `docker images`
- Rename/tag → `docker tag nginx:1.27 my-nginx:v1`
- See layers → `docker history nginx:1.27`

## 4. Commands and config examples
```bash
docker pull python:3.12-slim     # pull a small python image
docker images                     # list local images
docker tag python:3.12-slim myapp:v1   # add a new tag
docker history python:3.12-slim   # show the layers
docker rmi myapp:v1               # remove an image tag
docker image prune                # remove unused images (careful)
```

## 5. Hands-on exercises
1. Pull `nginx:1.27` (a fixed tag).
2. List your images. Find the size.
3. Tag it as `my-nginx:v1`. List again — see both names.
4. Look at its layers with `docker history`.

## 6. Troubleshooting
- **Problem:** `manifest unknown` / tag not found.
  **Fix:** the tag does not exist. Check the tag list on Docker Hub. Spelling matters.
- **Problem:** disk is full of images.
  **Fix:** remove unused ones with `docker image prune` (read the warning first).

## 7. Common mistakes and how to avoid them
- Using `latest` in real work — it can change without warning. Pin a version like `1.27`.
- Never cleaning images — they use disk. Prune sometimes.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** you set image names and tags in Pod YAML. Always pin a version in production.
- **CKS:** small, trusted base images (like `-slim` or `distroless`) reduce risk.

## 9. Practice questions and tasks
1. What is a tag?
2. Why avoid `latest` in production?
3. Which command shows local images?

## 10. References
- Docker images docs: https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/ (checked: 2026-09-18)
- Docker Hub: https://hub.docker.com/ (checked: 2026-09-18)

---
**Remember:** Pull images by a fixed tag. `docker images` lists them. Avoid `latest` for real work.

<details><summary>Answers</summary>

1. A label for an image version (like `nginx:1.27`).
2. Because "latest" can change and break your app without warning.
3. `docker images`.
</details>
