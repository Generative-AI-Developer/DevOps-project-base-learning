---
id: linux-intermediate-study-systemd-services
track: linux
level: intermediate
topic: Writing your own systemd service
forProject: linux-intermediate-project-03
---

# Study: Write Your Own systemd Service

> **Words to know**
> - **systemd** — the manager that starts and controls services on boot.
> - **Unit file** — a small config file that describes a service. Ends in `.service`.
> - **Enable** — make a service start automatically on boot.
> - **Start** — run the service now.

## 1. Easy explanation (simple → deeper)
A **service** is a program that runs in the background. You can make your **own** service so Linux keeps it running and starts it on boot.

You do this by writing a small **unit file**. Then systemd takes care of the rest: starting, stopping, restarting, and logging.

## 2. Key concepts and terms
- Unit files live in `/etc/systemd/system/NAME.service`.
- Three main parts:
  - `[Unit]` — description and order.
  - `[Service]` — what to run (`ExecStart`).
  - `[Install]` — when to start (`WantedBy`).
- After you write or change a unit, run `sudo systemctl daemon-reload`.

## 3. Practical examples
A service that runs a script forever:
```ini
[Unit]
Description=My Hello Service
After=network.target

[Service]
ExecStart=/home/you/hello-loop.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## 4. Commands and config examples
```bash
# the script the service runs (hello-loop.sh)
#!/bin/bash
while true; do
  echo "Hello at $(date)"
  sleep 10
done
```
```bash
sudo nano /etc/systemd/system/hello.service   # write the unit (see example above)
sudo systemctl daemon-reload                   # reload systemd config
sudo systemctl start hello                      # start now
sudo systemctl status hello                     # check it
sudo systemctl enable hello                      # start on boot
journalctl -u hello -f                           # watch its logs live
sudo systemctl stop hello                        # stop it
```

## 5. Hands-on exercises
1. Make `hello-loop.sh` (runnable) that prints the time every 10 seconds.
2. Write `hello.service` to run it.
3. `daemon-reload`, `start`, and `status`. See it "active (running)".
4. Watch its logs with `journalctl -u hello -f`.

## 6. Troubleshooting
- **Problem:** service fails right away.
  **Fix:** check `systemctl status hello` and `journalctl -u hello`. Common causes: wrong path in `ExecStart`, or the script is not runnable (`chmod +x`).
- **Problem:** you changed the unit but nothing changed.
  **Fix:** run `sudo systemctl daemon-reload`.

## 7. Common mistakes and how to avoid them
- Wrong path in `ExecStart` — use the full path.
- Script not runnable — `chmod +x`.
- Forgetting `daemon-reload` after editing.

## 8. Certification notes (what the exam wants)
- Kubernetes runs `kubelet` as a systemd service. In CKA you check and fix it: `systemctl status kubelet`, `journalctl -u kubelet`, then restart.
- Knowing unit files helps you fix a broken node.

## 9. Practice questions and tasks
1. Where do custom unit files go?
2. What does `enable` do (vs `start`)?
3. What command reloads systemd after editing a unit?

## 10. References
- systemd unit docs: https://www.freedesktop.org/software/systemd/man/systemd.service.html (checked: 2026-09-18)
- Video: **Learn Linux TV** — "Create a systemd service" — https://www.youtube.com/c/LearnLinuxTV (checked: 2026-09-18)

---
**Remember:** Unit file → `daemon-reload` → `start` → `enable`. `status` and `journalctl` show problems.

<details><summary>Answers</summary>

1. `/etc/systemd/system/`.
2. `enable` makes it start on boot; `start` runs it now.
3. `sudo systemctl daemon-reload`.
</details>
