---
id: kubernetes-beginner-project-02
track: kubernetes
level: beginner
order: 2
title: "Run and Inspect a Pod"
prereqs: ["kubernetes-beginner-project-01"]
skills: ["Pod YAML", "apply", "get/describe/logs/exec", "dry-run YAML"]
certDomains: ["CKAD: Application Deployment (core)"]
estimatedTime: "60 minutes"
---

# Run and Inspect a Pod

**Status:** 🔒 Locked

## 1. Objective
Create a Pod from a YAML manifest, inspect it, read its logs, and go inside it.

## 2. Real-world scenario
You need to test a container in the cluster. You write a small Pod manifest, apply it, and check it is healthy — the most basic Kubernetes skill.

## 3. Skills and concepts you will learn
- Write a Pod manifest.
- Apply it and read its status.
- Use `describe`, `logs`, and `exec`.
- Generate YAML with `--dry-run`.

## 4. Prerequisites
- Kubernetes Beginner Project 1 completed.
- Read: `study/kubernetes/beginner/02-pods.md`.

## 5. Step-by-step requirements
1. Generate a starting YAML: `kubectl run web --image=nginx:1.27 --dry-run=client -o yaml > pod.yaml`.
2. Add a label `app: web` in the manifest (if not there).
3. `kubectl apply -f pod.yaml`.
4. Show `kubectl get pods` (Pod should become `Running`).
5. `kubectl describe pod web` — read the events.
6. `kubectl logs web` and `kubectl exec -it web -- ls /usr/share/nginx/html`.
7. Delete the Pod.

## 6. Tasks / challenges
- [ ] Pod YAML created (via dry-run).
- [ ] Label `app: web` present.
- [ ] Pod is `Running`.
- [ ] describe, logs, and exec shown.
- [ ] Pod deleted.

## 7. Expected outcome
Your Pod runs. You can inspect it fully and clean it up.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the `pod.yaml` (kind: Pod, image nginx:1.27, label `app: web`).
2. `kubectl get pods` shows `web` as `Running`.
3. `kubectl describe pod web` output shown (events section visible).
4. `kubectl exec web -- ls /usr/share/nginx/html` shows files.
5. You show you generated the YAML with `--dry-run=client -o yaml`.
6. You deleted the Pod at the end.

## 9. Verification checklist
- [ ] Pod Running.
- [ ] Inspected fully.
- [ ] YAML generated with dry-run.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-02/`.

## 10. Common mistakes
- YAML indentation errors (use spaces).
- `ImagePullBackOff` from a wrong image tag.
- Expecting the Pod to come back after delete (it will not — that is a Deployment's job).

## 11. Hints
<details><summary>Hint 1</summary>Fastest start: `kubectl run web --image=nginx:1.27 --dry-run=client -o yaml > pod.yaml`, then edit.</details>
<details><summary>Hint 2</summary>If a Pod is not Running, `kubectl describe pod web` shows the reason in the Events at the bottom.</details>
<details><summary>Hint 3</summary>Exec form uses `--`: `kubectl exec -it web -- sh`.</details>

## 12. Final challenge
Make the Pod fail on purpose: set the image to `nginx:doesnotexist`. Apply it, see `ImagePullBackOff`, find the cause in `describe`, then fix it. This is real troubleshooting.

## 13. What to submit (evidence)
Save `pod.yaml`, the get/describe/logs/exec outputs in `submissions/kubernetes/beginner/project-02/`. Then say: **"I submit Kubernetes Beginner Project 2."**

---
**Remember:** Write YAML → `apply` → `get`/`describe`/`logs`/`exec`. Generate YAML fast with `--dry-run=client -o yaml`.
