---
id: linux-intermediate-study-log-monitoring
track: linux
level: intermediate
topic: Reading and watching logs
forProject: linux-intermediate-project-02
---

# Study: Log Monitoring

> **Words to know**
> - **Log** — a file where programs write what they do. In simple words: a diary of the program.
> - **journald / journalctl** — the tool that reads systemd service logs.
> - **Follow** — watch a log live as new lines come (`tail -f`).
> - **Filter** — show only the lines you care about (`grep`).

## 1. Easy explanation (simple → deeper)
When something breaks, the answer is often in the **logs**. Logs are files that record events: errors, warnings, and normal messages.

Two big places for logs:
1. Text files in `/var/log/` (like `/var/log/syslog`).
2. The systemd journal, read with `journalctl`.

You learn to **read**, **follow**, and **filter** logs to find problems fast.

## 2. Key concepts and terms
- **`tail -f file`** — watch a log live (press Ctrl+C to stop).
- **`grep "error" file`** — show only lines with "error".
- **`grep -i`** — ignore big/small letters.
- **`journalctl -u NAME`** — logs for one service.
- **`journalctl -p err`** — only error-level messages.
- **`journalctl --since "10 min ago"`** — recent logs.

## 3. Practical examples
- Live watch → `sudo tail -f /var/log/syslog`
- Find errors → `grep -i error /var/log/syslog`
- Service logs → `journalctl -u ssh --no-pager | tail`
- Count errors → `grep -ic error /var/log/syslog`

## 4. Commands and config examples
```bash
sudo tail -n 50 /var/log/syslog        # last 50 lines
sudo tail -f /var/log/syslog           # live follow
grep -i "fail" /var/log/syslog         # find failures
journalctl -u ssh --since "1 hour ago" # recent ssh logs
journalctl -p err -b                   # errors since last boot
```
```bash
# a tiny log-watch alert script (watch-log.sh)
#!/bin/bash
LOG="/var/log/syslog"
WORD="${1:-error}"          # word to look for; default "error"
COUNT=$(grep -ic "$WORD" "$LOG")
echo "Found $COUNT lines with '$WORD' in $LOG"
if [ "$COUNT" -gt 0 ]; then
  echo "ALERT: check the log!"
fi
```

## 5. Hands-on exercises
1. Show the last 20 lines of `/var/log/syslog`.
2. Find all lines with "error" (ignore case).
3. Follow the log live for 10 seconds, then stop with Ctrl+C.
4. Show ssh service logs from the last hour.

## 6. Troubleshooting
- **Problem:** `Permission denied` reading `/var/log/syslog`.
  **Fix:** use `sudo`.
- **Problem:** No `/var/log/syslog` file.
  **Fix:** some systems use `/var/log/messages`, or only `journalctl`. Try `journalctl -xe`.

## 7. Common mistakes and how to avoid them
- Reading the whole huge log — filter with `grep` or use `tail`.
- Forgetting `-i` in grep — you miss "Error" vs "error".

## 8. Certification notes (what the exam wants)
- Troubleshooting is **30% of the CKA exam**. Reading logs fast is key.
- In Kubernetes you also use `kubectl logs POD` — same idea, different tool.
- Learn `journalctl -u kubelet` for node problems.

## 9. Practice questions and tasks
1. How do you watch a log live?
2. How do you show only error lines, ignoring case?
3. Which command shows logs for one service?

## 10. References
- journalctl docs: https://www.freedesktop.org/software/systemd/man/journalctl.html (checked: 2026-09-18)
- Video: **Learn Linux TV** — "journalctl" — https://www.youtube.com/c/LearnLinuxTV (checked: 2026-09-18)

---
**Remember:** `tail -f` to watch, `grep -i` to filter, `journalctl -u` for services. Logs tell you what broke.

<details><summary>Answers</summary>

1. `tail -f file`.
2. `grep -i error file`.
3. `journalctl -u SERVICENAME`.
</details>
