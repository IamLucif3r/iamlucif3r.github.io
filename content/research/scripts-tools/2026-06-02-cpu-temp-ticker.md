---
title: A CPU-temperature ticker for the terminal, because Activity Monitor is one click too many
date: 2026-06-02
summary: The most over-engineered solution to "is my laptop about to become a pancake griddle" I have ever shipped.
---

Some scripts exist to solve a real problem. This one exists because alt-tabbing to Activity Monitor felt like too much friction at 2am while a fuzzer was running.

## The whole thing

```bash
#!/usr/bin/env bash
while true; do
  temp=$(sudo powermetrics --samplers smc -n1 2>/dev/null | grep -i "CPU die temperature")
  printf "\r%s" "$temp"
  sleep 2
done
```

That's it. That's the tool. It prints the CPU die temperature in place, in the corner of a terminal I already have open, so I can glance at it without breaking focus on whatever is actually cooking the machine.

## Why it's in the toolshed and not "deleted immediately"

Because I've reached for it more times than any of my actually-clever scripts. The best tools aren't the impressive ones — they're the ones you still run six months later.
