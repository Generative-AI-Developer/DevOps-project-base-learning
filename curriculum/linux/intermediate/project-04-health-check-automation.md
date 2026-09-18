---
id: linux-intermediate-project-04
track: linux
level: intermediate
order: 4
title: "Automate a Server Health Check"
prereqs: ["linux-intermediate-project-03"]
skills: ["bash functions", "exit codes", "logging", "df/free/awk", "cron"]
certDomains: ["CKA: node health checks (foundation)"]
estimatedTime: "60–90 minutes"
---

# Automate a Server Health Check

**Status:** 🔒 Locked

## 1. Objective
Write a clean bash script with functions that checks server health (disk and memory), logs the result, and can run on a schedule.

## 2. Real-world scenario
Servers fill up and slow down. Your team wants an automatic check every hour that writes a health report and warns when disk or memory is high. This saves you from surprise outages.

## 3. Skills and concepts you will learn
- Write and use **functions**.
- Check **disk** (`df`) and **memory** (`free`).
- Use **exit codes** to decide pass/warn.
- **Log** timed messages.
- Schedule with **cron**.

## 4. Prerequisites
- Intermediate Project 3 completed.
- Read: `study/linux/intermediate/04-bash-automation.md`.

## 5. Step-by-step requirements
1. Write `health-check.sh` with:
   - a `log()` function that writes timed lines to `~/health.log`,
   - a `check_disk()` function: warn if `/` use is over 80%,
   - a `check_mem()` function: warn if used memory is over 80%,
   - a final summary line: `Health OK` or `Health needs attention`.
2. Run it by hand. Show `~/health.log`.
3. Add a cron line to run it every hour. Show `crontab -l`.

## 6. Tasks / challenges
- [ ] Script uses at least 2 functions.
- [ ] Disk check works (uses `df` + `awk`).
- [ ] Memory check works (uses `free`).
- [ ] Timed log lines are written to `~/health.log`.
- [ ] A cron line runs it hourly.

## 7. Expected outcome
`./health-check.sh` writes a timed health report and says OK or needs attention. Cron runs it every hour.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the full `health-check.sh`.
2. The script defines and uses at least **2 functions** (like `check_disk`, `check_mem`).
3. `~/health.log` shows timed lines from a run (show `cat ~/health.log`).
4. The script prints a final summary (`Health OK` or `Health needs attention`).
5. `crontab -l` shows an hourly line for the script.
6. You explain in one sentence why logging is useful.

## 9. Verification checklist
- [ ] Functions used.
- [ ] Disk and memory checked.
- [ ] Log file has timed lines.
- [ ] Cron line shown.
- [ ] Evidence saved in `submissions/linux/intermediate/project-04/`.

## 10. Common mistakes
- Comparing numbers with `>` instead of `-gt`.
- Leaving the `%` sign in the disk number (remove it with `tr -d '%'`).
- Calling a function before defining it.

## 11. Hints
<details><summary>Hint 1</summary>Get disk use: `df / | awk 'NR==2 {print $5}' | tr -d '%'`.</details>
<details><summary>Hint 2</summary>Get memory use percent: `free | awk '/Mem:/ {printf "%d", $3/$2*100}'`.</details>
<details><summary>Hint 3 (almost the answer)</summary>Start from the `check_disk` example in `study/linux/intermediate/04-bash-automation.md`, section 3. Add a `check_mem` function the same way.</details>

## 12. Final challenge
Add a third check: warn if there are more than 200 processes (`ps -e --no-headers | wc -l`). Log the number.

## 13. What to submit (evidence)
Save the script, a run, `cat ~/health.log`, and `crontab -l` in `submissions/linux/intermediate/project-04/`. Then say: **"I submit Linux Intermediate Project 4."**

---
**Remember:** Functions + exit codes + logging = clean automation. This is how real monitoring starts.
