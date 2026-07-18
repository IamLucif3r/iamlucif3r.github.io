import type { Project } from '@/types';

/** Selected work — curated, outcome-first. */
export const projects: Project[] = [
  {
    name: 'pwnspectrum',
    tagline: 'Threat intelligence that ranks what actually matters.',
    description:
      'A cybersecurity intelligence system that aggregates threat feeds, ranks high-impact vulnerabilities, and generates contextual summaries using LLMs.',
    href: 'http://feed.anmolsinghyadav.com/index.html',
    hrefLabel: 'View the feed',
    image: {
      src: '/images/pwnspectrum.png',
      alt: 'The pwnspectrum threat intelligence feed interface.',
      width: 1200,
      height: 800,
    },
  },
  {
    name: 'Security Lab',
    tagline: 'Where I test attacks and defenses before they reach production.',
    description:
      'A controlled research environment for testing exploit techniques, validating defenses, and experimenting with secure infrastructure designs.',
  },
];
