import type {
  ResumeEducation,
  ResumeExperience,
  Signal,
  SkillGroup,
} from '@/types';

/** The full record — sourced verbatim in substance from the CV. */

export const resumeSummary =
  'Security-focused Platform Engineer operating at the intersection of Platform Security and Security Architecture, specializing in securing cloud-native, containerized, and AI-driven systems. I translate real-world attack paths into scalable security architectures, with an emphasis on isolation-first design, attack-surface reduction, and trust-boundary enforcement — across both traditional infrastructure and emerging LLM-based workloads.';

export const experience: ResumeExperience[] = [
  {
    company: 'ISS STOXX — Innovation Labs',
    role: 'Platform Security Engineer',
    location: 'Mumbai, India',
    period: 'Jan 2023 — Present',
    points: [
      'Designed and led the adoption of a hardened container runtime architecture, eliminating a validated container-escape path across 160 Kubernetes clusters in production and 53 Linux hosts without operational disruption.',
      'Architected an SBOM-driven vulnerability intelligence system across 1,000+ repositories, reducing 9,200+ findings to fewer than 350 actionable risks through contextual validation and LLM-assisted prioritization.',
      'Designed a Kubernetes security assessment framework enabling cluster owners to identify and remediate misconfigurations such as privileged workloads, default root users, and unsafe capabilities.',
      'Engineered an eBPF-based detection system across 50+ production hosts, providing real-time visibility into kernel-level activity including privilege escalation, OOM events, network traffic, and sensitive file access.',
      'Applied Kata Containers and runcvm for runtime isolation, implementing microVM-based security controls for containerized workloads in production.',
      'Secured LLM-based systems by isolating execution, enforcing tool-access boundaries, and implementing guardrails to mitigate prompt injection and unsafe outputs.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: 'Offensive & Defensive Security',
    items:
      'Purple teaming, container escape, privilege escalation, runtime detection & mitigation.',
  },
  {
    label: 'Security Architecture',
    items: 'Runtime isolation, threat modeling, secure system design.',
  },
  {
    label: 'Container & Kubernetes',
    items: 'Docker, containerd, runc, runcvm, Kata Containers, RBAC, CIS benchmarks.',
  },
  {
    label: 'Linux & Kernel',
    items: 'eBPF, syscall tracing, process monitoring, privilege-escalation analysis.',
  },
  {
    label: 'Programming',
    items: 'Go, Python, Bash, C/C++.',
  },
  {
    label: 'Systems & Data Pipelines',
    items: 'Kafka, Grafana, NiFi, Memgraph, OpenSearch.',
  },
  {
    label: 'AI Security',
    items: 'Prompt injection, guardrails, secure execution models, agent isolation.',
  },
];

export const education: ResumeEducation[] = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'B.Tech in Computer Science Engineering',
    detail: 'Specialization in Cyber Security & Digital Forensics · CGPA 9.0 / 10',
    period: '2019 — 2023',
  },
];

export const recognition: Signal[] = [
  {
    label: 'Conference Speaker',
    detail: 'Presented API Security at GRIMMCon, covering real-world vulnerabilities in API-driven systems.',
  },
  {
    label: 'Technical Writing',
    detail: 'Published 15+ articles on platform security, with individual articles reaching 30K+ readers.',
    href: 'https://medium.com/@IamLucif3r',
  },
  {
    label: 'Offensive Security',
    detail: 'Ranked Top 1% (0xD — God Level) on TryHackMe through hands-on exploitation and CTF challenges.',
    href: 'https://tryhackme.com/p/IamLucif3r',
  },
  {
    label: 'Community',
    detail: 'Volunteer at DEF CON 9111 Safe Mode.',
  },
];
