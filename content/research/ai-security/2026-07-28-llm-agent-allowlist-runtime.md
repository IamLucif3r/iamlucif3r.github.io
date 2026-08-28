---
title: Sandboxing an LLM agent — what "allow-list" actually means at runtime
date: 2026-07-28
summary: The prompt says the agent can only touch three tools. The runtime has no idea the prompt exists.
---

Every agent framework ships a config that reads like a security control: `allowed_tools: [read_file, search, send_email]`. It looks like an allow-list. It is not one — it's a suggestion, enforced by whether the model feels like following it that day.

## Where the gap actually is

- The allow-list lives in the prompt or the framework's Python layer, not in the process boundary.
- If the agent can shell out, read arbitrary paths, or hit an unrestricted network, the "allow-list" is cosmetic the moment a clever prompt (or a poisoned tool response) convinces the model to ignore it.
- Logging what the agent *said* it did is not the same as logging what the *process* did.

## What I'm actually testing

Wrapping agent execution in the same primitives I'd use for any untrusted workload: a restricted filesystem view, an explicit egress allow-list enforced at the network layer (not the prompt layer), and syscall-level tracing so "the agent read `/etc/passwd`" shows up regardless of what the transcript claims happened.

Early read: the honest allow-list is enforced by the kernel, not the system prompt. Everything else is a nice comment.
