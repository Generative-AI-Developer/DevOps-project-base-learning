---
id: linux-beginner-study-processes-and-services
track: linux
level: beginner
topic: Processes and services
forProject: linux-beginner-project-04
---

# Study: Processes and Services

> **Words to know**
> - **Process** — a running program. In simple words: a program that is working right now.
> - **PID** — process ID. A number that names one process.
> - **Service (daemon)** — a program that runs in the background all the time (like a web server).
> - **systemd / systemctl** — the tool that starts and stops services on most Linux systems.

## 1. Easy explanation (simple → deeper)
When you run a program, Linux makes a **process** for it. Each process has a number, the **PID**. You can list processes, and you can stop one if it is stuck.

Some programs run quietly in the background all the time. These are **services**. Example: a web server. You control services with **`systemctl`**.

## 2. Key concepts and terms
- **`ps`** — list processes.
- **`top` / `htop`** — live view of processes (like a task manager).
- **`kill`** — stop a process by its PID. `kill -9` forces it.
- **`systemctl status NAME`** — is a service running?
- **`systemctl start/stop/restart NAME`** — control a service (needs `sudo`).

## 3. Practical examples
- See top programs → `top` (press `q` to quit)
- Find a process → `ps aux | grep bash`
- Stop a process → `kill 1234` (1234 is the PID)
- Check a service → `systemctl status ssh`

## 4. Commands and config examples
```bash
ps aux                 # list all processes (a=all users, x=background too)
ps aux | grep nginx    # find processes with "nginx" in the name
top                    # live process view; press q to quit
kill 1234              # ask process 1234 to stop
kill -9 1234           # force process 1234 to stop
systemctl status ssh   # see if the ssh service runs
sudo systemctl restart ssh   # restart it (needs sudo)
```

## 5. Hands-on exercises
1. Run `ps aux | head`. Read the columns (USER, PID, COMMAND).
2. Run `top`. Watch it for 5 seconds. Press `q`.
3. Start a slow command in the background: `sleep 300 &`. Find its PID with `ps`. Stop it with `kill`.

## 6. Troubleshooting
- **Problem:** a program is frozen.
  **Fix:** find its PID (`ps aux | grep name`), then `kill PID`. If it will not stop, use `kill -9 PID`.
- **Problem:** `systemctl` says "access denied".
  **Fix:** start/stop needs root. Use `sudo`.

## 7. Common mistakes and how to avoid them
- Using `kill -9` first — try a normal `kill` first. `-9` is the last resort.
- Killing the wrong PID — check the name with `ps` before you kill.

## 8. Certification notes (what the exam wants)
- Kubernetes runs services with systemd on nodes (like `kubelet`). In the CKA exam you often run `systemctl status kubelet` and read logs with `journalctl -u kubelet`.
- Learn `journalctl -u NAME` to read a service's logs.

## 9. Practice questions and tasks
1. What is a PID?
2. How do you see if the `ssh` service is running?
3. What is the difference between `kill` and `kill -9`?

## 10. References
- systemd/systemctl docs: https://www.freedesktop.org/software/systemd/man/systemctl.html (checked: 2026-09-18)
- Video: **Learn Linux TV** — "systemd/systemctl" — https://www.youtube.com/c/LearnLinuxTV (checked: 2026-09-18)

---
**Remember:** `ps`/`top` list programs, `kill` stops one, `systemctl` controls services (with `sudo`).

<details><summary>Answers</summary>

1. A process ID — a number that names one running program.
2. `systemctl status ssh`.
3. `kill` politely asks to stop; `kill -9` forces it to stop now.
</details>
