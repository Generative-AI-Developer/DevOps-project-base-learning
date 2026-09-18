# CKAD — Certification Level (Domain Map)

**CKAD = Certified Kubernetes Application Developer.** It tests you as a person who **builds and runs apps** on Kubernetes.

> **In simple words:** CKAD is a hands-on, timed exam. You do real tasks on a real cluster. No multiple choice. You have about 2 hours.

## Exam facts (verify on the official site before booking)
- **Format:** performance-based (you do tasks in a terminal).
- **Time:** ~120 minutes.
- **Pass:** ~66%.
- **Open book:** the official Kubernetes docs are allowed during the exam.

## Domains and weights
| Domain | Weight | This level's drill |
|---|---|---|
| Application Design and Build | 20% | Project 1 |
| Application Deployment | 20% | Project 2 |
| Application Environment, Configuration and Security | 25% | Project 3 |
| Services and Networking | 20% | Project 4 |
| Application Observability and Maintenance | 15% | Project 5 (+ Mock Exam) |

## How this level works
- Each project is a **timed drill** for one domain. Set a timer and work fast.
- After the drills, **Project 5 includes the Mock Exam** (`exams/ckad/mock-1.md`), graded by `exams/ckad/rubric-1.md`.
- The mock writes your **domain scores** into `progress.json`. Any weak domain (below the pass line) becomes a **weak area** you must improve before moving on.

## Fast-exam habits (build these now)
- `alias k=kubectl` and shell autocomplete.
- Generate YAML: `kubectl run/create ... --dry-run=client -o yaml > f.yaml`.
- Use `kubectl explain` for fields.
- Always set the right `-n namespace`.

**Remember:** CKAD is about speed + correctness on app tasks. Practice each domain until it is fast.
