import type { LabProject, ToolshedItem } from '@/types';
import { social } from '@/config/social';

/** Personal projects — public, open, and built outside the day job. */
export const labProjects: LabProject[] = [
  {
    slug: 'qwen3-4b-abliterated',
    name: 'Qwen3-4B Abliterated',
    tagline: 'What happens to a model’s guardrails when you remove the direction that says no.',
    description:
      'Research into LLM refusal mechanisms and model abliteration. I identified the refusal behaviour in Qwen3-4B-Instruct, removed it experimentally, and open-sourced the resulting model alongside a write-up on what it means for guardrails that live inside the weights.',
    tags: ['LLM security', 'Refusal mechanisms', 'Abliteration', 'Open weights'],
    links: [
      {
        label: 'Model on Hugging Face',
        href: 'https://huggingface.co/IamLucif3r/Qwen3-4B-Instruct-2507-Abliterated',
      },
      {
        label: 'Read the research',
        href: 'https://medium.com/@IamLucif3r/llm-abliteration-refusal-guardrails-f227460e2c7c',
      },
    ],
    status: 'Published',
    stat: { value: '1,000+', label: 'downloads on Hugging Face' },
    flagship: true,
  },
  {
    slug: 'pwnspectrum',
    name: 'pwnspectrum',
    tagline: 'A security news feed that ranks what actually matters.',
    description:
      'An automated pipeline that scrapes 1,000+ security news articles, scores them for relevance and impact, and publishes the top 20 events as a curated feed.',
    tags: ['Threat intelligence', 'Ranking', 'RSS'],
    links: [
      { label: 'Open the feed', href: social.pwnspectrum },
      { label: 'GitHub', href: 'https://github.com/IamLucif3r/pwnspectrum-rss' },
    ],
    status: 'Shipping daily',
    embed: social.pwnspectrum,
  },
  {
    slug: 'sast-ai-harness',
    name: 'SAST-AI-Harness',
    tagline: 'An AI-assisted SAST framework, packaged as a GitHub Copilot Skill.',
    description:
      'Orchestrates 10+ open-source security engines, then uses LLM-driven dataflow tracing, attacker-exposure analysis, and iterative adversarial review to find OWASP Top 10, memory-safety, and novel vulnerabilities across multi-language codebases.',
    tags: ['SAST', 'LLM', 'Copilot Skill'],
    links: [],
    status: 'In progress',
  },
  {
    slug: 'aws-key-hunter',
    name: 'AWS Key Hunter',
    tagline: 'Finds exposed — and still valid — AWS keys in public code.',
    description:
      'Searches public GitHub code for exposed AWS credentials and reports only the ones that are valid, so the signal is real exposure rather than pattern matches.',
    tags: ['Go', 'Secret detection', 'Cloud'],
    links: [{ label: 'GitHub', href: 'https://github.com/IamLucif3r/AWS-Key-Hunter' }],
    status: 'Maintained',
  },
  {
    slug: 'favicreep',
    name: 'FaviCreep',
    tagline: 'Creep around the edges of an attack surface via favicons.',
    description:
      'Fingerprints favicons to surface shadow assets and forgotten infrastructure an organisation didn’t know was still exposed.',
    tags: ['Go', 'Recon', 'Attack surface'],
    links: [{ label: 'GitHub', href: 'https://github.com/IamLucif3r/FaviCreep' }],
    status: 'Maintained',
  },
  {
    slug: 'nautilus',
    name: 'Nautilus',
    tagline: 'A default-deny network firewall for Docker, enforced with eBPF.',
    description:
      'Every container starts with no network access; policy grants it. Enforcement happens in the kernel with eBPF, not in a userspace proxy.',
    tags: ['Go', 'eBPF', 'Docker', 'Zero trust'],
    links: [{ label: 'GitHub', href: 'https://github.com/IamLucif3r/nautilus' }],
    status: 'Experimental',
  },
];

/** Small public repos: real, rough, and still useful. */
export const toolshed: ToolshedItem[] = [
  {
    name: 'NetWatchdog',
    blurb: 'Notices when a new device joins your local or Tailscale network.',
    language: 'Go',
    href: 'https://github.com/IamLucif3r/NetWatchdog',
  },
  {
    name: 'not1fy',
    blurb: 'A small Go utility for sending messages to Discord.',
    language: 'Go',
    href: 'https://github.com/IamLucif3r/not1fy',
  },
  {
    name: 'Health-Trend',
    blurb: 'Analyses Health app export data for trends over time.',
    language: 'Python',
    href: 'https://github.com/IamLucif3r/Health-Trend',
  },
  {
    name: 'Go-Hash-Matcher',
    blurb: 'A simple password-hash cracker written in Go.',
    language: 'Go',
    href: 'https://github.com/IamLucif3r/Go-Hash-Matcher',
  },
  {
    name: 'subresolver',
    blurb: 'A subdomain resolver for recon.',
    language: 'Go',
    href: 'https://github.com/IamLucif3r/subresolver',
  },
  {
    name: 'Bug-Hunting',
    blurb: 'Notes, methodologies, and PoCs collected while bug hunting.',
    language: 'Notes',
    href: 'https://github.com/IamLucif3r/Bug-Hunting',
  },
  {
    name: 'Buffer-Overflow',
    blurb: 'Scripts and methodology for buffer-overflow fuzzing and exploitation.',
    language: 'Ruby',
    href: 'https://github.com/IamLucif3r/Buffer-Overflow',
  },
  {
    name: 'Chat-On',
    blurb: 'A secured TCP chat room built with Python.',
    language: 'Python',
    href: 'https://github.com/IamLucif3r/Chat-On',
  },
];
