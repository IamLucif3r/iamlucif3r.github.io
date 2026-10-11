import { siteConfig } from '@/config/site';
import { profile } from '@/content/work/profile';
import { ogCard, ogSize } from '@/lib/og';

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = ogSize;
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function OpengraphImage() {
  return ogCard({
    side: 'work',
    kicker: `${siteConfig.name} · ${siteConfig.role}`,
    title: profile.thesis,
    footer: 'anmolsinghyadav.com',
  });
}
