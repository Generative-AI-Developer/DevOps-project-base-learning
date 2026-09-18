---
id: linux-intermediate-project-03
track: linux
level: intermediate
order: 3
title: "Run Your Program as a Service"
prereqs: ["linux-intermediate-project-02"]
skills: ["systemd unit files", "systemctl", "enable on boot", "journalctl"]
certDomains: ["CKA: node services / kubelet (foundation)"]
estimatedTime: "60–90 minutes"
---

# Run Your Program as a Service

**Status:** 🔒 Locked

## 1. Objective
Write your own systemd service. Make Linux run your script in the background and start it on boot.

## 2. Real-world scenario
You wrote a small program that must run all the time. If it stops, it should restart by itself. And it must start when the server boots. The right tool for this is a **systemd service**.

## 3. Skills and concepts you will learn
- Write a `.service` unit file.
- `daemon-reload`, `start`, `status`, `enable`.
- Auto-restart with `Restart=always`.
- Read service logs with `journalctl`.

## 4. Prerequisites
- Intermediate Project 2 completed.
- Read: `study/linux/intermediate/03-systemd-services.md`.
- ⚠️ This uses `sudo`. You are editing system files. Go slow and read each step.

## 5. Step-by-step requirements
1. Write `hello-loop.sh` (runnable): print the time every 10 seconds, forever.
2. Write `/etc/systemd/system/hello.service` to run it, with `Restart=always`.
3. `daemon-reload`, then `start`, then `status` (must show "active (running)").
4. Watch logs: `journalctl -u hello` (show a few lines).
5. `enable` it so it would start on boot.
6. Then `stop` and `disable` it to clean up (leave your system tidy).

## 6. Tasks / challenges
- [ ] Script runs a loop and prints the time.
- [ ] Unit file is correct (full path in `ExecStart`).
- [ ] Service shows "active (running)".
- [ ] Logs show the time messages.
- [ ] You enabled, then cleaned up (stop + disable).

## 7. Expected outcome
Your service runs your script in the background, logs messages, and could start on boot. You can start, check, and stop it.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste `hello-loop.sh` and the `hello.service` unit file.
2. `systemctl status hello` output shows **active (running)**.
3. `journalctl -u hello` shows at least 2 time messages from your script.
4. The unit has `Restart=always`.
5. You show `systemctl enable hello` worked, and then you cleaned up with `stop` + `disable`.
6. You explain in one sentence why `daemon-reload` is needed.

## 9. Verification checklist
- [ ] Service was active and logging.
- [ ] Restart=always is present.
- [ ] Cleaned up after.
- [ ] Evidence saved in `submissions/linux/intermediate/project-03/`.

## 10. Common mistakes
- Wrong path in `ExecStart` — service fails. Use the full path.
- Script not runnable — `chmod +x`.
- Forgetting `daemon-reload` after editing the unit.

## 11. Hints
<details><summary>Hint 1</summary>Copy the unit and script from the study doc, section 3–4. Fix the path in `ExecStart` to your real home path.</details>
<details><summary>Hint 2</summary>Order: write files → `sudo systemctl daemon-reload` → `sudo systemctl start hello` → `systemctl status hello`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
# hello-loop.sh
#!/bin/bash
while true; do echo "Hello at $(date)"; sleep 10; done
```
Put it at `/home/you/hello-loop.sh`, `chmod +x` it, set that full path in the unit's `ExecStart`.
</details>

## 12. Final challenge
Break it on purpose: put a wrong path in `ExecStart`. Reload and start. Read `systemctl status` and `journalctl` to see the error. Then fix it. This is real troubleshooting practice.

## 13. What to submit (evidence)
Save the script, the unit file, the `status` output, and log lines in `submissions/linux/intermediate/project-03/`. Then say: **"I submit Linux Intermediate Project 3."**

---
**Remember:** unit → `daemon-reload` → `start` → `enable`. This is exactly how `kubelet` runs in CKA.
