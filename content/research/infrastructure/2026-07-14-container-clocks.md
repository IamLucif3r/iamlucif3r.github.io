---
title: Container clocks drift more than the host admits
date: 2026-07-14
---

`CLOCK_MONOTONIC` inside a paused-then-resumed container skips in a way that a naive rate limiter reads as a burst. Could be a bypass primitive, could be nothing. Need a clean repro before I believe myself.
