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
