---
id: kubernetes-advanced-study-networking-policies
track: kubernetes
level: advanced
topic: Cluster networking and NetworkPolicies
forProject: kubernetes-advanced-project-06
---

# Study: Cluster Networking and NetworkPolicies

> **Words to know**
> - **CNI** — the network plugin that gives Pods their networking.
> - **CoreDNS** — the cluster's DNS (turns Service names into IPs).
> - **NetworkPolicy** — a firewall rule for Pods (who may talk to whom).
> - **Default allow** — without policies, all Pods can talk to all Pods.

## 1. Easy explanation (simple → deeper)
Two parts:
1. **How Pods talk:** the **CNI** gives every Pod an IP; **CoreDNS** lets Pods find Services by name. By default, **all Pods can talk to all Pods** — very open.
2. **How to limit talk:** a **NetworkPolicy** is a firewall for Pods. It says "these Pods may receive traffic only from those Pods". This is the cluster version of the Docker network isolation you did.

⚠️ NetworkPolicies only work if your CNI supports them (Calico yes; some setups no).

## 2. Key concepts and terms
- CoreDNS runs in `kube-system`. Service DNS: `name.namespace.svc.cluster.local`.
- A NetworkPolicy selects Pods (`podSelector`) and sets `ingress`/`egress` rules.
- Once a Pod is selected by any policy, it is **default-deny** for that direction, and only the listed traffic is allowed.

## 3. Practical examples
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata: { name: db-allow-api }
spec:
  podSelector:
    matchLabels: { app: db }        # applies to db Pods
  policyTypes: ["Ingress"]
  ingress:
    - from:
        - podSelector:
            matchLabels: { app: api }   # only api Pods may reach db
```

## 4. Commands and config examples
```bash
kubectl get pods -n kube-system -l k8s-app=kube-dns   # CoreDNS
kubectl run test --image=busybox -it --rm -- nslookup web   # DNS test
kubectl get networkpolicy
kubectl describe networkpolicy db-allow-api
```

## 5. Hands-on exercises
1. Test cluster DNS: from a temp Pod, `nslookup` a Service.
2. Deploy `api` and `db`. Show `api` can reach `db` (open by default).
3. Add a NetworkPolicy so only `api` may reach `db`. Show a third Pod is now blocked.

## 6. Troubleshooting
- **Problem:** policy has no effect.
  **Fix:** your CNI may not support NetworkPolicies. Use Calico (kind can install it).
- **Problem:** everything is blocked.
  **Fix:** a default-deny policy with no allow rules blocks all. Add the allow rules you need.

## 7. Common mistakes and how to avoid them
- Testing policies on a CNI that ignores them.
- Forgetting that selecting a Pod turns on default-deny for that direction.

## 8. Certification notes (what the exam wants)
- **CKA:** Services & Networking includes NetworkPolicies and DNS.
- **CKS:** NetworkPolicies are a big security topic (limit Pod-to-Pod traffic).

## 9. Practice questions and tasks
1. By default, can all Pods talk to all Pods?
2. What does a NetworkPolicy do?
3. What must the CNI support for policies to work?

## 10. References
- NetworkPolicies: https://kubernetes.io/docs/concepts/services-networking/network-policies/ (checked: 2026-09-18)
- DNS: https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/ (checked: 2026-09-18)

---
**Remember:** CNI = Pod networking, CoreDNS = names. Default is all-open. NetworkPolicy = a Pod firewall (needs a supporting CNI).

<details><summary>Answers</summary>

1. Yes, by default (until you add NetworkPolicies).
2. Limits which Pods may send/receive traffic (a Pod firewall).
3. The CNI must support NetworkPolicy (e.g. Calico).
</details>
