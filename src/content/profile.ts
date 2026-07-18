/** Identity + narrative copy. Sourced from the CV; never invent claims. */

export const profile = {
  name: 'Anmol Singh Yadav',
  role: 'Platform Security Engineer',
  location: 'Mumbai, India',
  email: 'sanmol016@gmail.com',

  /** The hero thesis — the single most important line on the site. */
  thesis:
    'Every abstraction leaks. I work at the seams — finding where systems break, and seeing it before attackers do.',

  /** Chapter 2: the lens. */
  lens: {
    headline: 'I think at the boundaries between systems.',
    body: 'A Platform Security Engineer at ISS STOXX Innovation Labs, working where one layer of a system trusts another — with an emphasis on isolation-first design, attack-surface reduction, and trust-boundary enforcement across cloud-native, containerized, and AI-driven workloads.',
  },

  /** Closing invitation. */
  invitation: {
    headline: 'If you are working at the seams too, get in touch.',
  },
} as const;
