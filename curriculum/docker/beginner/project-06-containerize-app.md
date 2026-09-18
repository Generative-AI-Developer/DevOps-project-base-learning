---
id: docker-beginner-project-06
track: docker
level: beginner
order: 6
title: "Containerize a Real App (Level Boss)"
prereqs: ["docker-beginner-project-05"]
skills: ["Dockerfile", "build", "run", "port mapping", ".dockerignore", "logs"]
certDomains: ["CKAD: Application Design & Build"]
estimatedTime: "90 minutes"
---

# Containerize a Real App (Level Boss 🏆)

**Status:** 🔒 Locked

This is the **last project** of Docker Beginner. Finish it to complete the level and unlock Docker Intermediate.

## 1. Objective
Take a small app, put it in a Docker image, run it, and test it. This is real containerization.

## 2. Real-world scenario
A developer gives you a small web app and says: *"Make it run in Docker so we can deploy it anywhere."* You write the Dockerfile, build the image, and prove it works.

## 3. Skills and concepts you will learn
- Package an app with a Dockerfile.
- Use `.dockerignore`.
- Publish the app's port.
- Debug with `docker logs`.

## 4. Prerequisites
- Docker Beginner Project 5 completed.
- Read: `study/docker/beginner/06-containerize-app.md`.

## 5. Step-by-step requirements
1. Make a folder `helloapp`. Inside it, make the small web app (use the `app.py` from the study doc, or any tiny app you like).
2. Write a `Dockerfile` (base image → copy → `CMD`).
3. Add a `.dockerignore`.
4. Build the image as `helloapp:v1`.
5. Run it on port 8000, named `helloapp`.
6. Test with `curl http://localhost:8000` — it must show your app's message.
7. Show `docker logs helloapp`.
8. Clean up.

## 6. Tasks / challenges
- [ ] App file created.
- [ ] Dockerfile + `.dockerignore` created.
- [ ] Image builds as `helloapp:v1`.
- [ ] `curl` shows the app's message.
- [ ] Logs shown.

## 7. Expected outcome
Your own app runs inside a container and answers on port 8000. You containerized it end to end.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the app file, the `Dockerfile`, and the `.dockerignore`.
2. `docker build -t helloapp:v1 .` output shows success.
3. `docker ps` shows `helloapp` with the published port.
4. `curl http://localhost:8000` returns your app's message.
5. `docker logs helloapp` output shown.
6. The app listens on `0.0.0.0` (not `127.0.0.1`) — confirm it is reachable.
7. You cleaned up after.

## 9. Verification checklist
- [ ] App containerized and reachable.
- [ ] Logs shown.
- [ ] `.dockerignore` present.
- [ ] Evidence saved in `submissions/docker/beginner/project-06/`.

## 10. Common mistakes
- App on `127.0.0.1` inside → not reachable. Use `0.0.0.0`.
- Forgetting `-p 8000:8000`.
- No `.dockerignore` → big image.

## 11. Hints
<details><summary>Hint 1</summary>Use the exact `app.py` and Dockerfile from `study/docker/beginner/06-containerize-app.md`, section 3.</details>
<details><summary>Hint 2</summary>Build + run: `docker build -t helloapp:v1 .` then `docker run -d -p 8000:8000 --name helloapp helloapp:v1`.</details>
<details><summary>Hint 3</summary>If `curl` fails, check `docker logs helloapp` and make sure the app binds `0.0.0.0:8000`.</details>

## 12. Final challenge
Make the app's message come from an **environment variable** (like `GREETING`). Rebuild, then run with `-e GREETING="Hi from env"`, and prove the message changed. (This connects env vars + your own app.)

## 13. What to submit (evidence)
Save the app file, `Dockerfile`, `.dockerignore`, build output, `curl` result, and logs in `submissions/docker/beginner/project-06/`. Then say: **"I submit Docker Beginner Project 6."** When it passes, Docker Intermediate unlocks! 🎉

---
**Remember:** App → Dockerfile → build → run → test. You can now package any app into a container.
