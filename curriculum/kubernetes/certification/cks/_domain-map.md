# CKS — Certification Level (Domain Map)

**CKS = Certified Kubernetes Security Specialist.** It tests you as the person who **secures** clusters and workloads.

> ⚠️ **You must pass CKA first.** CKS builds on admin skills. In this course, CKS unlocks only after CKA is complete.

> **In simple words:** CKS is hands-on and timed (~2 hours). You harden clusters, lock down Pods, scan images, and watch for attacks.

## Exam facts (verify on the official site before booking)
- **Format:** performance-based (terminal tasks).
- **Time:** ~120 minutes.
- **Pass:** ~66%.
- **Open book:** official Kubernetes docs + a few tool docs (Falco, Trivy, etc.).

## Domains and weights
| Domain | Weight | This level's drill |
|---|---|---|
| Cluster Setup | 10% | Project 1 (shared) |
| Cluster Hardening | 15% | Project 1 |
| System Hardening | 15% | Project 2 |
| Minimize Microservice Vulnerabilities | 20% | Project 3 |
| Supply Chain Security | 20% | Project 4 |
| Monitoring, Logging and Runtime Security | 20% | Project 5 (+ Mock in Project 6) |

## Tools you will meet
- **kube-bench** — checks the cluster against the CIS benchmark.
- **Trivy** — scans images for known vulnerabilities.
- **Falco** — detects strange behavior at runtime.
- **AppArmor / seccomp** — limit what a container can do on the host.
- **audit logging** — record who did what to the apiserver.

## How this level works
- Each project is a **timed drill** for one area.
- **Project 6 includes the CKS Mock Exam** (`exams/cks/mock-1.md`), graded by `exams/cks/rubric-1.md`.
- The mock writes **domain scores** into `progress.json`. A weak domain (< 0.66) must be fixed before CKS is complete.

**Remember:** CKS is "least privilege" everywhere: smallest image, fewest powers, least access, and watch everything.
