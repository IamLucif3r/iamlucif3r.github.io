'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import type { ResearchArticle } from '@/types';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

/** Preserves declared category order (articles arrive globally date-sorted); drops empty categories. */
function groupByCategory(articles: ResearchArticle[]) {
  const seen = new Map<string, { categoryLabel: string; items: ResearchArticle[] }>();
  for (const article of articles) {
    const group = seen.get(article.category);
    if (group) group.items.push(article);
    else seen.set(article.category, { categoryLabel: article.categoryLabel, items: [article] });
  }
  return Array.from(seen.entries()).map(([category, group]) => ({ category, ...group }));
}

/** Category-grouped sidebar (desktop) / dropdown (mobile) + an independently scrolling reader pane. */
export function ArticlesPanel({ articles }: { articles: ResearchArticle[] }) {
  const groups = groupByCategory(articles);
  const [activeSlug, setActiveSlug] = useState(articles[0]?.slug);
  const active = articles.find((a) => a.slug === activeSlug) ?? articles[0];

  if (!active) return null;

  return (
    <>
      <div className="mt-10 md:hidden">
        <label className="sr-only" htmlFor="article-select">
          Choose an article
        </label>
        <select
          id="article-select"
          value={active.slug}
          onChange={(e) => setActiveSlug(e.target.value)}
          className="w-full rounded-md border border-hairline bg-bg-raised px-4 py-3 font-sans text-body text-ink-primary"
        >
          {groups.map(({ category, categoryLabel, items }) => (
            <optgroup key={category} label={categoryLabel}>
              {items.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div
        className="mt-10 grid overflow-hidden rounded-md border border-hairline bg-bg-raised md:grid-cols-[19rem_1fr]"
        style={{ height: 'min(85vh, 56rem)' }}
      >
        <nav
          aria-label="Articles by category"
          className="research-scroll hidden overflow-y-auto border-r border-hairline p-4 md:block"
        >
          {groups.map(({ category, categoryLabel, items }) => (
            <div key={category} className="mb-6 last:mb-0">
              <p className="px-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-tertiary">
                {categoryLabel}
              </p>
              <div className="mt-2 flex flex-col gap-0.5">
                {items.map((a) => {
                  const isActive = a.slug === active.slug;
                  return (
                    <button
                      key={a.slug}
                      type="button"
                      onClick={() => setActiveSlug(a.slug)}
                      aria-current={isActive}
                      data-cursor="pointer"
                      className={cn(
                        'rounded-md px-2 py-2 text-left font-sans text-caption transition-colors duration-fast ease-standard',
                        isActive
                          ? 'bg-bg-inset text-ink-primary'
                          : 'text-ink-secondary hover:bg-bg-inset/60 hover:text-ink-primary',
                      )}
                    >
                      {a.title}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="research-scroll overflow-y-auto p-6 sm:p-10">
          <p className="font-mono text-caption text-ink-tertiary">
            {active.categoryLabel} · {dateFormatter.format(new Date(active.date))}
          </p>
          <h3 className="mt-3 max-w-measure font-sans text-h3 text-ink-primary">{active.title}</h3>
          <div
            className="reader-prose mt-6 max-w-measure"
            dangerouslySetInnerHTML={{ __html: active.bodyHtml }}
          />
          {active.href && (
            <a
              href={active.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="mt-8 inline-flex items-center gap-1.5 font-mono text-caption text-accent transition-opacity duration-fast hover:opacity-80"
            >
              {active.hrefLabel ?? 'Full write-up'}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
