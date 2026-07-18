import type { Metric } from '@/types';

/** Proof-at-scale metrics — the emotional peak. All figures from the CV. */
export const metrics: Metric[] = [
  {
    value: '160',
    unit: 'clusters · 53 hosts',
    context:
      'A validated container-escape path eliminated across production Kubernetes clusters and Linux hosts — without operational disruption.',
  },
  {
    value: '9,200 → <350',
    unit: 'findings, made actionable',
    context:
      'An SBOM-driven vulnerability intelligence system across 1,000+ repositories, reducing noise to actionable risk through contextual validation and LLM-assisted prioritization.',
  },
  {
    value: '50+',
    unit: 'hosts under eBPF',
    context:
      'Real-time kernel-level visibility — privilege escalation, OOM events, network traffic, and sensitive file access — across production hosts.',
  },
  {
    value: 'microVM',
    unit: 'isolation in production',
    context:
      'Kata Containers and runcvm applied for runtime isolation, bringing microVM-based security controls to containerized workloads.',
  },
];

/** Punctuation line after the proof sequence. */
export const proofClose = '— and it held in production.';
