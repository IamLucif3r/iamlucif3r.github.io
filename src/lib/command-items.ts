import type { CommandItem } from '@/types';
import { navItems } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { social } from '@/config/social';
import { caseStudies } from '@/content/work/case-studies';
import { labProjects } from '@/content/lab/projects';
import { getResearchArticles } from '@/lib/research-content';

/** Everything the command palette can jump to. Built at build time. */
export function getCommandItems(): CommandItem[] {
  const work: CommandItem[] = [
    { label: 'Home', href: '/', group: 'Work' },
    ...navItems.work.map((item) => ({ label: item.label, href: item.href, group: 'Work' as const })),
    ...caseStudies.map((c) => ({
      label: c.title,
      href: `/work/${c.slug}/`,
      group: 'Work' as const,
      hint: c.eyebrow,
    })),
    { label: 'Download résumé (PDF)', href: siteConfig.resumePdf, group: 'Work' },
  ];

  const lab: CommandItem[] = [
    { label: 'Lab home', href: '/lab/', group: 'Lab' },
    ...navItems.lab.map((item) => ({ label: item.label, href: item.href, group: 'Lab' as const })),
    ...labProjects.map((p) => ({
      label: p.name,
      href: `/lab/#${p.slug}`,
      group: 'Lab' as const,
      hint: p.tagline,
    })),
  ];

  const notes: CommandItem[] = getResearchArticles().map((note) => ({
    label: note.title,
    href: `/lab/notes/${note.slug}/`,
    group: 'Notes',
    hint: note.categoryLabel,
  }));

  const elsewhere: CommandItem[] = [
    { label: 'GitHub', href: social.github, group: 'Elsewhere' },
    { label: 'LinkedIn', href: social.linkedin, group: 'Elsewhere' },
    { label: 'Medium', href: social.medium, group: 'Elsewhere' },
    { label: 'Hugging Face', href: social.huggingface, group: 'Elsewhere' },
    { label: 'TryHackMe', href: social.tryhackme, group: 'Elsewhere' },
    { label: 'Email', href: `mailto:${social.email}`, group: 'Elsewhere', hint: social.email },
  ];

  return [...work, ...lab, ...notes, ...elsewhere];
}
