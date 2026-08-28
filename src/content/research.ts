import type { ScratchArtifact } from '@/types';
import { social } from '@/config/social';

/**
 * The research notebook — personal, curiosity-driven, separate from the day job.
 * Placeholder-but-plausible entries; edit these freely. Keep everything public-safe:
 * never reference employer internals, exact metrics, or private infrastructure.
 *
 * Longer articles now live as categorized markdown in content/research/<category>
 * (see src/lib/research-content.ts) — drop a new .md file to log an entry.
 */

export const researchIdentity = {
  handle: 'IamLucif3r',
  kicker: 'Independent security research',
  headline: 'Off the clock, still reading source.',
  standfirst:
    "This is where the after-hours stuff lives — CTF labs, half-built tools, and bugs I couldn't leave alone. Mostly notes to future me.",
} as const;

/** 2am one-offs — deliberately rough. */
export const scratchArtifacts: ScratchArtifact[] = [
  {
    name: 'ringbuf-signal',
    blurb: 'PoC for the eBPF ring-buffer side channel above. ~a few bits/sec between two unprivileged processes.',
    state: 'rough / proves the point',
    href: social.github,
    hrefLabel: 'GitHub',
  },
  {
    name: 'agent-fence',
    blurb: 'A tiny harness that logs every syscall an LLM agent actually makes, so I can compare it to what its prompt promised.',
    state: 'works on my machine',
    href: social.github,
    hrefLabel: 'GitHub',
  },
  {
    name: 'clockskew-repro',
    blurb: 'Scratch script trying to reproduce the container CLOCK_MONOTONIC drift note reliably. Not there yet.',
    state: 'unfinished',
  },
];
