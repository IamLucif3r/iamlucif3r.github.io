'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/cn';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      data-cursor="pointer"
      className={cn(
        'fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong bg-bg-raised text-ink-secondary shadow-lg transition-all duration-slow ease-standard hover:border-accent hover:text-accent',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <ArrowUp className="h-4 w-4" aria-hidden />
    </button>
  );
}
