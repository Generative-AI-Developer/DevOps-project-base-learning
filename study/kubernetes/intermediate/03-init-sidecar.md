---
id: kubernetes-intermediate-study-init-sidecar
track: kubernetes
level: intermediate
topic: Init containers and sidecars
forProject: kubernetes-intermediate-project-03
---

# Study: Init Containers and Sidecars

> **Words to know**
> - **Init container** — a container that runs and finishes BEFORE the main app starts.
> - **Sidecar** — a helper container that runs ALONGSIDE the main app in the same Pod.
> - **Shared volume** — storage both containers in the Pod can use.

## 1. Easy explanation (simple → deeper)
A Pod can have more than one container.
- **Init container:** runs first, does setup (wait for something, download a file), then exits. The main app starts only after all init containers succeed.
- **Sidecar:** runs next to the main app for its whole life. It helps — for example, it reads the app's logs, or refreshes config.

They often share a **volume** so they can pass files to each other.

## 2. Key concepts and terms
- `initContainers:` run in order, before the main containers.
- Sidecar = just an extra entry in `containers:` (or a native sidecar via `initContainers` with `restartPolicy: Always` in newer versions).
- A shared `emptyDir` volume lets containers share files.

## 3. Practical examples
Init container that waits, then a main app:
```yaml
spec:
  initContainers:
    - name: wait-for-it
      image: busybox
      command: ["sh","-c","echo waiting; sleep 5; echo done"]
  containers:
    - name: app
      image: nginx:1.27
```
Sidecar sharing a volume:
```yaml
spec:
  volumes:
    - name: shared
      emptyDir: {}
  containers:
    - name: app
      image: busybox
      command: ["sh","-c","while true; do date >> /data/log.txt; sleep 2; done"]
      volumeMounts: [{ name: shared, mountPath: /data }]
    - name: sidecar
      image: busybox
      command: ["sh","-c","tail -f /data/log.txt"]
      volumeMounts: [{ name: shared, mountPath: /data }]
```

## 4. Commands and config examples
```bash
kubectl logs <pod> -c app          # logs of a specific container
kubectl logs <pod> -c sidecar
kubectl get pod <pod> -o jsonpath='{.spec.initContainers[*].name}'
```

## 5. Hands-on exercises
1. Make a Pod with an init container that sleeps 5s, then a main nginx.
2. Watch the Pod: it stays `Init:0/1` until the init finishes.
3. Make a sidecar that reads a file the main container writes (shared `emptyDir`).

## 6. Troubleshooting
- **Problem:** Pod stuck at `Init:0/1`.
  **Fix:** the init container has not finished (or failed). Check `kubectl logs <pod> -c <init-name>`.
- **Problem:** sidecar cannot see the file.
  **Fix:** both containers must mount the same volume at a path.

## 7. Common mistakes and how to avoid them
- Forgetting `-c <container>` when reading logs of a multi-container Pod.
- Not sharing a volume between the two containers.

## 8. Certification notes (what the exam wants)
- **CKAD:** multi-container Pod patterns (init, sidecar, adapter, ambassador) are a known topic.
- Know how to read logs per container and share an `emptyDir`.

## 9. Practice questions and tasks
1. When does an init container run?
2. What is a sidecar?
3. How do two containers in a Pod share files?

## 10. References
- Init containers: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ (checked: 2026-09-18)
- Sidecars: https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/ (checked: 2026-09-18)

---
**Remember:** Init runs first and exits; sidecar runs alongside. Share files with an `emptyDir` volume.

<details><summary>Answers</summary>

1. Before the main containers start (and it must finish successfully first).
2. A helper container that runs next to the main app for the Pod's life.
3. By mounting the same volume (like an `emptyDir`) in both.
</details>
