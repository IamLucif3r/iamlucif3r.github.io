import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { caseStudies } from '@/content/work/case-studies';
import { getResearchArticles } from '@/lib/research-content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const notes = getResearchArticles();
  return [
    { url: `${siteConfig.url}/`, lastModified: now, priority: 1 },
    { url: `${siteConfig.url}/cv/`, lastModified: now, priority: 0.9 },
    ...caseStudies.map((c) => ({
      url: `${siteConfig.url}/work/${c.slug}/`,
      lastModified: now,
      priority: 0.8,
    })),
    { url: `${siteConfig.url}/lab/`, lastModified: now, priority: 0.7 },
    ...notes.map((note) => ({
      url: `${siteConfig.url}/lab/notes/${note.slug}/`,
      lastModified: note.date ? new Date(note.date) : now,
      priority: 0.5,
    })),
  ];
}
