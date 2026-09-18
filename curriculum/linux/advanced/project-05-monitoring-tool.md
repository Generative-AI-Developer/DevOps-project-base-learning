---
id: linux-advanced-project-05
track: linux
level: advanced
order: 5
title: "Build a Monitoring and Alert Tool"
prereqs: ["linux-advanced-project-04"]
skills: ["metrics collection", "thresholds", "alerts", "service checks", "logging"]
certDomains: ["CKA: monitoring / kubectl top (foundation)"]
estimatedTime: "90 minutes"
---

# Build a Monitoring and Alert Tool

**Status:** 🔒 Locked

## 1. Objective
Write a monitoring script that collects CPU, memory, and disk metrics, checks a service, compares to thresholds, and alerts + logs.

## 2. Real-world scenario
Your team has no monitoring yet. Before buying a big tool, they want a simple check that runs every 5 minutes and warns when CPU, memory, or disk gets high, or when a key service stops.

## 3. Skills and concepts you will learn
- Collect metrics as numbers.
- Compare to thresholds.
- Check a service is active.
- Alert and log with timestamps.
- Schedule with cron.

## 4. Prerequisites
- Advanced Project 4 completed.
- Read: `study/linux/advanced/05-monitoring.md`.

## 5. Step-by-step requirements
1. Write `monitor.sh` that:
   - collects CPU %, memory %, and disk % (of `/`),
   - checks that a service (e.g. `ssh`) is active,
   - alerts (prints + logs) if any metric is over 80%, or the service is not active,
   - always logs a timestamped line to `~/monitor.log`.
2. Run it and show the log.
3. Set a **low** threshold on purpose (like 1%) to prove the alert fires. Show it.
4. Add a cron line to run it every 5 minutes.

## 6. Tasks / challenges
- [ ] Collects 3 metrics as numbers.
- [ ] Checks a service status.
- [ ] Alerts when over threshold.
- [ ] Logs a timestamped line every run.
- [ ] Cron line runs it every 5 minutes.

## 7. Expected outcome
`./monitor.sh` writes a timestamped health line and alerts when limits are passed. Cron runs it every 5 minutes.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the full `monitor.sh`.
2. It collects CPU %, memory %, disk % as real numbers (show a run).
3. It checks a service with `systemctl is-active` (show the line).
4. With a low threshold, the ALERT clearly fires (show that run).
5. `~/monitor.log` has timestamped lines (show `cat ~/monitor.log`).
6. `crontab -l` shows a `*/5 * * * *` line for the script.

## 9. Verification checklist
- [ ] 3 metrics + service check.
- [ ] Alert proven to fire.
- [ ] Timestamped log.
- [ ] Cron every 5 min.
- [ ] Evidence saved in `submissions/linux/advanced/project-05/`.

## 10. Common mistakes
- Number compare with `>` instead of `-gt`.
- Empty metric because of wrong parsing — print raw output first, then fix.
- No timestamp in the log.

## 11. Hints
<details><summary>Hint 1</summary>Use the metric commands from `study/linux/advanced/05-monitoring.md`, section 3.</details>
<details><summary>Hint 2</summary>Service check: `if [ "$(systemctl is-active ssh)" != "active" ]; then echo "ALERT ssh down"; fi`.</details>
<details><summary>Hint 3</summary>Threshold check: `if [ "$DISK" -gt "$LIMIT" ]; then echo "ALERT disk ${DISK}%"; fi`. Set `LIMIT=1` to force the alert during testing.</details>

## 12. Final challenge
Add a "recovery" idea: keep a small state file. Only alert when a metric **first** goes over the limit (not every run), and log "recovered" when it goes back under. (This reduces alert spam — a real monitoring feature.)

## 13. What to submit (evidence)
Save the script, a normal run, an alert run, `cat ~/monitor.log`, and `crontab -l` in `submissions/linux/advanced/project-05/`. Then say: **"I submit Linux Advanced Project 5."**

---
**Remember:** Collect, compare, alert, log. This tiny tool teaches the same idea as Prometheus.
