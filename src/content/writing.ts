import type { Article } from '@/types';

/**
 * A short, hand-picked list — not an attempt to list everything. All
 * titles, dates, and links are real, sourced from the public Medium /
 * InfoSec Write-ups feed.
 */
export const articles: Article[] = [
  {
    title: 'Dockerfile Security Best Practices: How to Build Secure Containers',
    date: '2025-01-29',
    excerpt:
      'A practitioner’s checklist for hardening Dockerfiles — the small decisions that determine how much a container can be trusted.',
    href: 'https://medium.com/@IamLucif3r/dockerfile-security-best-practices-how-to-build-secure-containers-a4fc25c4f2be',
    theme: 'Container security',
    cover: 'https://cdn-images-1.medium.com/max/2454/1*yk9FbgzuYy1qhWwKl45siw.png',
    featured: true,
  },
  {
    title: 'I Sent You a JPEG, Now I Own Your Mac',
    date: '2026-05-25',
    excerpt:
      'Exploiting ExifTool’s macOS command-injection blind spot (CVE-2026-3102) — how a metadata parser became a code-execution path.',
    href: 'https://infosecwriteups.com/i-sent-you-a-jpeg-now-i-own-your-mac-e49c5c27374f',
    theme: 'Offensive research methodology',
    cover: 'https://cdn-images-1.medium.com/max/1672/1*3QkX0Puj4_rbAQet1dMUKg.png',
    featured: true,
  },
  {
    title: 'Why Your Favicon Might Be Exposing Your Infrastructure',
    date: '2025-07-20',
    excerpt:
      'Using favicon fingerprints for reconnaissance — how a four-byte hash can map an organization’s forgotten infrastructure.',
    href: 'https://infosecwriteups.com/why-your-favicon-might-be-exposing-your-infrastructure-ddc52455bd64',
    theme: 'Offensive research methodology',
    cover: 'https://cdn-images-1.medium.com/max/1536/1*iUy0w_iydd2OgJdpvXjqeQ.png',
    featured: true,
  },
  {
    title: 'What Is Zero Trust Architecture?',
    date: '2026-01-10',
    excerpt:
      'Zero trust as an engineering principle, not a marketing term — why "never trust, always verify" changes how you design boundaries.',
    href: 'https://medium.com/@IamLucif3r/what-is-zero-trust-architecture-28fd6a6c55e7',
    theme: 'Platform security design',
    cover: 'https://cdn-images-1.medium.com/max/2600/1*5THzPm6Zivz1RiePWF3p_A.png',
    featured: true,
  },
];

