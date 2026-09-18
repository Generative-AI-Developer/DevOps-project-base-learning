---
id: docker-beginner-study-networking
track: docker
level: beginner
topic: Container networking basics
forProject: docker-beginner-project-05
---

# Study: Container Networking Basics

> **Words to know**
> - **Port** — a numbered door for a service.
> - **Publish a port** — connect a container port to your machine (`-p`).
> - **Docker network** — a private network where containers can talk to each other.
> - **DNS by name** — on a user network, containers find each other by their name.

## 1. Easy explanation (simple → deeper)
Two networking needs:
1. **Reach a container from outside** — publish a port with `-p host:container`.
2. **Let containers talk to each other** — put them on the same **Docker network**. Then they find each other **by name**.

The default `bridge` network does NOT give name-based DNS. So you make your **own** network for apps that talk to each other.

## 2. Key concepts and terms
- **`-p 8080:80`** — publish container port 80 as host 8080.
- **`docker network create appnet`** — make a user network.
- **`--network appnet`** — put a container on it.
- On a user network, a container named `db` is reachable at the hostname `db`.
- **`docker network ls`** and **`docker network inspect`** — see networks.

## 3. Practical examples
```bash
docker network create appnet
docker run -d --name db --network appnet redis:7
docker run -d --name app --network appnet alpine sleep 1000
# now from "app", "db" is reachable by the name "db"
docker exec app ping -c 2 db
```

## 4. Commands and config examples
```bash
docker network create appnet         # make a private network
docker network ls                    # list networks
docker run -d --name web --network appnet -p 8080:80 nginx:1.27
docker exec web getent hosts db      # name lookup on the network
docker network inspect appnet        # details, connected containers
```

## 5. Hands-on exercises
1. Create a network `appnet`.
2. Run two containers on it: `db` (redis) and `app` (alpine with `sleep 1000`).
3. From `app`, ping `db` by name. It should work.
4. Run a third container NOT on the network. Try to ping `db` — it should fail.

## 6. Troubleshooting
- **Problem:** container cannot reach another by name.
  **Fix:** they must be on the **same user network**. The default bridge does not do name DNS.
- **Problem:** cannot open the app in a browser.
  **Fix:** you did not publish the port. Add `-p host:container`.

## 7. Common mistakes and how to avoid them
- Expecting name DNS on the default bridge — it does not work there. Make a user network.
- Confusing publish (`-p`, for outside access) with network (for container-to-container).

## 8. Certification notes (what the exam wants)
- **CKAD/CKA:** Kubernetes Services give Pods stable names and networking. This is the same idea as Docker name-based DNS, but bigger.
- Understanding "same network → talk by name" helps you understand Kubernetes Services.

## 9. Practice questions and tasks
1. How do you reach a container from your browser?
2. How do two containers talk to each other by name?
3. Does the default bridge give name-based DNS?

## 10. References
- Docker networking: https://docs.docker.com/network/ (checked: 2026-09-18)
- Video: **TechWorld with Nana** — "Docker networking" — https://www.youtube.com/@TechWorldwithNana (checked: 2026-09-18)

---
**Remember:** `-p` opens a door to the outside. A user network lets containers talk by name.

<details><summary>Answers</summary>

1. Publish a port with `-p host:container`.
2. Put them on the same user-created Docker network; then they use each other's names.
3. No — you need a user-created network for name-based DNS.
</details>
