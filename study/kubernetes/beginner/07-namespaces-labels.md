---
id: kubernetes-beginner-study-namespaces-labels
track: kubernetes
level: beginner
topic: Namespaces and labels
forProject: kubernetes-beginner-project-07
---

# Study: Namespaces and Labels

> **Words to know**
> - **Namespace** — a folder inside the cluster to group objects.
> - **Label** — a small tag on an object, like `app: web` or `env: prod`.
> - **Selector** — a filter that picks objects by their labels.
> - **Annotation** — extra notes on an object (not used for selecting).

## 1. Easy explanation (simple → deeper)
Two tools keep a cluster tidy:
1. **Namespaces** — like folders. You can put "team A" and "team B" apps in different namespaces so they do not clash.
2. **Labels** — small tags on objects. You use them to **find** and **group** objects (and Services use them to find Pods).

## 2. Key concepts and terms
- `kubectl create namespace dev`.
- Work in a namespace: `-n dev` on any command.
- Default namespace is `default`. System stuff is in `kube-system`.
- Add labels: `kubectl label pod web tier=frontend`.
- Filter by label: `kubectl get pods -l app=web`.
- Selectors also power Services and Deployments.

## 3. Practical examples
```bash
kubectl create namespace dev
kubectl run web --image=nginx:1.27 -n dev
kubectl get pods -n dev
kubectl get pods -A                      # all namespaces
kubectl label pod web env=prod -n dev
kubectl get pods -n dev -l env=prod      # filter by label
```

## 4. Commands and config examples
```bash
kubectl get ns                                  # list namespaces
kubectl config set-context --current --namespace=dev   # default to dev
kubectl get all -n dev                           # everything in dev
kubectl get pods -l 'app in (web,api)'           # set-based selector
```

## 5. Hands-on exercises
1. Create a namespace `dev`. Run a Pod in it.
2. List Pods in `dev` only, and in all namespaces.
3. Add a label to the Pod. Filter Pods by that label.
4. Set your default namespace to `dev`, then back to `default`.

## 6. Troubleshooting
- **Problem:** "I created it but cannot find it."
  **Fix:** you are in the wrong namespace. Add `-n <namespace>` or set your default.
- **Problem:** a Service finds no Pods.
  **Fix:** labels and selectors must match (and be in the same namespace).

## 7. Common mistakes and how to avoid them
- Forgetting `-n` — you look in the wrong namespace.
- Deleting a namespace — it deletes EVERYTHING inside it. Be careful.

## 8. Certification notes (what the exam wants)
- Exam tasks often say "in namespace X". Always read the namespace!
- Set your default namespace to save typing: `kubectl config set-context --current --namespace=X`.
- Labels/selectors appear everywhere (Services, Deployments, NetworkPolicies).

## 9. Practice questions and tasks
1. What is a namespace?
2. How do you filter Pods by a label?
3. What happens if you delete a namespace?

## 10. References
- Namespaces: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ (checked: 2026-09-18)
- Labels: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ (checked: 2026-09-18)

---
**Remember:** Namespaces = folders. Labels = tags for finding/grouping. Always know which namespace you are in.

<details><summary>Answers</summary>

1. A folder inside the cluster that groups objects.
2. `kubectl get pods -l key=value`.
3. Everything inside that namespace is deleted.
</details>
