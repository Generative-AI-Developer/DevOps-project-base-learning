# CKA — Certification Level (Domain Map)

**CKA = Certified Kubernetes Administrator.** It tests you as the person who **builds, secures, and fixes** the cluster.

> **In simple words:** CKA is hands-on and timed (~2 hours). You install, configure, and repair real clusters. Troubleshooting is the biggest part.

## Exam facts (verify on the official site before booking)
- **Format:** performance-based (terminal tasks).
- **Time:** ~120 minutes.
- **Pass:** ~66%.
- **Open book:** official Kubernetes docs allowed.

## Domains and weights
| Domain | Weight | This level's drill |
|---|---|---|
| Cluster Architecture, Installation and Configuration | 25% | Project 1 |
| Workloads and Scheduling | 15% | Project 2 |
| Services and Networking | 20% | Project 3 |
| Storage | 10% | Project 3 (shared) |
| Troubleshooting | 30% | Project 4 (+ Mock Exam in Project 5) |

## How this level works
- Each project is a **timed drill** for one area.
- **Project 5 includes the CKA Mock Exam** (`exams/cka/mock-1.md`), graded by `exams/cka/rubric-1.md`.
- The mock writes **domain scores** into `progress.json`. A weak domain (< 0.66) must be fixed before you finish CKA (and before CKS unlocks).

## Lab note
CKA needs a real cluster: kubeadm on VMs, or **killercoda.com** CKA scenarios. kind/minikube cannot do etcd/kubeadm/node tasks.

**Remember:** Troubleshooting is 30% — practice the get→describe→logs→kubelet method until it is automatic.
