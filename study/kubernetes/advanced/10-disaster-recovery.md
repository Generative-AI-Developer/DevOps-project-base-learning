---
id: kubernetes-advanced-study-disaster-recovery
track: kubernetes
level: advanced
topic: Disaster recovery and high availability
forProject: kubernetes-advanced-project-10
---

# Study: Disaster Recovery and High Availability

> **Words to know**
> - **Disaster recovery (DR)** — getting the cluster back after a big failure.
> - **High availability (HA)** — a setup that keeps working even if one part fails.
> - **Drain** — safely move Pods off a node before maintenance.
> - **Cordon** — mark a node "no new Pods".

## 1. Easy explanation (simple → deeper)
Things fail. A good admin plans for it.
- **HA:** run more than one of important parts (multiple control-plane nodes, multiple replicas), so one failure does not stop everything.
- **DR:** have backups (etcd!) and a plan to restore.
- **Maintenance:** to work on a node safely, **cordon** it (no new Pods) and **drain** it (move Pods away), then do the work, then **uncordon**.

## 2. Key concepts and terms
- `kubectl cordon <node>` — stop new Pods landing there.
- `kubectl drain <node> --ignore-daemonsets` — move Pods off (respects PodDisruptionBudgets).
- `kubectl uncordon <node>` — allow Pods again.
- **PodDisruptionBudget (PDB):** keeps a minimum number of Pods up during voluntary disruptions.
- **HA control plane:** 3 control-plane nodes + a load balancer; etcd is replicated.

## 3. Practical examples
```bash
kubectl cordon node2
kubectl drain node2 --ignore-daemonsets --delete-emptydir-data
# ... do maintenance on node2 ...
kubectl uncordon node2
```
A PodDisruptionBudget:
```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata: { name: web-pdb }
spec:
  minAvailable: 2
  selector: { matchLabels: { app: web } }
```

## 4. Commands and config examples
```bash
kubectl get nodes
kubectl drain <node> --ignore-daemonsets
kubectl get pods -o wide          # see Pods move to other nodes
kubectl uncordon <node>
kubectl get pdb
```

## 5. Hands-on exercises
1. Cordon and drain a worker node; watch Pods move to other nodes.
2. Uncordon it; watch it accept Pods again.
3. Add a PodDisruptionBudget and see it protect a minimum number of Pods during a drain.

## 6. Troubleshooting
- **Problem:** drain hangs.
  **Fix:** a PDB blocks it (would drop below minAvailable), or Pods have no controller. Use flags carefully; scale up first if needed.
- **Problem:** app went down during node work.
  **Fix:** you had only 1 replica, or no PDB. Run more replicas and use a PDB.

## 7. Common mistakes and how to avoid them
- Working on a node without draining it first.
- Only 1 replica of an important app.
- No etcd backup before risky changes.

## 8. Certification notes (what the exam wants)
- **CKA:** cordon/drain/uncordon and node maintenance are common tasks.
- Combine with etcd backup/restore (Project 3) for full DR.

## 9. Practice questions and tasks
1. What is the difference between cordon and drain?
2. What does a PodDisruptionBudget do?
3. What two things give you high availability?

## 10. References
- Safely drain a node: https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/ (checked: 2026-09-18)
- HA topology: https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/ (checked: 2026-09-18)

---
**Remember:** HA = run more than one. DR = backups + a plan. For node work: cordon → drain → fix → uncordon.

<details><summary>Answers</summary>

1. Cordon stops new Pods; drain also moves existing Pods off.
2. Keeps a minimum number of Pods running during voluntary disruptions.
3. Multiple replicas of apps, and multiple control-plane nodes (replicated etcd).
</details>
