---
id: linux-beginner-study-command-line-basics
track: linux
level: beginner
topic: Command-line basics — moving around and reading files
forProject: linux-beginner-project-01
---

# Study: Move Around Linux and Read Files

> **Words to know**
> - **Terminal** — the screen where you type commands.
> - **Shell** — the program that reads your commands (we use `bash`).
> - **Directory** — another word for a **folder**.
> - **Path** — the address of a file or folder, like `/home/you/notes.txt`.
> - **Command** — a word you type to make Linux do something.

## 1. Easy explanation (simple → deeper)

In Linux, you talk to the computer by typing **commands**. You are always "standing" inside one folder. This folder is called your **current directory**.

Think of folders like rooms in a house. 🏠
- You can see which room you are in.
- You can walk into another room.
- You can look at what is in the room.

Linux has commands for all of this.

## 2. Key concepts and terms
- **Home directory** — In simple words: your own folder. It is usually `/home/yourname`. The short sign for it is `~`.
- **Absolute path** — starts from the top `/`. Example: `/etc/hostname`.
- **Relative path** — starts from where you are now. Example: `notes/todo.txt`.
- **Hidden file** — a file whose name starts with a dot `.`. You need `ls -a` to see it.

## 3. Practical examples
- Where am I? → `pwd`
- What is here? → `ls`
- Go into a folder → `cd Documents`
- Go back up one folder → `cd ..`
- Go to my home → `cd ~`  (or just `cd`)

## 4. Commands and config examples
```bash
pwd                 # print working directory: shows your current folder
ls                  # list files in this folder
ls -l               # list with details (size, owner, date)
ls -a               # list ALL, including hidden files
cd /etc             # change directory to /etc
cd ..               # go up one level
cd ~                # go to your home folder

cat file.txt        # show the whole file
less file.txt       # show a big file page by page (press q to quit)
head -n 5 file.txt  # show the first 5 lines
tail -n 5 file.txt  # show the last 5 lines
echo "hello"        # print text
whoami              # show your username
```

## 5. Hands-on exercises (do these now)
1. Run `pwd`. Read your current folder.
2. Run `ls -l`. Look at the columns.
3. Go to `/etc` with `cd /etc`, then run `ls`. Then go home with `cd ~`.
4. Run `cat /etc/hostname`. This shows your computer's name.

## 6. Troubleshooting
- **Problem:** `bash: cd: /wrong: No such file or directory`.
  **Fix:** the folder name is wrong or does not exist. Check spelling. Use `ls` to see real names. Linux is **case-sensitive** (`Docs` and `docs` are different).
- **Problem:** `cat: bigfile: Is a directory`.
  **Fix:** `cat` is for files, not folders. Use `ls` on a folder instead.

## 7. Common mistakes and how to avoid them
- Typing a wrong capital letter — Linux cares about big/small letters. Type names exactly.
- Forgetting where you are — run `pwd` any time you feel lost.
- Using `cat` on a huge file fills your screen — use `less` for big files.

## 8. Certification notes (what the exam wants)
- In the CKA/CKAD/CKS exams you live in the terminal. Fast, correct navigation saves time.
- Learn `cd -` (go back to the last folder) and Tab-completion (press **Tab** to auto-finish names). These make you fast.

## 9. Practice questions and tasks
1. Which command shows your current folder?
2. How do you see hidden files?
3. What does `cd ..` do?
4. Show only the last 3 lines of `/etc/passwd`. (Write the command.)

## 10. References (official docs + good free videos)
- The Linux command line (official-style guide): https://linuxcommand.org/
- Video: **Learn Linux TV** — "Linux Crash Course — The Command Line" — https://www.youtube.com/c/LearnLinuxTV (checked: 2026-09-18)
- Video: **freeCodeCamp.org** — search "Linux for Beginners full course" — https://www.youtube.com/c/Freecodecamp (checked: 2026-09-18)

---
**Remember:** `pwd` = where am I, `ls` = what is here, `cd` = go somewhere, `cat`/`less` = read a file.

<details><summary>Answers to practice questions</summary>

1. `pwd`
2. `ls -a`
3. Moves you up one folder (to the parent folder).
4. `tail -n 3 /etc/passwd`
</details>
