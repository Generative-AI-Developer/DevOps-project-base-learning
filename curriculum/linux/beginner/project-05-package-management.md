---
id: linux-beginner-project-05
track: linux
level: beginner
order: 5
title: "Install and Remove Software Safely"
prereqs: ["linux-beginner-project-04"]
skills: ["apt update/install/remove", "which", "package basics"]
certDomains: ["CKA/CKS: installing tools on nodes (foundation)"]
estimatedTime: "30–45 minutes"
---

# Install and Remove Software Safely

**Status:** 🔒 Locked (unlocks after Project 4)

## 1. Objective
Learn to install, use, and remove software with the package manager.

## 2. Real-world scenario
You get a fresh server. It has no tools. You must install the tools your team needs — safely, from the official repository, not from random websites.

## 3. Skills and concepts you will learn
- Refresh the package list (`apt update`).
- Install a package (`apt install`).
- Find and use it (`which`).
- Remove it (`apt remove`).

## 4. Prerequisites
- Project 4 completed.
- Read: `study/linux/beginner/05-package-management.md`.
- Note: uses `apt` (Ubuntu/Debian). If you use Fedora/RHEL, use `dnf` and say so.

## 5. Step-by-step requirements
1. Run `sudo apt update`.
2. Install the tool `tree`.
3. Use `tree ~/myapp` (from Project 2) and show the output.
4. Show where `tree` lives with `which tree`.
5. Remove `tree` with `sudo apt remove`.
6. Prove it is gone: `which tree` shows nothing.

## 6. Tasks / challenges
- [ ] `sudo apt update` runs with no error.
- [ ] Install `tree`.
- [ ] Show `tree ~/myapp` output.
- [ ] Show `which tree` (a path).
- [ ] Remove `tree` and prove it is gone.

## 7. Expected outcome
You installed a tool, used it, and removed it cleanly. You understand the install → use → remove flow.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You show `sudo apt update` finished (last lines).
2. You show `tree ~/myapp` output (the folder tree).
3. `which tree` showed a real path while it was installed.
4. After remove, `which tree` shows nothing (or "not found").
5. You show all commands and output.
6. If you used `dnf` instead of `apt`, you said so.

## 9. Verification checklist
- [ ] Tool installed, used, and removed.
- [ ] Evidence saved in `submissions/linux/beginner/project-05/`.

## 10. Common mistakes
- Skipping `apt update` — install may fail with "Unable to locate package".
- Forgetting `sudo` — install/remove needs root.

## 11. Hints
<details><summary>Hint 1</summary>Order is: update → install → use → remove.</details>
<details><summary>Hint 2</summary>`sudo apt update` then `sudo apt install -y tree`. Use `tree ~/myapp`. Remove with `sudo apt remove -y tree`.</details>
<details><summary>Hint 3 (almost the answer)</summary>
```bash
sudo apt update
sudo apt install -y tree
tree ~/myapp
which tree
sudo apt remove -y tree
which tree || echo "tree is gone"
```
</details>

## 12. Final challenge
Install `git`, check its version with `git --version`, and keep it (you will use git later). Show the version output.

## 13. What to submit (evidence)
Save commands + output in `submissions/linux/beginner/project-05/`. Then say: **"I submit Linux Beginner Project 5."**

---
**Remember:** update → install → use → remove. Always from the package manager.
