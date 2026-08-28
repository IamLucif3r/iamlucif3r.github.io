'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { navItems, researchNavItems } from '@/config/nav';
import { profile } from '@/content/profile';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useThemeMode } from '@/lib/theme-mode';

const platformSectionIds = ['work', 'writing', 'speaking', 'about', 'contact'];
const researchSectionIds = ['hero', 'articles', 'toolshed', 'contact'];

export function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { isResearch } = useThemeMode();

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = isResearch ? researchSectionIds : platformSectionIds;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
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
  }, [isResearch]);

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
        className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6 md:px-8"
      >
        <Link
          href="/"
          data-cursor="pointer"
          className="font-sans text-lg tracking-tight text-ink-primary transition-colors duration-fast hover:text-accent"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {(isResearch ? researchNavItems : navItems).map((item) => {
            const href = isResearch ? item.researchHref : item.href;
            const isActive = activeSection && href === `/#${activeSection}`;
            const label = isResearch ? item.researchLabel : item.label;
            return item.cta ? (
              <a
                key={item.label}
                href={href}
                data-cursor="pointer"
                className="rounded-full border border-accent/50 px-4 py-1.5 font-sans text-caption text-ink-primary transition-colors duration-slow ease-standard hover:border-accent hover:bg-accent hover:text-bg-base"
              >
                {label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={href}
                data-cursor="pointer"
                className={cn(
                  'font-sans text-caption transition-colors duration-slow ease-standard hover:text-ink-primary',
                  isActive ? 'text-accent' : 'text-ink-secondary',
                )}
              >
                {label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            data-cursor="pointer"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-ink-primary"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.6, 0.2, 1] }}
            className="overflow-hidden border-b border-hairline bg-bg-base md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {(isResearch ? researchNavItems : navItems).map((item) => {
                const href = isResearch ? item.researchHref : item.href;
                const label = isResearch ? item.researchLabel : item.label;
                return item.cta ? (
                  <a
                    key={item.label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md border border-accent/50 px-4 py-3 text-center font-sans text-body text-ink-primary"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-4 py-3 font-sans text-body text-ink-secondary hover:bg-bg-raised hover:text-ink-primary"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
