import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';

import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { personJsonLd } from '@/config/seo';
import { MotionProvider } from '@/components/motion/motion-provider';
import { ScrollProgress } from '@/components/motion/scroll-progress';
import { CommandPalette } from '@/components/command-palette';
import { getCommandItems } from '@/lib/command-items';

/**
 * Runs before first paint on every full page load:
 * - the theme follows the route (`/lab/*` is dark, everything else light), so there is no flash;
 * - remembers which side the visitor came from (for the "Continue in the Lab" nudge);
 * - forwards v1 anchors (#articles, #toolshed) that now live in the lab;
 * - opts in to cross-document view transitions (injected here because Next's CSS
 *   tooling stalls on the `@view-transition` at-rule) and picks up the
 *   Work ↔ Lab switch's click point for the circular wipe.
 */
const HEAD_SCRIPT = `(function(){
  var root = document.documentElement;
  var path = location.pathname;
  var lab = path === '/lab' || path.indexOf('/lab/') === 0;
  if (path === '/' && /^#(articles|toolshed)$/.test(location.hash)) {
    location.replace('/lab/#' + (location.hash === '#articles' ? 'notes' : 'toolshed'));
    return;
  }
  var vt = document.createElement('style');
  vt.textContent = '@' + 'view-transition{navigation:auto}@media (prefers-reduced-motion:reduce){@' + 'view-transition{navigation:none}}';
  document.head.appendChild(vt);
  root.classList.toggle('dark', lab);
  root.dataset.side = lab ? 'lab' : 'work';
  try {
    root.dataset.prevSide = localStorage.getItem('last-side') || '';
    localStorage.setItem('last-side', lab ? 'lab' : 'work');
  } catch (e) {}
  addEventListener('pagereveal', function (e) {
    if (!e.viewTransition) return;
    var origin = null;
    try {
      origin = sessionStorage.getItem('vt-origin');
      sessionStorage.removeItem('vt-origin');
    } catch (err) {}
    if (!origin) return;
    var p = origin.split(',');
    root.style.setProperty('--vt-x', p[0] + 'px');
    root.style.setProperty('--vt-y', p[1] + 'px');
    root.dataset.vt = 'reveal';
    e.viewTransition.finished.finally(function () { delete root.dataset.vt; });
  });
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
        <script dangerouslySetInnerHTML={{ __html: HEAD_SCRIPT }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[70] rounded-md bg-accent px-4 py-2 font-sans text-caption text-bg-base focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <MotionProvider>
          <ScrollProgress />
          {children}
          <CommandPalette items={getCommandItems()} />
        </MotionProvider>
      </body>
    </html>
  );
}
