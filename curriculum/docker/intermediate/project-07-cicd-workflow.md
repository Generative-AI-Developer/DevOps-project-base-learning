---
id: docker-intermediate-project-07
track: docker
level: intermediate
order: 7
title: "Build a Build-Test-Push Pipeline (Level Boss)"
prereqs: ["docker-intermediate-project-06"]
skills: ["versioned tags", "local registry", "build-test-push script", ".dockerignore"]
certDomains: ["CKAD: images & deployment (foundation)", "CKS: registries (intro)"]
estimatedTime: "90 minutes"
---

# Build a Build-Test-Push Pipeline (Level Boss 🏆)

**Status:** 🔒 Locked

This is the **last project** of Docker Intermediate. Finish it to unlock Docker Advanced.

## 1. Objective
Write a small script that builds your image with a version tag, tests it, and pushes it to a registry — a CI/CD pipeline by hand.

## 2. Real-world scenario
Your team wants a repeatable way to ship images: build, test, and push with a clear version. You automate it in one script, the way a CI pipeline does.

## 3. Skills and concepts you will learn
- Version tags (`1.0.0`, not `latest`).
- Run a local registry.
- A build → test → push script.
- Keep images small with `.dockerignore`.

## 4. Prerequisites
- Docker Intermediate Project 6 completed.
- Read: `study/docker/intermediate/07-cicd-workflow.md`.
- Use your `helloapp` from Docker Beginner Project 6.

## 5. Step-by-step requirements
1. Start a local registry: `docker run -d -p 5000:5000 --name registry registry:2`.
2. Write `pipeline.sh` (with `set -euo pipefail`) that:
   - builds `localhost:5000/helloapp:1.0.0`,
   - runs it and tests it with `curl -f` (fail the script if the test fails),
   - stops the test container,
   - pushes the image to the local registry,
   - prints a clear "Shipped ..." message.
3. Run the script. Then prove the image is in the registry by pulling it back.

## 6. Tasks / challenges
- [ ] Local registry running.
- [ ] `pipeline.sh` builds with a version tag.
- [ ] Test step fails the script if the app is broken.
- [ ] Push succeeds.
- [ ] Pull-back proves it is stored.

## 7. Expected outcome
`./pipeline.sh` builds, tests, and pushes your image with a version tag. You can pull it back from the registry.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste `pipeline.sh` (it uses `set -euo pipefail`).
2. The image is tagged `localhost:5000/helloapp:1.0.0` (a real version, not `latest`).
3. The script's test uses `curl -f` so a broken app **fails** the pipeline (explain how).
4. `docker push` output shows a successful push.
5. `docker pull localhost:5000/helloapp:1.0.0` (after removing the local copy) succeeds — proving it is stored.
6. A `.dockerignore` is present.
7. All commands and script output shown.

## 9. Verification checklist
- [ ] Versioned tag.
- [ ] Test gates the push.
- [ ] Push + pull-back work.
- [ ] Evidence saved in `submissions/docker/intermediate/project-07/`.

## 10. Common mistakes
- Tagging `latest` — use `1.0.0`.
- Test does not actually fail the script — use `curl -f` and `set -e`.
- Forgetting to start the local registry.

## 11. Hints
<details><summary>Hint 1</summary>Start the registry: `docker run -d -p 5000:5000 --name registry registry:2`.</details>
<details><summary>Hint 2</summary>Use the pipeline script in `study/docker/intermediate/07-cicd-workflow.md`, section 4. Adjust the app/port to your `helloapp`.</details>
<details><summary>Hint 3</summary>Prove storage: `docker rmi localhost:5000/helloapp:1.0.0` then `docker pull localhost:5000/helloapp:1.0.0`.</details>

## 12. Final challenge
Add a second tag automatically: also tag and push `:latest` **and** `:1.0.0` from the same build, and add a git-style short version (like `1.0.0-$(date +%Y%m%d)`). Real pipelines often push several tags.

## 13. What to submit (evidence)
Save `pipeline.sh`, `.dockerignore`, the full run output, and the pull-back proof in `submissions/docker/intermediate/project-07/`. Then say: **"I submit Docker Intermediate Project 7."** When it passes, Docker Advanced unlocks! 🎉

---
**Remember:** Build → test → push, with a real version tag. You just built a CI/CD pipeline by hand.
