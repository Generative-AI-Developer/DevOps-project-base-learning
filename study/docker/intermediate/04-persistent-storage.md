---
id: docker-intermediate-study-persistent-storage
track: docker
level: intermediate
topic: Persistent storage done right
forProject: docker-intermediate-project-04
---

# Study: Persistent Storage Done Right

> **Words to know**
> - **Named volume** — Docker-managed storage with a name (best for data).
> - **Bind mount** — a folder from your computer shared into the container (best for code/config in dev).
> - **Ephemeral** — temporary; gone when the container is removed.

## 1. Easy explanation (simple → deeper)
A container's own files are **ephemeral** — they disappear when you remove it. For data that must live (databases, uploads), you use storage that lives **outside** the container.

Two kinds:
1. **Named volume** — Docker manages it. Best for real data (databases).
2. **Bind mount** — you share a folder from your computer. Best for development (live code editing).

## 2. Key concepts and terms
- Named volume in Compose:
  ```yaml
  services:
    db:
      image: postgres:16
      volumes: [dbdata:/var/lib/postgresql/data]
  volumes:
    dbdata:
  ```
- `docker compose down` keeps named volumes. `down -v` deletes them.
- Back up a volume by copying its contents into a tar file with a helper container.

## 3. Practical examples
```bash
# back up a named volume to a tar file
docker run --rm -v dbdata:/data -v "$(pwd)":/backup alpine \
  tar -czf /backup/dbdata-backup.tar.gz -C /data .

# restore it into a (new) volume
docker run --rm -v dbdata:/data -v "$(pwd)":/backup alpine \
  sh -c "cd /data && tar -xzf /backup/dbdata-backup.tar.gz"
```

## 4. Commands and config examples
```bash
docker volume ls
docker volume inspect dbdata
docker compose down        # keeps volumes (data safe)
docker compose up -d        # data still there
docker compose down -v      # DELETES volumes (data gone) — careful!
```

## 5. Hands-on exercises
1. Run a postgres with a named volume via Compose. Create a table/row (or just let it init).
2. `docker compose down` (no `-v`). Then `up -d`. Prove the data is still there.
3. Back up the volume to a tar file using the helper container above.

## 6. Troubleshooting
- **Problem:** data gone after `down`.
  **Fix:** you used `down -v`, or you did not use a named volume. Use a named volume and plain `down`.
- **Problem:** bind mount empty in the container.
  **Fix:** wrong host path. Use a full path.

## 7. Common mistakes and how to avoid them
- Using `down -v` by habit — it deletes data.
- Storing DB data in the container instead of a volume.
- No backups of volumes.

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Kubernetes uses PersistentVolumes (PV) and PersistentVolumeClaims (PVC). A named volume is the small version of this idea.
- StatefulSets (later) rely on persistent storage — this lesson prepares you.

## 9. Practice questions and tasks
1. Named volume vs bind mount — when to use each?
2. What does `down -v` do?
3. How do you keep data across `down` and `up`?

## 10. References
- Docker storage: https://docs.docker.com/storage/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker volumes" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Named volume for data, bind mount for dev. Plain `down` keeps data; `down -v` deletes it.

<details><summary>Answers</summary>

1. Named volume for real data (like databases); bind mount for sharing code/config in development.
2. Stops containers AND deletes the named volumes (data lost).
3. Use a named volume and use plain `docker compose down` (no `-v`).
</details>
