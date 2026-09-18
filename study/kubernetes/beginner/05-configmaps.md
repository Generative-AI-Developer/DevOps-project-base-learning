---
id: kubernetes-beginner-study-configmaps
track: kubernetes
level: beginner
topic: ConfigMaps
forProject: kubernetes-beginner-project-05
---

# Study: ConfigMaps (App Settings)

> **Words to know**
> - **ConfigMap** — an object that holds settings (non-secret) for your app.
> - **Key-value** — a name and a value, like `COLOR=blue`.
> - **Mount** — make ConfigMap data appear as files inside a Pod.
> - **envFrom** — load all ConfigMap keys as environment variables.

## 1. Easy explanation (simple → deeper)
Apps need settings: a mode, a color, a URL. You should not bake these into the image. Instead, put them in a **ConfigMap**. Then the same image can run with different settings.

You can give ConfigMap data to a Pod in two ways:
1. As **environment variables**.
2. As **files** (mounted into a folder).

> ConfigMaps are for **non-secret** settings. Secrets (passwords) go in a Secret (next lesson).

## 2. Key concepts and terms
- Make one: `kubectl create configmap app-config --from-literal=COLOR=blue --from-literal=MODE=prod`.
- Use as env: `envFrom: [configMapRef: {name: app-config}]`.
- Use one key: `valueFrom: {configMapKeyRef: {name: app-config, key: COLOR}}`.
- Mount as files: a `volume` of type `configMap`, mounted at a path.

## 3. Practical examples
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  COLOR: "blue"
  MODE: "prod"
---
apiVersion: v1
kind: Pod
metadata: { name: demo }
spec:
  containers:
    - name: app
      image: busybox
      command: ["sh","-c","echo COLOR=$COLOR MODE=$MODE; sleep 3600"]
      envFrom:
        - configMapRef:
            name: app-config
```

## 4. Commands and config examples
```bash
kubectl create configmap app-config \
  --from-literal=COLOR=blue --from-literal=MODE=prod
kubectl get configmap app-config -o yaml
kubectl exec demo -- printenv | grep -E "COLOR|MODE"
# from a file:
kubectl create configmap web-html --from-file=index.html
```

## 5. Hands-on exercises
1. Create a ConfigMap with 2 keys.
2. Use it as env vars in a Pod. Print them with `printenv`.
3. Mount a ConfigMap as a file and read it inside the Pod.

## 6. Troubleshooting
- **Problem:** env var missing in the Pod.
  **Fix:** check the ConfigMap name and key spelling; the Pod must reference the right name.
- **Problem:** changed the ConfigMap but the Pod still has old values.
  **Fix:** env vars are set at start. Restart the Pod (or Deployment) to pick up changes. (Mounted files can update, with a delay.)

## 7. Common mistakes and how to avoid them
- Putting secrets in a ConfigMap — use a Secret instead.
- Expecting env changes without a restart.

## 8. Certification notes (what the exam wants)
- **CKAD:** "Application Environment, Configuration and Security" is ~25%. ConfigMaps are core.
- Know both ways: env (`envFrom`, `configMapKeyRef`) and mounted files.

## 9. Practice questions and tasks
1. What is a ConfigMap for?
2. Two ways to give ConfigMap data to a Pod?
3. Why restart a Pod after changing an env-based ConfigMap?

## 10. References
- ConfigMaps: https://kubernetes.io/docs/concepts/configuration/configmap/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "ConfigMap & Secret" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** ConfigMap = non-secret settings. Give them as env vars or files. Restart Pods to pick up env changes.

<details><summary>Answers</summary>

1. Holding non-secret settings for your app, outside the image.
2. As environment variables, or as mounted files.
3. Because env vars are read at start; a restart re-reads them.
</details>
