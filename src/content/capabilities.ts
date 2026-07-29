import type { CapabilityGroup } from '@/types';

/** Interactive capability groups — precise, technical, no percentages. */
export const capabilities: CapabilityGroup[] = [
  {
    id: 'platform',
    title: 'Platform and Runtime Security',
    blurb:
      'Hardening the layer applications run on top of — so a compromised process has as little to reach as possible.',
    items: [
      'Trust-boundary enforcement',
      'Runtime hardening',
      'Attack-surface reduction',
      'Isolation-first design',
    ],
  },
  {
    id: 'containers',
    title: 'Container and Kubernetes Security',
    blurb:
      'Closing the gap between "containerized" and "isolated" — from escape paths to cluster-wide misconfiguration.',
    items: [
      'Container-escape analysis',
      'Kubernetes security assessment',
      'CIS benchmarking',
      'Admission & policy control',
    ],
  },
  {
    id: 'kernel',
    title: 'Linux and Kernel Visibility',
    blurb:
      'Instrumenting the kernel to see what’s actually happening — not what logs claim is happening.',
    items: [
      'eBPF instrumentation',
      'Syscall tracing',
      'Privilege-escalation detection',
      'Process behavior analysis',
    ],
  },
  {
    id: 'ai',
    title: 'AI and LLM Security',
    blurb:
      'Treating model execution as an untrusted environment — because it is one.',
    items: [
      'Prompt-injection mitigation',
      'Agent execution isolation',
      'Tool-access boundaries',
      'Guardrail design',
    ],
  },
  {
    id: 'offense',
    title: 'Offensive Research Thinking',
    blurb:
      'Defense that assumes an attacker’s mindset — because the best mitigations start as attack paths.',
    items: [
      'Attack-path modeling',
      'Exploit-driven validation',
      'Purple teaming',
      'Threat modeling',
    ],
  },
  {
    id: 'writing',
    title: 'Technical Writing and Communication',
    blurb: 'Turning research into material practitioners can actually use.',
    items: [
      'Long-form research writing',
      'Conference talks',
      'Public tool documentation',
      'Practitioner-focused explainers',
    ],
  },
];
