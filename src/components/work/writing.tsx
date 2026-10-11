import { ArrowUpRight, Mic } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { Tilt } from '@/components/motion/tilt';
import { articles } from '@/content/work/writing';
import { talks } from '@/content/work/speaking';
import { social } from '@/config/social';
import type { Article } from '@/types';

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });

export function Writing() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section id="writing" ariaLabel="Writing and speaking" className="border-t border-hairline">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <Kicker>Writing &amp; speaking</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
              A few pieces I’d still stand behind.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 font-mono text-caption text-ink-tertiary">
              15+ articles · individual pieces read by 30K+ people
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <TextLink href={social.medium} external arrow>
            All writing on Medium
          </TextLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {sorted.map((article, i) => (
          <Reveal key={article.href} delay={i * 0.06}>
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>

      {talks.map((talk) => (
        <Reveal key={talk.title} delay={0.1}>
          <div className="mt-6 grid gap-4 rounded-md border border-hairline bg-bg-raised p-6 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-8">
            <div className="flex items-center gap-2 sm:flex-col sm:items-start sm:gap-3">
              <Mic className="h-4 w-4 text-accent" aria-hidden />
              <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-tertiary">
                Talk · {talk.event}
              </span>
            </div>
            <div>
              <h3 className="font-sans text-xl text-ink-primary">{talk.title}</h3>
              <p className="mt-3 max-w-measure font-sans text-body text-ink-secondary">{talk.summary}</p>
              {talk.href && (
                <div className="mt-4">
                  <TextLink href={talk.href} external arrow className="text-caption">
                    View talk
                  </TextLink>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </Section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Tilt max={4} className="h-full">
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-md border border-hairline bg-bg-raised transition-colors duration-base ease-standard hover:border-accent/40"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-bg-inset">
          {article.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.cover}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-slow ease-standard group-hover:scale-[1.04]"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-accent">
              {article.theme}
            </span>
            <span className="font-mono text-caption text-ink-tertiary">
              {dateFormatter.format(new Date(article.date))}
            </span>
          </div>
          <h3 className="font-sans text-lg text-ink-primary">{article.title}</h3>
          <p className="font-sans text-caption text-ink-secondary">{article.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1 font-sans text-caption font-medium text-accent transition-colors duration-fast ease-standard group-hover:text-accent-hover">
            Read on Medium
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-fast ease-standard group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </a>
    </Tilt>
  );
}
