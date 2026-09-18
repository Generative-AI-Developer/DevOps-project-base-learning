---
id: kubernetes-ckad-study-exam-guide
track: kubernetes
level: certification
topic: CKAD exam guide and speed tips
forProject: kubernetes-ckad-project-01
---

# Study: CKAD Exam Guide and Speed Tips

> **Words to know**
> - **Performance-based** — you do real tasks, not multiple choice.
> - **Open book** — you may use the official Kubernetes docs during the exam.
> - **Imperative command** — a quick `kubectl` command that does a thing (fast).
> - **Declarative YAML** — a file you `apply` (clear and repeatable).

## 1. Easy explanation (simple → deeper)
CKAD is a **doing** exam. You get tasks like "create a Deployment with 3 replicas and this config". You must do them **fast and correctly** in ~2 hours.

The biggest skill is **speed**: generate YAML quickly, edit a little, apply. Do not write YAML from memory by hand.

## 2. Key concepts and terms (speed toolkit)
- `alias k=kubectl` — saves lots of typing.
- `--dry-run=client -o yaml` — generate YAML without creating.
- `kubectl explain <resource>.<field>` — built-in docs.
- `-n <ns>` — always work in the right namespace.
- `kubectl <verb> --help` — quick flag reminder.

## 3. Practical examples
```bash
# fast Deployment YAML
kubectl create deploy web --image=nginx:1.27 --replicas=3 --dry-run=client -o yaml > web.yaml
# fast Pod
kubectl run p --image=nginx --dry-run=client -o yaml > p.yaml
# fast Service
kubectl expose deploy web --port=80 --dry-run=client -o yaml > svc.yaml
# fast ConfigMap / Secret
kubectl create configmap cfg --from-literal=A=1 --dry-run=client -o yaml > cfg.yaml
kubectl create secret generic s --from-literal=P=x --dry-run=client -o yaml > s.yaml
```

## 4. Commands and config examples
```bash
# time-savers
export do="--dry-run=client -o yaml"   # then: kubectl run p --image=nginx $do
export now="--grace-period=0 --force"  # fast delete
kubectl config set-context --current --namespace=<ns>   # stop typing -n
```

## 5. Hands-on exercises
1. Set the `k` alias and the `do` variable. Generate 3 kinds of YAML with them.
2. Time yourself creating a Deployment + Service + ConfigMap. Aim for under 3 minutes.
3. Practice `kubectl explain` for a field you forget (like `probe` timing).

## 6. Troubleshooting (exam mindset)
- Stuck on a task? Flag it, move on, come back. Do easy points first.
- Always double-check the **namespace** and **names** in the task.
- Verify each answer (`kubectl get`, `describe`) before moving on.

## 7. Common mistakes and how to avoid them
- Writing YAML fully by hand (slow) — generate it.
- Wrong namespace.
- Not verifying — a small typo can cost the whole task.

## 8. Certification notes (what the exam wants)
- Speed + accuracy. Use imperative commands to generate, then tweak.
- The docs are open — bookmark the pages you use most (probes, volumes, security context).

## 9. Practice questions and tasks
1. How do you generate YAML without creating the object?
2. How do you stop typing `-n <ns>` every time?
3. What should you do before leaving a task?

## 10. References
- CKAD curriculum: https://github.com/cncf/curriculum (checked: 2026-09-18)
- Exam tips: https://kubernetes.io/docs/reference/kubectl/quick-reference/ (checked: 2026-09-18)
- Video: **KodeKloud** — "CKAD" course — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** Generate YAML, do not hand-write it. Set the namespace once. Verify every answer. Speed + correctness.

<details><summary>Answers</summary>

1. Add `--dry-run=client -o yaml`.
2. `kubectl config set-context --current --namespace=<ns>`.
3. Verify it with `kubectl get`/`describe`.
</details>
