import type { Metadata } from 'next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';

import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans'
});

const serif = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Research Headquarters',
  description: 'The operating system for a cybersecurity researcher\'s knowledge.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        <SiteHeader />
        <main data-pagefind-body>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
