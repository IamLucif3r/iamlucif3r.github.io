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
  href?: string;
  hrefLabel?: string;
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
