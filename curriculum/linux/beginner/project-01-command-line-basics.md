---
id: linux-beginner-project-01
track: linux
level: beginner
order: 1
title: "Move Around Linux: Your First Commands"
prereqs: []
skills: ["terminal navigation", "reading files", "paths"]
certDomains: ["CKA/CKAD/CKS: terminal speed (foundation)"]
estimatedTime: "45–60 minutes"
---

# Move Around Linux: Your First Commands

**Status:** ▶️ Start
*(The real status lives in `progress.json`.)*

## 1. Objective
Learn to move around Linux folders and read files using the terminal. By the end, you can find where you are, go anywhere, and look inside files.

## 2. Real-world scenario
You are a new junior engineer. Your boss says: *"Log in to the server and check the machine's hostname and the list of users."* There is no mouse. Only a terminal. You must use commands. This is a normal day for a Linux engineer.

## 3. Skills and concepts you will learn
- **Navigation** — In simple words: moving between folders with `cd`.
- **Listing** — In simple words: seeing what is inside a folder with `ls`.
- **Reading files** — In simple words: looking inside a file with `cat`, `less`, `head`, `tail`.
- **Paths** — In simple words: the address of a file or folder.

## 4. Prerequisites
- A Linux terminal (you have one).
- Read this first: `study/linux/beginner/01-command-line-basics.md`.

## 5. Step-by-step requirements
1. Find your current folder.
2. Go to your home folder.
3. Make a folder called `linux-lab` inside your home folder. *(Hint: the command is `mkdir`.)*
4. Go into `linux-lab`.
5. Read the file `/etc/hostname` and the first 5 lines of `/etc/passwd`.
6. Save proof of your work (see section 13).

## 6. Tasks / challenges
- [ ] Show your current folder with one command.
- [ ] List files in `/etc` with details.
- [ ] Create the folder `~/linux-lab` and move into it.
- [ ] Show the whole `/etc/hostname` file.
- [ ] Show only the first 5 lines of `/etc/passwd`.
- [ ] Show only the last 3 lines of `/etc/passwd`.

## 7. Expected outcome
You can run each command with no error. You have a folder `~/linux-lab`. You can read the two files. You understand what each command did.

## 8. Acceptance criteria (how I grade it)
The work passes only if ALL of these are true:
1. You show the output of `pwd` (your current folder).
2. You show `ls -l /etc` output (or a clear part of it).
3. The folder `~/linux-lab` exists — you show the output of `ls -ld ~/linux-lab`.
4. You show the output of `cat /etc/hostname`.
5. You show the first 5 lines of `/etc/passwd` (command + output).
6. You show the last 3 lines of `/etc/passwd` (command + output).
7. You write one or two simple sentences: "How I solved it."

## 9. Verification checklist (check before you submit)
- [ ] I ran every command myself.
- [ ] I copied the commands AND their output.
- [ ] The folder `~/linux-lab` really exists.
- [ ] I saved my evidence in `submissions/linux/beginner/project-01/`.

## 10. Common mistakes
- Wrong capital letters — Linux is case-sensitive. Type names exactly.
- Using `cat` on a folder — `cat` is for files. Use `ls` for folders.
- Forgetting `~` means home — `mkdir ~/linux-lab` makes the folder in your home, not where you stand.

## 11. Hints (ask for these — do not read unless you are stuck)
<details><summary>Hint 1 (small nudge)</summary>Start with `pwd` and `cd ~`. Then think about `mkdir`.</details>
<details><summary>Hint 2 (bigger help)</summary>To make and enter a folder: `mkdir ~/linux-lab` then `cd ~/linux-lab`. To read part of a file, use `head -n 5 FILE` and `tail -n 3 FILE`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
pwd
ls -l /etc
mkdir ~/linux-lab && cd ~/linux-lab
cat /etc/hostname
head -n 5 /etc/passwd
tail -n 3 /etc/passwd
ls -ld ~/linux-lab
```
</details>

## 12. Final challenge (a little harder)
Find and show **only the line** in `/etc/passwd` that contains your own username.
*(Tip: you will meet a tool called `grep` soon. Try `grep yourname /etc/passwd`.)*

## 13. What to submit (evidence)
Save a text file in `submissions/linux/beginner/project-01/` (for example `output.txt`) with:
- Each command you ran and its output.
- One or two simple sentences: "How I solved it."

Then tell me: **"I submit Linux Beginner Project 1."**

---
**Remember:** Try first. Ask for hints if stuck. Submit when YOU are ready.
