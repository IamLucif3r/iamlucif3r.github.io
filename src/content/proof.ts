import type { ProofChip } from '@/types';
import { social } from '@/config/social';

/** Public-safe proof — capabilities and evidence, never private metrics. */
export const proofChips: ProofChip[] = [
  {
    label: 'Platform Security',
    detail: 'Runtime hardening and trust-boundary enforcement for production systems.',
  },
  {
    label: 'Cloud & Container Security',
    detail: 'Kubernetes and container isolation, assessed and hardened at scale.',
  },
  {
    label: 'eBPF & Runtime Visibility',
    detail: 'Kernel-level detection for privilege escalation and anomalous behavior.',
  },
  {
    label: 'LLM & AI Security',
    detail: 'Execution isolation and guardrails for agentic and LLM-driven systems.',
  },
  {
    label: 'Technical Writing',
    detail: 'Long-form research on platform, container, and AI security.',
    href: social.medium,
  },
  {
    label: 'Conference Speaking',
    detail: 'Talks on API and platform security for practitioner audiences.',
  },
  {
    label: 'Open Source Tools',
    detail: 'Public tools for reconnaissance, secret detection, and network enforcement.',
    href: social.github,
  },
];

export const proofNote =
  'The rest is filed under NDA. These are the parts I can actually show you.';
