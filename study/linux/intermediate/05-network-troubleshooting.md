---
id: linux-intermediate-study-network-troubleshooting
track: linux
level: intermediate
topic: Network troubleshooting basics
forProject: linux-intermediate-project-05
---

# Study: Network Troubleshooting

> **Words to know**
> - **IP address** — the number address of a computer on a network.
> - **Port** — a numbered door on a computer for one service (like 22 for SSH, 80 for web).
> - **DNS** — the phone book that turns a name (google.com) into an IP address.
> - **Ping** — a test that asks "are you there?".

## 1. Easy explanation (simple → deeper)
When "the internet is down" or "the app cannot connect", you must find where it breaks. Networking has layers:
1. Do I have an IP address? (`ip a`)
2. Can I reach another computer? (`ping`)
3. Can I turn names into IPs? (`dig` / `nslookup` — this is DNS)
4. Is the service's port open? (`ss`, `curl`)

You check each step, in order, until you find the broken one.

## 2. Key concepts and terms
- **`ip a`** — show your IP addresses.
- **`ip r`** — show the routing table (the way out).
- **`ping HOST`** — test if a host answers.
- **`dig NAME`** or **`nslookup NAME`** — test DNS.
- **`ss -tlnp`** — show which ports are open and listening.
- **`curl URL`** — try to talk to a web service.

## 3. Practical examples
- My IP → `ip a`
- Can I reach Google? → `ping -c 3 8.8.8.8`
- Does DNS work? → `dig google.com +short`
- Is a web server up? → `curl -I http://localhost`
- What ports listen? → `sudo ss -tlnp`

## 4. Commands and config examples
```bash
ip a                       # my IP addresses
ip r                       # my routes (default gateway)
ping -c 3 8.8.8.8          # reach an IP (skips DNS)
ping -c 3 google.com       # reach a name (uses DNS)
dig google.com +short      # DNS lookup, short answer
sudo ss -tlnp              # listening TCP ports + program
curl -I https://example.com  # get just the headers
```

## 5. Hands-on exercises
1. Show your IP with `ip a`. Find your main IP.
2. Ping `8.8.8.8` three times. Then ping `google.com`.
3. Do a DNS lookup of `github.com`.
4. List listening ports with `sudo ss -tlnp`.

## 6. Troubleshooting (the ladder)
- `ping 8.8.8.8` works but `ping google.com` fails → **DNS problem** (names do not resolve).
- No IP from `ip a` → network interface is down or no DHCP.
- Service unreachable but host pings → check the **port** with `ss` or `curl`.

## 7. Common mistakes and how to avoid them
- Only testing names — also test raw IPs to separate DNS problems from network problems.
- Forgetting the firewall — a closed port can be a firewall rule.

## 8. Certification notes (what the exam wants)
- Kubernetes networking builds on this. In CKA/CKAD you debug Services and DNS inside the cluster with the same thinking: IP → route → DNS → port.
- Learn `curl` well — you test Services with it a lot.

## 9. Practice questions and tasks
1. `ping 8.8.8.8` works but `ping google.com` fails. What is broken?
2. Which command shows listening ports?
3. What does DNS do?

## 10. References
- Linux networking basics: https://ubuntu.com/server/docs/network-introduction (checked: 2026-09-18)
- Video: **NetworkChuck** — networking basics — https://www.youtube.com/@NetworkChuck (checked: 2026-09-18)

---
**Remember:** Check in order: IP → route → DNS → port. Test raw IPs and names to find the broken step.

<details><summary>Answers</summary>

1. DNS (names do not resolve, but the network works).
2. `ss -tlnp` (or `sudo ss -tlnp`).
3. Turns names into IP addresses.
</details>
