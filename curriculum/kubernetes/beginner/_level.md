# Kubernetes — Beginner Level

Welcome to Kubernetes! ☸️ (People write it as **K8s** — "K", then 8 letters, then "s".)

> **In simple words:** Kubernetes runs and manages many containers for you, across many machines. It keeps your app running even when things break.

You already know containers (Docker). Kubernetes is the **manager** that runs lots of containers, restarts them if they die, and connects them together.

## What you will learn
1. kubectl and your cluster (Project 1).
2. Pods — the smallest unit (Project 2).
3. Deployments — run and update many copies (Project 3).
4. Services — stable networking for Pods (Project 4).
5. ConfigMaps — settings for your app (Project 5).
6. Secrets — sensitive settings (Project 6).
7. Namespaces and labels — organize things (Project 7).
8. Deploy a full app (Project 8 — level boss).

## Before you start (your lab)
You need a small cluster to practice. Easiest choices:
- **kind** (Kubernetes in Docker) — `kind create cluster`
- **minikube** — `minikube start`
Test it: `kubectl get nodes` should show at least one node.

## Exit criteria
Finish all 8 projects to complete Kubernetes Beginner. Then Kubernetes Intermediate unlocks.

**Remember:** You tell Kubernetes the **state you want** (in YAML). Kubernetes makes it real and keeps it that way.
