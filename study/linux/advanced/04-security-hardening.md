---
id: linux-advanced-study-security-hardening
track: linux
level: advanced
topic: Server security hardening
forProject: linux-advanced-project-04
---

# Study: Security Hardening

> **Words to know**
> - **Hardening** — making a server safer by closing weak points.
> - **SSH** — the secure way to log in to a server over the network.
> - **Key-based login** — logging in with a secret key file instead of a password.
> - **Least privilege** — give each user the smallest access they need.

## 1. Easy explanation (simple → deeper)
A default server has weak points. **Hardening** closes them. The most important areas:
1. **SSH** — turn off password login, use keys, do not allow root to log in directly.
2. **Users and sudo** — give only needed access.
3. **Updates** — keep software patched.
4. **Firewall** — open only needed ports (you did this in Project 2).
5. **Fewer services** — turn off what you do not use.

## 2. Key concepts and terms
- **SSH keys:** `ssh-keygen` makes a key pair. The public key goes on the server.
- **SSH config** is in `/etc/ssh/sshd_config`:
  - `PermitRootLogin no` — root cannot log in directly.
  - `PasswordAuthentication no` — only keys allowed (do this **after** keys work!).
- **sudo:** users in the `sudo` group can run admin commands. Check `/etc/sudoers` carefully.
- **Updates:** `sudo apt update && sudo apt upgrade`.
- **fail2ban:** a tool that blocks IPs after too many failed logins.

## 3. Practical examples
- Make a key → `ssh-keygen -t ed25519`
- Harden SSH → edit `/etc/ssh/sshd_config`, then `sudo systemctl restart ssh`
- See who has sudo → `getent group sudo`
- Keep updated → `sudo apt update && sudo apt upgrade -y`

## 4. Commands and config examples
```bash
ssh-keygen -t ed25519 -C "you@example.com"   # make an SSH key pair
# copy your public key to a server:
ssh-copy-id user@server

# in /etc/ssh/sshd_config (edit with sudo):
# PermitRootLogin no
# PasswordAuthentication no     # ONLY after key login works!
sudo systemctl restart ssh

getent group sudo               # who can use sudo
sudo apt update && sudo apt upgrade -y
```
> ⚠️ **Big warning:** never turn off password login until key login works. Or you can lock yourself out.

## 5. Hands-on exercises
1. Make an SSH key with `ssh-keygen`. Look at the two files it created (private + `.pub`).
2. Read `/etc/ssh/sshd_config`. Find `PermitRootLogin`.
3. List who is in the `sudo` group.
4. Run system updates.

## 6. Troubleshooting
- **Problem:** locked out after disabling passwords.
  **Fix:** you need console/physical access to fix `sshd_config`. Always test keys first.
- **Problem:** SSH change did not apply.
  **Fix:** restart the service: `sudo systemctl restart ssh`.

## 7. Common mistakes and how to avoid them
- Disabling password login before keys work — you get locked out.
- Too many sudo users — give admin rights only to those who need them.
- Forgetting updates — old software has known holes.

## 8. Certification notes (what the exam wants)
- **CKS** is all about hardening: SSH, least privilege, minimal services, and keeping things patched.
- The same mindset applies to Kubernetes: least privilege (RBAC), small images, few open ports.

## 9. Practice questions and tasks
1. Why use SSH keys instead of passwords?
2. What does `PermitRootLogin no` do?
3. What is least privilege?

## 10. References
- SSH hardening (Ubuntu): https://ubuntu.com/server/docs/service-openssh (checked: 2026-09-18)
- CIS Benchmarks (hardening guides): https://www.cisecurity.org/cis-benchmarks (checked: 2026-09-18)

---
**Remember:** Keys not passwords, no direct root, least privilege, stay updated, open only needed ports.

<details><summary>Answers</summary>

1. Keys are much harder to guess/steal than passwords.
2. It stops the root user from logging in directly over SSH.
3. Giving each user or program only the access it truly needs.
</details>
