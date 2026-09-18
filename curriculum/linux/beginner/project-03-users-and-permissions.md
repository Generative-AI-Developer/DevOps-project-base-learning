---
id: linux-beginner-project-03
track: linux
level: beginner
order: 3
title: "Lock It Down: Users and Permissions"
prereqs: ["linux-beginner-project-02"]
skills: ["chmod", "chown", "sudo", "reading ls -l"]
certDomains: ["CKS: least privilege (foundation)"]
estimatedTime: "45–60 minutes"
---

# Lock It Down: Users and Permissions

**Status:** 🔒 Locked (unlocks after Project 2)

## 1. Objective
Learn to read and set file permissions. Learn who can read, write, and run a file.

## 2. Real-world scenario
Your boss says: *"This file has a password inside. Make sure only you can read it. And make this script runnable."* Wrong permissions can leak secrets. This is a real security job.

## 3. Skills and concepts you will learn
- **Reading `ls -l`** — In simple words: understand the `rwx` letters.
- **`chmod`** — set who can read/write/run.
- **`chmod` numbers** — 600, 644, 755.
- **`sudo`** — In simple words: do one command as the boss (root).

## 4. Prerequisites
- Project 2 completed.
- Read: `study/linux/beginner/03-users-and-permissions.md`.

## 5. Step-by-step requirements
1. In `~/practice`, make a file `secret.txt` with any text.
2. Set its permissions so **only the owner** can read and write it (no group, no others).
3. Make a file `hello.sh` with this text: `echo "Hello from my script"`.
4. Give `hello.sh` run permission.
5. Run it with `./hello.sh` and show the output.
6. Show `ls -l` of both files.

## 6. Tasks / challenges
- [ ] Create `secret.txt` and set it to `600`.
- [ ] Create `hello.sh` and make it runnable (`chmod +x`).
- [ ] Run `./hello.sh` successfully.
- [ ] Show `ls -l secret.txt hello.sh`.
- [ ] Explain in one sentence what `600` means.

## 7. Expected outcome
`secret.txt` shows `-rw-------` (only owner read/write). `hello.sh` is runnable and prints its message.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `ls -l secret.txt` shows `-rw-------` (mode 600).
2. `ls -l hello.sh` shows an `x` (it is runnable).
3. Running `./hello.sh` prints `Hello from my script`.
4. You explain what `600` means in simple words.
5. You show all commands and output.

## 9. Verification checklist
- [ ] `secret.txt` is `600`.
- [ ] `hello.sh` runs and prints the message.
- [ ] Evidence saved in `submissions/linux/beginner/project-03/`.

## 10. Common mistakes
- Using `chmod 777` — too open, unsafe. Use `600` for secrets.
- Forgetting `./` before a script name — Linux needs the path to run it.
- Script has no run permission → `Permission denied`.

## 11. Hints
<details><summary>Hint 1</summary>For "only owner read/write", the number is `600`. For "runnable", use `chmod +x`.</details>
<details><summary>Hint 2</summary>`chmod 600 secret.txt` and `chmod +x hello.sh`. Run with `./hello.sh`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
cd ~/practice
echo "my-password-123" > secret.txt
chmod 600 secret.txt
echo 'echo "Hello from my script"' > hello.sh
chmod +x hello.sh
./hello.sh
ls -l secret.txt hello.sh
```
</details>

## 12. Final challenge
Try to change `secret.txt`'s owner to `root` using `sudo chown root secret.txt`. Then check `ls -l`. Then change it back to yourself.

## 13. What to submit (evidence)
Save your commands + output + your one-sentence explanation in `submissions/linux/beginner/project-03/`. Then say: **"I submit Linux Beginner Project 3."**

---
**Remember:** `600` = only owner. `chmod +x` = make runnable. Run scripts with `./name`.
