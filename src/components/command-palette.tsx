'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, CornerDownLeft, Search } from 'lucide-react';
import { AnimatePresence, m } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { CommandItem } from '@/types';

const OPEN_EVENT = 'command-palette:open';

/** Opens the palette from anywhere (nav button, mobile menu). */
export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function isLabHref(href: string) {
  return href === '/lab/' || href.startsWith('/lab/');
}

/** Case-insensitive match on every word of the query, across label + hint + group. */
function matches(item: CommandItem, query: string) {
  const haystack = `${item.label} ${item.hint ?? ''} ${item.group}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

/** ⌘K / Ctrl+K jump-to-anything across both sides of the site. */
export function CommandPalette({ items }: { items: CommandItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const results = useMemo(
    () => (query.trim() ? items.filter((item) => matches(item, query)) : items),
    [items, query],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      returnFocusRef.current?.focus?.();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  function go(item: CommandItem) {
    setOpen(false);
    const href = item.href;
    if (/^(https?:|mailto:)/.test(href)) {
      window.open(href, href.startsWith('mailto:') ? '_self' : '_blank', 'noopener,noreferrer');
      return;
    }
    if (href.endsWith('.pdf')) {
      window.location.assign(href);
      return;
    }
    // Crossing sides is a full navigation so the theme and transition apply.
    const onLab = isLabHref(window.location.pathname);
    if (onLab !== isLabHref(href)) {
      window.location.assign(href);
    } else {
      router.push(href);
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === 'Tab') {
      // Keep focus inside the dialog: the input is the only tab stop.
      e.preventDefault();
    }
  }

  let lastGroup: string | null = null;

  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/40 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label="Jump to"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.2, 0.6, 0.2, 1] }}
            onKeyDown={onKeyDown}
            className="w-full max-w-xl overflow-hidden rounded-md border border-hairline-strong bg-bg-raised text-ink-primary shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 border-b border-hairline px-4">
              <Search className="h-4 w-4 shrink-0 text-ink-tertiary" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a case study, note, project…"
                aria-label="Search"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-list"
                aria-activedescendant={results[active] ? `command-${active}` : undefined}
                className="h-14 w-full bg-transparent font-sans text-body text-ink-primary placeholder:text-ink-tertiary focus:outline-none"
              />
              <kbd className="rounded border border-hairline-strong px-1.5 py-0.5 font-mono text-[0.7rem] text-ink-tertiary">
                esc
              </kbd>
            </div>

            <ul
              id="command-list"
              ref={listRef}
              role="listbox"
              aria-label="Results"
              className="research-scroll max-h-[min(60vh,26rem)] overflow-y-auto p-2"
            >
              {results.length === 0 && (
                <li className="px-3 py-6 text-center font-sans text-caption text-ink-tertiary">
                  Nothing matches “{query}”.
                </li>
              )}
              {results.map((item, i) => {
                const header = item.group !== lastGroup ? item.group : null;
                lastGroup = item.group;
                const external = /^(https?:|mailto:)/.test(item.href);
                return (
                  <li key={`${item.group}-${item.href}-${item.label}`} role="presentation">
                    {header && (
                      <p
                        aria-hidden
                        className="px-3 pb-1 pt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-tertiary"
                      >
                        {header}
                      </p>
                    )}
                    {/* Keyboard selection runs through the input (aria-activedescendant). */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    <div
                      id={`command-${i}`}
                      role="option"
                      tabIndex={-1}
                      aria-selected={i === active}
                      data-index={i}
                      onMouseMove={() => setActive(i)}
                      onClick={() => go(item)}
                      className={cn(
                        'flex cursor-pointer items-center justify-between gap-4 rounded-sm px-3 py-2.5',
                        i === active ? 'bg-bg-inset' : '',
                      )}
                    >
                      <span className="min-w-0">
                        <span className="block truncate font-sans text-caption text-ink-primary">
                          {item.label}
                        </span>
                        {item.hint && (
                          <span className="block truncate font-sans text-[0.78rem] text-ink-tertiary">
                            {item.hint}
                          </span>
                        )}
                      </span>
                      {i === active &&
                        (external ? (
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                        ) : (
                          <CornerDownLeft className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                        ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
