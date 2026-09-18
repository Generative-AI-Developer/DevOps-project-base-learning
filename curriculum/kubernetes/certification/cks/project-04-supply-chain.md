---
id: kubernetes-cks-project-04
track: kubernetes
level: certification
order: 4
title: "CKS Drill: Supply Chain Security (20%)"
prereqs: ["kubernetes-cks-project-03"]
skills: ["Trivy scanning", "minimal base images", "image allowlist", "image signing idea"]
certDomains: ["CKS: Supply Chain Security"]
estimatedTime: "timed: 25 minutes"
---

# CKS Drill: Supply Chain Security (20%)

**Status:** 🔒 Locked

⏱️ **Timed drill.** Set a timer for **25 minutes**.

## 1. Objective
Make the image pipeline safe: scan for CVEs, use minimal base images, and allow only trusted images.

## 2. Real-world scenario
A vulnerable image was deployed and got exploited. Now every image must be scanned and only trusted ones allowed.

## 3. Skills and concepts you will learn
- Scan images with Trivy.
- Choose minimal/distroless bases.
- Restrict which images/registries may run.

## 4. Prerequisites
- CKS Project 3 completed.
- Read: `study/kubernetes/certification/cks/00-cks-exam-guide.md`.
- Reuse Docker Advanced (multi-stage, small images).

## 5. Step-by-step requirements (within the time limit)
1. Scan a big image (e.g. `nginx:1.27`) with `trivy image`; note high/critical CVEs.
2. Scan a small base (e.g. `nginx:1.27-alpine` or a distroless-based build); compare CVE counts.
3. Show an **image allowlist** approach: an admission policy (OPA/Kyverno) OR `imagePolicyWebhook`/`ImagePullPolicy` reasoning that only trusted registries are allowed.
4. Explain image signing/verification (cosign) in one paragraph.

## 6. Tasks / challenges
- [ ] Trivy scan on a big image.
- [ ] Trivy scan on a small image (compare).
- [ ] Allowlist approach shown/explained.
- [ ] Signing explained.

## 7. Expected outcome
You can scan images, pick safer bases, and restrict which images run — within 25 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `trivy image` output shown for a big image, with CVE counts.
2. A smaller base scanned and compared (fewer CVEs) — show both.
3. You show or clearly describe an allowlist mechanism (Kyverno/OPA policy, or webhook) that blocks untrusted registries.
4. You explain image signing/verification (cosign) correctly.
5. You report your time.

## 9. Verification checklist
- [ ] Scans done + compared.
- [ ] Allowlist shown/explained.
- [ ] Signing explained.
- [ ] Evidence saved in `submissions/kubernetes/certification/cks/project-04/`.

## 10. Common mistakes
- Using a big base with many CVEs.
- No image restrictions (any registry allowed).

## 11. Hints
<details><summary>Hint 1</summary>`trivy image nginx:1.27` then `trivy image nginx:1.27-alpine`.</details>
<details><summary>Hint 2</summary>Reuse Docker Advanced Project 1 (multi-stage/small images).</details>
<details><summary>Hint 3</summary>Kyverno/OPA can require images to come from `myregistry.example.com/*` only.</details>

## 12. Final challenge
Write a Kyverno (or OPA Gatekeeper) policy that blocks any image tagged `latest` and any image not from your registry. Enforce it and show a bad Pod rejected.

## 13. What to submit (evidence)
Save the scans, the comparison, the allowlist policy/notes, and your time in `submissions/kubernetes/certification/cks/project-04/`. Then say: **"I submit CKS Project 4."**

---
**Remember:** Scan images, use small trusted bases, allow only trusted registries, verify signatures. 20% of CKS.
