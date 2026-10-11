'use client';

import { Briefcase, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/cn';
import { sides, type Side } from '@/config/site';

const icons = { work: Briefcase, lab: FlaskConical } as const;

/** Remembers where the click happened so the next page can wipe in from there. */
export function rememberTransitionOrigin(e: React.MouseEvent) {
  try {
    sessionStorage.setItem('vt-origin', `${Math.round(e.clientX)},${Math.round(e.clientY)}`);
  } catch {
    // Storage unavailable: the navigation still works, just without the wipe.
  }
}

/**
 * Labeled Work | Lab control. Each side is its own route, so these are plain
 * links (full document navigations) that the browser can animate between.
 */
export function SideSwitch({ current, className }: { current: Side; className?: string }) {
  return (
    <div
      role="group"
      aria-label="Switch between work and lab"
      className={cn(
        'flex items-center rounded-full border border-hairline-strong bg-bg-raised/70 p-0.5',
        className,
      )}
    >
      {(Object.keys(sides) as Side[]).map((side) => {
        const Icon = icons[side];
        const active = side === current;
        return (
          <a
            key={side}
            href={sides[side].href}
            aria-current={active ? 'page' : undefined}
            onClick={active ? undefined : rememberTransitionOrigin}
            aria-label={sides[side].label}
            title={side === 'work' ? 'Professional work' : 'Personal lab — after hours'}
            className={cn(
              'flex items-center gap-1.5 rounded-full px-2.5 py-1.5 sm:px-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-base ease-standard',
              active
                ? 'bg-ink-primary text-bg-base'
                : 'text-ink-secondary hover:text-ink-primary',
            )}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">{sides[side].label}</span>
          </a>
        );
      })}
    </div>
  );
}
