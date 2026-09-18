# My Study Plan — 3 to 4 Hours a Day (Parallel: DevOps + Anthropic)

**Goal:** become job-ready and score strongly on CKAD, CKA, CKS (and learn the Anthropic certs too).
**Pace:** 3–4 hours a day, 6 days a week (1 rest day). About **21 hours a week**.
**Finish in:** about **15 weeks (3.5–4 months)**.

> Keep it in simple steps. Small daily progress beats big rare bursts.

---

## Your daily rhythm (how to split each day)

| Block | Time | What you do |
|---|---|---|
| **Block A — Main path** | ~2.5 hours | One Kubernetes-line project (Linux → Docker → Kubernetes → certs): study → build → submit to Claude |
| **Block B — Side path** | ~1 hour | One Anthropic lesson/project (smaller, lighter) |
| **Rest** | — | 1 full day off each week |

- On **heavy lab days** (kubeadm, etcd, capstone), make Block A longer and Block B just 30 minutes.
- **Saturday** = practice + mock exams + fixing weak areas (no new projects).
- **One rest day** (e.g. Sunday) = light review only, or nothing.
- After every finished project, tell Claude "I submit ..." and re-run `node scripts/build-reader.mjs` to update your reader.

---

## The 15-week plan

### Phase 1 — Linux (Weeks 1–3)
| Week | Main path (DevOps) | Side path (Anthropic) |
|---|---|---|
| **1** | Linux **Beginner** P1–P6 | Anthropic **Beginner** P1–P3 |
| **2** | Linux **Intermediate** P1–P6 | Anthropic Beginner P4–P5, **Intermediate** P1 |
| **3** | Linux **Advanced** P1–P6 (finish Linux ✅) | Anthropic Intermediate P2–P4 |

### Phase 2 — Docker (Weeks 4–6)
| Week | Main path | Side path |
|---|---|---|
| **4** | Docker **Beginner** P1–P6 | Anthropic Intermediate P5–P6, **Advanced** P1 |
| **5** | Docker **Intermediate** P1–P7 | Anthropic Advanced P2–P3 |
| **6** | Docker **Advanced** P1–P7 (finish Docker ✅) | Anthropic Advanced P4–P6 (finish Anthropic B/I/A ✅) |

### Phase 3 — Kubernetes core (Weeks 7–10)
| Week | Main path | Side path |
|---|---|---|
| **7** | K8s **Beginner** P1–P8 | Anthropic Cert **CCAO-F** P1–P4 + mock |
| **8** | K8s **Intermediate** P1–P8 | Anthropic Cert **CCDV-F** P1–P5 + mock |
| **9** | K8s **Advanced** P1–P5 (set up a real lab: kubeadm/killercoda) | Anthropic Cert **CCAR-F** P1–P3 |
| **10** | K8s **Advanced** P6–P10 (finish Advanced ✅: etcd, RBAC, DR) | Anthropic Cert CCAR-F P4–P5 + mock |

### Phase 4 — Kubernetes certifications (Weeks 11–13)
| Week | Main path | Side path |
|---|---|---|
| **11** | **CKAD** drills P1–P4 + Mock Exam (fix weak areas) | Anthropic Cert **CCAR-P** P1–P5 + mock (finish Anthropic ✅) |
| **12** | **CKA** drills P1–P4 + Mock Exam (fix weak areas) | Light review / killer.sh practice |
| **13** | **CKS** drills P1–P5 + Mock Exam (needs CKA done first) | Light review |

### Phase 5 — Capstone + exam sprint (Weeks 14–15)
| Week | Focus |
|---|---|
| **14** | Build the **DevOps Capstone** (the full production system) |
| **15** | Finish Capstone + **game-day** recovery test. Retake weak mocks. Do killer.sh / killercoda timed practice before any real exam. |

---

## Weekly checklist (repeat every week)
- [ ] Did my Main-path projects for the week.
- [ ] Did my Anthropic side lessons.
- [ ] Saturday: took a mock OR fixed a weak area.
- [ ] Submitted each finished project to Claude and got it marked ✅.
- [ ] Re-ran `build-reader.mjs` + `build-dashboard.mjs` to update my pages.
- [ ] Took my 1 rest day.

## Before you book a real exam
- Do a **2-week single-focus sprint** on that one cert (pause the side path).
- Score **80%+** on the mock, twice, with time to spare.
- Practice on **killer.sh** (official simulator) or **killercoda** free labs.

---

## Simple rules to keep you going
1. **Show up daily.** 3 hours every day beats 20 hours once a week.
2. **Type everything yourself.** Do not just read.
3. **Submit for evaluation.** Let Claude check your work and unlock the next stage.
4. **Fix weak areas before moving on.** The mocks will point them out.
5. **Rest one day.** Your brain learns while you rest.

**Remember:** Main path = Kubernetes (about 70% of your time). Side path = Anthropic (about 30%). Both finish around the same time. You've got this. 💪
