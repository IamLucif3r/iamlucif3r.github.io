import type { CapabilityGroup } from '@/types';

/** Expertise, grouped the same way as the résumé. Precise, technical, no percentages. */
export const capabilities: CapabilityGroup[] = [
  {
    id: 'ai',
    title: 'AI Security & Architecture',
    blurb: 'Treating agents and model execution as untrusted workloads — because they are.',
    items: [
      'Agent identity & isolation',
      'Tool governance',
      'Prompt injection',
      'RAG security',
      'Guardrails',
      'Threat modeling',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Platform Security',
    blurb: 'Trust boundaries between users, workloads, APIs, and data — enforced, not documented.',
    items: [
      'GCP Agent Platform',
      'Model Armor',
      'Workload & Workforce Identity Federation',
      'Apigee',
      'Cloud Armor',
      'Kubernetes',
    ],
  },
  {
    id: 'runtime',
    title: 'Linux & Runtime Security',
    blurb: 'Instrumenting the kernel to see what actually happens — not what logs claim happened.',
    items: [
      'eBPF',
      'Syscall tracing',
      'Container escape analysis',
      'Privilege escalation',
      'Kata Containers',
      'containerd / runc',
    ],
  },
  {
    id: 'supply-chain',
    title: 'Application & Supply Chain',
    blurb: 'Finding the vulnerabilities that are real, reachable, and worth a team’s time.',
    items: ['SAST', 'SCA', 'SBOM', 'OSV', 'Semgrep', 'CodeQL'],
  },
  {
    id: 'systems',
    title: 'Programming & Systems',
    blurb: 'Building the tooling, not just configuring it.',
    items: ['Go', 'Python', 'Bash', 'C/C++', 'Kafka', 'OpenSearch'],
  },
];
