---
id: kubernetes-beginner-project-07
track: kubernetes
level: beginner
order: 7
title: "Organize with Namespaces and Labels"
prereqs: ["kubernetes-beginner-project-06"]
skills: ["namespaces", "labels", "selectors", "default namespace"]
certDomains: ["CKA/CKAD: organization & selectors (core)"]
estimatedTime: "45–60 minutes"
---

# Organize with Namespaces and Labels

**Status:** 🔒 Locked

## 1. Objective
Use namespaces to separate environments, and labels to find and group objects.

## 2. Real-world scenario
Two teams share one cluster. Their apps must not clash. You put each team in its own namespace, and use labels to organize and filter Pods.

## 3. Skills and concepts you will learn
- Create and use namespaces.
- Add labels and filter by them.
- Set a default namespace.

## 4. Prerequisites
- Kubernetes Beginner Project 6 completed.
- Read: `study/kubernetes/beginner/07-namespaces-labels.md`.

## 5. Step-by-step requirements
1. Create two namespaces: `dev` and `prod`.
2. Run an nginx Pod in each (`web`), with a label `env=dev` or `env=prod`.
3. List Pods in `dev` only, then in all namespaces.
4. Filter Pods by label across a namespace (`-l env=prod`).
5. Set your default namespace to `dev`, run a command without `-n`, then set it back to `default`.
6. Clean up both namespaces at the end.

## 6. Tasks / challenges
- [ ] Two namespaces created.
- [ ] A labeled Pod in each.
- [ ] Listed per-namespace and all-namespaces.
- [ ] Filtered by label.
- [ ] Default namespace changed and restored.

## 7. Expected outcome
You can separate work with namespaces and find things fast with labels.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `kubectl get ns` shows `dev` and `prod`.
2. There is a Pod in each namespace with the right `env` label (show `kubectl get pods -n dev --show-labels` and same for prod).
3. `kubectl get pods -A` shows both.
4. A label filter works: `kubectl get pods -n prod -l env=prod` returns the Pod.
5. You show setting the default namespace and running a command without `-n`, then restoring `default`.
6. You cleaned up (deleted the namespaces).

## 9. Verification checklist
- [ ] Namespaces + labeled Pods.
- [ ] Filtering works.
- [ ] Default namespace changed/restored.
- [ ] Evidence saved in `submissions/kubernetes/beginner/project-07/`.

## 10. Common mistakes
- Forgetting `-n` and looking in the wrong place.
- Deleting a namespace with things you wanted to keep.

## 11. Hints
<details><summary>Hint 1</summary>`kubectl create namespace dev` and `kubectl run web --image=nginx:1.27 -n dev --labels=env=dev`.</details>
<details><summary>Hint 2</summary>Set default: `kubectl config set-context --current --namespace=dev`. Restore with `--namespace=default`.</details>
<details><summary>Hint 3</summary>Cleanup: `kubectl delete namespace dev prod` (this removes everything inside them).</details>

## 12. Final challenge
Give the `dev` namespace a **ResourceQuota** that limits it to a small number of Pods (e.g. 2). Try to create a 3rd Pod and see it blocked. Quotas are a real multi-team feature (and a CKA topic).

## 13. What to submit (evidence)
Save all commands + outputs (including `--show-labels`) in `submissions/kubernetes/beginner/project-07/`. Then say: **"I submit Kubernetes Beginner Project 7."**

---
**Remember:** Namespaces separate; labels organize and select. Always know your namespace.
