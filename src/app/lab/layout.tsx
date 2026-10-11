import type { Metadata } from 'next';
import { SideShell } from '@/components/layout/side-shell';
import { CosmicBackground } from '@/components/motion/cosmic-background';
import { labIdentity } from '@/content/lab/identity';
import { siteConfig } from '@/config/site';

const title = `The Lab — ${labIdentity.handle}`;

export const metadata: Metadata = {
  title: { default: title, template: `%s — ${labIdentity.handle}` },
  description: labIdentity.standfirst,
  alternates: { canonical: '/lab/', types: { 'application/rss+xml': '/lab/feed.xml' } },
  openGraph: { title, description: labIdentity.standfirst, url: `${siteConfig.url}/lab/` },
  twitter: { card: 'summary_large_image', title, description: labIdentity.standfirst },
};

/** The lab side: dark, personal, after hours. */
export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <SideShell side="lab" backdrop={<CosmicBackground />}>
      {children}
    </SideShell>
  );
}
