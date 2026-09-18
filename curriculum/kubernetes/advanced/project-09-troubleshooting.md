---
id: kubernetes-advanced-project-09
track: kubernetes
level: advanced
order: 9
title: "Fix a Broken Cluster"
prereqs: ["kubernetes-advanced-project-08"]
skills: ["describe/logs method", "kubelet debugging", "node NotReady", "Service repair"]
certDomains: ["CKA: Troubleshooting (~30%)"]
estimatedTime: "90 minutes"
---

# Fix a Broken Cluster

**Status:** 🔒 Locked

## 1. Objective
Practice a clear troubleshooting method on several broken things: a crashing Pod, a NotReady node, and a broken Service.

## 2. Real-world scenario
Things break in production. Your value as an admin is finding the cause fast and fixing it — with a method, not guesses. Troubleshooting is ~30% of the CKA exam.

## 3. Skills and concepts you will learn
- The get → describe → logs method.
- Fix a NotReady node (kubelet).
- Fix a Service with wrong labels.

## 4. Prerequisites
- Kubernetes Advanced Project 8 completed.
- Read: `study/kubernetes/advanced/09-troubleshooting.md`.
- A node you can SSH into (kubeadm/killercoda) for the kubelet task.

## 5. Step-by-step requirements
1. **Broken Pod:** deploy an app with a wrong image or a crashing command. Use `describe`/`logs` to find the cause, then fix it. Show it becomes Running.
2. **NotReady node** (kubeadm/killercoda): stop the kubelet on a node (`sudo systemctl stop kubelet`). Show the node goes `NotReady`. Diagnose with `journalctl -u kubelet`. Start the kubelet; show the node becomes `Ready` again.
3. **Broken Service:** create a Deployment + Service, then change the Service selector so it matches nothing (no endpoints). Diagnose (empty endpoints), then fix the selector. Show endpoints return.
4. Write a short "what I checked and how I fixed it" note for each case.

## 6. Tasks / challenges
- [ ] Crashing Pod found and fixed.
- [ ] NotReady node diagnosed and recovered.
- [ ] Broken Service fixed (endpoints return).
- [ ] Notes written for each.

## 7. Expected outcome
You fixed three different failures using a clear method, and can explain each fix.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. For the broken Pod: you show the failure in `kubectl describe`/`logs`, the cause, the fix, and the Pod becoming Running.
2. For the node (if you have SSH): you show it going `NotReady` after stopping kubelet, a relevant `journalctl -u kubelet` line, and recovery to `Ready`. (If you only have kind/minikube, clearly explain the method instead and do the other two fully.)
3. For the Service: you show empty endpoints when the selector is wrong, then endpoints returning after you fix the labels.
4. You provide a short "checked → fixed" note for each case.
5. All commands shown.

## 9. Verification checklist
- [ ] 3 problems diagnosed with the method.
- [ ] Notes written.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-09/`.

## 10. Common mistakes
- Guessing instead of reading Events/logs.
- Forgetting the node side (kubelet).
- Not checking endpoints for Service problems.

## 11. Hints
<details><summary>Hint 1</summary>Pod: `kubectl describe pod <p>` (Events) and `kubectl logs <p> --previous`.</details>
<details><summary>Hint 2</summary>Node: on the node, `sudo systemctl status kubelet` and `journalctl -u kubelet | tail`. Start it: `sudo systemctl start kubelet`.</details>
<details><summary>Hint 3</summary>Service: `kubectl get endpoints <svc>` — empty means the selector does not match Pod labels.</details>

## 12. Final challenge
Break a **control-plane** static Pod on purpose (e.g. put a typo in the apiserver manifest on a throwaway killercoda cluster), watch the effect, read `journalctl -u kubelet`, then fix the file. This is advanced CKA practice — do it only on a practice cluster you can rebuild.

## 13. What to submit (evidence)
Save the diagnosis + fix for each case and your notes in `submissions/kubernetes/advanced/project-09/`. Then say: **"I submit Kubernetes Advanced Project 9."**

---
**Remember:** get → describe → logs → node (kubelet) → control plane. A method beats luck. This is 30% of CKA.
