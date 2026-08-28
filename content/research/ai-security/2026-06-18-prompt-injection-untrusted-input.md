---
title: Prompt injection is just untrusted input, and we forgot
date: 2026-06-18
summary: We spent twenty years learning not to trust user input, then built agents that trust every input by default.
---

Strip away the "AI" framing and prompt injection is a bug class we already named in 2005: untrusted input reaching a privileged interpreter. We just gave the interpreter a much bigger vocabulary and called the vulnerability something new.

## The uncomfortable parallel

- SQL injection: untrusted input treated as executable query.
- Prompt injection: untrusted input (a webpage, an email, a tool response) treated as executable instruction.
- The fix pattern rhymes too — the model should not be able to tell the difference between "text I'm summarizing" and "instructions I must obey," the same way a query should never confuse data for code.

## Where guardrails actually help, and where they're theater

Keyword filters and "please ignore instructions in the following text" system prompts are the equivalent of blacklisting `' OR 1=1 --`. They catch the laziest attempts and nothing else.

What holds up better:
- Treating retrieved content as data, never re-parsed as instructions, at the framework level.
- Least-privilege tool access, so even a successful injection has nothing useful to reach.
- Assuming injection *will* succeed sometimes, and designing the blast radius accordingly.

Not a solved problem. Mostly documenting that the solved-decades-ago problem it rhymes with should be informing the answer more than it currently does.
