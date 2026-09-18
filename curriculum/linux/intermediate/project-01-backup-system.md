---
id: linux-intermediate-project-01
track: linux
level: intermediate
order: 1
title: "Build an Automated Backup System"
prereqs: ["linux-beginner-project-06"]
skills: ["tar", "gzip", "cron", "retention", "date stamps"]
certDomains: ["CKA: backup/restore mindset (foundation)"]
estimatedTime: "60–90 minutes"
---

# Build an Automated Backup System

**Status:** 🔒 Locked (unlocks when Linux Intermediate opens)

## 1. Objective
Write a script that backs up a folder into a dated, compressed archive, deletes old backups, and can run on a schedule with cron.

## 2. Real-world scenario
Your company stores important files in `~/myapp`. The manager says: *"Back this up every day. Keep 7 days of backups. Do it automatically."* If the server dies, these backups save the business.

## 3. Skills and concepts you will learn
- Pack and compress with `tar`.
- Add a date stamp to file names.
- Delete old files with `find -mtime`.
- Schedule with `cron`.

## 4. Prerequisites
- Linux Beginner completed.
- Read: `study/linux/intermediate/01-backups-and-cron.md`.
- You need a folder to back up. Use `~/myapp` from Beginner Project 2 (or make one).

## 5. Step-by-step requirements
1. Write `backup.sh` that:
   - packs `~/myapp` into `~/backups/myapp-<date>.tar.gz`,
   - makes the `~/backups` folder if missing,
   - deletes backups older than 7 days.
2. Run the script by hand. Show the new archive.
3. Restore test: unpack the archive into `~/restore-test` and show the files are there.
4. Add a cron line to run it daily at 2 AM. Show `crontab -l`.

## 6. Tasks / challenges
- [ ] `backup.sh` runs and creates a dated `.tar.gz` in `~/backups`.
- [ ] The script has a retention step (delete older than 7 days).
- [ ] You restore the archive and prove the files come back.
- [ ] A cron line is added and shown with `crontab -l`.

## 7. Expected outcome
Running `./backup.sh` makes `~/backups/myapp-YYYY-MM-DD_HH-MM.tar.gz`. Old backups are cleaned. Cron will run it daily.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the full `backup.sh` script.
2. `ls -l ~/backups/` shows a dated `myapp-*.tar.gz` file.
3. The script includes a retention line using `find ... -mtime +7 -delete`.
4. You show a working restore: unpack into `~/restore-test` and `ls -R ~/restore-test` shows the files.
5. `crontab -l` shows a line that runs the script daily (e.g. `0 2 * * *`).
6. You explain in one sentence why full paths are needed in cron.

## 9. Verification checklist
- [ ] Archive is created and dated.
- [ ] Retention step exists.
- [ ] Restore works.
- [ ] Cron line shown.
- [ ] Evidence saved in `submissions/linux/intermediate/project-01/`.

## 10. Common mistakes
- Using `~` in the cron line — use full paths like `/home/you/backup.sh`.
- No retention — disk fills up.
- Never testing restore — always test it.

## 11. Hints
<details><summary>Hint 1</summary>Use a date stamp: `STAMP="$(date +%F_%H-%M)"`. Then name the file `myapp-$STAMP.tar.gz`.</details>
<details><summary>Hint 2</summary>Retention: `find ~/backups -name "myapp-*.tar.gz" -mtime +7 -delete`.</details>
<details><summary>Hint 3 (almost the answer)</summary>See the full example script in `study/linux/intermediate/01-backups-and-cron.md`, section 4. Adapt the paths to yours.</details>

## 12. Final challenge
Make the script send its output to a log file `~/backup.log` (append). Then set the cron line to append there too: `... >> /home/you/backup.log 2>&1`.

## 13. What to submit (evidence)
Save the script, the run output, the restore proof, and `crontab -l` in `submissions/linux/intermediate/project-01/`. Then say: **"I submit Linux Intermediate Project 1."**

---
**Remember:** Backup = pack + schedule + clean old + test restore. This is the same idea as etcd backup in CKA.
