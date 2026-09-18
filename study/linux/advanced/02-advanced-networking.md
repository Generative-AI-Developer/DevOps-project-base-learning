---
id: linux-advanced-study-advanced-networking
track: linux
level: advanced
topic: Routing and firewalls
forProject: linux-advanced-project-02
---

# Study: Advanced Networking (Routing + Firewall)

> **Words to know**
> - **Route** — the path packets take to leave your machine.
> - **Gateway** — the door to other networks (usually your router).
> - **Firewall** — a guard that allows or blocks network traffic by rules.
> - **iptables / nftables / ufw** — tools to set firewall rules. `ufw` is the easy one.

## 1. Easy explanation (simple → deeper)
Two big topics:
1. **Routing** — how your machine decides where to send packets. The **default route** (gateway) is the way out to the internet.
2. **Firewall** — rules that allow or block traffic. You open only the ports you need (like 22 for SSH, 80/443 for web) and block the rest.

Blocking the rest is called **least exposure**. Fewer open doors = safer server.

## 2. Key concepts and terms
- **`ip r`** — show routes. The `default via X` line is your gateway.
- **`ufw`** (Uncomplicated Firewall) — easy front-end for the firewall:
  - `sudo ufw allow 22/tcp` — allow SSH.
  - `sudo ufw deny 23` — block a port.
  - `sudo ufw enable` — turn the firewall on.
  - `sudo ufw status numbered` — show rules.
- **iptables/nftables** — the lower-level tools. Kubernetes uses iptables/nftables under the hood.

## 3. Practical examples
- See gateway → `ip r | grep default`
- Allow SSH only → `sudo ufw allow 22/tcp`
- Turn on firewall → `sudo ufw enable`
- List rules → `sudo ufw status verbose`

## 4. Commands and config examples
```bash
ip r                          # routes; find "default via ..."
ip -br a                      # short view of interfaces + IPs
sudo ufw default deny incoming    # block all incoming by default
sudo ufw default allow outgoing   # allow your machine to reach out
sudo ufw allow 22/tcp             # allow SSH in
sudo ufw allow 80,443/tcp         # allow web in
sudo ufw enable                   # turn it on
sudo ufw status numbered          # see the rules
```
> ⚠️ **Careful on a remote server:** if you block port 22 by mistake, you lock yourself out. Always allow SSH first.

## 5. Hands-on exercises
1. Show your default gateway with `ip r`.
2. Check firewall status: `sudo ufw status`.
3. (Safe practice) Allow port 22 and port 80. List the rules. (You can leave ufw disabled if you are unsure.)

## 6. Troubleshooting
- **Problem:** cannot reach the internet, but you have an IP.
  **Fix:** check the default route (`ip r`). No default route = no way out.
- **Problem:** a service is running but not reachable from outside.
  **Fix:** the firewall may block the port. Allow it with `ufw allow`.

## 7. Common mistakes and how to avoid them
- Enabling ufw before allowing SSH — you get locked out of a remote box. Allow 22 first.
- Opening too many ports — open only what you need.

## 8. Certification notes (what the exam wants)
- **CKS** cares about limiting exposure and host firewalls.
- Kubernetes `NetworkPolicies` are like firewalls *inside* the cluster. Same idea: allow only what is needed.

## 9. Practice questions and tasks
1. What is the default route?
2. Which command allows SSH through ufw?
3. Why allow SSH before enabling the firewall on a remote server?

## 10. References
- ufw guide: https://help.ubuntu.com/community/UFW (checked: 2026-09-18)
- Video: **NetworkChuck** — "Linux firewall (ufw)" — https://www.youtube.com/@NetworkChuck (checked: 2026-09-18)

---
**Remember:** Know your default route. Open only needed ports. Allow SSH first, then enable the firewall.

<details><summary>Answers</summary>

1. The path used when no other route matches — the way out to the internet (your gateway).
2. `sudo ufw allow 22/tcp`.
3. So you do not lock yourself out of the remote machine.
</details>
