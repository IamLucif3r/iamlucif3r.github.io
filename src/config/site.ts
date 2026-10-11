export const siteConfig = {
  name: 'Anmol Singh Yadav',
  role: 'AI Platform Security Engineer',
  url: 'https://anmolsinghyadav.com',
  locale: 'en_US',
  description:
    'Anmol Singh Yadav — AI Platform Security Engineer. Security architecture for enterprise AI platforms, agentic systems, and cloud-native infrastructure: container isolation, kernel-level detection, and controls that hold at production scale.',
  /** Path to the résumé PDF, referenced everywhere from one place. */
  resumePdf: '/resume/anmol-singh-yadav.pdf',
} as const;

/**
 * The site has two sides, each with its own route and theme:
 * `work` (light) is the professional story, `lab` (dark) is the personal one.
 */
export type Side = 'work' | 'lab';

export const sides = {
  work: { label: 'Work', href: '/' },
  lab: { label: 'Lab', href: '/lab/' },
} as const satisfies Record<Side, { label: string; href: string }>;
