import type { Project } from '@/types';

/**
 * Selected public work — curated, not exhaustive. Every claim here is
 * public-safe: no private repos, no internal pipeline details.
 */
export const projects: Project[] = [
  {
    name: 'pwnspectrum',
    tagline: 'Threat intelligence that ranks what actually matters.',
    description:
      'A cybersecurity intelligence and prioritization system. It aggregates public threat feeds, ranks disclosures by real-world impact, and generates contextual summaries so the signal doesn’t drown in volume.',
    whyItMatters:
      'Most feeds hand you everything and call it intelligence. pwnspectrum combines feed aggregation, ranking, and contextual summarization so practitioners can act on what matters instead of triaging noise.',
    tags: ['Threat Intelligence', 'LLM Summarization', 'RSS Aggregation', 'Ranking'],
    href: 'http://feed.anmolsinghyadav.com/index.html',
    hrefLabel: 'View the feed',
    secondaryHref: 'https://github.com/IamLucif3r/pwnspectrum-rss',
    secondaryHrefLabel: 'GitHub',
    flagship: true,
    image: {
      src: '/images/pwnspectrum.png',
      alt: 'The pwnspectrum threat intelligence feed interface.',
      width: 1200,
      height: 800,
    },
  },
  {
    name: 'Nautilus',
    tagline: 'A zero-trust network firewall for Docker containers.',
    description:
      'A default-deny network firewall for containerized workloads, enforced at the kernel via eBPF. Every container starts with no network access; policy is what grants it, not what restricts it.',
    whyItMatters:
      'Container networking is usually allow-by-default. Nautilus flips that assumption — wire-speed enforcement, kernel-level control, and a default-deny posture that closes the gap between "isolated" and "actually isolated."',
    tags: ['Go', 'eBPF', 'Docker', 'Zero Trust'],
    href: 'https://github.com/IamLucif3r/nautilus',
    hrefLabel: 'View on GitHub',
  },
  {
    name: 'FaviCreep',
    tagline: 'Offensive reconnaissance for shadow assets and exposed infrastructure.',
    description:
      'A reconnaissance utility that maps attack surface by fingerprinting favicons across the internet — surfacing shadow assets, forgotten subdomains, and infrastructure an organization didn’t know was still exposed.',
    whyItMatters:
      'Attackers find what defenders forget. FaviCreep gives practitioners a practical way to discover the exposed infrastructure attackers would find first.',
    tags: ['Go', 'Reconnaissance', 'Attack Surface Mapping'],
    href: 'https://github.com/IamLucif3r/FaviCreep',
    hrefLabel: 'View on GitHub',
  },
  {
    name: 'AWS Key Hunter',
    tagline: 'Secret exposure detection and monitoring at scale.',
    description:
      'A detection tool that continuously scans public code for exposed, valid AWS credentials — built to surface real exposure, not just pattern matches, and to alert before keys are abused.',
    whyItMatters:
      'Leaked cloud credentials are one of the most common, most preventable breach paths. This tool is built for detection and alerting — operational utility, not exploitation.',
    tags: ['Go', 'Secret Detection', 'Cloud Security'],
    href: 'https://github.com/IamLucif3r/AWS-Key-Hunter',
    hrefLabel: 'View on GitHub',
  },
];

