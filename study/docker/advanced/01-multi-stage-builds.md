---
id: docker-advanced-study-multi-stage-builds
track: docker
level: advanced
topic: Multi-stage builds and image optimization
forProject: docker-advanced-project-01
---

# Study: Multi-Stage Builds and Small Images

> **Words to know**
> - **Multi-stage build** — a Dockerfile with more than one `FROM`. You build in one stage, then copy only the result into a small final stage.
> - **Build tools** — things needed to build, but not to run (compilers, dev packages).
> - **Layer caching** — reusing unchanged layers to build faster.

## 1. Easy explanation (simple → deeper)
Big images are slow and less safe. You want the final image to hold **only what the app needs to run** — not the build tools.

A **multi-stage build** solves this:
1. **Stage 1 (builder):** install build tools, build the app.
2. **Stage 2 (final):** start from a small base, copy only the built result. Throw away the build tools.

The final image is small, fast to pull, and has fewer things that could be attacked.

## 2. Key concepts and terms
- Name a stage: `FROM node:20 AS builder`.
- Copy from a stage: `COPY --from=builder /app/dist ./dist`.
- Small bases: `-slim`, `alpine`, or `distroless` (very small, no shell).
- Order layers so slow steps (installing deps) are cached.

## 3. Practical examples
```dockerfile
# Stage 1: build
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build          # makes /app/dist

# Stage 2: small final image
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

## 4. Commands and config examples
```bash
docker build -t myweb:1.0.0 .
docker image ls myweb                # compare size to a single-stage build
docker history myweb:1.0.0           # see the layers
docker build --target builder -t myweb:build .   # build only stage 1 (for debugging)
```

## 5. Hands-on exercises
1. Write a multi-stage Dockerfile (builder + small final).
2. Build it. Note the final size.
3. Write a single-stage version too. Compare the sizes.

## 6. Troubleshooting
- **Problem:** `COPY --from` path not found.
  **Fix:** the path must exist in the builder stage. Check where your build output lands.
- **Problem:** app missing a runtime file.
  **Fix:** copy all needed runtime files into the final stage, not just some.

## 7. Common mistakes and how to avoid them
- Shipping build tools in the final image — use multi-stage.
- Copying the whole builder — copy only the result.
- Big base image — use slim/alpine/distroless.

## 8. Certification notes (what the exam wants)
- **CKS:** small images reduce attack surface (fewer tools for an attacker). Multi-stage + distroless is a known best practice.
- Smaller images pull faster in Kubernetes too.

## 9. Practice questions and tasks
1. Why use a multi-stage build?
2. How do you copy a file from a previous stage?
3. Why is a smaller image safer?

## 10. References
- Multi-stage builds: https://docs.docker.com/build/building/multi-stage/ (checked: 2026-09-18)
- Distroless images: https://github.com/GoogleContainerTools/distroless (checked: 2026-09-18)

---
**Remember:** Build in one stage, ship a small final stage. Copy only the result. Small = fast + safe.

<details><summary>Answers</summary>

1. To keep build tools out of the final image, making it small and safe.
2. `COPY --from=<stage> <src> <dest>`.
3. Fewer tools/files means fewer things an attacker can use.
</details>
