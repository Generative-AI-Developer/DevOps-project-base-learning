---
id: anthropic-advanced-project-02
track: anthropic
level: advanced
order: 2
title: "Connect Claude to Tools with MCP"
prereqs: ["anthropic-advanced-project-01"]
skills: ["MCP concept", "MCP connector shape", "trust/safety", "Claude Code MCP"]
certDomains: ["CCAR-F: system architecture", "CCAR-P: integrations"]
estimatedTime: "60–90 minutes"
---

# Connect Claude to Tools with MCP

**Status:** 🔒 Locked

## 1. Objective
Understand MCP and connect Claude to an MCP server (or clearly show the connector shape), so it can use ready-made tools.

## 2. Real-world scenario
Your team wants Claude to search company docs and read GitHub — without you writing every tool. MCP servers give these tools in a standard way.

## 3. Skills and concepts you will learn
- What MCP is and why it helps.
- The two-part connector (`mcp_servers` + `mcp_toolset`).
- Trust and safety with MCP.

## 4. Prerequisites
- Anthropic Advanced Project 1 completed.
- Read: `study/anthropic/advanced/02-mcp.md`.

## 5. Step-by-step requirements
1. Explain, in your own simple words, what an MCP server is and why MCP is useful (like a USB plug).
2. Find a real, trusted MCP server (from the MCP docs/list). Note 2–3 tools it offers.
3. Show the connector shape: the `mcp_servers` + `mcp_toolset` request (from the study doc).
4. If you can: connect an MCP server in **Claude Code** (or the app) and use one tool. Show what it did.
5. Write 2 sentences on MCP safety (only trust safe servers).

## 6. Tasks / challenges
- [ ] MCP explained simply.
- [ ] A real MCP server + its tools noted.
- [ ] Connector shape shown.
- [ ] (Bonus) A server actually used.
- [ ] Safety note written.

## 7. Expected outcome
You understand MCP and can connect a server to Claude (or clearly show how).

## 8. Acceptance criteria (how I grade it)
Passes only if ALL are true:
1. You explain MCP correctly in simple English (the "standard plug" idea).
2. You name a real MCP server and 2–3 of its tools.
3. You show the correct connector shape: `mcp_servers` AND a matching `mcp_toolset` tool (both halves), with the beta header.
4. You either actually use an MCP server (show the result) OR clearly walk through how you would.
5. Your safety note correctly says to trust only safe MCP servers.

## 9. Verification checklist
- [ ] MCP explained.
- [ ] Real server + tools.
- [ ] Correct connector shape.
- [ ] Safety note.
- [ ] Evidence saved in `submissions/anthropic/advanced/project-02/`.

## 10. Common mistakes
- Missing the `mcp_toolset` half.
- Forgetting the beta header.
- Trusting an unknown server.

## 11. Hints
<details><summary>Hint 1</summary>Use the connector example in `study/anthropic/advanced/02-mcp.md`, section 3.</details>
<details><summary>Hint 2</summary>Claude Code lets you add MCP servers in settings — a great place to try one safely.</details>
<details><summary>Hint 3</summary>Both halves: `mcp_servers=[{...,"name":"x"}]` AND `tools=[{"type":"mcp_toolset","mcp_server_name":"x"}]`.</details>

## 12. Final challenge
Compare: when would you write your **own** tools (Project 1 style) vs use an **MCP** server? Write 3 points for each. This is a real architecture decision (CCAR).

## 13. What to submit (evidence)
Save your MCP explanation, the server + tools, the connector shape, and your safety note in `submissions/anthropic/advanced/project-02/`. Then say: **"I submit Anthropic Advanced Project 2."**

---
**Remember:** MCP = standard plug for tools/data. Connect with `mcp_servers` + `mcp_toolset`. Trust only safe servers.
