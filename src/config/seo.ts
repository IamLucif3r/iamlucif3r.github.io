import { social } from '@/config/social';
import { siteConfig } from '@/config/site';
import type { ResearchArticle } from '@/types';

/** JSON-LD Person schema — ideal for a personal / recognition site. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: 'IamLucif3r',
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: `mailto:${social.email}`,
    worksFor: { '@type': 'Organization', name: 'ISS STOXX' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Vellore Institute of Technology' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'AI security',
      'LLM security',
      'Platform security',
      'Kubernetes security',
      'Container isolation',
      'eBPF',
      'Software supply-chain security',
      'Security architecture',
    ],
    sameAs: [social.github, social.linkedin, social.medium, social.huggingface, social.tryhackme],
  };
}

/** JSON-LD BlogPosting for a lab note. */
export function noteJsonLd(note: ResearchArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: note.title,
    description: note.summary,
    datePublished: note.date,
    url: `${siteConfig.url}/lab/notes/${note.slug}/`,
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
  };
}
