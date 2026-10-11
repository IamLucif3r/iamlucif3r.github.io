'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, FlaskConical, X } from 'lucide-react';
import { AnimatePresence, m } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { rememberTransitionOrigin } from '@/components/layout/side-switch';

/** The discoverable door from the work side into the lab. */
export function LabTeaser() {
  return (
    <section aria-label="The lab" className="pb-section-sm">
      <Container>
        <Reveal>
          {/* A local `dark` scope previews the lab's palette using the same tokens. */}
          <a
            href="/lab/"
            onClick={rememberTransitionOrigin}
            className="dark group relative flex flex-col gap-6 overflow-hidden rounded-md border border-hairline-strong bg-bg-base p-8 text-ink-primary sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <span
              aria-hidden
              className="starfield-layer starfield-layer--far pointer-events-none opacity-50"
            />
            <span className="relative">
              <span className="flex items-center gap-2 font-mono text-caption uppercase tracking-[0.14em] text-accent">
                <FlaskConical className="h-4 w-4" aria-hidden />
                Off the clock
              </span>
              <span className="mt-3 block font-sans text-h2">The lab.</span>
              <span className="mt-3 block max-w-measure font-sans text-body text-ink-secondary">
                Open-weight LLM experiments, tools I built because I needed them, CTF write-ups, and
                notes to future me. Same person, fewer change-control tickets.
              </span>
            </span>
            <span className="relative inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-accent/60 px-5 py-2.5 font-sans text-caption transition-colors duration-base group-hover:bg-accent group-hover:text-bg-base sm:self-auto">
              Enter the lab
              <ArrowRight
                className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

/** A quiet nudge for returning visitors who were last in the lab. Never a redirect. */
export function ContinueInLab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.prevSide !== 'lab') return;
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: [0.2, 0.6, 0.2, 1] }}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-1 rounded-full border border-hairline-strong bg-bg-raised py-1 pl-4 pr-1 shadow-lg"
        >
          <a
            href="/lab/"
            onClick={rememberTransitionOrigin}
            className="flex items-center gap-1.5 font-sans text-caption text-ink-primary hover:text-accent"
          >
            Continue in the Lab
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setShow(false)}
            aria-label="Dismiss"
            className="flex h-7 w-7 items-center justify-center rounded-full text-ink-tertiary hover:text-ink-primary"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
