---
id: linux-intermediate-project-05
track: linux
level: intermediate
order: 5
title: "Find the Broken Network Step"
prereqs: ["linux-intermediate-project-04"]
skills: ["ip", "ping", "dig/nslookup", "ss", "curl", "DNS reasoning"]
certDomains: ["CKA/CKAD: services & networking (foundation)"]
estimatedTime: "60 minutes"
---

# Find the Broken Network Step

**Status:** 🔒 Locked

## 1. Objective
Learn the network troubleshooting ladder: IP → route → DNS → port. Use the right tool at each step.

## 2. Real-world scenario
A user says: *"The website will not open."* You must find where it breaks: no IP? no route? DNS? closed port? You check each step, in order, and report what you found.

## 3. Skills and concepts you will learn
- Check your IP and route (`ip a`, `ip r`).
- Test reach (`ping`).
- Test DNS (`dig`/`nslookup`).
- Test ports and web (`ss`, `curl`).

## 4. Prerequisites
- Intermediate Project 4 completed.
- Read: `study/linux/intermediate/05-network-troubleshooting.md`.

## 5. Step-by-step requirements
1. Show your IP address and your default route.
2. Ping `8.8.8.8` (raw IP) three times.
3. Ping `google.com` (a name) three times.
4. Do a DNS lookup of `github.com` and show the IP.
5. List listening ports on your machine.
6. Use `curl -I` on a public website and show the response headers.
7. Write a short "diagnosis": is your network, DNS, and internet all working? How do you know?

## 6. Tasks / challenges
- [ ] Show IP + route.
- [ ] Ping a raw IP and a name.
- [ ] DNS lookup returns an IP.
- [ ] List listening ports.
- [ ] `curl -I` a website.
- [ ] Write a 2–3 sentence diagnosis.

## 7. Expected outcome
You can show that your network, DNS, and internet work — and you can explain how each test proves it.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. `ip a` (IP) and `ip r` (route) output shown.
2. `ping 8.8.8.8` and `ping google.com` outputs shown (3 packets each).
3. A DNS lookup (`dig ... +short` or `nslookup`) returns an IP for `github.com`.
4. `sudo ss -tlnp` output shown (listening ports).
5. `curl -I <website>` shows response headers (like `HTTP/...`).
6. Your diagnosis correctly connects each test to what it proves (IP → route → DNS → port).

## 9. Verification checklist
- [ ] All 4 layers tested.
- [ ] Diagnosis explains the results.
- [ ] Evidence saved in `submissions/linux/intermediate/project-05/`.

## 10. Common mistakes
- Testing only names — always test a raw IP too, to separate DNS from network.
- Forgetting `sudo` for `ss -tlnp` (some info needs root).

## 11. Hints
<details><summary>Hint 1</summary>Do the tests in order: `ip a` → `ip r` → `ping 8.8.8.8` → `ping google.com` → `dig github.com +short` → `ss -tlnp` → `curl -I`.</details>
<details><summary>Hint 2</summary>For the diagnosis: if the raw IP ping works but the name ping fails, DNS is the problem. If both work, network + DNS are fine.</details>
<details><summary>Hint 3</summary>See the "ladder" in `study/linux/intermediate/05-network-troubleshooting.md`, section 6.</details>

## 12. Final challenge
Start a tiny web server on your machine: `python3 -m http.server 8080` (in another terminal). Then use `ss -tlnp | grep 8080` and `curl -I http://localhost:8080` to prove the port is open and serving.

## 13. What to submit (evidence)
Save all command outputs + your diagnosis in `submissions/linux/intermediate/project-05/`. Then say: **"I submit Linux Intermediate Project 5."**

---
**Remember:** IP → route → DNS → port. Test each step in order. That is how pros find the broken part fast.
