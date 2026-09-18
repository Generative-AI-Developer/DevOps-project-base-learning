---
id: linux-advanced-project-01
track: linux
level: advanced
order: 1
title: "Write a Production-Safe Script"
prereqs: ["linux-intermediate-project-06"]
skills: ["set -euo pipefail", "trap cleanup", "arrays", "input checks", "functions"]
certDomains: ["CKA/CKS: safe automation (foundation)"]
estimatedTime: "90 minutes"
---

# Write a Production-Safe Script

**Status:** 🔒 Locked

## 1. Objective
Rewrite a simple script to be production-safe: it stops on errors, checks its inputs, cleans up after itself, and uses functions and an array.

## 2. Real-world scenario
A messy script deleted the wrong files on a real server last month. Your team now requires **safe** scripts: fail fast, clean up, and never guess. You must write one to this standard.

## 3. Skills and concepts you will learn
- Strict mode: `set -euo pipefail`.
- Cleanup with `trap`.
- Input checks and clear errors.
- Functions with `local`.
- Arrays and safe loops.

## 4. Prerequisites
- Linux Intermediate completed.
- Read: `study/linux/advanced/01-robust-bash.md`.

## 5. Step-by-step requirements
Write `safe-archive.sh` that:
1. Starts with `set -euo pipefail`.
2. Takes one argument: a folder to archive. If missing or not a folder, prints a clear error and exits `1`.
3. Checks that `tar` exists (fail fast if not).
4. Makes a temp working file and removes it on exit with `trap`.
5. Uses an **array** of file types to report (for example: count `.txt`, `.log`, `.md` files in the folder), using a loop.
6. Creates a dated `.tar.gz` of the folder in `~/archives/`.
7. Prints a clear final summary.

## 6. Tasks / challenges
- [ ] Strict mode is on.
- [ ] Bad input is rejected with a clear message and exit 1.
- [ ] `trap` cleanup removes the temp file.
- [ ] An array + loop is used.
- [ ] A dated archive is created.

## 7. Expected outcome
`./safe-archive.sh ~/myapp` checks input, reports file counts, makes a dated archive, and cleans up. Bad input fails safely.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. The script's first real line is `set -euo pipefail`.
2. Running with no argument (or a bad path) prints a clear error and `echo $?` shows `1`.
3. The script uses `trap '... ' EXIT` to remove a temp file (show the line).
4. The script uses an **array** and a loop (show the lines).
5. A dated archive appears in `~/archives/` (show `ls -l ~/archives/`).
6. You paste the full script and a good run + a bad run.

## 9. Verification checklist
- [ ] Strict mode + trap + array all present.
- [ ] Bad input exits 1.
- [ ] Archive created.
- [ ] Evidence saved in `submissions/linux/advanced/project-01/`.

## 10. Common mistakes
- `set -e` stops on a command you expected to fail — use `|| true` or an `if` for those.
- Not quoting variables.
- Forgetting the `trap` cleanup.

## 11. Hints
<details><summary>Hint 1</summary>Check input: `[ $# -ge 1 ] && [ -d "$1" ] || { echo "Usage: give a real folder"; exit 1; }`.</details>
<details><summary>Hint 2</summary>Array + loop: `types=(txt log md); for t in "${types[@]}"; do echo "$t: $(find "$1" -name "*.$t" | wc -l)"; done`.</details>
<details><summary>Hint 3</summary>Temp + trap: `tmp="$(mktemp)"; trap 'rm -f "$tmp"' EXIT`. Archive: `tar -czf ~/archives/arch-$(date +%F).tar.gz "$1"`.</details>

## 12. Final challenge
Run your script through the online tool **ShellCheck** (shellcheck.net) or `shellcheck safe-archive.sh`. Fix any warnings it finds. Paste the clean result.

## 13. What to submit (evidence)
Save the script, a good run, a bad run (+ exit code), and `ls -l ~/archives/` in `submissions/linux/advanced/project-01/`. Then say: **"I submit Linux Advanced Project 1."**

---
**Remember:** Fail fast, clean up, check inputs. Safe scripts are senior scripts.
