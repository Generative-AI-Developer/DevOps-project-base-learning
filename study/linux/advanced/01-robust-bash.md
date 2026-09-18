---
id: linux-advanced-study-robust-bash
track: linux
level: advanced
topic: Safe, robust bash scripting
forProject: linux-advanced-project-01
---

# Study: Safe, Robust Bash Scripts

> **Words to know**
> - **Robust** — strong; does not break easily. In simple words: it handles errors well.
> - **`set -euo pipefail`** — safety switches that stop a script on errors.
> - **Trap** — run a cleanup step when the script exits.
> - **Array** — a list of values in one variable.

## 1. Easy explanation (simple → deeper)
A production script must be **safe**. If a step fails, the script should **stop**, not keep going and cause damage.

Bash has safety switches:
- `set -e` — stop on any error.
- `set -u` — stop if you use a variable that is not set.
- `set -o pipefail` — a pipe fails if any part fails.

Together: `set -euo pipefail`. Put it at the top of every serious script.

## 2. Key concepts and terms
- **Quoting:** always use `"$var"` (with quotes) to avoid word-splitting bugs.
- **Trap for cleanup:** `trap 'rm -f "$tmp"' EXIT` — removes a temp file when the script ends.
- **Functions with `local`:** `myfunc() { local x=1; ... }` keeps variables inside the function.
- **Arrays:** `files=(a.txt b.txt)`, loop with `for f in "${files[@]}"; do ...; done`.
- **Check inputs early:** fail fast with a clear message.

## 3. Practical examples
```bash
#!/bin/bash
set -euo pipefail

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT      # always clean up

require() { command -v "$1" >/dev/null || { echo "Missing tool: $1"; exit 1; }; }
require tar

files=("$HOME/a.txt" "$HOME/b.txt")
for f in "${files[@]}"; do
  echo "Processing $f"
done
```

## 4. Commands and config examples
```bash
set -euo pipefail            # safety switches
trap 'echo "cleanup"; rm -f /tmp/lock' EXIT
IFS=$'\n\t'                  # safer word splitting
"${var:?must be set}"        # error if var is empty
```

## 5. Hands-on exercises
1. Add `set -euo pipefail` to a script and make one command fail. See it stop.
2. Use a `trap ... EXIT` to delete a temp file at the end.
3. Make an array of 3 file names and loop over it safely with `"${arr[@]}"`.

## 6. Troubleshooting
- **Problem:** script stops too early with `set -e`.
  **Fix:** for a command that may fail on purpose, add `|| true` or handle it in an `if`.
- **Problem:** `unbound variable` error.
  **Fix:** `set -u` found a variable you did not set. Give it a default: `"${VAR:-default}"`.

## 7. Common mistakes and how to avoid them
- No quotes around variables — breaks on spaces. Always quote.
- No cleanup — temp files pile up. Use `trap`.
- Ignoring errors — a failed step continues. Use `set -e` and checks.

## 8. Certification notes (what the exam wants)
- Clean, safe scripting shows senior skill. It also prevents disasters in real jobs.
- `set -euo pipefail` and `trap` are common in professional scripts you will read.

## 9. Practice questions and tasks
1. What do the three switches in `set -euo pipefail` do?
2. What is a `trap ... EXIT` used for?
3. Why quote variables?

## 10. References
- Bash strict mode: http://redsymbol.net/articles/unofficial-bash-strict-mode/ (checked: 2026-09-18)
- ShellCheck (find bugs in scripts): https://www.shellcheck.net/ (checked: 2026-09-18)

---
**Remember:** `set -euo pipefail`, quote everything, clean up with `trap`. Safe scripts protect production.

<details><summary>Answers</summary>

1. `-e` stop on error, `-u` stop on unset variable, `-o pipefail` a pipe fails if any part fails.
2. To run a cleanup step (like deleting temp files) when the script exits.
3. To avoid bugs when a value has spaces or is empty.
</details>
