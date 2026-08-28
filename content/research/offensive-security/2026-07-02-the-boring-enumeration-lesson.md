---
title: A box that took four hours longer than it should have
date: 2026-07-02
summary: A TryHackMe-style teardown of a foothold I should have found in twenty minutes, and didn't.
---

In the spirit of documenting dead ends honestly: this one was supposed to be quick. A web app, a login form, and — I assumed — the usual suspects. It was not the usual suspects.

## The wrong turns, in order

1. Tried the obvious SQLi payloads on the login form. Nothing. The form was, annoyingly, actually sanitized.
2. Spent an hour on the file upload endpoint assuming it was the intended path. It was a red herring with a suspiciously convenient name.
3. Finally ran a proper directory brute force instead of guessing based on "vibes," and found a forgotten debug endpoint that dumped stack traces — including a hardcoded service credential.

## The actual lesson

The foothold was never clever. It was a debug route someone forgot to gate behind an environment check. Every fancy payload I tried was procrastination dressed up as technique.

```
GET /internal/debug/status HTTP/1.1
Host: target
```

Filed under: run the boring enumeration first. My ego keeps forgetting this rule; my notes are here to remind it.
