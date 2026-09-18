---
id: docker-advanced-project-03
track: docker
level: advanced
order: 3
title: "Harden a Container (Drop Powers, Read-Only)"
prereqs: ["docker-advanced-project-02"]
skills: ["cap-drop", "read-only fs", "no-new-privileges", "resource limits"]
certDomains: ["CKS: cluster/container hardening (foundation)"]
estimatedTime: "60–90 minutes"
---

# Harden a Container (Drop Powers, Read-Only)

**Status:** 🔒 Locked

## 1. Objective
Run your app with a hardened setup: dropped capabilities, read-only filesystem, no-new-privileges, and resource limits.

## 2. Real-world scenario
Security wants your container locked down: it should have only the powers it needs and nothing more. You apply hardening flags and prove they work.

## 3. Skills and concepts you will learn
- Drop capabilities.
- Make the filesystem read-only (with a temp space).
- Set no-new-privileges.
- Add memory and CPU limits.

## 4. Prerequisites
- Docker Advanced Project 2 completed (non-root app).
- Read: `study/docker/advanced/03-container-hardening.md`.

## 5. Step-by-step requirements
1. Run your non-root `safeapp` with ALL of these:
   - `--cap-drop ALL`
   - `--read-only --tmpfs /tmp`
   - `--security-opt no-new-privileges:true`
   - `--memory 128m --cpus 0.5`
2. Prove the app still works (`curl`).
3. Prove the filesystem is read-only: try to create a file in a read-only path and show it fails.
4. Show the limits with `docker stats --no-stream`.
5. Write the same setup as a `compose.yaml` block.

## 6. Tasks / challenges
- [ ] App runs with all hardening flags.
- [ ] App still works.
- [ ] Read-only proven (a write fails).
- [ ] Limits shown.
- [ ] Compose version written.

## 7. Expected outcome
Your container runs with the smallest powers and still works. You can prove the hardening is active.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show the full `docker run` command with all four hardening options.
2. `curl` shows the app still responds.
3. You show a write attempt to a read-only path failing (e.g. `docker exec <name> sh -c 'touch /app/x'` → error).
4. `docker stats --no-stream` shows the memory limit (128m).
5. You paste an equal `compose.yaml` block (read_only, cap_drop, security_opt, limits).
6. You explain in one sentence why dropping capabilities helps security.

## 9. Verification checklist
- [ ] All hardening flags used.
- [ ] Read-only proven.
- [ ] Limits shown.
- [ ] Compose version written.
- [ ] Evidence saved in `submissions/docker/advanced/project-03/`.

## 10. Common mistakes
- Read-only with no `--tmpfs` → app crashes when it writes temp files.
- Dropping a needed capability without adding it back.
- Forgetting the resource limits.

## 11. Hints
<details><summary>Hint 1</summary>Use the full `docker run` command in `study/docker/advanced/03-container-hardening.md`, section 3.</details>
<details><summary>Hint 2</summary>Prove read-only: `docker exec <name> sh -c 'echo hi > /app/test'` should fail with "Read-only file system".</details>
<details><summary>Hint 3</summary>The compose block is in the study doc, section 4.</details>

## 12. Final challenge
Map each flag you used to its Kubernetes `securityContext` field (for example: `--cap-drop ALL` → `capabilities.drop: [ALL]`). Write the mapping. You will use these exact fields in the CKS track.

## 13. What to submit (evidence)
Save the run command, the working app, the read-only failure, stats, and the compose block in `submissions/docker/advanced/project-03/`. Then say: **"I submit Docker Advanced Project 3."**

---
**Remember:** Drop powers, read-only files, no new privileges, limit resources. This is the Docker version of a K8s securityContext.
