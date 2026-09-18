---
id: kubernetes-intermediate-project-01
track: kubernetes
level: intermediate
order: 1
title: "Add Health Probes to a Pod"
prereqs: ["kubernetes-beginner-project-08"]
skills: ["livenessProbe", "readinessProbe", "startupProbe", "probe debugging"]
certDomains: ["CKAD: Observability & Maintenance"]
estimatedTime: "60–90 minutes"
---

# Add Health Probes to a Pod

**Status:** 🔒 Locked (unlocks when Kubernetes Intermediate opens)

## 1. Objective
Add liveness and readiness probes to an app, and see what happens when each one fails.

## 2. Real-world scenario
Your app sometimes freezes but stays "running". Kubernetes does not restart it, so users suffer. Probes fix this: liveness restarts a frozen app, readiness keeps traffic away until it is ready.

## 3. Skills and concepts you will learn
- Add liveness, readiness, and (optionally) startup probes.
- See liveness cause a restart.
- See readiness remove a Pod from traffic.

## 4. Prerequisites
- Kubernetes Beginner completed.
- Read: `study/kubernetes/intermediate/01-probes.md`.

## 5. Step-by-step requirements
1. Create a Deployment with a liveness probe and a readiness probe (httpGet on `/`).
2. Show the Pod is `1/1 READY` (readiness passed).
3. **Break liveness:** set the liveness path to a wrong path (e.g. `/nope`). Apply. Watch the RESTARTS count go up (`kubectl get pods -w`).
4. Fix it back.
5. **Readiness test:** use an `exec` readiness probe that checks for a file `/tmp/ready`. Show the Pod is `0/1` until you create the file inside, then `1/1`.

## 6. Tasks / challenges
- [ ] Liveness + readiness probes added.
- [ ] Broken liveness causes restarts.
- [ ] Readiness controls the READY state.
- [ ] Fixed and healthy at the end.

## 7. Expected outcome
You saw liveness restart a bad container, and readiness control whether the Pod is "ready". You can read probe results.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Deployment YAML showing `livenessProbe` and `readinessProbe`.
2. With a healthy config, `kubectl get pod` shows `1/1` READY.
3. With a broken liveness path, `kubectl get pods` shows the RESTARTS count increasing, and `kubectl describe pod` shows the liveness failure.
4. With an `exec` readiness probe checking `/tmp/ready`, the Pod is `0/1` before the file exists and `1/1` after you create it inside.
5. You explain in one line the difference between liveness and readiness.
6. All commands shown.

## 9. Verification checklist
- [ ] Both probes work.
- [ ] Restart-on-liveness shown.
- [ ] Readiness flips READY state.
- [ ] Evidence saved in `submissions/kubernetes/intermediate/project-01/`.

## 10. Common mistakes
- `initialDelaySeconds` too short → app restarted before it starts.
- Using liveness where readiness is meant.
- Wrong port/path in the probe.

## 11. Hints
<details><summary>Hint 1</summary>Use the probe YAML in `study/kubernetes/intermediate/01-probes.md`, section 3.</details>
<details><summary>Hint 2</summary>Watch restarts: `kubectl get pods -w`. Details: `kubectl describe pod <name>`.</details>
<details><summary>Hint 3</summary>Readiness file test: `readinessProbe: { exec: { command: ["cat","/tmp/ready"] } }`. Create it inside with `kubectl exec <pod> -- touch /tmp/ready`.</details>

## 12. Final challenge
Add a **startup probe** to a slow-starting container (simulate slow start with a `sleep` before the app), and show the startup probe protects it from early liveness restarts.

## 13. What to submit (evidence)
Save the YAML and all command outputs (restart proof, readiness flip) in `submissions/kubernetes/intermediate/project-01/`. Then say: **"I submit Kubernetes Intermediate Project 1."**

---
**Remember:** Liveness restarts; readiness gates traffic; startup waits for slow apps. Probes are CKAD gold.
