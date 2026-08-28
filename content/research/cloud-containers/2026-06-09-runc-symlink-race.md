---
title: runc symlink race — already patched, still instructive
date: 2026-06-09
---

Chased what I thought was a fresh TOCTOU in a mount path. Turned out to be a known, fixed class. Kept the notes anyway — the shape of the bug is worth remembering, even after the patch makes it boring.
