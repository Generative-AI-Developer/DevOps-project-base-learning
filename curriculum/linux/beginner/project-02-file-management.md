---
id: linux-beginner-project-02
track: linux
level: beginner
order: 2
title: "Organize Files Like an Engineer"
prereqs: ["linux-beginner-project-01"]
skills: ["create files", "copy/move/rename", "delete safely", "redirects"]
certDomains: ["CKA/CKAD/CKS: fast file work (foundation)"]
estimatedTime: "45–60 minutes"
---

# Organize Files Like an Engineer

**Status:** 🔒 Locked (unlocks after Project 1)

## 1. Objective
Learn to make, copy, move, rename, and delete files and folders. Learn to save command output into files.

## 2. Real-world scenario
Your team says: *"Set up a clean project folder for our new app. Add a README and a notes file, and keep a backup."* You must build this folder tree fast, with commands only.

## 3. Skills and concepts you will learn
- **Create** files and folders (`touch`, `mkdir -p`).
- **Copy / move / rename** (`cp`, `mv`).
- **Delete safely** (`rm`, `rm -r`) — In simple words: delete with care, because there is no undo.
- **Redirects** (`>`, `>>`) — In simple words: send text into a file.

## 4. Prerequisites
- Project 1 completed.
- Read: `study/linux/beginner/02-files-and-directories.md`.

## 5. Step-by-step requirements
1. Make this folder tree in your home: `~/myapp`, with subfolders `src`, `docs`, and `backup`.
2. In `~/myapp/docs`, make a file `README.md` with the line: `# My App`.
3. Add a second line to `README.md`: `This is my first Linux project.`
4. Copy `README.md` into `~/myapp/backup/`.
5. In `src`, make an empty file `app.txt`. Then rename it to `main.txt`.
6. Delete the `backup` copy of the README (but keep the docs one).

## 6. Tasks / challenges
- [ ] Build the folder tree with one `mkdir -p` style approach.
- [ ] Create `README.md` with two lines (use `>` then `>>`).
- [ ] Copy the README to `backup/`.
- [ ] Create and rename `app.txt` → `main.txt`.
- [ ] Delete only the backup README.
- [ ] Show the final tree (use `ls -R ~/myapp`).

## 7. Expected outcome
Your folder `~/myapp` has: `src/main.txt`, `docs/README.md` (2 lines), and an empty `backup/` folder. `ls -R ~/myapp` shows this clearly.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `ls -R ~/myapp` output shows `src`, `docs`, `backup`.
2. `src` contains `main.txt` (not `app.txt`).
3. `docs/README.md` has **two** lines: `# My App` and `This is my first Linux project.` (show `cat docs/README.md`).
4. `backup/` does not contain the README anymore (show `ls ~/myapp/backup`).
5. You show all your commands AND their output.
6. You write 1–2 sentences: "How I solved it."

## 9. Verification checklist
- [ ] `ls -R ~/myapp` matches the expected tree.
- [ ] `cat ~/myapp/docs/README.md` shows 2 lines.
- [ ] Evidence saved in `submissions/linux/beginner/project-02/`.

## 10. Common mistakes
- Using `>` twice — the second `>` erases line 1. Use `>>` for line 2.
- Deleting the wrong README — check the path before `rm`.
- Forgetting `-p` on `mkdir` for nested folders.

## 11. Hints
<details><summary>Hint 1 (small nudge)</summary>Start with `mkdir -p ~/myapp/{src,docs,backup}`. The `{}` makes all three at once.</details>
<details><summary>Hint 2 (bigger help)</summary>`echo "# My App" > ~/myapp/docs/README.md` then `echo "This is my first Linux project." >> ~/myapp/docs/README.md`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
mkdir -p ~/myapp/{src,docs,backup}
echo "# My App" > ~/myapp/docs/README.md
echo "This is my first Linux project." >> ~/myapp/docs/README.md
cp ~/myapp/docs/README.md ~/myapp/backup/
touch ~/myapp/src/app.txt && mv ~/myapp/src/app.txt ~/myapp/src/main.txt
rm ~/myapp/backup/README.md
ls -R ~/myapp
```
</details>

## 12. Final challenge
Make a copy of the whole `~/myapp` folder called `~/myapp-v2` using one command. (Tip: `cp -r`.)

## 13. What to submit (evidence)
Save a file in `submissions/linux/beginner/project-02/` with your commands + output + your short note. Then say: **"I submit Linux Beginner Project 2."**

---
**Remember:** `>` replaces, `>>` adds. Check the path before you delete.
