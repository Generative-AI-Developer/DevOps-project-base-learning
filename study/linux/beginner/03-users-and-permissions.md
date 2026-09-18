---
id: linux-beginner-study-users-and-permissions
track: linux
level: beginner
topic: Users, groups, and file permissions
forProject: linux-beginner-project-03
---

# Study: Users, Groups, and Permissions

> **Words to know**
> - **User** — a person or program account on the system.
> - **Group** — a set of users who share access.
> - **Permission** — who is allowed to read, write, or run a file.
> - **root** — the super user (the boss). Can do anything.
> - **sudo** — In simple words: "do this one command as root".

## 1. Easy explanation (simple → deeper)
Linux is made for many users. So every file has an **owner** and a set of **permissions**. Permissions decide who can **read (r)**, **write (w)**, and **execute/run (x)** a file.

Think of a file like a room with 3 doors: read, write, run. Permissions say who holds the keys. 🔑

There are 3 groups of people for each file:
1. **owner** (the user who owns it),
2. **group** (users in the file's group),
3. **others** (everyone else).

## 2. Key concepts and terms
- **`ls -l`** shows permissions, like `-rw-r--r--`.
  - First letter: `-` file, `d` folder.
  - Next 3: owner's rights. Next 3: group's rights. Last 3: others' rights.
- **`chmod`** — change permissions.
- **`chown`** — change the owner.
- **Numbers:** r=4, w=2, x=1. Add them: `7 = rwx`, `6 = rw-`, `5 = r-x`, `4 = r--`.
  - `chmod 644 file` → owner rw, group r, others r.
  - `chmod 755 script.sh` → owner rwx, group r-x, others r-x.

## 3. Practical examples
- See permissions → `ls -l file`
- Make a script runnable → `chmod +x script.sh`
- Set exact permissions → `chmod 640 secret.txt`
- Run one command as root → `sudo apt update`

## 4. Commands and config examples
```bash
whoami                 # your username
id                     # your user id and groups
ls -l                  # see permissions
chmod +x run.sh        # add "run" permission
chmod 600 secret.txt   # owner read+write only, no one else
sudo chown root file   # change owner to root (needs sudo)
cat /etc/passwd        # list of users (one per line)
```

## 5. Hands-on exercises
1. Run `id`. Read your user and groups.
2. Make a file `secret.txt`. Set it to `600`. Check with `ls -l`.
3. Make a file `run.sh`. Add run permission with `chmod +x`. Check with `ls -l`.

## 6. Troubleshooting
- **Problem:** `Permission denied` when running a script.
  **Fix:** the file has no run permission. Do `chmod +x file`.
- **Problem:** `Operation not permitted` when changing owner.
  **Fix:** changing owner needs root. Use `sudo`.

## 7. Common mistakes and how to avoid them
- Using `chmod 777` on everything — this gives all rights to everyone. It is unsafe. Give only what is needed.
- Forgetting `sudo` for admin tasks.

## 8. Certification notes (what the exam wants)
- **CKS** (security) cares a lot about permissions and least privilege (give the smallest access needed).
- Know `chmod` numbers (644, 600, 755) by heart. It saves time.

## 9. Practice questions and tasks
1. What does `chmod 755 file` mean?
2. Which permission lets you run a file?
3. How do you run one command as root?

## 10. References
- Official-style guide (permissions): https://linuxcommand.org/lc3_lts0090.php (checked: 2026-09-18)
- Video: **NetworkChuck** — "Linux permissions explained" — https://www.youtube.com/@NetworkChuck (checked: 2026-09-18)

---
**Remember:** r=4, w=2, x=1. Owner / group / others. Give the least access needed.

<details><summary>Answers</summary>

1. Owner = rwx (7), group = r-x (5), others = r-x (5).
2. The execute permission (`x`).
3. `sudo <command>`.
</details>
