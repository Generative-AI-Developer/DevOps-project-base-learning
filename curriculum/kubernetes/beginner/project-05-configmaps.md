---
id: kubernetes-beginner-project-05
track: kubernetes
level: beginner
order: 5
title: "Configure an App with a ConfigMap"
prereqs: ["kubernetes-beginner-project-04"]
skills: ["ConfigMap", "envFrom", "configMapKeyRef", "mounted config files"]
certDomains: ["CKAD: App Environment & Config (core)"]
estimatedTime: "60 minutes"
---

# Configure an App with a ConfigMap

**Status:** 🔒 Locked

## 1. Objective
Store app settings in a ConfigMap and give them to a Pod as environment variables and as a file.

## 2. Real-world scenario
The same app must run in "dev" and "prod" with different settings. Instead of building two images, you keep the settings in ConfigMaps and change them per environment.

## 3. Skills and concepts you will learn
- Create a ConfigMap.
- Use it as env vars in a Pod.
- Mount it as a file.

## 4. Prerequisites
- Kubernetes Beginner Project 4 completed.
- Read: `study/kubernetes/beginner/05-configmaps.md`.

## 5. Step-by-step requirements
1. Create a ConfigMap `app-config` with `COLOR=blue` and `MODE=prod`.
2. Create a Pod that loads these as env vars (`envFrom`). Print them inside with `printenv`.
3. Create a second ConfigMap from a file (e.g. `message.txt`), mount it into a Pod, and read the file inside.
4. Change `COLOR` to `green`, restart the Pod, and show the new value.

## 6. Tasks / challenges
- [ ] ConfigMap with 2 keys created.
- [ ] Env vars visible inside the Pod.
- [ ] A ConfigMap mounted as a file and read.
- [ ] Changed value shown after restart.

## 7. Expected outcome
Your Pod gets its settings from ConfigMaps — as env vars and as a mounted file — and you can change them without rebuilding the image.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kubectl get configmap app-config -o yaml` shows COLOR and MODE.
2. Inside the Pod, `printenv` shows `COLOR` and `MODE` from the ConfigMap.
3. A ConfigMap is mounted as a file, and you show its content with `kubectl exec ... cat <path>`.
4. After changing COLOR and restarting the Pod, `printenv` shows the new value.
5. You explain in one sentence the difference between a ConfigMap and a Secret.
6. All YAML and commands shown.

## 9. Verification checklist
- [ ] Env vars from ConfigMap.
- [ ] Mounted file works.
- [ ] Change picked up after restart.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-05/`.

## 10. Common mistakes
- Wrong ConfigMap name/key in the Pod.
- Expecting env changes with no restart.
- Putting a password in a ConfigMap (use a Secret).

## 11. Hints
<details><summary>Hint 1</summary>Create: `kubectl create configmap app-config --from-literal=COLOR=blue --from-literal=MODE=prod`.</details>
<details><summary>Hint 2</summary>Use the `envFrom` Pod example in `study/kubernetes/beginner/05-configmaps.md`, section 3.</details>
<details><summary>Hint 3</summary>Mount: add a `volumes: [{name: cfg, configMap: {name: web-html}}]` and a `volumeMounts` at a path, then `cat` the file inside.</details>

## 12. Final challenge
Use only ONE key from a ConfigMap as an env var with `configMapKeyRef` (not the whole map with `envFrom`). This finer control is common in the exam.

## 13. What to submit (evidence)
Save the ConfigMaps, Pod YAML, `printenv`, the mounted-file read, and the change proof in `submissions/kubernetes/beginner/project-05/`. Then say: **"I submit Kubernetes Beginner Project 5."**

---
**Remember:** ConfigMap = non-secret settings, as env vars or files. Same image, different settings.
