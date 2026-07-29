'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { Chip } from '@/components/ui/chip';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { profile } from '@/content/profile';
import { proofChips } from '@/content/proof';

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28"
    >
      <AmbientBackground />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-kicker uppercase tracking-[0.18em] text-ink-tertiary">
                {profile.name} · {profile.role}
              </p>
            </Reveal>

            <div className="mt-6">
              <HeadlineReveal words={profile.hero.words} />
            </div>

            <Reveal delay={0.28}>
              <p className="mt-6 max-w-xl text-balance font-sans text-body-l font-medium text-ink-primary/90">
                {profile.hero.positioning}
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 max-w-measure font-sans text-body text-ink-secondary">
                {profile.hero.body}
              </p>
            </Reveal>

            <Reveal delay={0.44}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Magnetic>
                  <ButtonLink href="#work">View work</ButtonLink>
                </Magnetic>
                <TextLink href="#writing">Read writing</TextLink>
                <TextLink href="#contact" className="text-ink-secondary hover:text-accent">
                  Contact
                </TextLink>
              </div>
            </Reveal>

            <Reveal delay={0.52}>
              <div className="mt-12 flex flex-wrap gap-2">
                {proofChips.slice(0, 4).map((chip) => (
                  <Chip key={chip.label}>{chip.label}</Chip>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <Portrait />
            </Reveal>
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-ink-tertiary"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce [animation-duration:2s]" />
      </div>
    </section>
  );
}

/** Barely-there animated gradient wash. No particles, no 3D scene. */
function AmbientBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(255,255,255,0.035),transparent_70%)]" />
      <motion.div
        className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl"
        animate={reduce ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/** Staggered word-by-word headline reveal. Degrades to a static heading. */
function HeadlineReveal({ words }: { words: readonly string[] }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <h1 className="text-balance font-sans text-display-xl text-ink-primary">
        {words.join(' ')}
      </h1>
    );
  }

  return (
    <motion.h1
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
      className="text-balance font-sans text-display-xl text-ink-primary"
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 26 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.6, 0.2, 1] } },
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

/** The trust-anchor portrait — a calm, static frame. No motion tricks. */
function Portrait() {
  return (
    <div className="relative mx-auto max-w-sm lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/12 via-transparent to-transparent blur-2xl"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline-strong bg-bg-raised shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]">
        <Image
          src="/images/me.png"
          alt={`Portrait of ${profile.name}`}
          width={640}
          height={640}
          priority
          sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 80vw"
          className="aspect-square h-auto w-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base/25 via-transparent to-transparent"
        />
      </div>
    </div>
  );
}
