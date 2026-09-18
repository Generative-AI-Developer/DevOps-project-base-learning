---
id: kubernetes-ckad-project-04
track: kubernetes
level: certification
order: 4
title: "CKAD Drill: Services and Networking (20%)"
prereqs: ["kubernetes-ckad-project-03"]
skills: ["Services", "NetworkPolicy", "Ingress", "DNS"]
certDomains: ["CKAD: Services and Networking"]
estimatedTime: "timed: 25 minutes"
---

# CKAD Drill: Services and Networking (20%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Practice Services, NetworkPolicies, and Ingress — fast.

## 2. Real-world scenario
Exam tasks like "expose this Deployment and allow traffic only from that Pod".

## 3. Skills and concepts you will learn
- Expose Deployments with Services.
- Restrict traffic with a NetworkPolicy.
- Route with Ingress.

## 4. Prerequisites
- CKAD Project 3 completed.
- Read: `study/kubernetes/certification/ckad/00-ckad-exam-guide.md`.

## 5. Step-by-step requirements (within the time limit)
1. Expose a Deployment with a ClusterIP Service; verify endpoints and reach it by name.
2. Add a NetworkPolicy that allows traffic to it only from Pods with a given label; prove another Pod is blocked.
3. Create an Ingress that routes a path to the Service.
4. Verify all three.

## 6. Tasks / challenges
- [ ] Service + endpoints.
- [ ] NetworkPolicy allows/blocks correctly.
- [ ] Ingress routes.

## 7. Expected outcome
A Service reachable by name, protected by a NetworkPolicy, and fronted by Ingress — within 25 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. The Service has endpoints and is reachable by name from a temp Pod.
2. The NetworkPolicy allows the intended Pod and blocks another (show both).
3. The Ingress routes a path to the Service (show a `curl`).
4. You report your time.

## 9. Verification checklist
- [ ] Service works.
- [ ] Policy allows/blocks.
- [ ] Ingress routes.
- [ ] Evidence saved in `submissions/kubernetes/certification/ckad/project-04/`.

## 10. Common mistakes
- Label/selector mismatch → no endpoints.
- NetworkPolicy on a CNI that ignores it.
- Ingress with no controller.

## 11. Hints
<details><summary>Hint 1</summary>Reuse Beginner Project 4 (Services), Advanced Project 6 (NetworkPolicy), Intermediate Project 7 (Ingress).</details>
<details><summary>Hint 2</summary>Test policy with a busybox Pod: allowed vs blocked.</details>
<details><summary>Hint 3</summary>Ingress needs a controller (minikube addon or nginx-ingress on kind).</details>

## 12. Final challenge
Add an egress NetworkPolicy that lets a Pod reach ONLY the DNS service and one other Pod. Egress rules are a common tricky exam item.

## 13. What to submit (evidence)
Save YAML, tests, and your time in `submissions/kubernetes/certification/ckad/project-04/`. Then say: **"I submit CKAD Project 4."**

---
**Remember:** Service (endpoints) → NetworkPolicy (allow/block) → Ingress (route). 20% of CKAD.
