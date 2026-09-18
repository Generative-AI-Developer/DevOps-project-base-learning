---
id: docker-intermediate-project-04
track: docker
level: intermediate
order: 4
title: "Make Data Survive and Back It Up"
prereqs: ["docker-intermediate-project-03"]
skills: ["named volumes", "data persistence", "volume backup/restore"]
certDomains: ["CKAD/CKA: persistent storage (foundation)"]
estimatedTime: "60–90 minutes"
---

# Make Data Survive and Back It Up

**Status:** 🔒 Locked

## 1. Objective
Prove database data survives restarts using a named volume, and back up that volume to a file.

## 2. Real-world scenario
The team runs a database in Docker. They ask: *"Prove our data is safe when we restart, and show me a backup we can restore."* Losing data is not allowed.

## 3. Skills and concepts you will learn
- Use a named volume for a database.
- Prove data survives `down` and `up`.
- Back up and restore a volume.

## 4. Prerequisites
- Docker Intermediate Project 3 completed.
- Read: `study/docker/intermediate/04-persistent-storage.md`.

## 5. Step-by-step requirements
1. Compose file with a `db` (postgres) using a named volume `dbdata`.
2. Start it. Create some data: connect and make a table + a row.
   (Tip: `docker compose exec db psql -U postgres -c "CREATE TABLE t(x int); INSERT INTO t VALUES(1);"`)
3. `docker compose down` (NO `-v`). Then `up -d`.
4. Prove the data is still there (`SELECT * FROM t;`).
5. Back up the `dbdata` volume to a tar file using a helper container.

## 6. Tasks / challenges
- [ ] Named volume used.
- [ ] Data created.
- [ ] Data survives down + up.
- [ ] Volume backed up to a tar file.

## 7. Expected outcome
Your database data survives a restart, and you have a backup file of the volume.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `compose.yaml` shows a named volume for the db.
2. You created data (show the CREATE/INSERT).
3. After `docker compose down` (no `-v`) and `up -d`, `SELECT * FROM t;` still returns the row.
4. You produced a backup file of the volume (show `ls -l` of the `.tar.gz`).
5. You explain in one sentence the difference between `down` and `down -v`.
6. All commands shown.

## 9. Verification checklist
- [ ] Data survived restart.
- [ ] Backup file created.
- [ ] Evidence saved in `submissions/docker/intermediate/project-04/`.

## 10. Common mistakes
- Using `down -v` and losing the data.
- Not using a named volume at all.
- Wrong host path in the backup helper.

## 11. Hints
<details><summary>Hint 1</summary>Make data: `docker compose exec db psql -U postgres -c "CREATE TABLE t(x int); INSERT INTO t VALUES(1);"`.</details>
<details><summary>Hint 2</summary>Check after restart: `docker compose exec db psql -U postgres -c "SELECT * FROM t;"`.</details>
<details><summary>Hint 3</summary>Backup command is in `study/docker/intermediate/04-persistent-storage.md`, section 3.</details>

## 12. Final challenge
Do a full restore test: `docker compose down -v` (deletes the volume), then restore your backup tar into a fresh `dbdata` volume, start the db, and show the row is back. This proves your backup really works.

## 13. What to submit (evidence)
Save `compose.yaml`, the data creation, the survive-restart proof, and the backup file listing in `submissions/docker/intermediate/project-04/`. Then say: **"I submit Docker Intermediate Project 4."**

---
**Remember:** Named volume = data lives. Plain `down` keeps it, `down -v` deletes it. Always test your restore.
