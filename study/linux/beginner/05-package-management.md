---
id: linux-beginner-study-package-management
track: linux
level: beginner
topic: Installing software with a package manager
forProject: linux-beginner-project-05
---

# Study: Install Software (Package Manager)

> **Words to know**
> - **Package** — software ready to install. In simple words: an app in a box.
> - **Package manager** — the tool that installs, updates, and removes packages.
> - **Repository (repo)** — an online store of packages.
> - **apt** — the package manager on Ubuntu/Debian. **dnf/yum** — on Fedora/RHEL.

## 1. Easy explanation (simple → deeper)
You do not download apps from random websites in Linux. You use a **package manager**. It gets safe software from a trusted **repository** and installs it for you.

Think of it like an app store, but in the terminal. 📦

Most likely you use **Ubuntu/Debian**, so your tool is **`apt`**.

## 2. Key concepts and terms
- **Update the list** — `sudo apt update` (refresh what is available).
- **Install** — `sudo apt install NAME`.
- **Remove** — `sudo apt remove NAME`.
- **Search** — `apt search NAME`.
- **Upgrade all** — `sudo apt upgrade`.

## 3. Practical examples
- Refresh + install a tool → `sudo apt update && sudo apt install tree`
- See where a tool lives → `which tree`
- Remove it → `sudo apt remove tree`

## 4. Commands and config examples
```bash
sudo apt update                 # refresh the package list
sudo apt install -y tree        # install "tree" (shows folder trees)
tree ~/myapp                    # use the new tool
which tree                      # show the path of the program
apt list --installed | wc -l    # count installed packages
sudo apt remove -y tree         # remove it
```
*(On Fedora/RHEL, swap `apt` for `dnf`: `sudo dnf install tree`.)*

## 5. Hands-on exercises
1. Run `sudo apt update`.
2. Install the tool `tree`.
3. Use `tree` on a folder.
4. Find where it lives with `which tree`.
5. Remove it with `sudo apt remove tree`.

## 6. Troubleshooting
- **Problem:** `E: Unable to locate package X`.
  **Fix:** run `sudo apt update` first. Check the name spelling.
- **Problem:** `Permission denied` / `are you root?`.
  **Fix:** installing needs root. Use `sudo`.

## 7. Common mistakes and how to avoid them
- Installing without `apt update` first — the list may be old.
- Downloading software from random sites — use the package manager, it is safer.

## 8. Certification notes (what the exam wants)
- On exam nodes you install tools with the package manager. Know `apt` (Debian/Ubuntu) and `dnf/yum` (RHEL/Fedora).
- For CKS you may install security tools (like `trivy`) this way.

## 9. Practice questions and tasks
1. Which command refreshes the package list?
2. How do you install `git`?
3. What is a repository?

## 10. References
- Ubuntu apt guide: https://ubuntu.com/server/docs/package-management (checked: 2026-09-18)
- Video: **NetworkChuck** — "Linux package managers" — https://www.youtube.com/@NetworkChuck (checked: 2026-09-18)

---
**Remember:** `sudo apt update` first, then `sudo apt install NAME`. Use the package manager, not random downloads.

<details><summary>Answers</summary>

1. `sudo apt update`.
2. `sudo apt install git`.
3. An online store of trusted packages.
</details>
