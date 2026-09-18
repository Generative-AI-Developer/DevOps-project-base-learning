---
id: linux-advanced-project-02
track: linux
level: advanced
order: 2
title: "Control Routing and Build a Firewall"
prereqs: ["linux-advanced-project-01"]
skills: ["ip route", "ufw", "least exposure", "port rules"]
certDomains: ["CKS: host firewall / limit exposure (foundation)"]
estimatedTime: "60–90 minutes"
---

# Control Routing and Build a Firewall

**Status:** 🔒 Locked

## 1. Objective
Read your machine's routes, then build a safe firewall that allows only the ports you need.

## 2. Real-world scenario
Security review: *"This server has too many open doors. Close everything, then open only SSH and web."* Fewer open ports means a safer server. You must set this up without locking yourself out.

## 3. Skills and concepts you will learn
- Read routes and the default gateway (`ip r`).
- Build firewall rules with `ufw`.
- The idea of least exposure (open only what is needed).

## 4. Prerequisites
- Advanced Project 1 completed.
- Read: `study/linux/advanced/02-advanced-networking.md`.
- ⚠️ If you do this on a **remote** server, allow SSH (22) BEFORE enabling the firewall.

## 5. Step-by-step requirements
1. Show your interfaces and IPs (`ip -br a`).
2. Show your default gateway (`ip r`).
3. Set ufw defaults: deny incoming, allow outgoing.
4. Allow SSH (22) and web (80, 443).
5. Enable ufw (safe on your own local machine).
6. Show the final rules with `sudo ufw status numbered`.

## 6. Tasks / challenges
- [ ] Show IPs and default route.
- [ ] Set default deny-incoming / allow-outgoing.
- [ ] Allow 22, 80, 443.
- [ ] Enable and show the rules.
- [ ] Explain "least exposure" in one sentence.

## 7. Expected outcome
Your firewall blocks all incoming by default and allows only SSH and web. You can show the routes and the rules.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `ip -br a` and `ip r` outputs shown (IPs + default route).
2. You set `ufw default deny incoming` and `ufw default allow outgoing`.
3. Rules allow **22, 80, 443** (show `ufw status numbered`).
4. The firewall is enabled (status shows "active"), OR you clearly explain you kept it disabled for safety and show the rules that *would* apply.
5. You explain "least exposure" correctly.
6. You show all commands.

## 9. Verification checklist
- [ ] Routes shown.
- [ ] Default deny incoming set.
- [ ] Only needed ports open.
- [ ] Evidence saved in `submissions/linux/advanced/project-02/`.

## 10. Common mistakes
- Enabling ufw before allowing SSH on a remote box → locked out.
- Opening extra ports "just in case" → less safe.

## 11. Hints
<details><summary>Hint 1</summary>Order: set defaults → allow 22 → allow 80,443 → enable → status.</details>
<details><summary>Hint 2</summary>`sudo ufw default deny incoming`; `sudo ufw default allow outgoing`; `sudo ufw allow 22/tcp`; `sudo ufw allow 80,443/tcp`; `sudo ufw enable`; `sudo ufw status numbered`.</details>
<details><summary>Hint 3</summary>Least exposure = open only the doors you truly need; block the rest.</details>

## 12. Final challenge
Add a rule that allows SSH **only from one IP** (for example your own): `sudo ufw allow from <your-ip> to any port 22`. Then remove the broad `allow 22` rule. This is tighter security.

## 13. What to submit (evidence)
Save route output, all ufw commands, and `ufw status numbered` in `submissions/linux/advanced/project-02/`. Then say: **"I submit Linux Advanced Project 2."**

---
**Remember:** Deny by default, allow only what you need, and never block your own SSH by accident.
