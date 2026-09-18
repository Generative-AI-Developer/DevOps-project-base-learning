---
id: kubernetes-intermediate-study-persistent-storage
track: kubernetes
level: intermediate
topic: Persistent storage - PV and PVC
forProject: kubernetes-intermediate-project-05
---

# Study: Persistent Storage (PV and PVC)

> **Words to know**
> - **Volume** — storage a Pod can use.
> - **PersistentVolume (PV)** — a real piece of storage in the cluster.
> - **PersistentVolumeClaim (PVC)** — a request for storage. The Pod uses the PVC.
> - **StorageClass** — a way to create storage automatically (dynamic).

## 1. Easy explanation (simple → deeper)
Pods are temporary. Their files vanish when they die. For data that must live (databases, uploads), you use **persistent storage**.

Two objects work together:
- **PV (PersistentVolume):** the actual storage.
- **PVC (PersistentVolumeClaim):** the Pod's request ("I need 1Gi").

The Pod mounts the **PVC**. Kubernetes binds the PVC to a PV. With a **StorageClass**, Kubernetes even creates the PV for you automatically (dynamic provisioning).

## 2. Key concepts and terms
- Access modes: `ReadWriteOnce` (one node), `ReadOnlyMany`, `ReadWriteMany`.
- The Pod does not name a PV; it names a **PVC**.
- `emptyDir` = temporary (gone with the Pod). PVC = persistent.
- On kind/minikube, a default StorageClass usually gives you dynamic PVs.

## 3. Practical examples
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata: { name: data-pvc }
spec:
  accessModes: ["ReadWriteOnce"]
  resources:
    requests:
      storage: 1Gi
---
apiVersion: v1
kind: Pod
metadata: { name: app }
spec:
  volumes:
    - name: data
      persistentVolumeClaim:
        claimName: data-pvc
  containers:
    - name: c
      image: busybox
      command: ["sh","-c","echo hi > /data/file.txt; sleep 3600"]
      volumeMounts: [{ name: data, mountPath: /data }]
```

## 4. Commands and config examples
```bash
kubectl get pvc,pv
kubectl get storageclass
kubectl describe pvc data-pvc         # is it Bound?
# prove data survives: write a file, delete the Pod, new Pod with same PVC, read the file
```

## 5. Hands-on exercises
1. Create a PVC (1Gi, ReadWriteOnce). Check it is `Bound`.
2. Run a Pod that mounts it and writes a file.
3. Delete the Pod. Run a new Pod with the same PVC. Show the file is still there.

## 6. Troubleshooting
- **Problem:** PVC stuck `Pending`.
  **Fix:** no StorageClass or no PV to bind. Check `kubectl get storageclass` and `kubectl describe pvc`.
- **Problem:** data gone.
  **Fix:** you used `emptyDir`, not a PVC. Use a PVC for persistence.

## 7. Common mistakes and how to avoid them
- Using `emptyDir` for data that must live.
- Wrong access mode for your need.
- Expecting `ReadWriteOnce` to work across many nodes (it does not).

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Storage is ~10% of CKA. Know PV, PVC, StorageClass, access modes.
- The Pod mounts the **PVC** — a very common exam point.

## 9. Practice questions and tasks
1. What is the difference between a PV and a PVC?
2. What does a Pod mount — a PV or a PVC?
3. What does a StorageClass do?

## 10. References
- Persistent volumes: https://kubernetes.io/docs/concepts/storage/persistent-volumes/ (checked: 2026-09-18)
- Video: **KodeKloud** — "PV and PVC" — https://www.youtube.com/@KodeKloud (checked: 2026-09-18)

---
**Remember:** PV = the storage, PVC = the request, StorageClass = auto-create. The Pod mounts the PVC.

<details><summary>Answers</summary>

1. PV is the actual storage; PVC is a request for storage that binds to a PV.
2. A PVC.
3. It creates PVs automatically (dynamic provisioning) when a PVC asks.
</details>
