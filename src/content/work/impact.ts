import type { ImpactStat } from '@/types';

/**
 * Outcomes, generalised. The underlying work is internal, so this list uses
 * scale words ("fleet-wide", "hundreds") — never the exact internal figures.
 */
export const impact: ImpactStat[] = [
  {
    value: 'Fleet-wide',
    unit: 'container escape path closed',
    context:
      'A hardened container runtime rolled out across production Kubernetes clusters and Linux hosts, without operational disruption.',
  },
  {
    value: 'Org-wide',
    unit: 'enterprise AI platform secured',
    context:
      'Security architecture and threat model for AI agents bridging cloud-hosted models and on-premises enterprise data.',
  },
  {
    value: 'Thousands → hundreds',
    unit: 'findings to actionable risk',
    context:
      'SBOM-driven vulnerability intelligence across hundreds of repositories, with contextual validation and LLM-assisted prioritisation.',
  },
  {
    value: 'Kernel-level',
    unit: 'runtime visibility',
    context:
      'eBPF detection for privilege escalation, OOM events, network activity, and sensitive file access on production hosts.',
  },
];
