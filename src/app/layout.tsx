import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';

import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { personJsonLd } from '@/config/seo';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/motion/scroll-progress';
import { CosmicBackground } from '@/components/motion/cosmic-background';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

const THEME_INIT_SCRIPT = `(function(){
  try {
    var root = document.documentElement;
    var storage = null;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        storage = window.localStorage;
        var probe = '__site_mode_probe__';
        storage.setItem(probe, probe);
        storage.removeItem(probe);
      }
    } catch (e) {
      storage = null;
    }
    var mode = storage ? storage.getItem('site-mode') : null;
    var theme = storage ? storage.getItem('theme') : null;
    var research = mode === 'research' || theme === 'dark';
    root.classList.toggle('dark', research);
    root.dataset.mode = research ? 'research' : 'platform';
  } catch (e) {
    var root = document.documentElement;
    root.classList.remove('dark');
    root.dataset.mode = 'platform';
  }
})();`;

const GA_MEASUREMENT_ID = 'G-LX5DFJNFWT';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ScrollProgress />
        <CosmicBackground />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
