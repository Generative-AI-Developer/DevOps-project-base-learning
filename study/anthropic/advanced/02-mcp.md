---
id: anthropic-advanced-study-mcp
track: anthropic
level: advanced
topic: MCP (Model Context Protocol)
forProject: anthropic-advanced-project-02
---

# Study: MCP (Connect Claude to Tools and Data)

> **Words to know**
> - **MCP** — Model Context Protocol. A standard way to connect Claude to outside tools and data.
> - **MCP server** — a program that offers tools/data over MCP (e.g. a GitHub server, a database server).
> - **Connector** — the setting that plugs an MCP server into your Claude request.
> - **Standard** — an agreed shape so many tools work the same way.

## 1. Easy explanation (simple → deeper)
In tool use, you write each tool by hand. That is fine for a few tools. But there are already many ready-made tools out there: GitHub, Google Drive, databases, and more.

**MCP** is a **standard plug**. An **MCP server** offers tools in a standard shape. You plug it into Claude, and Claude can use those tools — without you writing each one.

Think of MCP like a USB port: one standard plug, many devices. 🔌

## 2. Key concepts and terms
- An MCP server offers tools (and sometimes data/resources).
- You connect it with **two parts** in your request:
  1. `mcp_servers` — the server (its url and name).
  2. `tools` — an `mcp_toolset` that points to that server by name.
- This uses a beta header (`mcp-client-2025-11-20`).
- Managed Agents and Claude Code can also use MCP servers.

## 3. Practical examples
```python
# connect an MCP server (both halves are required)
msg = client.beta.messages.create(
    model="claude-opus-5", max_tokens=1000,
    betas=["mcp-client-2025-11-20"],
    mcp_servers=[{"type": "url", "url": "https://example-mcp-server.com", "name": "docs"}],
    tools=[{"type": "mcp_toolset", "mcp_server_name": "docs"}],
    messages=[{"role": "user", "content": "Search the docs for 'rate limits'."}],
)
```

## 4. Commands and config examples
```text
# In Claude Code or the Claude app, you add MCP servers in settings.
# In the API, use mcp_servers + an mcp_toolset tool as above.
```

## 5. Hands-on exercises
1. Read the MCP intro docs. Write in your own words what an MCP server is.
2. Find one public MCP server (from the MCP docs/list). Note what tools it offers.
3. (If you have access) connect an MCP server in Claude Code and use one of its tools.

## 6. Troubleshooting
- **Problem:** "validation error" when adding `mcp_servers`.
  **Fix:** you must ALSO add the matching `mcp_toolset` tool (both halves), plus the beta header.
- **Problem:** the server does not respond.
  **Fix:** check the server url and that it is running/allowed.

## 7. Common mistakes and how to avoid them
- Adding `mcp_servers` without the `mcp_toolset` tool.
- Forgetting the beta header.
- Trusting an unknown MCP server — only use servers you trust (they can run tools).

## 8. Certification notes (what the exam wants)
- **CCAR-F / CCAR-P:** know what MCP is and why it matters (standard way to connect tools/data).
- Know the two-part connector shape.

## 9. Practice questions and tasks
1. What problem does MCP solve?
2. What are the two parts needed to connect an MCP server in the API?
3. Why be careful which MCP servers you trust?

## 10. References
- MCP: https://modelcontextprotocol.io/ (checked: 2026-09-18)
- MCP connector (Anthropic): https://docs.anthropic.com/en/docs/agents-and-tools/mcp (checked: 2026-09-18)

---
**Remember:** MCP = a standard plug (like USB) for tools and data. Connect a server with `mcp_servers` + an `mcp_toolset` tool. Trust only safe servers.

<details><summary>Answers</summary>

1. It gives a standard way to connect Claude to many outside tools and data, without writing each tool by hand.
2. `mcp_servers` (the server) and a `tools` entry of type `mcp_toolset` pointing to it (plus the beta header).
3. An MCP server can run tools/actions — a bad one could do harm.
</details>
