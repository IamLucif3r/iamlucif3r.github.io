'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { navItems } from '@/config/nav';
import { profile } from '@/content/profile';

export function Nav() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-base ease-standard',
        condensed
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
          className="font-serif text-lg tracking-tight text-ink-primary transition-colors duration-fast hover:text-accent"
        >
          {profile.name}
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) =>
            item.cta ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-accent/50 px-4 py-1.5 font-sans text-caption text-ink-primary transition-colors duration-fast ease-standard hover:border-accent hover:bg-accent hover:text-bg-base"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-caption text-ink-secondary transition-colors duration-fast ease-standard hover:text-ink-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
