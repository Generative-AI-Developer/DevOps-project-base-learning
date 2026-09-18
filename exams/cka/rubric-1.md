---
id: cka-mock-1-rubric
cert: cka
for: cka-mock-1
---

# CKA Mock Exam 1 — Rubric (for the mentor)

Grade each task full/half/zero, then compute domain scores.

## Per-task grading
| Task | Weight | Full credit if... | Domain |
|---|---|---|---|
| 1 | 12 | valid etcd snapshot saved + status shown | architecture-install |
| 2 | 8 | SA can get/list pods, cannot delete (auth can-i) | architecture-install |
| 3 | 5 | static Pod running (name has node suffix) | architecture-install |
| 4 | 8 | taint set; Pod with toleration lands there (-o wide) | workloads-scheduling |
| 5 | 7 | DaemonSet on all nodes incl. control plane | workloads-scheduling |
| 6 | 8 | Service endpoints present; DNS resolves | services-networking |
| 7 | 8 | default-deny + allow only app=client (allow+block shown) | services-networking |
| 8 | 8 | PVC data survives Pod restart | storage |
| 9 | 12 | node recovered to Ready via kubelet fix | troubleshooting |
| 10 | 8 | Service endpoints restored (selector fixed) | troubleshooting |
| 11 | 10 | cluster DNS restored (CoreDNS healthy) | troubleshooting |

Half credit: object exists but a detail is wrong or unverified.

## Domain scores (write into progress.json)
- **architecture-install:** tasks 1,2,3 → total 25
- **workloads-scheduling:** tasks 4,5 → total 15
- **services-networking:** tasks 6,7 → total 16
- **storage:** task 8 → total 8
- **troubleshooting:** tasks 9,10,11 → total 30

Each domain score = earned ÷ its total. Write to the mock node's `domainScores`.

## Pass / weak areas
- **Overall pass:** total earned ÷ 94 ≥ 0.66.
- For each domain < 0.66, add to `progress.json.weakAreas`:
  `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "kubernetes/certification/cks" }`
- Student redoes the matching CKA drill and re-scores ≥ 0.66 before CKS unlocks.

## Mentor notes
- Simple-English feedback per task.
- Note time. Unfinished = zero. Emphasize context-switching and verification.
