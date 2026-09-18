---
id: kubernetes-advanced-project-06
track: kubernetes
level: advanced
order: 6
title: "Lock Down Pod Traffic with NetworkPolicies"
prereqs: ["kubernetes-advanced-project-05"]
skills: ["CoreDNS", "NetworkPolicy", "podSelector", "default-deny", "isolation"]
certDomains: ["CKA: Services & Networking", "CKS: network security (foundation)"]
estimatedTime: "90 minutes"
---

# Lock Down Pod Traffic with NetworkPolicies

**Status:** 🔒 Locked

## 1. Objective
Use a NetworkPolicy so only allowed Pods can reach your database Pod. Prove others are blocked.

## 2. Real-world scenario
Security says: *"Only the API may talk to the database. Block everything else."* By default all Pods can talk to all Pods. You add a NetworkPolicy to lock it down.

## 3. Skills and concepts you will learn
- Test cluster DNS (CoreDNS).
- Write a NetworkPolicy.
- Prove allowed traffic passes and other traffic is blocked.

## 4. Prerequisites
- Kubernetes Advanced Project 5 completed.
- Read: `study/kubernetes/advanced/06-networking-policies.md`.
- ⚠️ Your CNI must support NetworkPolicies (Calico). kind can install Calico; killercoda scenarios have it.

## 5. Step-by-step requirements
1. Deploy `db` (label `app: db`), `api` (label `app: api`), and `other` (a third Pod, different label).
2. Show that, by default, both `api` and `other` can reach `db`.
3. Add a NetworkPolicy on `db` that allows ingress ONLY from `app: api`.
4. Prove `api` can still reach `db`, but `other` is now blocked.
5. Test cluster DNS from a temp Pod (`nslookup <service>`).

## 6. Tasks / challenges
- [ ] Default open traffic shown.
- [ ] NetworkPolicy applied to db.
- [ ] api still allowed.
- [ ] other now blocked.
- [ ] DNS test shown.

## 7. Expected outcome
The database accepts traffic only from the API. Other Pods are blocked. You proved both cases.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Before the policy: you show BOTH `api` and `other` reaching `db` (e.g. `wget`/`nc` to the db Service/Pod).
2. You paste the NetworkPolicy YAML (podSelector `app: db`, ingress from `app: api`).
3. After the policy: `api` still reaches `db` (allowed).
4. After the policy: `other` is **blocked** (connection fails/times out).
5. `nslookup <service>` from a temp Pod works (DNS).
6. You explain in one line what "default-deny" means once a policy selects a Pod.

## 9. Verification checklist
- [ ] Default-open shown first.
- [ ] Policy blocks the right Pod.
- [ ] Allowed Pod still works.
- [ ] Evidence saved in `submissions/kubernetes/advanced/project-06/`.

## 10. Common mistakes
- CNI does not support policies → the rule does nothing.
- Forgetting that selecting a Pod turns on default-deny for that direction.
- Wrong labels in the policy.

## 11. Hints
<details><summary>Hint 1</summary>Use the NetworkPolicy YAML in `study/kubernetes/advanced/06-networking-policies.md`, section 3.</details>
<details><summary>Hint 2</summary>Test reachability with a busybox Pod: `wget -qO- --timeout=3 http://db` (or `nc -zv db <port>`).</details>
<details><summary>Hint 3</summary>kind with Calico, or killercoda's network policy scenario, gives you a CNI that enforces policies.</details>

## 12. Final challenge
Add a **default-deny-all ingress** policy for the whole namespace, then add specific allow policies. This "deny by default, allow what you need" model is the CKS best practice.

## 13. What to submit (evidence)
Save the before/after reachability tests, the policy YAML, and the DNS test in `submissions/kubernetes/advanced/project-06/`. Then say: **"I submit Kubernetes Advanced Project 6."**

---
**Remember:** Default is all-open. A NetworkPolicy is a Pod firewall (needs a supporting CNI). Deny by default, allow what you need.
