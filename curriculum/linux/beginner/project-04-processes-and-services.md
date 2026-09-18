---
id: linux-beginner-project-04
track: linux
level: beginner
order: 4
title: "Watch and Control Running Programs"
prereqs: ["linux-beginner-project-03"]
skills: ["ps", "top", "kill", "systemctl", "journalctl"]
certDomains: ["CKA: node services (foundation)"]
estimatedTime: "45–60 minutes"
---

# Watch and Control Running Programs

**Status:** 🔒 Locked (unlocks after Project 3)

## 1. Objective
Learn to list running programs, stop a stuck one, and check a system service.

## 2. Real-world scenario
A program is stuck and using all the CPU. The server is slow. Your job: find that program and stop it. Also, check that the SSH service (which lets people log in) is running.

## 3. Skills and concepts you will learn
- List processes (`ps`, `top`).
- Stop a process (`kill`).
- Check a service (`systemctl status`).
- Read a service's logs (`journalctl`).

## 4. Prerequisites
- Project 3 completed.
- Read: `study/linux/beginner/04-processes-and-services.md`.

## 5. Step-by-step requirements
1. Start a fake long job in the background: `sleep 600 &`.
2. Find its PID with `ps`.
3. Stop that job with `kill`.
4. Show `top` output (a screenshot or the top few lines is fine).
5. Check the status of the `ssh` (or `sshd`) service with `systemctl status`.
6. Show the last log lines of that service with `journalctl -u ssh --no-pager | tail`.

## 6. Tasks / challenges
- [ ] Start `sleep 600 &` and get its PID.
- [ ] Kill that PID and prove it is gone (`ps` shows nothing).
- [ ] Capture `top` (a few lines).
- [ ] Show `systemctl status` for ssh.
- [ ] Show some `journalctl` log lines for ssh.

## 7. Expected outcome
You started a background job, found it, and stopped it. You can show the SSH service status and its logs.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show the `sleep` PID from `ps` output.
2. After `kill`, `ps aux | grep sleep` shows the job is gone (only the grep line, or nothing).
3. You show `top` output (a few lines).
4. You show `systemctl status ssh` (or `sshd`) — active or inactive is fine, just show it.
5. You show at least 3 log lines from `journalctl -u ssh`.
6. You show all commands and output.

## 9. Verification checklist
- [ ] The background job was found and killed.
- [ ] Service status and logs are shown.
- [ ] Evidence saved in `submissions/linux/beginner/project-04/`.

## 10. Common mistakes
- Killing the grep line's PID instead of the sleep PID — read carefully.
- Wrong service name — try both `ssh` and `sshd`.
- Using `kill -9` first — try normal `kill` first.

## 11. Hints
<details><summary>Hint 1</summary>Find the PID: `ps aux | grep sleep`. The number in the second column is the PID.</details>
<details><summary>Hint 2</summary>`kill <PID>`. Then check again with `ps aux | grep sleep`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
sleep 600 &
ps aux | grep sleep          # note the PID (2nd column)
kill <PID>
ps aux | grep sleep          # gone now
top | head -n 12
systemctl status ssh || systemctl status sshd
journalctl -u ssh --no-pager | tail -n 5
```
</details>

## 12. Final challenge
Find which running process uses the most memory. (Tip: `ps aux --sort=-%mem | head`.)

## 13. What to submit (evidence)
Save commands + output in `submissions/linux/beginner/project-04/`. Then say: **"I submit Linux Beginner Project 4."**

---
**Remember:** `ps`/`top` to find, `kill` to stop, `systemctl`/`journalctl` for services.
