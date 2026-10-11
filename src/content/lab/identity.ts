import type { NowItem, Signal } from '@/types';
import { social } from '@/config/social';

/** The lab — personal, curiosity-driven, separate from the day job. */
export const labIdentity = {
  handle: 'IamLucif3r',
  kicker: 'Independent security research',
  headline: 'Off the clock, still reading source.',
  positioning: 'The day job has change control. This is where I just try things.',
  standfirst:
    'After hours: LLM guardrails I want to understand by breaking, tools I built because I needed them, CTF boxes, and notes to future me.',
} as const;

/** What I'm hacking on right now. Update `updated` whenever this changes. */
export const now: { updated: string; items: NowItem[] } = {
  updated: '2026-10',
  items: [
    {
      label: 'Reading',
      detail: 'How refusal behaviour is represented inside small open-weight models — and how little it takes to remove it.',
    },
    {
      label: 'Building',
      detail: 'SAST-AI-Harness: LLM-driven dataflow tracing and adversarial review on top of open-source SAST engines.',
    },
    {
      label: 'Running',
      detail: 'pwnspectrum’s daily ranked security feed — tuning what counts as signal.',
    },
  ],
};

export const labSignals: Signal[] = [
  {
    label: 'TryHackMe · Top 1%',
    detail: '0xD — God Level, through hands-on exploitation and CTF rooms.',
    href: social.tryhackme,
  },
  {
    label: 'GRIMMCon',
    detail: 'Spoke on API security and how trust boundaries fail in API-driven systems.',
  },
  {
    label: 'Writing · 30K+ readers',
    detail: '15+ security articles on Medium and InfoSec Write-ups.',
    href: social.medium,
  },
  {
    label: 'Community',
    detail: 'Volunteer at DEF CON 9111 Safe Mode.',
  },
];
