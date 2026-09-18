---
id: kubernetes-cka-project-04
track: kubernetes
level: certification
order: 4
title: "CKA Drill: Troubleshooting (30%)"
prereqs: ["kubernetes-cka-project-03"]
skills: ["node repair", "kubelet", "control-plane repair", "Service/DNS debug"]
certDomains: ["CKA: Troubleshooting"]
estimatedTime: "timed: 30 minutes"
---

# CKA Drill: Troubleshooting (30%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **30 minutes**. This is the biggest CKA domain.

## 1. Objective
Practice fixing broken things fast: a NotReady node, a broken control-plane static Pod, and a broken Service.

## 2. Real-world scenario
The exam gives broken clusters and asks you to fix them. Speed + method are everything.

## 3. Skills and concepts you will learn
- Node/kubelet repair.
- Control-plane static Pod repair.
- Service/DNS debug.

## 4. Prerequisites
- CKA Project 3 completed.
- Read: `study/kubernetes/certification/cka/00-cka-exam-guide.md`.
- Use killercoda CKA troubleshooting scenarios or a throwaway kubeadm cluster you can break safely.

## 5. Step-by-step requirements (within the time limit)
1. **Node:** stop the kubelet on a node → node NotReady. Diagnose with `journalctl -u kubelet` and fix (start kubelet). Node returns to Ready.
2. **Control plane:** introduce a small typo into the kube-apiserver static Pod manifest → apiserver down. Diagnose via kubelet logs / crictl, fix the file, recover.
3. **Service:** break a Service selector → no endpoints. Fix the labels; endpoints return.
4. Write a short "cause → fix" note for each.

## 6. Tasks / challenges
- [ ] Node recovered.
- [ ] Control plane recovered.
- [ ] Service fixed.
- [ ] Notes written.

## 7. Expected outcome
You fixed three failures using the method, within 30 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Node: shown NotReady → diagnosed via kubelet logs → recovered to Ready.
2. Control plane: apiserver broken → diagnosed → fixed via the manifest → recovered. (If your lab cannot break the control plane safely, clearly explain the exact steps you would take and demonstrate the node + Service fixes fully.)
3. Service: empty endpoints → fixed labels → endpoints return.
4. A short cause→fix note for each.
5. You report your time.

## 9. Verification checklist
- [ ] 3 failures fixed (or 2 fixed + control-plane steps explained).
- [ ] Notes written.
- [ ] Evidence saved in `submissions/kubernetes/certification/cka/project-04/`.

## 10. Common mistakes
- Guessing instead of reading logs.
- Working on the wrong cluster.
- Forgetting the node/systemd side.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Advanced Project 9 (troubleshooting). Method: get → describe → logs → kubelet → control plane.</details>
<details><summary>Hint 2</summary>Control-plane static Pod files: `/etc/kubernetes/manifests/`. kubelet restarts them from the files.</details>
<details><summary>Hint 3</summary>killercoda's CKA troubleshooting scenarios are the safest place to practice breaking things.</details>

## 12. Final challenge
Fix a **CoreDNS** problem (scale it to 0, then back to 2, and confirm cluster DNS recovers). DNS issues are a classic exam trap.

## 13. What to submit (evidence)
Save each cause→fix, the logs, and your time in `submissions/kubernetes/certification/cka/project-04/`. Then say: **"I submit CKA Project 4."**

---
**Remember:** Method beats luck: get → describe → logs → kubelet → control plane. Troubleshooting is 30% of CKA.
