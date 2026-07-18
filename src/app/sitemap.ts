import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${siteConfig.url}/`, lastModified: now, priority: 1 },
    { url: `${siteConfig.url}/cv/`, lastModified: now, priority: 0.8 },
  ];
}
