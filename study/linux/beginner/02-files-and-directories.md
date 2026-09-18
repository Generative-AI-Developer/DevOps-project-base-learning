---
id: linux-beginner-study-files-and-directories
track: linux
level: beginner
topic: Making and managing files and folders
forProject: linux-beginner-project-02
---

# Study: Make and Manage Files and Folders

> **Words to know**
> - **Create** — make something new.
> - **Copy** — make a second same thing (`cp`).
> - **Move** — change where something is, or rename it (`mv`).
> - **Remove** — delete (`rm`).
> - **Redirect** — send command output into a file (`>` and `>>`).

## 1. Easy explanation (simple → deeper)
You already know how to look around. Now you learn to **change** things: make files and folders, copy them, move them, and delete them.

Think of it like tidying a desk. ✍️ You make new papers, copy them, move them to a drawer, or throw them away.

⚠️ **Warning:** In Linux, `rm` deletes for real. There is no trash bin. Be careful.

## 2. Key concepts and terms
- **`touch`** — In simple words: make a new empty file.
- **`mkdir`** — make a new folder. `mkdir -p a/b/c` makes all folders in the path.
- **`cp`** — copy a file. `cp -r` copies a whole folder.
- **`mv`** — move OR rename (same command).
- **`rm`** — delete a file. `rm -r` deletes a folder and everything in it.
- **Redirect `>`** — write output into a file (replaces the file).
- **Redirect `>>`** — add output to the end of a file (keeps old text).

## 3. Practical examples
- New empty file → `touch notes.txt`
- New folder → `mkdir project`
- Copy → `cp notes.txt backup.txt`
- Rename → `mv notes.txt todo.txt`
- Delete → `rm todo.txt`
- Save text to a file → `echo "hello" > hello.txt`

## 4. Commands and config examples
```bash
touch a.txt                 # make an empty file
mkdir -p demo/sub           # make folder demo and demo/sub together
echo "line 1" > demo/a.txt  # write text INTO a file (replace)
echo "line 2" >> demo/a.txt # ADD text to the end
cp demo/a.txt demo/b.txt    # copy a file
cp -r demo demo-copy        # copy a whole folder
mv demo/b.txt demo/c.txt    # rename (move) a file
rm demo/c.txt               # delete a file
rm -r demo-copy             # delete a folder and all inside (careful!)
```

## 5. Hands-on exercises (do these now)
1. Make a folder `~/practice` and go into it.
2. Make a file `hello.txt` with the text "Hi Linux".
3. Copy it to `hello2.txt`. Then rename `hello2.txt` to `world.txt`.
4. Add a second line to `hello.txt` using `>>`.
5. Delete `world.txt`.

## 6. Troubleshooting
- **Problem:** `rm: cannot remove 'x': Is a directory`.
  **Fix:** to delete a folder, use `rm -r x`.
- **Problem:** You lost file text after using `>`.
  **Fix:** `>` replaces the file. To add without losing, use `>>`.

## 7. Common mistakes and how to avoid them
- Using `rm -rf` on the wrong folder — this deletes everything with no undo. Always check `pwd` and the path first.
- Mixing up `>` and `>>` — `>` replaces, `>>` adds.

## 8. Certification notes (what the exam wants)
- Redirects (`>`, `>>`) and quick file edits are used a lot in the K8s exams (for example, saving a YAML file with `kubectl ... > pod.yaml`).
- `mkdir -p` and `cp -r` save time. Learn them well.

## 9. Practice questions and tasks
1. What is the difference between `>` and `>>`?
2. How do you delete a folder and all its files?
3. Write a command to rename `old.txt` to `new.txt`.

## 10. References
- Official-style guide: https://linuxcommand.org/lc3_learning_the_shell.php (checked: 2026-09-18)
- Video: **Learn Linux TV** — "Linux Crash Course" series — https://www.youtube.com/c/LearnLinuxTV (checked: 2026-09-18)

---
**Remember:** `touch`/`mkdir` make, `cp` copies, `mv` moves/renames, `rm` deletes (no undo!). `>` replaces, `>>` adds.

<details><summary>Answers</summary>

1. `>` replaces the whole file; `>>` adds to the end.
2. `rm -r foldername`
3. `mv old.txt new.txt`
</details>
