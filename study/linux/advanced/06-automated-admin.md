---
id: linux-advanced-study-automated-admin
track: linux
level: advanced
topic: Automated infrastructure administration
forProject: linux-advanced-project-06
---

# Study: Automated Server Administration

> **Words to know**
> - **Idempotent** — safe to run many times; the result is the same. In simple words: running it twice does not cause harm.
> - **Provisioning** — setting up a server so it is ready to use.
> - **Runbook** — a written list of steps to run a task.
> - **Infrastructure as Code (IaC)** — describing servers in files, not by hand.

## 1. Easy explanation (simple → deeper)
A senior engineer does not set up servers by hand every time. They **automate** it with scripts. One script can: create users, install tools, set the firewall, and make backups — all correctly, every time.

A key idea is **idempotent**: running the script twice should be safe. For example, use `mkdir -p` (does nothing if the folder exists) instead of `mkdir` (errors if it exists).

This is the doorway to real DevOps tools like Ansible and Terraform, which do the same thing at a bigger scale.

## 2. Key concepts and terms
- **Idempotent commands:** `mkdir -p`, `id user || useradd user`, `grep -q ... || echo ... >> file`.
- **Check-then-act:** only make a change if it is needed.
- **Logging + exit codes:** know what ran and if it worked.
- **Config in one place:** put settings (users, packages) at the top of the script.

## 3. Practical examples
```bash
# make a user only if it does not exist (idempotent)
id alice >/dev/null 2>&1 || sudo useradd -m alice

# install a package only if missing
command -v git >/dev/null || sudo apt install -y git

# add a line to a file only once
grep -q "MY_SETTING=1" /etc/environment || echo "MY_SETTING=1" | sudo tee -a /etc/environment
```

## 4. Commands and config examples
```bash
#!/bin/bash
set -euo pipefail
PACKAGES=(git curl tree)
for p in "${PACKAGES[@]}"; do
  command -v "$p" >/dev/null || sudo apt install -y "$p"
done
echo "All tools ready."
```

## 5. Hands-on exercises
1. Write a loop that installs a list of tools only if they are missing.
2. Write an idempotent "make folder" step with `mkdir -p`.
3. Add a line to a file only if it is not already there.

## 6. Troubleshooting
- **Problem:** the script errors on the second run.
  **Fix:** it is not idempotent. Use check-then-act (`|| `, `-p`, `grep -q`).
- **Problem:** a step needs root.
  **Fix:** use `sudo` for that step, or run the whole thing with the right rights.

## 7. Common mistakes and how to avoid them
- Not idempotent — second run breaks. Always check before you change.
- No logging — you cannot see what happened.
- Doing everything as root without care — keep least privilege.

## 8. Certification notes (what the exam wants)
- This mindset (declare what you want, make it true, safely) is the heart of Kubernetes too. You declare a desired state in YAML, and Kubernetes makes it real.
- Understanding idempotency helps you learn Ansible, Terraform, and Kubernetes faster.

## 9. Practice questions and tasks
1. What does idempotent mean?
2. How do you install a package only if it is missing?
3. Why is idempotency important for automation?

## 10. References
- Ansible intro (concept): https://docs.ansible.com/ansible/latest/getting_started/index.html (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Ansible / IaC basics" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** Automate with check-then-act. Make scripts idempotent so running twice is safe.

<details><summary>Answers</summary>

1. Safe to run many times; the result stays the same.
2. `command -v git >/dev/null || sudo apt install -y git`.
3. So re-runs do not cause errors or damage — automation must be safe to repeat.
</details>
