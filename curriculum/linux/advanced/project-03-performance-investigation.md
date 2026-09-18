---
id: linux-advanced-project-03
track: linux
level: advanced
order: 3
title: "Investigate a Slow Server"
prereqs: ["linux-advanced-project-02"]
skills: ["top", "uptime/load", "free", "vmstat", "ps sort", "root-cause thinking"]
certDomains: ["CKA: troubleshooting (foundation)"]
estimatedTime: "60–90 minutes"
---

# Investigate a Slow Server

**Status:** 🔒 Locked

## 1. Objective
Learn to find the cause of a slow machine: CPU, memory, disk, or one bad process.

## 2. Real-world scenario
Users complain the server is slow. You must find the real cause and report it — not just guess. This is a top skill for CKA troubleshooting and real jobs.

## 3. Skills and concepts you will learn
- Read load average vs CPU count.
- Check memory and swap.
- Read `vmstat` columns.
- Find the top CPU and memory processes.
- Make a load on purpose and see it in the tools.

## 4. Prerequisites
- Advanced Project 2 completed.
- Read: `study/linux/advanced/03-performance-investigation.md`.

## 5. Step-by-step requirements
1. Record a baseline: `uptime`, `nproc`, `free -h`.
2. Create CPU load on purpose. In another terminal run:
   `for i in $(seq 1 $(nproc)); do yes > /dev/null & done`
   (This makes your CPUs busy. Remember the PIDs.)
3. Now look at `uptime` (load rises), `top` (busy processes), and `ps aux --sort=-%cpu | head`.
4. Stop the load: `kill %1 %2 ...` or `pkill yes`.
5. Confirm load goes back down.
6. Write a short "diagnosis": what the tools showed, and how you knew it was CPU.

## 6. Tasks / challenges
- [ ] Baseline recorded.
- [ ] CPU load created and seen in `top`/load.
- [ ] Top CPU process identified as `yes`.
- [ ] Load stopped and returns to normal.
- [ ] Diagnosis written.

## 7. Expected outcome
You created a CPU problem, found it with the tools, fixed it, and explained your reasoning.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. Baseline `uptime`, `nproc`, `free -h` shown.
2. After making load, `uptime` shows a clearly higher load average (near or above `nproc`).
3. `ps aux --sort=-%cpu | head` (or `top`) shows `yes` as a top CPU user.
4. You stopped the load (`pkill yes`) and show load dropping back.
5. Your diagnosis correctly says the cause was CPU and explains how you knew.
6. All commands and outputs shown.

## 9. Verification checklist
- [ ] Load rose and fell.
- [ ] Bad process identified.
- [ ] Diagnosis is correct.
- [ ] Evidence saved in `submissions/linux/advanced/project-03/`.

## 10. Common mistakes
- Forgetting to stop the `yes` processes — they keep your CPU busy. Use `pkill yes`.
- Reading only `top` — also check load average and memory.

## 11. Hints
<details><summary>Hint 1</summary>`nproc` tells you how many CPUs. Load near that number means "fully busy".</details>
<details><summary>Hint 2</summary>Start load: `for i in $(seq 1 $(nproc)); do yes > /dev/null & done`. Stop it: `pkill yes`.</details>
<details><summary>Hint 3</summary>Diagnosis: "Load rose to ~N (my CPU count). `top` showed `yes` at ~100% CPU each. Memory was fine. So the cause was CPU."</details>

## 12. Final challenge
Now make a **memory** problem instead: run a small script that keeps adding to an array, and watch `free -h` and swap grow. Then stop it. Explain how a memory problem looks different from a CPU problem.

## 13. What to submit (evidence)
Save baseline, loaded outputs, the fix, and your diagnosis in `submissions/linux/advanced/project-03/`. Then say: **"I submit Linux Advanced Project 3."**

---
**Remember:** Find the cause before you fix. CPU, memory, disk, or one bad process — check each.
