---
id: linux-intermediate-study-bash-automation
track: linux
level: intermediate
topic: Bash automation with functions and cron
forProject: linux-intermediate-project-04
---

# Study: Bash Automation (Functions + Cron)

> **Words to know**
> - **Function** — a named block of commands you can reuse. In simple words: a mini-script inside your script.
> - **Exit code** — a number a command returns: `0` = success, not `0` = error.
> - **Log line** — a message your script saves so you know what happened.

## 1. Easy explanation (simple → deeper)
In Beginner you wrote a small script. Now you write **bigger, cleaner** scripts.

Two big ideas:
1. **Functions** — group steps into named blocks. This keeps scripts tidy and reusable.
2. **Exit codes** — check if a step worked before doing the next step.

Then you run the script automatically with **cron**.

## 2. Key concepts and terms
- **Define a function:**
  ```bash
  greet() { echo "Hello $1"; }
  greet "Sara"
  ```
- **Check success:** every command sets `$?`. `0` means success.
  ```bash
  if command; then echo "ok"; else echo "failed"; fi
  ```
- **Logging:** write messages with a time:
  ```bash
  log() { echo "$(date '+%F %T') $1" >> "$HOME/run.log"; }
  ```

## 3. Practical examples
```bash
#!/bin/bash
log() { echo "$(date '+%F %T') $*" >> "$HOME/run.log"; }

check_disk() {
  USE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
  log "Disk use is ${USE}%"
  if [ "$USE" -gt 80 ]; then
    log "WARNING: disk over 80%"
    return 1
  fi
  return 0
}

check_disk && log "Disk OK" || log "Disk needs attention"
```

## 4. Commands and config examples
```bash
# run a task and stop if it fails
set -e                 # stop the whole script on any error
mkdir -p ~/data
cp important.txt ~/data/ || { echo "copy failed"; exit 1; }
```
```bash
# schedule the script every hour
crontab -e
# add:
0 * * * * /home/you/health-check.sh
```

## 5. Hands-on exercises
1. Write a `log()` function that writes a timed message to a file.
2. Write a function that checks disk use and warns if over 80%.
3. Call the functions and read the log file.

## 6. Troubleshooting
- **Problem:** function "not found".
  **Fix:** define the function **before** you call it.
- **Problem:** number compare fails.
  **Fix:** use `-gt`, `-lt` for numbers (not `>`), and remove the `%` sign first.

## 7. Common mistakes and how to avoid them
- No logging — you cannot see what happened later. Always log.
- Not checking exit codes — a failed step continues silently. Use `if` or `set -e`.
- Huge scripts with no functions — hard to read. Use functions.

## 8. Certification notes (what the exam wants)
- Clean, reusable bash saves time in exams and jobs.
- `awk`, `df`, and exit-code checks are common in real troubleshooting.

## 9. Practice questions and tasks
1. What is a function, in simple words?
2. What does exit code `0` mean?
3. How do you write a timed log line?

## 10. References
- Bash guide (functions): https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_11_01.html (checked: 2026-09-18)
- Video: **freeCodeCamp.org** — "Bash scripting" — https://www.youtube.com/c/Freecodecamp (checked: 2026-09-18)

---
**Remember:** Functions keep scripts clean. Check exit codes. Always log what happened.

<details><summary>Answers</summary>

1. A named block of commands you can reuse.
2. Success (the command worked).
3. `echo "$(date '+%F %T') message" >> file`.
</details>
