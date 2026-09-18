---
id: docker-intermediate-study-cicd-workflow
track: docker
level: intermediate
topic: A CI/CD-style image workflow
forProject: docker-intermediate-project-07
---

# Study: A CI/CD-Style Image Workflow

> **Words to know**
> - **CI/CD** — Continuous Integration / Continuous Delivery. In simple words: an automatic pipeline that builds, tests, and ships your app.
> - **Registry** — where images are stored and shared.
> - **Push / Pull** — upload / download an image.
> - **Semantic version** — a version like `1.2.3` (major.minor.patch).

## 1. Easy explanation (simple → deeper)
In real teams, images follow a flow:
1. **Build** the image from a Dockerfile.
2. **Tag** it with a clear version (like `1.0.0`) — not just `latest`.
3. **Test** it (run it, check it works).
4. **Push** it to a registry so others (and Kubernetes) can pull it.

This is the heart of CI/CD. You will do it by hand first, so you understand what the pipeline does.

## 2. Key concepts and terms
- Tag format: `registry/name:version`, e.g. `docker.io/youruser/helloapp:1.0.0`.
- **Local registry** for practice: `docker run -d -p 5000:5000 --name registry registry:2`. Then push to `localhost:5000/helloapp:1.0.0`.
- `docker login` (for Docker Hub) before pushing to a real registry.
- Keep a `.dockerignore` so images stay small.

## 3. Practical examples
```bash
# build with a version tag
docker build -t localhost:5000/helloapp:1.0.0 .
# run + test
docker run -d -p 8000:8000 --name test localhost:5000/helloapp:1.0.0
curl -f http://localhost:8000
# push to a local registry
docker run -d -p 5000:5000 --name registry registry:2   # start a local registry
docker push localhost:5000/helloapp:1.0.0
# pull it back to prove it is stored
docker pull localhost:5000/helloapp:1.0.0
```

## 4. Commands and config examples
```bash
docker tag helloapp:1.0.0 localhost:5000/helloapp:1.0.0
docker push localhost:5000/helloapp:1.0.0
docker image inspect localhost:5000/helloapp:1.0.0 --format '{{.Size}}'
# a simple build+test+push script (the "pipeline" by hand)
```
```bash
#!/bin/bash
set -euo pipefail
IMAGE="localhost:5000/helloapp"
VERSION="1.0.0"
docker build -t "$IMAGE:$VERSION" .
docker run --rm -d -p 8000:8000 --name test "$IMAGE:$VERSION"
sleep 2
curl -f http://localhost:8000 && echo "TEST PASSED"
docker stop test
docker push "$IMAGE:$VERSION"
echo "Shipped $IMAGE:$VERSION"
```

## 5. Hands-on exercises
1. Start a local registry (`registry:2`) on port 5000.
2. Build your `helloapp` with a version tag pointing at `localhost:5000`.
3. Test it, then push it. Then pull it back.

## 6. Troubleshooting
- **Problem:** `push` refused / http error.
  **Fix:** for a local registry use `localhost:5000/...`. For Docker Hub, `docker login` first.
- **Problem:** image too big.
  **Fix:** use a slim base and a `.dockerignore`.

## 7. Common mistakes and how to avoid them
- Shipping `latest` — always tag a real version.
- Pushing without testing — always run + test before push.
- No `.dockerignore` — bloated images.

## 8. Certification notes (what the exam wants)
- **CKAD:** you deploy images by name:tag in Pod specs. Clear versioning matters.
- **CKS:** trusted registries and scanned images are part of supply-chain security (you will go deeper in the CKS track).

## 9. Practice questions and tasks
1. Why tag a version instead of `latest`?
2. What are the 4 steps of the image flow?
3. What is a registry?

## 10. References
- Docker registry: https://docs.docker.com/registry/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker registry / CI" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Build → tag a version → test → push. This is CI/CD by hand. Never ship untested `latest`.

<details><summary>Answers</summary>

1. So you know exactly which version runs, and can roll back; `latest` can change.
2. Build, tag (version), test, push.
3. A store where images are saved and shared (and pulled by Kubernetes).
</details>
