---
id: docker-advanced-project-02
track: docker
level: advanced
order: 2
title: "Run Your App as a Non-Root User"
prereqs: ["docker-advanced-project-01"]
skills: ["USER instruction", "non-root uid", "file ownership", "least privilege"]
certDomains: ["CKS: run as non-root (foundation)"]
estimatedTime: "60 minutes"
---

# Run Your App as a Non-Root User

**Status:** 🔒 Locked

## 1. Objective
Change your image so the app runs as a non-root user, and prove it.

## 2. Real-world scenario
Security says: *"No container may run as root."* You must update the image so the app runs as a limited user. This reduces damage if the app is ever hacked.

## 3. Skills and concepts you will learn
- Create a user in a Dockerfile.
- Switch to it with `USER`.
- Prove the app is non-root.

## 4. Prerequisites
- Docker Advanced Project 1 completed.
- Read: `study/docker/advanced/02-run-as-nonroot.md`.

## 5. Step-by-step requirements
1. Take your `helloapp` (or any small app).
2. Update the Dockerfile: create a non-root user (uid 10001) and add `USER appuser` before `CMD`.
3. Make sure the app listens on a high port (like 8000).
4. Build and run.
5. Prove the app is non-root: `docker exec <name> id` (uid must not be 0).
6. Prove the app still works (`curl`).

## 6. Tasks / challenges
- [ ] Non-root user created in the Dockerfile.
- [ ] `USER` switches before `CMD`.
- [ ] `id` inside shows a non-zero uid.
- [ ] App still works.

## 7. Expected outcome
Your app runs as a limited user, not root, and still serves requests.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Dockerfile showing the user creation and `USER` line.
2. `docker exec <name> id` shows `uid=10001` (or your chosen non-zero uid), **not** uid=0.
3. `curl` (or browser) shows the app still responds.
4. You explain in one sentence why non-root is safer.
5. All commands shown.

## 9. Verification checklist
- [ ] App runs as non-root.
- [ ] App still works.
- [ ] Evidence saved in `submissions/docker/advanced/project-02/`.

## 10. Common mistakes
- Putting `USER` after `CMD` (it must be before).
- App writing to a folder the user does not own.
- Using a low port (<1024) as non-root.

## 11. Hints
<details><summary>Hint 1</summary>Use the Dockerfile in `study/docker/advanced/02-run-as-nonroot.md`, section 3.</details>
<details><summary>Hint 2</summary>Check: `docker exec <name> id` and `docker exec <name> whoami`.</details>
<details><summary>Hint 3</summary>If the app fails to write, `chown` its work folder to the new user in the build, or write to a mounted volume with correct permissions.</details>

## 12. Final challenge
Also run it with `docker run --user 10001:10001 ...` at run time (not just in the Dockerfile). Show both ways force non-root. This matches how Kubernetes `securityContext` overrides the user.

## 13. What to submit (evidence)
Save the Dockerfile, the `id` proof, and the working app in `submissions/docker/advanced/project-02/`. Then say: **"I submit Docker Advanced Project 2."**

---
**Remember:** No root inside. Add a user, `USER` it, use a high port. This is a CKS must-know.
