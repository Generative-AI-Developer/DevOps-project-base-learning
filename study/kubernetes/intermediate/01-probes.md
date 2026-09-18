---
id: kubernetes-intermediate-study-probes
track: kubernetes
level: intermediate
topic: Health probes
forProject: kubernetes-intermediate-project-01
---

# Study: Health Probes (Liveness, Readiness, Startup)

> **Words to know**
> - **Probe** — a test Kubernetes runs on a container to check its health.
> - **Liveness probe** — "is it alive?" If it fails, Kubernetes restarts the container.
> - **Readiness probe** — "is it ready for traffic?" If it fails, the Pod is taken out of the Service.
> - **Startup probe** — "has it finished starting?" Good for slow-starting apps.

## 1. Easy explanation (simple → deeper)
A container can be "running" but not working. Probes tell Kubernetes the truth. There are three:
1. **Liveness** — if this fails, the container is restarted (it is stuck/dead).
2. **Readiness** — if this fails, the Pod stops getting traffic (it is not ready yet, but not dead).
3. **Startup** — waits for a slow app to start before the other probes begin.

This is the same idea as Docker health checks, but Kubernetes acts on the result.

## 2. Key concepts and terms
- Probe types: `httpGet`, `tcpSocket`, or `exec` (run a command).
- Timing: `initialDelaySeconds`, `periodSeconds`, `failureThreshold`.
- Liveness → restart. Readiness → remove from Service endpoints. Startup → gate the others.

## 3. Practical examples
```yaml
containers:
  - name: web
    image: nginx:1.27
    ports: [{ containerPort: 80 }]
    livenessProbe:
      httpGet: { path: /, port: 80 }
      initialDelaySeconds: 5
      periodSeconds: 10
    readinessProbe:
      httpGet: { path: /, port: 80 }
      initialDelaySeconds: 3
      periodSeconds: 5
```

## 4. Commands and config examples
```bash
kubectl describe pod <name>        # see probe results + restarts
kubectl get pod <name>             # READY column: 1/1 means readiness passed
# exec probe example:
#   exec: { command: ["cat","/tmp/ready"] }
```

## 5. Hands-on exercises
1. Add a liveness and a readiness probe to a Pod.
2. Break the liveness path (wrong path) and watch the container restart.
3. Use an `exec` readiness probe that checks for a file; create/remove the file to flip readiness.

## 6. Troubleshooting
- **Problem:** Pod keeps restarting.
  **Fix:** the liveness probe fails. Check the path/port and `initialDelaySeconds` (maybe the app needs more time).
- **Problem:** Pod is Running but gets no traffic.
  **Fix:** readiness probe is failing → not in the Service endpoints. Check `kubectl describe pod`.

## 7. Common mistakes and how to avoid them
- `initialDelaySeconds` too short — the app is restarted before it even starts. Use a startup probe or a longer delay.
- Using liveness where readiness is meant — you restart a Pod that is just "not ready yet".

## 8. Certification notes (what the exam wants)
- **CKAD:** "Application Observability and Maintenance" (~15%). Probes are a common task.
- Know the 3 probe types and what each one does when it fails.

## 9. Practice questions and tasks
1. What happens when a liveness probe fails?
2. What happens when a readiness probe fails?
3. When do you use a startup probe?

## 10. References
- Probes: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Kubernetes probes" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Liveness → restart. Readiness → remove from traffic. Startup → wait for slow apps. Probes tell Kubernetes the truth.

<details><summary>Answers</summary>

1. Kubernetes restarts the container.
2. The Pod is removed from the Service endpoints (gets no traffic) until it passes again.
3. For apps that take a long time to start, to avoid early restarts.
</details>
