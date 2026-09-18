---
id: docker-advanced-project-01
track: docker
level: advanced
order: 1
title: "Shrink an Image with a Multi-Stage Build"
prereqs: ["docker-intermediate-project-07"]
skills: ["multi-stage builds", "COPY --from", "small base images", "size comparison"]
certDomains: ["CKS: minimize image (foundation)", "CKAD: image build"]
estimatedTime: "60–90 minutes"
---

# Shrink an Image with a Multi-Stage Build

**Status:** 🔒 Locked

## 1. Objective
Build the same app two ways — single-stage and multi-stage — and prove the multi-stage image is much smaller.

## 2. Real-world scenario
Your images are huge and slow to pull. The team asks you to make them small and safe. Multi-stage builds are the answer.

## 3. Skills and concepts you will learn
- Write a multi-stage Dockerfile.
- Copy only the build result into a small final image.
- Compare image sizes.

## 4. Prerequisites
- Docker Intermediate completed.
- Read: `study/docker/advanced/01-multi-stage-builds.md`.

## 5. Step-by-step requirements
1. Make a small app that needs a "build" step. Easiest option: a static site where the "build" just copies HTML, OR a tiny compiled program. (If unsure, use a small static site built by a Node stage, as in the study doc.)
2. Write `Dockerfile.single` — a single-stage version (includes build tools).
3. Write `Dockerfile` — a multi-stage version (builder + small final).
4. Build both. Record both image sizes.
5. Run the multi-stage image and prove the app works.

## 6. Tasks / challenges
- [ ] Single-stage image built.
- [ ] Multi-stage image built.
- [ ] Multi-stage image is clearly smaller.
- [ ] Multi-stage app runs and works.

## 7. Expected outcome
Two images for the same app. The multi-stage one is much smaller and still works.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste both Dockerfiles (`Dockerfile.single` and the multi-stage `Dockerfile`).
2. `docker image ls` shows both images with their sizes, and the multi-stage one is **smaller** (say by how much).
3. The multi-stage `Dockerfile` uses a named builder stage and `COPY --from=...`.
4. The multi-stage image runs and the app responds (show `curl` or a browser check).
5. You explain in one sentence why the multi-stage image is smaller.
6. All commands shown.

## 9. Verification checklist
- [ ] Both images built.
- [ ] Size difference shown.
- [ ] Multi-stage app works.
- [ ] Evidence saved in `submissions/docker/advanced/project-01/`.

## 10. Common mistakes
- Copying the whole builder into the final image.
- `COPY --from` path wrong.
- Using a big final base — pick slim/alpine.

## 11. Hints
<details><summary>Hint 1</summary>Use the multi-stage example in `study/docker/advanced/01-multi-stage-builds.md`, section 3.</details>
<details><summary>Hint 2</summary>Build with a name: `docker build -f Dockerfile.single -t app:single .` and `docker build -t app:multi .`.</details>
<details><summary>Hint 3</summary>Compare: `docker image ls | grep app`. The multi image is smaller because it does not carry build tools.</details>

## 12. Final challenge
Try a **distroless** or `alpine` final base and compare again. How small can you get it while the app still runs?

## 13. What to submit (evidence)
Save both Dockerfiles, the `image ls` size comparison, and the working app proof in `submissions/docker/advanced/project-01/`. Then say: **"I submit Docker Advanced Project 1."**

---
**Remember:** Build in one stage, ship a small final stage. Small images pull faster and are safer.
