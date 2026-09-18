---
id: kubernetes-beginner-study-kubectl-and-cluster
track: kubernetes
level: beginner
topic: kubectl and your cluster
forProject: kubernetes-beginner-project-01
---

# Study: kubectl and Your Cluster

> **Words to know**
> - **Cluster** — a group of machines that run your containers together.
> - **Node** — one machine in the cluster.
> - **Control plane** — the "brain" that makes decisions.
> - **kubectl** — the command tool you use to talk to the cluster. (Say "kube control".)
> - **Context** — which cluster + user + namespace `kubectl` is pointing at.

## 1. Easy explanation (simple → deeper)
Kubernetes is a **cluster** of machines (**nodes**). One part, the **control plane**, is the brain. The others run your apps.

You talk to the cluster with **`kubectl`**. You ask it questions ("show me the nodes") and give it instructions ("run this app"). It talks to the control plane for you.

## 2. Key concepts and terms
- **`kubectl get X`** — list things (nodes, pods, services...).
- **`kubectl describe X name`** — full details of one thing.
- **`kubectl cluster-info`** — where the control plane is.
- **`-n namespace`** — work in a namespace (a folder for objects).
- **`kubectl config ...`** — manage contexts (which cluster you point at).
- **`kubectl explain X`** — built-in help for any object (great in the exam!).

## 3. Practical examples
- Show nodes → `kubectl get nodes`
- Cluster info → `kubectl cluster-info`
- All pods everywhere → `kubectl get pods -A`
- Help for a Pod → `kubectl explain pod.spec`

## 4. Commands and config examples
```bash
kubectl version --short          # client + server versions
kubectl get nodes -o wide        # nodes with more detail
kubectl cluster-info             # control plane address
kubectl config current-context   # which cluster am I using?
kubectl get pods -A              # pods in all namespaces
kubectl explain deployment.spec.replicas   # docs for a field
```

## 5. Hands-on exercises
1. Start a cluster (`kind create cluster` or `minikube start`).
2. Run `kubectl get nodes`. See the node(s).
3. Run `kubectl cluster-info`.
4. Run `kubectl get pods -A` (system pods live in `kube-system`).
5. Try `kubectl explain pod` and read the top.

## 6. Troubleshooting
- **Problem:** `The connection to the server ... was refused`.
  **Fix:** the cluster is not running or the context is wrong. Start the cluster; check `kubectl config current-context`.
- **Problem:** `kubectl: command not found`.
  **Fix:** install kubectl (see references).

## 7. Common mistakes and how to avoid them
- Wrong context — you act on the wrong cluster. Always check `current-context`.
- Forgetting `-n` — you look in the wrong namespace.

## 8. Certification notes (what the exam wants)
- The whole CKA/CKAD/CKS exam is `kubectl` in a terminal. Speed matters.
- Set an alias: `alias k=kubectl`. Learn `kubectl explain` — it is your in-exam help.
- Enable autocomplete to type faster.

## 9. Practice questions and tasks
1. What is a node?
2. Which command lists all pods in all namespaces?
3. What does `kubectl explain` do?

## 10. References
- kubectl basics: https://kubernetes.io/docs/reference/kubectl/ (checked: 2026-09-18)
- Install kubectl: https://kubernetes.io/docs/tasks/tools/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Kubernetes Tutorial for Beginners" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** `kubectl get` to list, `describe` for details, `explain` for help. Check your context first.

<details><summary>Answers</summary>

1. One machine in the cluster.
2. `kubectl get pods -A` (or `--all-namespaces`).
3. Shows built-in docs for any object or field.
</details>
