---
id: cks-mock-1-rubric
cert: cks
for: cks-mock-1
---

# CKS Mock Exam 1 — Rubric (for the mentor)

Grade each task full/half/zero, then compute domain scores.

## Per-task grading
| Task | Weight | Full credit if... | Domain |
|---|---|---|---|
| 1 | 8 | default-deny + only api→db allowed (block shown) | cluster-hardening |
| 2 | 8 | sa1 cannot read Secrets, can list Pods (auth can-i) | cluster-hardening |
| 3 | 6 | kube-bench run; one CIS control fixed/explained | cluster-setup |
| 4 | 8 | Pod uses seccomp RuntimeDefault (shown) | system-hardening |
| 5 | 7 | AppArmor profile applied/in effect (or mechanism shown) | system-hardening |
| 6 | 10 | ns enforces restricted; bad Pod rejected; good Pod runs | minimize-vulnerabilities |
| 7 | 10 | Secret encryption at rest configured/shown correctly | minimize-vulnerabilities |
| 8 | 10 | two Trivy scans + correct safer-image choice | supply-chain |
| 9 | 10 | policy blocks untrusted registry (bad Pod rejected) | supply-chain |
| 10 | 10 | Falco alert triggered and shown | runtime-security |
| 11 | 8 | audit logging enabled/shown + one entry | runtime-security |

Half credit: exists but a detail is wrong or unverified.

## Domain scores (write into progress.json)
- **cluster-setup:** task 3 → total 6
- **cluster-hardening:** tasks 1,2 → total 16
- **system-hardening:** tasks 4,5 → total 15
- **minimize-vulnerabilities:** tasks 6,7 → total 20
- **supply-chain:** tasks 8,9 → total 20
- **runtime-security:** tasks 10,11 → total 18

Each domain score = earned ÷ its total. Write to the mock node's `domainScores`.

## Pass / weak areas
- **Overall pass:** total earned ÷ 95 ≥ 0.66.
- For each domain < 0.66, add to `progress.json.weakAreas`:
  `{ "domain": "<name>", "score": <n>, "mustRemediateBefore": "capstone" }`
- Student redoes the matching CKS drill and re-scores ≥ 0.66 before CKS is marked complete.

## Mentor notes
- Simple-English feedback per task.
- Some tasks (audit, AppArmor) may be limited by the practice lab — accept a clear config + explanation there, but require Falco, Trivy, RBAC, NetworkPolicy, seccomp, and Pod Security to be done for real.
