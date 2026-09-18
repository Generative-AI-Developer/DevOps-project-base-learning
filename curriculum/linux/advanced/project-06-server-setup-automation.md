---
id: linux-advanced-project-06
track: linux
level: advanced
order: 6
title: "Automate Full Server Setup (Linux Track Boss)"
prereqs: ["linux-advanced-project-05"]
skills: ["idempotent scripting", "provisioning", "users/packages/firewall/backups", "logging"]
certDomains: ["CKA/CKS: automation & desired state (foundation)"]
estimatedTime: "2–3 hours"
---

# Automate Full Server Setup (Linux Track Boss 🏆🏆)

**Status:** 🔒 Locked

This is the **final Linux project**. Finish it to complete the **whole Linux track**. You will combine everything you learned. After this, you are ready for Docker.

## 1. Objective
Write one idempotent script that provisions a server: creates a user, installs tools, sets up a firewall, and schedules a backup — safely, and safe to run twice.

## 2. Real-world scenario
Your team gets new servers often. Setting them up by hand is slow and full of mistakes. Your job: **one script** that sets up a server correctly, every time. This is the start of real DevOps automation.

## 3. Skills and concepts you will learn
- Idempotent provisioning (check-then-act).
- Combine users, packages, firewall, and backups.
- Strict mode + logging.
- Think in "desired state" (the foundation for Kubernetes).

## 4. Prerequisites
- Advanced Projects 1–5 completed.
- Read: `study/linux/advanced/06-automated-admin.md`.
- This uses everything from the Linux track. Reuse what you built.

## 5. Step-by-step requirements
Write `setup-server.sh` (with `set -euo pipefail` and logging) that is **idempotent** and does:
1. **Config block at the top:** a username, a list of packages, and a backup source folder.
2. **User:** create the user only if it does not exist.
3. **Packages:** install each tool only if missing (loop over the list).
4. **Firewall:** ensure ufw allows 22, 80, 443 (allow rules are naturally idempotent).
5. **Backup:** copy your backup script into place and add a daily cron line only if it is not already there.
6. **Log** every step with a timestamp to `~/setup.log`.
7. Run the script **twice**. The second run must not error and must not duplicate anything.

## 6. Tasks / challenges
- [ ] Config block at the top.
- [ ] User created only if missing.
- [ ] Packages installed only if missing (loop).
- [ ] Firewall rules ensured.
- [ ] Cron backup line added only once.
- [ ] Runs twice with no error and no duplicates.

## 7. Expected outcome
`./setup-server.sh` sets up the whole server. Running it again changes nothing and errors nothing. The log shows what happened.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Script starts with `set -euo pipefail` and has a clear config block.
2. User step is idempotent (uses `id user || useradd ...`). Show the line.
3. Package step loops and installs only if missing (`command -v ... || apt install`). Show the loop.
4. Firewall step ensures 22/80/443 are allowed.
5. Cron backup line is added only once (uses `crontab -l | grep -q ... ||`). Prove the second run does not add a duplicate (`crontab -l`).
6. You run it **twice** and show that the second run has no errors and no duplicate cron lines.
7. `~/setup.log` shows timestamped steps.

## 9. Verification checklist
- [ ] Idempotent user, packages, firewall, cron.
- [ ] Second run clean (no errors, no duplicates).
- [ ] Logged with timestamps.
- [ ] Evidence saved in `submissions/linux/advanced/project-06/`.

## 10. Common mistakes
- Non-idempotent steps — second run errors or duplicates the cron line.
- No logging.
- Not testing the second run (this is the main test!).

## 11. Hints
<details><summary>Hint 1</summary>Idempotent cron add: `( crontab -l 2>/dev/null | grep -q backup.sh ) || ( crontab -l 2>/dev/null; echo "0 2 * * * $HOME/backup.sh" ) | crontab -`.</details>
<details><summary>Hint 2</summary>Idempotent user: `id "$USERNAME" >/dev/null 2>&1 || sudo useradd -m "$USERNAME"`.</details>
<details><summary>Hint 3</summary>Packages: `for p in "${PACKAGES[@]}"; do command -v "$p" >/dev/null || sudo apt install -y "$p"; done`.</details>

## 12. Final challenge
Add a `--check` mode: if the script is run as `./setup-server.sh --check`, it only **reports** what it *would* do (user exists? packages present? cron set?) without changing anything. This is like a "dry run" — a real DevOps feature.

## 13. What to submit (evidence)
Save `setup-server.sh`, the output of **both** runs, `crontab -l`, and `cat ~/setup.log` in `submissions/linux/advanced/project-06/`. Then say: **"I submit Linux Advanced Project 6."**

When it passes, you complete the **entire Linux track**! 🎉🎉 You are ready for Docker.

---
**Remember:** Idempotent automation = safe to repeat. Declaring a desired state and making it true is exactly how Kubernetes thinks.
