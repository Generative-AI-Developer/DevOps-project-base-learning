---
id: docker-beginner-project-03
track: docker
level: beginner
order: 3
title: "Build Your Own Image with a Dockerfile"
prereqs: ["docker-beginner-project-02"]
skills: ["Dockerfile", "FROM/COPY/RUN/CMD", "docker build", "tagging"]
certDomains: ["CKAD: Application Design & Build"]
estimatedTime: "60–90 minutes"
---

# Build Your Own Image with a Dockerfile

**Status:** 🔒 Locked

## 1. Objective
Write a Dockerfile and build your own image. Run it as a container and test it.

## 2. Real-world scenario
Your team has a small website. They say: *"Package it as a Docker image so anyone can run it with one command."* Building images is the core Docker skill.

## 3. Skills and concepts you will learn
- Write a Dockerfile (`FROM`, `COPY`, `CMD`).
- Build an image with `docker build -t`.
- Run and test your own image.

## 4. Prerequisites
- Docker Beginner Project 2 completed.
- Read: `study/docker/beginner/03-dockerfile.md`.

## 5. Step-by-step requirements
1. Make a project folder `mysite`.
2. Inside it, make `index.html` with a heading like `<h1>Hello from my Docker image</h1>`.
3. Write a `Dockerfile` that starts from `nginx:1.27` and copies your `index.html` into `/usr/share/nginx/html/`.
4. Build the image as `mysite:v1`.
5. Run it in the background on port 8080, named `mysite`.
6. Test with `curl http://localhost:8080` — it must show your heading.
7. Clean up (stop + rm).

## 6. Tasks / challenges
- [ ] `index.html` created with your heading.
- [ ] `Dockerfile` uses `FROM nginx:1.27` and `COPY`.
- [ ] `docker build -t mysite:v1 .` succeeds.
- [ ] Container runs on 8080.
- [ ] `curl` shows YOUR page (not the default nginx page).

## 7. Expected outcome
Your own image serves your own HTML page. You built it from a Dockerfile.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the `Dockerfile` and the `index.html`.
2. `docker build -t mysite:v1 .` output shows a successful build.
3. `docker images` shows `mysite v1`.
4. `curl http://localhost:8080` returns **your** heading text (not the default nginx welcome page).
5. You cleaned up the container after.
6. All commands shown.

## 9. Verification checklist
- [ ] Dockerfile correct.
- [ ] Image built and tagged.
- [ ] Your page is served (not default).
- [ ] Evidence saved in `submissions/docker/beginner/project-03/`.

## 10. Common mistakes
- Wrong copy path — nginx serves from `/usr/share/nginx/html/`.
- Forgetting the `.` at the end of `docker build -t mysite:v1 .`.
- Seeing the default nginx page — that means your COPY did not overwrite `index.html`.

## 11. Hints
<details><summary>Hint 1</summary>Dockerfile:
```dockerfile
FROM nginx:1.27
COPY index.html /usr/share/nginx/html/index.html
```
</details>
<details><summary>Hint 2</summary>Build and run: `docker build -t mysite:v1 .` then `docker run -d -p 8080:80 --name mysite mysite:v1`.</details>
<details><summary>Hint 3</summary>If you see the default page, your `index.html` was not copied to the right name/path. Check the COPY line and rebuild.</details>

## 12. Final challenge
Add a second file `about.html` and copy it in too. Then `curl http://localhost:8080/about.html` to prove it is served.

## 13. What to submit (evidence)
Save `Dockerfile`, `index.html`, the build output, and the `curl` result in `submissions/docker/beginner/project-03/`. Then say: **"I submit Docker Beginner Project 3."**

---
**Remember:** `FROM` → `COPY` → build with `-t name:tag .` → run → test. You made your own image!
