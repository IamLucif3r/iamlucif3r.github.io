'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Command, Menu, X } from 'lucide-react';
import { AnimatePresence, m } from 'framer-motion';
import { cn } from '@/lib/cn';
import { navItems } from '@/config/nav';
import { siteConfig, sides, type Side } from '@/config/site';
import { SideSwitch } from '@/components/layout/side-switch';
import { openCommandPalette } from '@/components/command-palette';

export function Nav({ side }: { side: Side }) {
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const items = navItems[side];

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((item) => item.sectionId && document.getElementById(item.sectionId))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-slow ease-standard',
        condensed || mobileOpen
          ? 'border-b border-hairline bg-bg-base/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-4 px-6 md:px-8"
      >
        <Link
          href={sides[side].href}
          className="shrink-0 font-sans text-lg tracking-tight text-ink-primary transition-colors duration-fast hover:text-accent"
        >
          {side === 'lab' ? (
            <span className="font-mono text-base">~/IamLucif3r</span>
          ) : (
            siteConfig.name
          )}
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {items.map((item) => {
            const isActive = item.sectionId !== undefined && item.sectionId === activeSection;
            return item.cta ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-accent/50 px-4 py-1.5 font-sans text-caption text-ink-primary transition-colors duration-slow ease-standard hover:border-accent hover:bg-accent hover:text-bg-base"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'font-sans text-caption transition-colors duration-slow ease-standard hover:text-ink-primary',
                  isActive ? 'text-accent' : 'text-ink-secondary',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Search the site"
            aria-keyshortcuts="Meta+K Control+K"
            className="hidden h-8 items-center gap-1 rounded-full border border-hairline-strong px-2.5 font-mono text-[0.72rem] text-ink-tertiary transition-colors duration-fast hover:border-accent hover:text-ink-primary sm:flex"
          >
            <Command className="h-3 w-3" aria-hidden />K
          </button>
          <SideSwitch current={side} />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-ink-primary lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.6, 0.2, 1] }}
            className="overflow-hidden border-b border-hairline bg-bg-base lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {items.map((item) =>
                item.cta ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 rounded-md border border-accent/50 px-4 py-3 text-center font-sans text-body text-ink-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-4 py-3 font-sans text-body text-ink-secondary hover:bg-bg-raised hover:text-ink-primary"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openCommandPalette();
                }}
                className="rounded-md px-4 py-3 text-left font-sans text-body text-ink-secondary hover:bg-bg-raised hover:text-ink-primary"
              >
                Search…
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
