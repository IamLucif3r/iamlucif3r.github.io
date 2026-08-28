'use client';

import { Laptop, Terminal } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useThemeMode } from '@/lib/theme-mode';

/** Switches between the professional platform story and the private research notebook. */
export function ThemeToggle({ className }: { className?: string }) {
  const { isResearch, setThemeMode } = useThemeMode();

  function toggle() {
    setThemeMode(isResearch ? 'platform' : 'research');
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isResearch ? 'Switch to Platform Mode' : 'Switch to Research Mode'}
      title={isResearch ? 'Platform Mode' : 'Research Mode'}
      data-cursor="pointer"
      className={cn(
        'group flex h-9 w-9 items-center justify-center rounded-full text-ink-secondary transition-colors duration-slow ease-standard hover:text-accent',
        className,
      )}
    >
      {isResearch ? (
        <Laptop className="h-4 w-4" aria-hidden />
      ) : (
        <Terminal className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
