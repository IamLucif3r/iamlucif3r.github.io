/** Shared content types — these are the contract for everything in src/content. */

export interface Metric {
  /** The headline value, e.g. "160" or "9,200 → <350". */
  value: string;
  /** Short qualifier under the value, e.g. "clusters · 53 hosts". */
  unit: string;
  /** One line of context. */
  context: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  /** Why this project matters — the framing line, not a feature list. */
  whyItMatters: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  /** Secondary link, e.g. a GitHub repo when href points to a live product. */
  secondaryHref?: string;
  secondaryHrefLabel?: string;
  flagship?: boolean;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface Signal {
  label: string;
  detail: string;
  href?: string;
}

export interface ProofChip {
  label: string;
  detail: string;
  href?: string;
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
  featured: boolean;
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

export interface SocialLink {
  label: string;
  href: string;
}

/** Research-mode content — the personal lab notebook, distinct from the platform site. */

export interface ResearchArticle {
  /** Folder name under content/research, e.g. "cloud-containers". */
  category: string;
  /** Display label for the category, e.g. "Cloud & Containers". */
  categoryLabel: string;
  /** URL-safe id derived from the filename, used to select an article. */
  slug: string;
  title: string;
  /** ISO-ish date string, e.g. "2026-07-14". */
  date: string;
  /** Short teaser shown in the sidebar/list; falls back to the first paragraph. */
  summary: string;
  /** Full body rendered to HTML at build time. */
  bodyHtml: string;
  href?: string;
  hrefLabel?: string;
}

export interface ScratchArtifact {
  name: string;
  blurb: string;
  /** Freeform state, e.g. "rough", "works on my machine". */
  state: string;
  href?: string;
  hrefLabel?: string;
}
