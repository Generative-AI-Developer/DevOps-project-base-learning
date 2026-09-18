---
id: linux-beginner-study-first-bash-script
track: linux
level: beginner
topic: Your first bash script
forProject: linux-beginner-project-06
---

# Study: Your First Bash Script

> **Words to know**
> - **Script** — a text file with commands inside. In simple words: a saved list of commands the computer runs for you.
> - **Shebang** — the first line `#!/bin/bash`. It tells Linux which program runs the script.
> - **Variable** — a name that holds a value, like `name="Sara"`.
> - **Argument** — extra input you give the script, like `./hi.sh Sara`.

## 1. Easy explanation (simple → deeper)
A **script** saves you time. Instead of typing 10 commands every day, you put them in one file and run that file.

The first line is special: `#!/bin/bash`. This is the **shebang**. It says "run me with bash".

A script can use:
- **Variables** to store values.
- **`if`** to make choices.
- **Loops** to repeat.
- **Arguments** to take input.

## 2. Key concepts and terms
- **Make a variable:** `name="Sara"` (no spaces around `=`).
- **Use a variable:** `echo "Hello $name"`.
- **Arguments:** `$1` is the first input, `$2` the second, `$0` is the script name.
- **If:** check a condition and act.
- **For loop:** repeat over a list.

## 3. Practical examples
```bash
#!/bin/bash
name="$1"                 # first argument
if [ -z "$name" ]; then   # -z means "empty"
  echo "Please give me a name. Example: ./hi.sh Sara"
  exit 1
fi
echo "Hello, $name!"
for i in 1 2 3; do
  echo "Count $i"
done
```

## 4. Commands and config examples
```bash
# make the script
nano hi.sh          # or: use any editor
chmod +x hi.sh      # make it runnable
./hi.sh Sara        # run it with an argument
```

## 5. Hands-on exercises
1. Make a script `hi.sh` that prints "Hello" + the name you give it.
2. Add an `if` check: if no name is given, print a help message and exit.
3. Add a loop that counts from 1 to 5.

## 6. Troubleshooting
- **Problem:** `Permission denied`.
  **Fix:** `chmod +x hi.sh`, then run `./hi.sh`.
- **Problem:** `name: command not found`.
  **Fix:** you wrote `name = "Sara"` with spaces. Remove the spaces: `name="Sara"`.
- **Problem:** variable is empty.
  **Fix:** use `$1` for the first argument; run the script WITH an argument.

## 7. Common mistakes and how to avoid them
- Spaces around `=` in a variable — do not do it.
- Forgetting `chmod +x`.
- Forgetting to quote variables — use `"$name"` to be safe.

## 8. Certification notes (what the exam wants)
- Scripts are used to automate tasks. In exams and jobs, quick bash saves time.
- Learn `exit 0` (success) and `exit 1` (error). These "exit codes" matter for automation.

## 9. Practice questions and tasks
1. What does the shebang line do?
2. How do you read the first argument in a script?
3. How do you make a script runnable?

## 10. References
- Bash guide for beginners: https://tldp.org/LDP/Bash-Beginners-Guide/html/ (checked: 2026-09-18)
- Video: **freeCodeCamp.org** — "Bash scripting full course" — https://www.youtube.com/c/Freecodecamp (checked: 2026-09-18)

---
**Remember:** Start with `#!/bin/bash`, `chmod +x`, run with `./name`. `$1` is the first input.

<details><summary>Answers</summary>

1. It tells Linux which program (bash) should run the script.
2. `$1`.
3. `chmod +x scriptname`.
</details>
