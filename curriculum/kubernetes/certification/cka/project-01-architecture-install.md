---
id: kubernetes-cka-project-01
track: kubernetes
level: certification
order: 1
title: "CKA Drill: Architecture, Install & Config (25%)"
prereqs: ["kubernetes-ckad-project-05"]
skills: ["kubeadm", "etcd backup/restore", "static Pods", "kubeconfig", "RBAC"]
certDomains: ["CKA: Cluster Architecture, Installation and Configuration"]
estimatedTime: "timed: 30 minutes"
---

# CKA Drill: Architecture, Install & Config (25%)

**Status:** 🔒 Locked (unlocks after CKAD is complete)

⏱️ **Timed drill.** Set a timer for **30 minutes**.

## 1. Objective
Practice the admin core: etcd backup/restore, RBAC, static Pods, and kubeconfig/context handling.

## 2. Real-world scenario
The exam mixes install/config tasks: "back up etcd", "create this Role", "find the static Pod".

## 3. Skills and concepts you will learn
- etcd snapshot save/restore under time.
- RBAC quickly.
- Static Pods and context switching.

## 4. Prerequisites
- CKAD completed.
- Read: `study/kubernetes/certification/cka/00-cka-exam-guide.md`.
- Use kubeadm/killercoda (etcd + static Pods need a real cluster).

## 5. Step-by-step requirements (within the time limit)
1. Switch to the correct context (practice this habit).
2. Take an etcd snapshot and check its status.
3. Create a Role + RoleBinding that lets a ServiceAccount read Pods in one namespace; verify with `auth can-i`.
4. Find the control-plane static Pods and name where their files live.
5. Restore etcd from your snapshot (or clearly show the restore steps on a throwaway cluster).

## 6. Tasks / challenges
- [ ] Context switched first.
- [ ] etcd snapshot + status.
- [ ] RBAC created + verified.
- [ ] Static Pods found.
- [ ] etcd restore done/shown.

## 7. Expected outcome
You handled the main install/config admin tasks within 30 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show switching context (`kubectl config use-context`).
2. `etcdctl snapshot save` + `snapshot status` shown.
3. RBAC: `auth can-i list pods` yes, `delete pods` no (for the SA).
4. You show the static Pod files location (`/etc/kubernetes/manifests/`).
5. You show an etcd restore (or the exact restore steps on a practice cluster).
6. You report your time.

## 9. Verification checklist
- [ ] etcd backup/restore.
- [ ] RBAC verified.
- [ ] Static Pods located.
- [ ] Evidence saved in `submissions/kubernetes/certification/cka/project-01/`.

## 10. Common mistakes
- Working on the wrong cluster.
- Wrong etcd cert paths.
- RBAC binding in the wrong namespace.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Advanced Project 3 (etcd) and Project 7 (RBAC).</details>
<details><summary>Hint 2</summary>Always `kubectl config use-context <task-cluster>` first.</details>
<details><summary>Hint 3</summary>killercoda has guided etcd + RBAC CKA labs.</details>

## 12. Final challenge
Do a kubeadm **upgrade** of one node (drain → upgrade → uncordon) on a practice cluster. Upgrades appear on the exam.

## 13. What to submit (evidence)
Save all commands, outputs, and your time in `submissions/kubernetes/certification/cka/project-01/`. Then say: **"I submit CKA Project 1."**

---
**Remember:** Switch context first. etcd backup/restore + RBAC + static Pods are core install/config points (25%).
