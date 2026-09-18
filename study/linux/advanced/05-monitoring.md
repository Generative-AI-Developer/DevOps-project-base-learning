---
id: linux-advanced-study-monitoring
track: linux
level: advanced
topic: Monitoring and alerting basics
forProject: linux-advanced-project-05
---

# Study: Monitoring and Alerting

> **Words to know**
> - **Metric** — a number that shows health, like CPU %, memory %, disk %.
> - **Threshold** — a limit. If a metric passes it, you alert.
> - **Alert** — a warning message when something is wrong.
> - **Uptime** — how long a service has been running without stopping.

## 1. Easy explanation (simple → deeper)
Monitoring means: **watch the system all the time, and warn early**. You collect **metrics**, compare them to **thresholds**, and send an **alert** when needed.

Real teams use tools like Prometheus and Grafana. But the idea is simple, and you can build a tiny version yourself with bash: collect numbers, check limits, log and alert.

## 2. Key concepts and terms
- **Collect:** CPU, memory, disk, and service status.
- **Compare:** is the value over the threshold?
- **Alert:** print/log a clear message (real teams send email/Slack).
- **Schedule:** run the check often with cron or a loop.
- **Service check:** is a service active? `systemctl is-active NAME`.

## 3. Practical examples
```bash
CPU=$(top -bn1 | awk '/Cpu\(s\)/ {print 100 - $8}')   # used CPU %
MEM=$(free | awk '/Mem:/ {printf "%d", $3/$2*100}')    # used memory %
DISK=$(df / | awk 'NR==2 {print $5}' | tr -d '%')      # used disk %
echo "CPU=$CPU% MEM=$MEM% DISK=$DISK%"
```

## 4. Commands and config examples
```bash
systemctl is-active ssh        # "active" or "inactive"
uptime -p                      # pretty uptime
free | awk '/Mem:/ {printf "%d\n", $3/$2*100}'   # memory percent
df -h                          # disk use, human readable
```

## 5. Hands-on exercises
1. Get CPU %, memory %, and disk % as numbers.
2. Check if `ssh` is active with `systemctl is-active`.
3. Print an alert if disk % is over a limit you choose.

## 6. Troubleshooting
- **Problem:** metric is empty.
  **Fix:** the parsing command is wrong for your system. Print the raw command output first, then fix the `awk`.
- **Problem:** alert never fires.
  **Fix:** your threshold is too high, or the compare uses `>` instead of `-gt`.

## 7. Common mistakes and how to avoid them
- Comparing numbers with `>` (string compare) instead of `-gt`.
- No logging — you cannot see history. Always log with a timestamp.
- Alerting on tiny spikes — use a sensible threshold.

## 8. Certification notes (what the exam wants)
- Kubernetes has monitoring too (metrics-server, Prometheus). The idea is the same: collect metrics, set thresholds, alert.
- For CKA, `kubectl top nodes/pods` shows metrics — same concept.

## 9. Practice questions and tasks
1. What is a threshold?
2. How do you check if a service is active?
3. Why log metrics with a timestamp?

## 10. References
- Prometheus overview (concept): https://prometheus.io/docs/introduction/overview/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Monitoring with Prometheus" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Monitoring = collect metrics, compare to thresholds, alert early, and log everything.

<details><summary>Answers</summary>

1. A limit; if a metric passes it, you alert.
2. `systemctl is-active NAME`.
3. So you can see history and trends, not just this moment.
</details>
