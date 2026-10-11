import type {
  Link,
  ResumeEducation,
  ResumeExperience,
  Signal,
  SkillGroup,
} from '@/types';
import { social } from '@/config/social';

/**
 * The web résumé — same structure as the PDF, with internal figures
 * generalised (scale words instead of exact counts).
 */

export const resumeSummary =
  'Security-focused Platform Engineer specialising in cloud-native security, AI security, vulnerability research, and security architecture. Experienced in securing production Kubernetes and container platforms and designing security controls for enterprise AI platforms and agentic systems across cloud and on-premises environments — with a focus on translating attack paths into scalable security controls.';

export const experience: ResumeExperience[] = [
  {
    company: 'ISS STOXX — Technology Innovation Lab',
    role: 'Platform Security Engineer',
    location: 'Mumbai, India',
    period: 'Jan 2023 — Present',
    points: [
      'Designed and led adoption of a hardened container runtime architecture, eliminating a validated container escape path across production Kubernetes clusters and Linux hosts without operational disruption.',
      'Architected security controls for an organisation-wide Enterprise AI Platform, securing interactions between GCP-hosted AI agents and on-premises enterprise data through identity, API, network, data, and execution controls.',
      'Authored the platform’s AI security architecture and threat model: agent identity, least privilege, tool governance, prompt injection, RAG isolation, data exfiltration, sandboxing, egress control, and semantic guardrails.',
      'Implemented production controls with GCP Agent Platform, Model Armor, Model Garden, Workload and Workforce Identity Federation, Apigee, and Cloud Armor to establish trust boundaries between users, agents, APIs, and enterprise data.',
      'Architected an SBOM-driven vulnerability intelligence system across hundreds of repositories, reducing thousands of findings to a focused set of actionable risks through contextual validation and LLM-assisted prioritisation.',
      'Engineered an eBPF-based runtime detection system across production hosts, providing kernel-level visibility into privilege escalation, OOM events, network activity, and sensitive file access.',
      'Designed a Kubernetes security assessment framework for privileged workloads, unsafe capabilities, default root execution, vulnerable packages, and container escape paths; applied Kata Containers and runcvm for runtime isolation.',
    ],
  },
];

export const resumeProjects: { name: string; detail: string; links?: Link[] }[] = [
  {
    name: 'SAST-AI-Harness',
    detail:
      'An AI-assisted SAST framework built as a GitHub Copilot Skill, orchestrating 10+ open-source security engines with LLM-driven dataflow tracing, attacker-exposure analysis, and iterative adversarial review.',
  },
  {
    name: 'pwnspectrum',
    detail:
      'An automated security news intelligence pipeline that scrapes 1,000+ articles, ranks them for relevance, and publishes the top 20 events as a curated feed.',
    links: [{ label: 'Feed', href: social.pwnspectrum }],
  },
  {
    name: 'Qwen3-4B Abliterated',
    detail:
      'Research into LLM refusal mechanisms and model abliteration; an open-sourced, experimentally modified Qwen model with 1,000+ downloads.',
    links: [
      { label: 'Model', href: 'https://huggingface.co/IamLucif3r/Qwen3-4B-Instruct-2507-Abliterated' },
      { label: 'Research', href: 'https://medium.com/@IamLucif3r/llm-abliteration-refusal-guardrails-f227460e2c7c' },
    ],
  },
  {
    name: 'kube-explor3r',
    detail:
      'A Kubernetes security assessment tool for cluster, pod, Linux package, and container escape assessments, with findings stored for continuous monitoring.',
  },
];

export const skills: SkillGroup[] = [
  {
    label: 'AI Security & Architecture',
    items:
      'AI agents, LLM security, prompt injection, guardrails, agent isolation, tool governance, RAG security, threat modeling, secure execution.',
  },
  {
    label: 'Cloud & Platform Security',
    items:
      'GCP, Agent Platform, Model Armor, Model Garden, Apigee, Cloud Armor, Workload & Workforce Identity Federation, Kubernetes, Docker, containerd, runc, Kata Containers.',
  },
  {
    label: 'Application & Supply Chain',
    items:
      'SAST, SCA, SBOM, vulnerability management, OSS supply-chain security, OWASP Top 10, Semgrep, CodeQL, OSV, threat validation.',
  },
  {
    label: 'Linux & Runtime Security',
    items:
      'eBPF, syscall tracing, kernel security, runtime detection, privilege escalation, container escape analysis, network security.',
  },
  {
    label: 'Programming & Systems',
    items: 'Go, Python, Bash, C/C++, Kafka, Redis, Grafana, OpenSearch.',
  },
];

export const education: ResumeEducation[] = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'B.Tech in Computer Science Engineering',
    detail: 'Specialisation in Cyber Security & Digital Forensics · CGPA 9.0 / 10',
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
    detail: 'Published 15+ security articles, with individual articles reaching 30K+ readers.',
    href: social.medium,
  },
  {
    label: 'Offensive Security',
    detail: 'Ranked Top 1% (0xD — God Level) on TryHackMe through hands-on exploitation and CTF challenges.',
    href: social.tryhackme,
  },
];
