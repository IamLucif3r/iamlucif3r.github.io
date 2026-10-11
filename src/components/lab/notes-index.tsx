'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Rss } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { ResearchArticle } from '@/types';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

/** Notes without their bodies — keeps the lab page payload small. */
export type NoteSummary = Omit<ResearchArticle, 'bodyHtml'>;

/** Filterable list of lab notes; each row links to the note's own page. */
export function NotesIndex({ notes }: { notes: NoteSummary[] }) {
  const categories = Array.from(new Map(notes.map((n) => [n.category, n.categoryLabel])).entries());
  const [filter, setFilter] = useState<string | null>(null);
  const visible = filter ? notes.filter((n) => n.category === filter) : notes;

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="Filter notes by category" className="flex flex-wrap gap-2">
          <FilterButton active={filter === null} onClick={() => setFilter(null)}>
            All · {notes.length}
          </FilterButton>
          {categories.map(([category, label]) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {label}
            </FilterButton>
          ))}
        </div>
        <a
          href="/lab/feed.xml"
          className="inline-flex items-center gap-1.5 font-mono text-caption text-ink-tertiary transition-colors hover:text-accent"
        >
          <Rss className="h-3.5 w-3.5" aria-hidden />
          RSS
        </a>
      </div>

      <ul className="mt-8 divide-y divide-hairline border-y border-hairline" aria-live="polite">
        {visible.map((note) => (
          <li key={note.slug}>
            <Link
              href={`/lab/notes/${note.slug}/`}
              className="group grid gap-2 py-6 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-caption text-ink-tertiary">
                {dateFormatter.format(new Date(note.date))}
              </span>
              <span>
                <span className="block font-sans text-lg text-ink-primary transition-colors group-hover:text-accent">
                  {note.title}
                </span>
                <span className="mt-1 block max-w-measure font-sans text-caption text-ink-secondary">
                  {note.summary}
                </span>
              </span>
              <span className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-tertiary">
                {note.categoryLabel} · {note.readingMinutes} min
                <ArrowRight
                  className="hidden h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 sm:block"
                  aria-hidden
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 py-1.5 font-mono text-[0.72rem] transition-colors duration-fast',
        active
          ? 'border-accent bg-accent text-bg-base'
          : 'border-hairline-strong text-ink-secondary hover:border-accent/60 hover:text-ink-primary',
      )}
    >
      {children}
    </button>
  );
}
