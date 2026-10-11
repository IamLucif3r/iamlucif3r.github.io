import type { CaseStudy } from '@/types';

/**
 * Selected work from the day job, written to be public-safe: the shape of the
 * problem and the controls, never internal names, numbers, or architecture details.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'enterprise-ai-platform-security',
    eyebrow: 'AI platform security',
    title: 'Securing an enterprise AI platform',
    summary:
      'Security architecture and threat model for an organisation-wide AI platform where cloud-hosted agents act on on-premises enterprise data.',
    problem:
      'AI agents are a new kind of principal. They act on behalf of users, call tools, read enterprise data, and take instructions from content they retrieve. The usual boundaries — who is calling, what they can reach, what leaves the network — have to be redrawn for something that can be talked into things.',
    approach: [
      'Authored the platform’s AI security architecture and threat model, treating every agent as an untrusted workload with its own identity.',
      'Established trust boundaries between users, agents, APIs, and enterprise data through identity, API, network, data, and execution controls.',
      'Federated identity end to end, so agents and people authenticate as themselves instead of sharing long-lived keys.',
      'Placed API gateway and edge controls on the paths between agents and enterprise data, with semantic guardrails on model inputs and outputs.',
      'Designed sandboxing and egress control so a successful prompt injection has little to reach and nowhere to send it.',
    ],
    outcome:
      'A production platform used across the organisation, with explicit, enforceable boundaries between users, agents, APIs, and enterprise data — across cloud and on-premises environments.',
    themes: [
      'Agent identity',
      'Least privilege',
      'Tool governance',
      'Prompt injection',
      'RAG isolation',
      'Data exfiltration',
      'Sandboxing',
      'Egress control',
      'Semantic guardrails',
    ],
    stack: [
      'GCP Agent Platform',
      'Model Armor',
      'Model Garden',
      'Workload Identity Federation',
      'Workforce Identity Federation',
      'Apigee',
      'Cloud Armor',
    ],
    flagship: true,
  },
  {
    slug: 'container-runtime-hardening',
    eyebrow: 'Container isolation',
    title: 'Closing a container escape path, fleet-wide',
    summary:
      'Designed and led adoption of a hardened container runtime architecture that removed a validated escape path across production clusters and hosts.',
    problem:
      'A container is a process with a shared kernel. When an escape path is validated in production, the fix has to land everywhere at once — without breaking the workloads that depend on today’s runtime behaviour.',
    approach: [
      'Validated the escape path end to end before proposing anything, so the fix targeted the real mechanism rather than a symptom.',
      'Designed the hardened runtime architecture and led its adoption across production clusters and hosts.',
      'Applied microVM-based isolation (Kata Containers, runcvm) where a shared kernel was not an acceptable boundary.',
    ],
    outcome:
      'The escape path was eliminated across production Kubernetes clusters and Linux hosts with no operational disruption.',
    stack: ['Kubernetes', 'containerd', 'runc', 'Kata Containers', 'runcvm', 'Linux'],
  },
  {
    slug: 'sbom-vulnerability-intelligence',
    eyebrow: 'Supply-chain security',
    title: 'From thousands of findings to the few that matter',
    summary:
      'An SBOM-driven vulnerability intelligence system that reduces raw scanner output to actionable risk with contextual validation and LLM-assisted prioritisation.',
    problem:
      'Dependency scanners report everything that matches a version range. Across hundreds of repositories that becomes thousands of findings — and teams stop reading them.',
    approach: [
      'Built the system on SBOMs across hundreds of repositories, so every answer starts from what is actually shipped.',
      'Validated each finding in context before it reached a team, so only real exposure made the list.',
      'Used LLM-assisted prioritisation to rank what remained, with a human-readable rationale for each risk.',
      'Used the same inventory to answer “who is affected?” within hours of a new open-source disclosure.',
    ],
    outcome:
      'Thousands of raw findings reduced to a few hundred actionable risks, and every project affected by newly disclosed open-source vulnerabilities identified for remediation.',
    stack: ['SBOM', 'SCA', 'OSV', 'Threat validation', 'LLM-assisted triage'],
  },
  {
    slug: 'ebpf-runtime-detection',
    eyebrow: 'Runtime security',
    title: 'Seeing what the kernel sees',
    summary:
      'An eBPF-based runtime detection system for production Linux hosts, built for the questions logs can’t answer honestly.',
    problem:
      'Application logs describe what software intended to do. Detecting privilege escalation, resource exhaustion, or sensitive file access needs visibility from the layer that actually enforces it.',
    approach: [
      'Instrumented the kernel with eBPF to capture privilege changes, OOM events, network activity, and access to sensitive files.',
      'Deployed it across production hosts as a continuous detection layer rather than a one-off investigation tool.',
    ],
    outcome: 'Kernel-level visibility into privilege escalation and anomalous behaviour across production hosts.',
    stack: ['eBPF', 'Linux', 'Syscall tracing', 'Runtime detection'],
  },
  {
    slug: 'kubernetes-security-assessment',
    eyebrow: 'Kubernetes security',
    title: 'kube-explor3r: a Kubernetes security assessment framework',
    summary:
      'A framework and tool that finds privileged workloads, unsafe capabilities, vulnerable packages, and container escape paths — and keeps watching.',
    problem:
      'Cluster owners rarely know which workloads run as root, hold dangerous capabilities, or sit one misconfiguration away from the host.',
    approach: [
      'Assessed clusters, pods, Linux packages, and container escape paths in one pass.',
      'Flagged privileged workloads, unsafe capabilities, and default root execution with remediation guidance.',
      'Stored findings for continuous monitoring, so drift shows up as a change rather than a surprise.',
    ],
    outcome:
      'Cluster owners got a repeatable way to find and fix misconfigurations, with history to show the trend.',
    stack: ['Kubernetes', 'Pod security', 'Package scanning', 'Container escape analysis'],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
