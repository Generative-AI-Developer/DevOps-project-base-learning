---
id: kubernetes-cka-project-03
track: kubernetes
level: certification
order: 3
title: "CKA Drill: Services, Networking and Storage (20% + 10%)"
prereqs: ["kubernetes-cka-project-02"]
skills: ["Services", "DNS", "NetworkPolicy", "PV/PVC", "StorageClass"]
certDomains: ["CKA: Services and Networking", "CKA: Storage"]
estimatedTime: "timed: 25 minutes"
---

# CKA Drill: Services, Networking and Storage (20% + 10%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Practice Services, DNS, NetworkPolicies, and PV/PVC storage — the networking + storage domains.

## 2. Real-world scenario
Exam tasks like "expose this app", "restrict traffic", "create a PVC and mount it".

## 3. Skills and concepts you will learn
- Services + endpoints + DNS.
- NetworkPolicy allow/deny.
- PV/PVC and StorageClass.

## 4. Prerequisites
- CKA Project 2 completed.
- Read: `study/kubernetes/certification/cka/00-cka-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Expose a Deployment as a Service; verify endpoints and DNS.
2. Add a NetworkPolicy restricting who may reach it; prove allow + block.
3. Create a PVC (1Gi); mount it in a Pod; write a file; prove it persists across a Pod restart.
4. Show `kubectl get svc,endpoints,pvc,pv`.

## 6. Tasks / challenges
- [ ] Service + DNS.
- [ ] NetworkPolicy allow/block.
- [ ] PVC persistence.

## 7. Expected outcome
Networking and storage tasks done within 25 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Service has endpoints; a temp Pod resolves it by name.
2. NetworkPolicy: allowed Pod reaches it; blocked Pod does not (both shown).
3. PVC bound; data survives a Pod restart (write → delete Pod → new Pod reads it).
4. You report your time.

## 9. Verification checklist
- [ ] Service/DNS works.
- [ ] Policy allow/block.
- [ ] PVC persists.
- [ ] Evidence saved in `submissions/kubernetes/certification/cka/project-03/`.

## 10. Common mistakes
- Label/selector mismatch → no endpoints.
- CNI ignores policies.
- emptyDir instead of a PVC.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Beginner 4 (Services), Intermediate 5 (PVC), Advanced 6 (NetworkPolicy).</details>
<details><summary>Hint 2</summary>Persistence test: write a file, delete the Pod, recreate with the same PVC, read the file.</details>
<details><summary>Hint 3</summary>`kubectl get endpoints <svc>` proves the Service is wired.</details>

## 12. Final challenge
Create a PV manually (not dynamic) with a specific `hostPath` and bind a PVC to it. Understand static vs dynamic provisioning.

## 13. What to submit (evidence)
Save YAML, tests, and your time in `submissions/kubernetes/certification/cka/project-03/`. Then say: **"I submit CKA Project 3."**

---
**Remember:** Service+DNS, NetworkPolicy, PVC persistence. Networking is 20%, storage 10%.
