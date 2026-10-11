/** Shared content types — these are the contract for everything in src/content. */

export interface Link {
  label: string;
  href: string;
}

export type SocialLink = Link;

/* ── Work side ─────────────────────────────────────────────────────────── */

/** A generalised outcome. Never an internal number — scale words only. */
export interface ImpactStat {
  /** The headline, e.g. "Fleet-wide". */
  value: string;
  /** Short qualifier under the value, e.g. "container runtime hardening". */
  unit: string;
  /** One line of context. */
  context: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** Short mono label above the title, e.g. "AI platform security". */
  eyebrow: string;
  /** One or two sentences for the card. */
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  /** Threats or concerns the work covered. */
  themes?: string[];
  stack: string[];
  flagship?: boolean;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  blurb: string;
  items: string[];
}

export interface Article {
  title: string;
  date: string;
  excerpt: string;
  href: string;
  theme: string;
  cover?: string;
}

export interface Talk {
  title: string;
  event: string;
  summary: string;
  href?: string;
  date?: string;
}

export interface ResumeExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  detail: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  items: string;
}

export interface Signal {
  label: string;
  detail: string;
  href?: string;
}

/* ── Lab side ──────────────────────────────────────────────────────────── */

export interface LabProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  links: Link[];
  /** Freeform state, e.g. "Maintained", "Shipping daily". */
  status: string;
  /** A public number you are happy to show, e.g. { value: '1,000+', label: 'downloads on Hugging Face' }. */
  stat?: { value: string; label: string };
  flagship?: boolean;
  /** Live preview URL (must be https). */
  embed?: string;
}

/** Small public repos — real, rough, and useful. */
export interface ToolshedItem {
  name: string;
  blurb: string;
  language: string;
  href: string;
}

export interface NowItem {
  label: string;
  detail: string;
}

export interface ResearchArticle {
  /** Folder name under content/research, e.g. "cloud-containers". */
  category: string;
  /** Display label for the category, e.g. "Cloud & Containers". */
  categoryLabel: string;
  /** URL-safe id derived from the filename; the note lives at /lab/notes/<slug>/. */
  slug: string;
  title: string;
  /** ISO-ish date string, e.g. "2026-07-14". */
  date: string;
  /** Short teaser shown in lists; falls back to the first paragraph. */
  summary: string;
  /** Full body rendered to HTML at build time. */
  bodyHtml: string;
  readingMinutes: number;
  href?: string;
  hrefLabel?: string;
}

/* ── Command palette ───────────────────────────────────────────────────── */

export interface CommandItem {
  label: string;
  href: string;
  group: 'Work' | 'Lab' | 'Notes' | 'Elsewhere';
  hint?: string;
}
