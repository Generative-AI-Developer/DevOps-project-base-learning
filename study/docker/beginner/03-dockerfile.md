---
id: docker-beginner-study-dockerfile
track: docker
level: beginner
topic: Writing a Dockerfile
forProject: docker-beginner-project-03
---

# Study: Write a Dockerfile

> **Words to know**
> - **Dockerfile** — a text file with steps to build an image. The recipe you write.
> - **Build** — turn a Dockerfile into an image (`docker build`).
> - **Base image** — the image you start from (`FROM`).
> - **Layer** — each instruction makes a new layer.

## 1. Easy explanation (simple → deeper)
Until now you used images made by others. Now you make **your own**. You write a **Dockerfile** — a list of steps — then **build** it into an image.

A Dockerfile is like a recipe:
1. Start from a base (`FROM`).
2. Copy your files in (`COPY`).
3. Run setup commands (`RUN`).
4. Say what to run when it starts (`CMD`).

## 2. Key concepts and terms
- **`FROM image`** — the starting base.
- **`WORKDIR /app`** — set the working folder inside the image.
- **`COPY src dest`** — copy files from your computer into the image.
- **`RUN command`** — run a command at build time (e.g. install packages).
- **`EXPOSE 3000`** — document the port the app uses.
- **`CMD ["node","app.js"]`** — the default command when the container starts.
- **`docker build -t name:tag .`** — build the image from the Dockerfile in this folder.

## 3. Practical examples
A simple Node app Dockerfile:
```dockerfile
FROM node:20-slim
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```
Build and run:
```bash
docker build -t myapp:v1 .
docker run -d -p 3000:3000 --name myapp myapp:v1
```

## 4. Commands and config examples
```dockerfile
# a tiny static site with nginx
FROM nginx:1.27
COPY index.html /usr/share/nginx/html/index.html
```
```bash
docker build -t mysite:v1 .        # build (the "." means "this folder")
docker run -d -p 8080:80 mysite:v1 # run it
curl http://localhost:8080         # test it
```

## 5. Hands-on exercises
1. Make a folder with an `index.html` file (any text).
2. Write a Dockerfile that starts from `nginx:1.27` and copies your `index.html` in.
3. Build it as `mysite:v1`. Run it on port 8080. Open it.

## 6. Troubleshooting
- **Problem:** `COPY failed: no such file`.
  **Fix:** the file path is wrong, or the file is outside the build folder. Files must be in or under the folder you build from.
- **Problem:** build is slow every time.
  **Fix:** put lines that change less (like `RUN npm install`) **before** copying all code. This uses the build cache.

## 7. Common mistakes and how to avoid them
- Copying everything before installing dependencies — breaks caching. Copy `package.json` and install first.
- Forgetting `CMD` — the container may start and exit.
- Building without a tag — hard to find later. Use `-t name:tag`.

## 8. Certification notes (what the exam wants)
- **CKAD:** you must understand images and how apps are packaged. Building images is a core "Application Design & Build" skill.
- Knowing `FROM`, `COPY`, `RUN`, `CMD` is enough for most tasks.

## 9. Practice questions and tasks
1. What does `FROM` do?
2. What is the difference between `RUN` and `CMD`?
3. Why copy `package.json` before the rest of the code?

## 10. References
- Dockerfile reference: https://docs.docker.com/reference/dockerfile/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Dockerfile tutorial" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Dockerfile = recipe. `FROM` → `COPY` → `RUN` → `CMD`. Build with `docker build -t name:tag .`.

<details><summary>Answers</summary>

1. Sets the base image you start from.
2. `RUN` runs at build time (to set up the image); `CMD` runs when the container starts.
3. So the slow `npm install` layer is cached and not repeated when only your code changes.
</details>
