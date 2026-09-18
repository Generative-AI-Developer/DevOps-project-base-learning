---
id: linux-intermediate-project-02
track: linux
level: intermediate
order: 2
title: "Build a Log Monitor with Alerts"
prereqs: ["linux-intermediate-project-01"]
skills: ["tail", "grep", "journalctl", "simple alert script"]
certDomains: ["CKA: troubleshooting (foundation)"]
estimatedTime: "60 minutes"
---

# Build a Log Monitor with Alerts

**Status:** 🔒 Locked

## 1. Objective
Write a script that reads a log, counts problem lines (like "error"), and prints an alert if it finds any.

## 2. Real-world scenario
A server had a problem last night. The manager says: *"Watch the logs. If you see errors, tell me."* You cannot stare at the screen all day. So you write a script that checks for you.

## 3. Skills and concepts you will learn
- Read logs with `tail` and `journalctl`.
- Filter with `grep -i`.
- Count matches and make a simple alert.
- Accept a search word as an argument.

## 4. Prerequisites
- Intermediate Project 1 completed.
- Read: `study/linux/intermediate/02-log-monitoring.md`.

## 5. Step-by-step requirements
1. Write `watch-log.sh` that:
   - takes one argument: the word to search (default `error`),
   - counts matching lines (ignore case) in a log file,
   - prints the count, and prints `ALERT` if the count is more than 0.
2. Test it on `/var/log/syslog` (or `journalctl` output saved to a file).
3. Show the last 20 lines of the log too.
4. Run the script with a custom word (like `fail`).

## 6. Tasks / challenges
- [ ] Script counts matching lines with `grep -ic`.
- [ ] Script uses a default word if none is given.
- [ ] Script prints an ALERT when count > 0.
- [ ] You test it with two different words.

## 7. Expected outcome
`./watch-log.sh error` prints how many error lines are in the log, and alerts if there are any.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the full `watch-log.sh`.
2. The script uses a default word (so running with no argument still works). Show both runs.
3. The count uses case-insensitive matching (`grep -i`). Show a run.
4. When count > 0, the script prints an ALERT line.
5. You show the log source (e.g. last 20 lines of `/var/log/syslog` or a saved `journalctl` file).
6. You test at least two search words.

## 9. Verification checklist
- [ ] Default word works.
- [ ] Case-insensitive count works.
- [ ] ALERT prints when needed.
- [ ] Evidence saved in `submissions/linux/intermediate/project-02/`.

## 10. Common mistakes
- Forgetting `-i` in grep — you miss "Error".
- Using `-c` wrong — `grep -ic word file` gives the count.
- Reading a log with no permission — use `sudo` or save `journalctl` to a file first.

## 11. Hints
<details><summary>Hint 1</summary>Default argument: `WORD="${1:-error}"`.</details>
<details><summary>Hint 2</summary>`COUNT=$(grep -ic "$WORD" "$LOG")`. Then `if [ "$COUNT" -gt 0 ]; then echo "ALERT"; fi`.</details>
<details><summary>Hint 3 (almost the answer)</summary>See the `watch-log.sh` example in `study/linux/intermediate/02-log-monitoring.md`, section 4.</details>

## 12. Final challenge
Make the script also save a report line to `~/log-report.txt` with the date, the word, and the count, each time it runs. (Tip: `echo "$(date) $WORD $COUNT" >> ~/log-report.txt`.)

## 13. What to submit (evidence)
Save the script + your test runs in `submissions/linux/intermediate/project-02/`. Then say: **"I submit Linux Intermediate Project 2."**

---
**Remember:** Filter with `grep -i`, count with `-c`, and alert on problems. Logs are your first stop in troubleshooting.
