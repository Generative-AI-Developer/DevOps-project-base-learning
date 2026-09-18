---
id: docker-beginner-project-02
track: docker
level: beginner
order: 2
title: "Pull, Tag, and Explore Images"
prereqs: ["docker-beginner-project-01"]
skills: ["docker pull", "images", "tag", "history", "version pinning"]
certDomains: ["CKAD/CKA: image tags in Pod specs (foundation)"]
estimatedTime: "45 minutes"
---

# Pull, Tag, and Explore Images

**Status:** 🔒 Locked

## 1. Objective
Learn to pull images by a fixed tag, list them, tag them, and look at their layers.

## 2. Real-world scenario
Your team says: *"Use nginx version 1.27, not latest. And prepare our own tag for it."* Pinning versions keeps the app stable. This is a real production rule.

## 3. Skills and concepts you will learn
- Pull by a fixed tag.
- List and read image sizes.
- Re-tag an image.
- See image layers with `docker history`.

## 4. Prerequisites
- Docker Beginner Project 1 completed.
- Read: `study/docker/beginner/02-images.md`.

## 5. Step-by-step requirements
1. Pull `nginx:1.27` (a fixed tag, not `latest`).
2. List images and find the nginx size.
3. Tag it as `my-nginx:v1`.
4. Show `docker images` again — both names should appear.
5. Show the layers with `docker history nginx:1.27`.
6. Pull a small image too: `python:3.12-slim`. Compare its size to a full image if you want.

## 6. Tasks / challenges
- [ ] Pull `nginx:1.27`.
- [ ] Show image size.
- [ ] Tag as `my-nginx:v1`.
- [ ] Show both names in `docker images`.
- [ ] Show `docker history`.

## 7. Expected outcome
You have nginx pinned at 1.27, a second tag `my-nginx:v1`, and you understand layers and sizes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `docker pull nginx:1.27` output shown (not `latest`).
2. `docker images` shows `nginx 1.27` with a size.
3. `docker tag` created `my-nginx:v1`, and `docker images` shows both.
4. `docker history nginx:1.27` output shown (the layers).
5. You explain in one sentence why pinning a version is better than `latest`.
6. All commands shown.

## 9. Verification checklist
- [ ] Fixed tag pulled.
- [ ] Re-tag worked.
- [ ] Layers shown.
- [ ] Evidence saved in `submissions/docker/beginner/project-02/`.

## 10. Common mistakes
- Pulling `latest` by habit — use the fixed tag `1.27`.
- Confusing `tag` order — it is `docker tag SOURCE NEW`.

## 11. Hints
<details><summary>Hint 1</summary>`docker pull nginx:1.27` then `docker images`.</details>
<details><summary>Hint 2</summary>`docker tag nginx:1.27 my-nginx:v1`. Then `docker images` shows both names, same image ID.</details>
<details><summary>Hint 3</summary>Pinning avoids surprise changes: `latest` can update to a new version that breaks your app.</details>

## 12. Final challenge
Find how many layers `python:3.12-slim` has vs `python:3.12` (the full one). Pull both and compare `docker history` and sizes. Which is smaller, and why is small better?

## 13. What to submit (evidence)
Save all commands + output + your one-sentence explanation in `submissions/docker/beginner/project-02/`. Then say: **"I submit Docker Beginner Project 2."**

---
**Remember:** Pin versions. Small images are better. `docker history` shows the layers.
