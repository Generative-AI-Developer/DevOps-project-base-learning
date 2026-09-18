---
id: linux-beginner-project-06
track: linux
level: beginner
order: 6
title: "Build Your First Bash Script (Level Boss)"
prereqs: ["linux-beginner-project-05"]
skills: ["bash scripting", "variables", "if", "loops", "arguments", "exit codes"]
certDomains: ["CKA/CKS: automation basics (foundation)"]
estimatedTime: "60–90 minutes"
---

# Build Your First Bash Script (Level Boss 🏆)

**Status:** 🔒 Locked (unlocks after Project 5)

This is the **last project** of Linux Beginner. Finish it to complete the level. Then **Docker Beginner unlocks**! 🔓

## 1. Objective
Write a real bash script that takes input, makes a choice with `if`, and repeats with a loop.

## 2. Real-world scenario
Your team makes new project folders every week, by hand. It is slow and full of mistakes. Your job: write one script that builds a project folder correctly, every time.

## 3. Skills and concepts you will learn
- The shebang line and running scripts.
- Variables and arguments (`$1`).
- `if` checks (and exit codes).
- A `for` loop.
- Putting it all together into a useful tool.

## 4. Prerequisites
- Projects 1–5 completed.
- Read: `study/linux/beginner/06-first-bash-script.md`.

## 5. Step-by-step requirements
Write a script called `new-project.sh` that:
1. Takes one argument: the project name (`$1`).
2. If no name is given, prints a help message and exits with code `1`.
3. Makes a folder with that name, and inside it makes 3 subfolders: `src`, `docs`, `tests` (use a loop).
4. Makes a `README.md` inside the project with the line: `# <project name>`.
5. At the end, prints: `Project <name> is ready!` and lists the tree (`ls -R <name>`).

## 6. Tasks / challenges
- [ ] Script starts with `#!/bin/bash` and is runnable.
- [ ] Running it with no name shows help and exits 1.
- [ ] Running `./new-project.sh shop` makes `shop/` with `src`, `docs`, `tests`.
- [ ] `shop/README.md` contains `# shop`.
- [ ] The script prints the success message and the tree.

## 7. Expected outcome
`./new-project.sh shop` builds a full project folder in one step, correctly, every time.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. The script has `#!/bin/bash` as line 1 and is runnable (`ls -l` shows `x`).
2. With **no** argument, it prints a help message and `echo $?` after it shows `1`.
3. With argument `shop`, it creates `shop/src`, `shop/docs`, `shop/tests` (show `ls -R shop`).
4. `cat shop/README.md` shows `# shop`.
5. The script uses a **loop** to make the 3 subfolders (show the script text).
6. You paste the full script AND the output of running it.

## 9. Verification checklist
- [ ] No-argument case exits with code 1.
- [ ] `shop/` tree is correct and README is right.
- [ ] A loop is used (not 3 separate mkdir lines).
- [ ] Evidence saved in `submissions/linux/beginner/project-06/`.

## 10. Common mistakes
- Spaces around `=` in variables.
- Forgetting `chmod +x`.
- Not quoting `"$1"` — breaks if the name has spaces.
- Making the 3 folders with 3 lines instead of a loop (the task asks for a loop).

## 11. Hints
<details><summary>Hint 1</summary>Read `$1` into a variable. Check if it is empty with `if [ -z "$name" ]; then ... exit 1; fi`.</details>
<details><summary>Hint 2</summary>Use a loop: `for d in src docs tests; do mkdir -p "$name/$d"; done`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
#!/bin/bash
name="$1"
if [ -z "$name" ]; then
  echo "Usage: ./new-project.sh <project-name>"
  exit 1
fi
mkdir -p "$name"
for d in src docs tests; do
  mkdir -p "$name/$d"
done
echo "# $name" > "$name/README.md"
echo "Project $name is ready!"
ls -R "$name"
```
</details>

## 12. Final challenge
Add a check: if the folder already exists, print `Project already exists` and exit `2` (do not overwrite).

## 13. What to submit (evidence)
Save the full script and the run output in `submissions/linux/beginner/project-06/`. Also show:
- The no-argument run + `echo $?` (should be 1).
- The `shop` run + `ls -R shop` + `cat shop/README.md`.

Then say: **"I submit Linux Beginner Project 6."** When it passes, you complete Linux Beginner and unlock Docker Beginner! 🎉

---
**Remember:** A good script checks its input, does the work with loops, and reports the result.
