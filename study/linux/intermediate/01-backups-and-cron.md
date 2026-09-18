---
id: linux-intermediate-study-backups-and-cron
track: linux
level: intermediate
topic: Backups with tar, and scheduling with cron
forProject: linux-intermediate-project-01
---

# Study: Backups and Cron

> **Words to know**
> - **Backup** — a safe copy of your files.
> - **Archive** — many files packed into one file (with `tar`).
> - **Compress** — make a file smaller (with `gzip`).
> - **cron** — a Linux clock that runs jobs on a schedule.
> - **Retention** — how long you keep old backups before deleting them.

## 1. Easy explanation (simple → deeper)
Servers can break. Files can be lost. So engineers make **backups**.

A good backup:
1. Packs files into one archive (`tar`).
2. Makes it small (`gzip`).
3. Runs automatically on a schedule (`cron`).
4. Deletes very old backups (retention), so the disk does not fill up.

## 2. Key concepts and terms
- **`tar -czf out.tar.gz folder/`** — pack and compress a folder. (`c`=create, `z`=gzip, `f`=file.)
- **`tar -xzf out.tar.gz`** — unpack it. (`x`=extract.)
- **cron table (crontab)** — the list of scheduled jobs. Edit with `crontab -e`.
- **cron time format:** `min hour day month weekday command`.
  - `0 2 * * *` = every day at 2:00 AM.

## 3. Practical examples
- Pack a folder → `tar -czf backup.tar.gz ~/myapp`
- Add a date to the name → `tar -czf backup-$(date +%F).tar.gz ~/myapp`
- Schedule daily at 2 AM → in `crontab -e`: `0 2 * * * /home/you/backup.sh`

## 4. Commands and config examples
```bash
# a simple backup script (backup.sh)
#!/bin/bash
SRC="$HOME/myapp"
DEST="$HOME/backups"
mkdir -p "$DEST"
STAMP="$(date +%F_%H-%M)"
tar -czf "$DEST/myapp-$STAMP.tar.gz" "$SRC"
# retention: delete backups older than 7 days
find "$DEST" -name "myapp-*.tar.gz" -mtime +7 -delete
echo "Backup done: myapp-$STAMP.tar.gz"
```
```bash
crontab -e         # edit your cron jobs
crontab -l         # list your cron jobs
# line to add: run backup every day at 2 AM
0 2 * * * /home/you/backup.sh >> /home/you/backup.log 2>&1
```

## 5. Hands-on exercises
1. Make `backup.sh` like above. Run it once by hand. Check the archive appears.
2. Unpack the archive into a test folder to prove it works.
3. Add a cron line to run it every day. Then `crontab -l` to see it.

## 6. Troubleshooting
- **Problem:** cron job did not run.
  **Fix:** cron needs full paths (not `~`). Use `/home/you/...`. Check the log file you redirected to.
- **Problem:** `tar: Removing leading /`.
  **Fix:** this is just a warning. It is safe.

## 7. Common mistakes and how to avoid them
- Using `~` inside cron — cron may not know your home. Use full paths.
- No retention — old backups fill the disk. Always delete old ones.
- Not testing restore — a backup you cannot restore is useless. Test it.

## 8. Certification notes (what the exam wants)
- **CKA** has an important task: **backup and restore etcd** (the Kubernetes database). The idea is the same as here: make a safe copy, and be able to restore it.
- Know `tar`, `cron`, and `find -mtime` well.

## 9. Practice questions and tasks
1. What does `tar -czf` do?
2. Write a cron line for "every day at 2 AM".
3. Why do you need retention?

## 10. References
- crontab guide: https://man7.org/linux/man-pages/man5/crontab.5.html (checked: 2026-09-18)
- Cron helper: https://crontab.guru/ (checked: 2026-09-18)
- Video: **Learn Linux TV** — "cron jobs" — https://www.youtube.com/c/LearnLinuxTV (checked: 2026-09-18)

---
**Remember:** Pack (`tar`), schedule (`cron`), and clean old copies (retention). Always test the restore.

<details><summary>Answers</summary>

1. Creates a compressed archive (one small file) from files/folders.
2. `0 2 * * * /path/to/script.sh`
3. So old backups do not fill the disk.
</details>
