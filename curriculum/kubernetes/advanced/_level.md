# Kubernetes — Advanced Level

Now you learn to **run and fix** a cluster, not just deploy apps on it. This is the core of the **CKA** (administrator) exam.

> **In simple words:** Beginner/Intermediate taught you to be a good *user* of Kubernetes. Advanced makes you the *admin* who builds, secures, and repairs the cluster.

## What you will learn
1. Cluster architecture and components (Project 1).
2. Build a cluster with kubeadm (Project 2).
3. Back up and restore etcd (Project 3).
4. Control scheduling: taints, affinity (Project 4).
5. DaemonSets and static Pods (Project 5).
6. Cluster networking and NetworkPolicies (Project 6).
7. RBAC: who can do what (Project 7).
8. Autoscaling with HPA (Project 8).
9. Troubleshoot broken nodes and control plane (Project 9).
10. Disaster recovery (Project 10 — level boss).

## Exit criteria
Finish all 10 projects to complete Kubernetes Advanced. Then the **Certification Level** (CKAD, CKA, CKS) unlocks.

## A note on your lab
Some CKA tasks (kubeadm, etcd, node repair) need a real multi-node setup, not just kind/minikube. Options:
- 2–3 small Linux VMs for kubeadm/etcd/node projects.
- Free browser labs: **killercoda.com** has ready CKA scenarios.

**Remember:** An admin stays calm, checks logs, and knows how the parts fit together. That is what this level builds.
