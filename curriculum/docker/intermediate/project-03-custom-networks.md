---
id: docker-intermediate-project-03
track: docker
level: intermediate
order: 3
title: "Isolate the Database with Custom Networks"
prereqs: ["docker-intermediate-project-02"]
skills: ["multiple networks", "isolation", "private backend", "least connectivity"]
certDomains: ["CKS: network isolation (foundation)"]
estimatedTime: "60 minutes"
---

# Isolate the Database with Custom Networks

**Status:** 🔒 Locked

## 1. Objective
Split your app into a frontend and a backend network so the database is private.

## 2. Real-world scenario
Security review: *"The database must not be reachable from the public part except through the web app."* You split the networks so the db is hidden.

## 3. Skills and concepts you will learn
- Define multiple networks in Compose.
- Attach a container to more than one network.
- Keep the database private (backend only).

## 4. Prerequisites
- Docker Intermediate Project 2 completed.
- Read: `study/docker/intermediate/03-custom-networks.md`.

## 5. Step-by-step requirements
1. Write a `compose.yaml` with two networks: `frontend` and `backend`.
2. `web` (nginx, port 8080) on **both** networks.
3. `db` (postgres) on **backend only**.
4. Add a `tester` service (alpine, `sleep 1000`) on **frontend only**.
5. Start it. Prove: `web` can reach `db`, but `tester` CANNOT reach `db`.

## 6. Tasks / challenges
- [ ] Two networks defined.
- [ ] web on both, db on backend only, tester on frontend only.
- [ ] web resolves/reaches db.
- [ ] tester fails to reach db (isolation proven).

## 7. Expected outcome
The database is private. Only the web app (on both networks) can reach it. The frontend-only tester cannot.

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You paste the `compose.yaml` showing two networks and the attachments.
2. `db` is attached to `backend` only (not frontend).
3. From `web`: `getent hosts db` (or a connection) **succeeds**.
4. From `tester`: reaching `db` by name **fails** (show the failure).
5. You explain in one sentence why `tester` failed.
6. You clean up with `docker compose down`.

## 9. Verification checklist
- [ ] db is backend-only.
- [ ] web reaches db.
- [ ] tester cannot reach db.
- [ ] Evidence saved in `submissions/docker/intermediate/project-03/`.

## 10. Common mistakes
- Putting db on frontend too — breaks the isolation.
- Forgetting web needs BOTH networks.

## 11. Hints
<details><summary>Hint 1</summary>See the two-network example in `study/docker/intermediate/03-custom-networks.md`, section 3. Add a `tester` on `[frontend]` only.</details>
<details><summary>Hint 2</summary>Test from tester: `docker compose exec tester getent hosts db` → should find nothing.</details>
<details><summary>Hint 3</summary>tester fails because it shares no network with db, so it cannot resolve or reach it.</details>

## 12. Final challenge
Draw (in text) a small diagram of your two networks and which service is on which. Label which connection is allowed and which is blocked. This is how you plan Kubernetes NetworkPolicies later.

## 13. What to submit (evidence)
Save `compose.yaml`, the success + failure proofs, and your explanation in `submissions/docker/intermediate/project-03/`. Then say: **"I submit Docker Intermediate Project 3."**

---
**Remember:** Split networks to hide private parts. Connect only what must connect.
