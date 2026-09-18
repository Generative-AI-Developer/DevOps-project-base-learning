---
id: linux-intermediate-project-06
track: linux
level: intermediate
order: 6
title: "Build a Log Analyzer (Level Boss)"
prereqs: ["linux-intermediate-project-05"]
skills: ["grep", "sed", "awk", "sort/uniq", "pipes", "reporting"]
certDomains: ["CKA: log analysis (foundation)"]
estimatedTime: "90 minutes"
---

# Build a Log Analyzer (Level Boss 🏆)

**Status:** 🔒 Locked

This is the **last project** of Linux Intermediate. Finish it to complete the level and unlock Linux Advanced.

## 1. Objective
Use grep, sed, and awk together to analyze a log file. Make a small report: top items, error counts, and a cleaned output.

## 2. Real-world scenario
Your web server made a big access log. The manager asks: *"Which IP visited most? How many errors? Give me a short report."* You must turn a huge messy log into clear answers.

## 3. Skills and concepts you will learn
- Pull columns with `awk`.
- Count and rank with `sort | uniq -c | sort -nr`.
- Filter with `grep`.
- Clean text with `sed`.
- Put it all in one script that prints a report.

## 4. Prerequisites
- Intermediate Project 5 completed.
- Read: `study/linux/intermediate/06-text-processing.md`.

## 5. Step-by-step requirements
1. Make a sample log file `access.log` (I give you sample lines in Hint 1), or use a real one.
2. Write `analyze.sh` that prints a report with:
   - the **top 3 IP addresses** (column 1), by count,
   - the **number of lines** that contain `ERROR` (any case),
   - a **cleaned** version: replace the word `GET` with `[GET]` (using sed), saved to `clean.log`.
3. Run it and show the report.

## 6. Tasks / challenges
- [ ] Top 3 IPs printed with counts.
- [ ] Error count printed.
- [ ] `clean.log` created with the sed change.
- [ ] The whole thing runs from one script.

## 7. Expected outcome
`./analyze.sh` prints a clear report and writes `clean.log`. You turned a messy log into useful facts.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the full `analyze.sh`.
2. The report shows the **top 3 IPs** with their counts (used `awk` + `sort | uniq -c | sort -nr | head -3`).
3. The report shows the **error line count** (used `grep -ic ERROR`).
4. `clean.log` exists and has `[GET]` where the log had `GET` (used `sed`).
5. You show the sample/real `access.log` and the full report output.
6. The report is produced by **one script run**, not by typing commands one by one.

## 9. Verification checklist
- [ ] Top-3 IPs correct.
- [ ] Error count correct.
- [ ] `clean.log` has the sed change.
- [ ] One script does it all.
- [ ] Evidence saved in `submissions/linux/intermediate/project-06/`.

## 10. Common mistakes
- Wrong column in awk — the IP is usually column 1 (`$1`).
- Forgetting `-i` in the error count grep.
- Forgetting `g` in sed (only first `GET` per line changes).

## 11. Hints
<details><summary>Hint 1 (sample log lines)</summary>
```
10.0.0.1 - - "GET /index.html" 200
10.0.0.2 - - "GET /login" 200
10.0.0.1 - - "GET /app" 500 ERROR
10.0.0.1 - - "POST /save" 500 ERROR
10.0.0.3 - - "GET /home" 200
```
Save these lines into `access.log`.
</details>
<details><summary>Hint 2</summary>Top IPs: `awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -3`. Errors: `grep -ic ERROR access.log`. Clean: `sed 's/GET/[GET]/g' access.log > clean.log`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
#!/bin/bash
LOG="access.log"
echo "== Top 3 IPs =="
awk '{print $1}' "$LOG" | sort | uniq -c | sort -nr | head -3
echo "== Error lines =="
grep -ic ERROR "$LOG"
sed 's/GET/[GET]/g' "$LOG" > clean.log
echo "Cleaned log saved to clean.log"
```
</details>

## 12. Final challenge
Add to the report: the total number of requests (all lines) and the number of `500` responses. (Tip: `grep -c " 500"`.)

## 13. What to submit (evidence)
Save `access.log`, `analyze.sh`, the report output, and `clean.log` in `submissions/linux/intermediate/project-06/`. Then say: **"I submit Linux Intermediate Project 6."** When it passes, Linux Advanced unlocks! 🎉

---
**Remember:** grep + sed + awk + pipes turn a messy log into clear answers. This is a daily engineer skill.
