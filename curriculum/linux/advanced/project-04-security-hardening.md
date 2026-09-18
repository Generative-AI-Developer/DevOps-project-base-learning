---
id: linux-advanced-project-04
track: linux
level: advanced
order: 4
title: "Harden a Server"
prereqs: ["linux-advanced-project-03"]
skills: ["ssh keys", "sshd_config", "sudo/least privilege", "updates", "audit"]
certDomains: ["CKS: system hardening (foundation)"]
estimatedTime: "90 minutes"
---

# Harden a Server

**Status:** 🔒 Locked

## 1. Objective
Make a Linux server safer: set up SSH keys, tighten the SSH config, check sudo access, and run updates. Then write a short hardening report.

## 2. Real-world scenario
A new server will go online next week. Security says: *"Harden it first."* You must close weak points before attackers find them.

## 3. Skills and concepts you will learn
- Create and use SSH keys.
- Safely change `sshd_config` (root login, password auth).
- Check who has sudo (least privilege).
- Keep the system updated.
- Write a hardening checklist/report.

## 4. Prerequisites
- Advanced Project 3 completed.
- Read: `study/linux/advanced/04-security-hardening.md`.
- ⚠️ Practice on your **own** machine or a test VM. Do not lock yourself out. Test key login BEFORE turning off passwords.

## 5. Step-by-step requirements
1. Make an SSH key pair with `ssh-keygen -t ed25519`. Show the two files (`ls -l ~/.ssh`).
2. In a **copy** of the SSH config (`sudo cp /etc/ssh/sshd_config ~/sshd_config.demo`), set:
   - `PermitRootLogin no`
   - `PasswordAuthentication no`
   Show the changed lines. (Editing the copy keeps you safe.)
3. List who can use sudo: `getent group sudo`.
4. Run updates: `sudo apt update` (and `upgrade` if you want).
5. Write a **hardening report**: 5 things you checked, and their status (done / to-do).

## 6. Tasks / challenges
- [ ] SSH key pair created.
- [ ] SSH config copy shows the two hardening lines.
- [ ] Sudo group members listed.
- [ ] Updates run.
- [ ] A 5-point hardening report written.

## 7. Expected outcome
You have keys, a safer SSH config (in a demo copy), a view of sudo access, an updated system, and a clear report.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `ls -l ~/.ssh` shows a private key and a `.pub` key.
2. Your `~/sshd_config.demo` shows `PermitRootLogin no` and `PasswordAuthentication no` (show the lines with `grep`).
3. `getent group sudo` output shown.
4. `sudo apt update` output shown.
5. Your hardening report lists **5 checks** with a clear status for each.
6. You explain in one sentence why you must test key login before turning off passwords.

## 9. Verification checklist
- [ ] Keys created.
- [ ] Hardened config shown (in the demo copy).
- [ ] Sudo checked, updates run.
- [ ] Report has 5 points.
- [ ] Evidence saved in `submissions/linux/advanced/project-04/`.

## 10. Common mistakes
- Disabling password auth on the real live config before keys work → locked out. (That is why we use a demo copy here.)
- Too many sudo users.
- Skipping updates.

## 11. Hints
<details><summary>Hint 1</summary>Make the key: `ssh-keygen -t ed25519 -C "you@example.com"` (press Enter for defaults).</details>
<details><summary>Hint 2</summary>Edit the demo copy, then check: `grep -E "PermitRootLogin|PasswordAuthentication" ~/sshd_config.demo`.</details>
<details><summary>Hint 3</summary>Report format: a small table with columns Check / Status. Example rows: SSH keys / done, Root login / disabled (demo), Firewall / done in P2, Updates / done, Sudo users / reviewed.</details>

## 12. Final challenge
Install and enable **fail2ban** (`sudo apt install fail2ban`), then show `sudo systemctl status fail2ban`. Explain in one line what it protects against.

## 13. What to submit (evidence)
Save key listing, hardened config lines, sudo list, update output, and your report in `submissions/linux/advanced/project-04/`. Then say: **"I submit Linux Advanced Project 4."**

---
**Remember:** Keys not passwords, no direct root, least privilege, stay updated. Test before you lock things down.
