---
id: linux-advanced-study-performance-investigation
track: linux
level: advanced
topic: Finding performance problems
forProject: linux-advanced-project-03
---

# Study: Performance Investigation

> **Words to know**
> - **CPU** — the "brain" that does the work.
> - **Memory (RAM)** — fast short-term storage for running programs.
> - **Load average** — how busy the machine is (3 numbers: 1, 5, 15 minutes).
> - **I/O** — reading and writing to disk.

## 1. Easy explanation (simple → deeper)
"The server is slow." Why? You must find the cause. There are four common suspects:
1. **CPU** — too much work.
2. **Memory** — not enough RAM (then it uses slow swap).
3. **Disk I/O** — slow reads/writes.
4. **A single bad process** — one program eating everything.

You use tools to look at each one.

## 2. Key concepts and terms
- **`top` / `htop`** — live view; sort by CPU or memory.
- **`uptime`** — load average. If load is higher than your CPU count for a long time, the machine is overloaded.
- **`free -h`** — memory use. Watch "available" and "swap".
- **`vmstat 1`** — CPU, memory, and swap over time.
- **`iostat`** / **`iotop`** — disk activity.
- **`ps aux --sort=-%cpu`** — top CPU users.
- **`strace -p PID`** — see what a process is doing (system calls).

## 3. Practical examples
- Load → `uptime`
- Top CPU users → `ps aux --sort=-%cpu | head`
- Top memory users → `ps aux --sort=-%mem | head`
- Memory + swap → `free -h`
- Live system → `vmstat 1 5` (5 samples, 1 second apart)

## 4. Commands and config examples
```bash
uptime                       # load average (1, 5, 15 min)
nproc                        # how many CPUs you have
free -h                      # memory and swap
vmstat 1 5                   # system stats, 5 times
ps aux --sort=-%cpu | head   # biggest CPU users
ps aux --sort=-%mem | head   # biggest memory users
iostat -xz 1 3               # disk I/O (needs the sysstat package)
```

## 5. Hands-on exercises
1. Check `uptime` and `nproc`. Is load high compared to CPU count?
2. Find the top 5 CPU users and top 5 memory users.
3. Run `vmstat 1 5` and read the `us` (user CPU) and `wa` (I/O wait) columns.

## 6. Troubleshooting
- **High load + high `wa`** → disk I/O is the bottleneck.
- **Low free memory + high swap** → not enough RAM; the machine is swapping (slow).
- **One process at ~100% CPU** → that process is the problem; investigate or restart it.

## 7. Common mistakes and how to avoid them
- Looking at only one tool — check CPU, memory, and disk before deciding.
- Restarting blindly — first find the cause, or it comes back.

## 8. Certification notes (what the exam wants)
- Troubleshooting is huge in CKA. The same method (check CPU/mem/disk/process) helps you debug slow nodes.
- Learn to read `top`, `free`, and load average fast.

## 9. Practice questions and tasks
1. What is load average?
2. Which column in `vmstat` shows I/O wait?
3. How do you find the top memory-using process?

## 10. References
- Brendan Gregg — Linux performance: https://www.brendangregg.com/linuxperf.html (checked: 2026-09-18)
- Video: **Learn Linux TV** — "Linux performance" — https://www.youtube.com/c/LearnLinuxTV (checked: 2026-09-18)

---
**Remember:** Slow server? Check CPU, memory, disk I/O, and top processes — in that order.

<details><summary>Answers</summary>

1. How busy the machine is over 1, 5, and 15 minutes.
2. The `wa` column.
3. `ps aux --sort=-%mem | head`.
</details>
