---
title: Kata Containers, or giving every workload its own tiny hypervisor
date: 2026-07-25
summary: Notes on trading a shared kernel for a microVM per container — what it buys you, and what it costs at 2am.
---

The pitch for Kata is simple: stop trusting the shared host kernel and give every container its own lightweight VM instead. The container escape stops being "find one syscall bug" and becomes "find one hypervisor bug," which is a much better problem to have.

## What actually changes

- The workload still looks like a container from the outside — same OCI image, same orchestrator hooks.
- Underneath, `containerd` hands it to a shim that boots a stripped-down VM (Firecracker, QEMU, or cloud-hypervisor) with its own kernel.
- Syscalls a compromised process makes now hit a kernel nobody else's workload shares.

## What it costs

Nothing is free. Boot time goes up, memory overhead goes up, and anything that assumed "container == process on the host" (some observability agents, some debugging habits) needs re-checking. The isolation is real, but so is the tax.

> The honest sell isn't "Kata makes you unhackable." It's "Kata moves the blast radius of the bugs you haven't found yet."

Still validating where the overhead is worth it versus where a well-configured seccomp + AppArmor profile gets you 80% of the benefit for free.
