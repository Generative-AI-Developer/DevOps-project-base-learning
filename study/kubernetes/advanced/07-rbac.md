---
id: kubernetes-advanced-study-rbac
track: kubernetes
level: advanced
topic: RBAC - who can do what
forProject: kubernetes-advanced-project-07
---

# Study: RBAC (Who Can Do What)

> **Words to know**
> - **RBAC** — Role-Based Access Control. In simple words: rules about who is allowed to do what.
> - **Role** — a set of allowed actions in one namespace.
> - **ClusterRole** — a set of allowed actions across the whole cluster.
> - **RoleBinding** — gives a Role to a user or ServiceAccount.
> - **ServiceAccount** — an identity for a Pod/app (not a human).

## 1. Easy explanation (simple → deeper)
Not everyone should be able to do everything. **RBAC** controls access.

Two steps:
1. A **Role** (or **ClusterRole**) lists allowed actions: "may `get` and `list` Pods".
2. A **RoleBinding** (or **ClusterRoleBinding**) gives that Role to a **subject**: a user or a **ServiceAccount**.

Rule of thumb: **least privilege** — give only what is needed.

## 2. Key concepts and terms
- Role = namespaced permissions. ClusterRole = cluster-wide (or reusable) permissions.
- Verbs: `get`, `list`, `watch`, `create`, `update`, `delete`.
- Resources: `pods`, `deployments`, `secrets`, etc.
- A **ServiceAccount** is used by Pods to talk to the apiserver.
- Test access with `kubectl auth can-i`.

## 3. Practical examples
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata: { namespace: dev, name: pod-reader }
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get","list","watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata: { namespace: dev, name: read-pods }
subjects:
  - kind: ServiceAccount
    name: myapp
    namespace: dev
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

## 4. Commands and config examples
```bash
kubectl create serviceaccount myapp -n dev
kubectl create role pod-reader --verb=get,list,watch --resource=pods -n dev
kubectl create rolebinding read-pods --role=pod-reader --serviceaccount=dev:myapp -n dev
# test:
kubectl auth can-i list pods -n dev --as=system:serviceaccount:dev:myapp
```

## 5. Hands-on exercises
1. Make a ServiceAccount and a Role that can only read Pods.
2. Bind them with a RoleBinding.
3. Use `kubectl auth can-i` to prove the SA can list Pods but cannot delete them.

## 6. Troubleshooting
- **Problem:** "Forbidden" errors.
  **Fix:** the Role does not allow that verb/resource, or the binding is missing/wrong namespace.
- **Problem:** access is too wide.
  **Fix:** you used a ClusterRoleBinding or a broad ClusterRole. Narrow it.

## 7. Common mistakes and how to avoid them
- Giving cluster-admin to everything (too much power).
- Binding in the wrong namespace.
- Forgetting the ServiceAccount subject format: `system:serviceaccount:<ns>:<name>`.

## 8. Certification notes (what the exam wants)
- **CKA:** creating Roles/RoleBindings and testing with `kubectl auth can-i` is common.
- **CKS:** least privilege and limiting who can read Secrets are key.

## 9. Practice questions and tasks
1. What is the difference between a Role and a ClusterRole?
2. What does a RoleBinding do?
3. How do you test if an identity can do an action?

## 10. References
- RBAC: https://kubernetes.io/docs/reference/access-authn-authz/rbac/ (checked: 2026-09-18)
- Video: **KodeKloud** — "Kubernetes RBAC" — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** Role = allowed actions; Binding = gives it to someone. Least privilege. Test with `kubectl auth can-i`.

<details><summary>Answers</summary>

1. Role is namespaced; ClusterRole is cluster-wide (or reusable across namespaces).
2. Gives a Role's permissions to a user or ServiceAccount.
3. `kubectl auth can-i <verb> <resource> --as=<subject>`.
</details>
