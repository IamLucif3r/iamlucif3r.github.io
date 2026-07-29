'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Chip } from '@/components/ui/chip';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { Tilt } from '@/components/motion/tilt';
import { projects } from '@/content/projects';
import type { Project } from '@/types';

export function Work() {
  const flagship = projects.find((p) => p.flagship) ?? projects[0];
  const rest = projects.filter((p) => p !== flagship);

  return (
    <Section id="work" ariaLabel="Selected work">
      <Reveal>
        <Kicker>Selected work</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          A few things that survived contact with production.
        </h2>
      </Reveal>

      {/* Flagship: pwnspectrum — asymmetric split, framed preview. */}
      <div className="mt-14 grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <p className="font-mono text-caption uppercase tracking-[0.14em] text-accent">
              The one I still actively maintain
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <h3 className="mt-4 font-sans text-h2 text-ink-primary">{flagship.name}</h3>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-4 font-sans text-body-l text-ink-secondary">
              {flagship.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 max-w-measure font-sans text-body text-ink-tertiary">
              {flagship.description}
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-4 max-w-measure font-sans text-caption italic text-ink-secondary">
              {flagship.whyItMatters}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap gap-2">
              {flagship.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              {flagship.href && (
                <TextLink href={flagship.href} external arrow>
                  {flagship.hrefLabel ?? 'Learn more'}
                </TextLink>
              )}
              {flagship.secondaryHref && (
                <TextLink href={flagship.secondaryHref} external arrow>
                  {flagship.secondaryHrefLabel ?? 'GitHub'}
                </TextLink>
              )}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.16}>
            <ProjectPreview
              label="feed.anmolsinghyadav.com"
              src={flagship.href}
              fallbackHref={flagship.href}
              fallbackLabel={flagship.hrefLabel}
            />
          </Reveal>
        </div>
      </div>

      {/* The rest: premium product tiles, click to expand. */}
      <div className="mt-section-sm grid gap-6 border-t border-hairline pt-section-sm sm:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <Tilt max={5} className="h-full">
      <div
        className="group flex h-full flex-col rounded-md border border-hairline bg-bg-raised p-6 transition-colors duration-base ease-standard hover:border-accent/40"
      >
        <h3 className="font-sans text-lg text-ink-primary">{project.name}</h3>
        <p className="mt-2 font-sans text-caption text-ink-secondary">{project.tagline}</p>

        <button
          type="button"
          data-cursor="pointer"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-tertiary transition-colors duration-fast ease-standard hover:text-accent"
        >
          Why it matters
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-base ease-standard ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.6, 0.2, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-3 font-sans text-caption text-ink-tertiary">
                {project.whyItMatters}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-ink-tertiary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex-1" />

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="group/link inline-flex items-center gap-1 font-sans text-caption font-medium text-accent transition-colors duration-fast ease-standard hover:text-accent-hover"
          >
            {project.hrefLabel ?? 'View'}
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-fast ease-standard group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden
            />
          </a>
        )}
      </div>
    </Tilt>
  );
}

/**
 * A live embed of the actual feed — not a mockup. It's a real, small site,
 * so it fits. Cross-origin iframes can't report load failures reliably (the
 * browser's own "can't be reached" interstitial still "loads" successfully
 * from the frame's point of view), so we fall back to a static card if the
 * frame hasn't signalled a real load within a few seconds.
 */
function ProjectPreview({
  label,
  src,
  fallbackHref,
  fallbackLabel,
}: {
  label: string;
  src?: string;
  fallbackHref?: string;
  fallbackLabel?: string;
}) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(src ? 'loading' : 'error');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    timeoutRef.current = setTimeout(() => {
      setStatus((current) => (current === 'loaded' ? current : 'error'));
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [src]);

  return (
    <div className="overflow-hidden rounded-md border border-hairline bg-bg-raised">
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span className="ml-3 truncate font-mono text-caption text-ink-tertiary">
          {label}
        </span>
      </div>
      <div className="relative h-80 bg-bg-inset sm:h-[26rem]">
        {src && status !== 'error' && (
          <iframe
            src={src}
            title="pwnspectrum — live threat intelligence feed"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            className="absolute inset-0 h-full w-full border-0"
          />
        )}

        {status === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-6 w-6 animate-pulse rounded-full bg-hairline-strong" aria-hidden />
          </div>
        )}

        {status === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <AlertCircle className="h-5 w-5 text-ink-tertiary" aria-hidden />
            <p className="max-w-[24ch] font-sans text-caption text-ink-tertiary">
              Live preview isn&apos;t loading right now.
            </p>
            {fallbackHref && (
              <a
                href={fallbackHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="font-sans text-caption font-medium text-accent transition-colors duration-fast ease-standard hover:text-accent-hover"
              >
                {fallbackLabel ?? 'Open the feed directly'} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

