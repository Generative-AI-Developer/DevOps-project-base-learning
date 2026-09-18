---
id: kubernetes-advanced-project-07
track: kubernetes
level: advanced
order: 7
title: "Control Access with RBAC"
prereqs: ["kubernetes-advanced-project-06"]
skills: ["Role", "RoleBinding", "ServiceAccount", "auth can-i", "least privilege"]
certDomains: ["CKA: Security/RBAC", "CKS: least privilege (foundation)"]
estimatedTime: "60–90 minutes"
---

# Control Access with RBAC

**Status:** 🔒 Locked

## 1. Objective
Create a ServiceAccount with limited permissions using a Role and RoleBinding, and prove the limits.

## 2. Real-world scenario
A new app should only READ Pods — it must never delete anything. You give it a ServiceAccount with a read-only Role, following least privilege.

## 3. Skills and concepts you will learn
- Create a ServiceAccount.
- Create a Role (read-only) and a RoleBinding.
- Test access with `kubectl auth can-i`.

## 4. Prerequisites
- Kubernetes Advanced Project 6 completed.
- Read: `study/kubernetes/advanced/07-rbac.md`.

## 5. Step-by-step requirements
1. Create a namespace `dev` and a ServiceAccount `myapp` in it.
2. Create a Role `pod-reader` (verbs: get, list, watch on pods).
3. Bind the Role to the ServiceAccount with a RoleBinding.
4. Prove: the SA CAN list pods (`can-i list pods` → yes) but CANNOT delete pods (`can-i delete pods` → no).
5. Bonus: run a Pod using that ServiceAccount and confirm it works.

## 6. Tasks / challenges
- [ ] ServiceAccount created.
- [ ] Read-only Role + RoleBinding created.
- [ ] `can-i list pods` → yes.
- [ ] `can-i delete pods` → no.

## 7. Expected outcome
Your ServiceAccount can read Pods but not delete them. You proved least privilege.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the Role and RoleBinding YAML (or the `kubectl create` commands).
2. `kubectl auth can-i list pods -n dev --as=system:serviceaccount:dev:myapp` returns **yes**.
3. `kubectl auth can-i delete pods -n dev --as=system:serviceaccount:dev:myapp` returns **no**.
4. You explain in one line what "least privilege" means.
5. All commands shown.

## 9. Verification checklist
- [ ] SA + Role + Binding created.
- [ ] can-i proves the limits.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-07/`.

## 10. Common mistakes
- Binding in the wrong namespace.
- Wrong subject format (`system:serviceaccount:<ns>:<name>`).
- Giving too many verbs.

## 11. Hints
<details><summary>Hint 1</summary>Fast create: `kubectl create serviceaccount myapp -n dev`, `kubectl create role pod-reader --verb=get,list,watch --resource=pods -n dev`, `kubectl create rolebinding read-pods --role=pod-reader --serviceaccount=dev:myapp -n dev`.</details>
<details><summary>Hint 2</summary>Test: `kubectl auth can-i <verb> pods -n dev --as=system:serviceaccount:dev:myapp`.</details>
<details><summary>Hint 3</summary>Least privilege = give only the access truly needed, nothing more.</details>

## 12. Final challenge
Create a ClusterRole + ClusterRoleBinding that lets the SA read Pods in ALL namespaces (read-only). Show `can-i list pods -A` becomes yes, but delete is still no. Understand the Role vs ClusterRole difference by doing it.

## 13. What to submit (evidence)
Save the YAML/commands and the `can-i` results in `submissions/kubernetes/advanced/project-07/`. Then say: **"I submit Kubernetes Advanced Project 7."**

---
**Remember:** Role = allowed actions; Binding = gives it to a subject. Least privilege. Prove it with `kubectl auth can-i`.
