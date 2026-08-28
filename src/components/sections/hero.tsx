'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { Chip } from '@/components/ui/chip';
import { ModeText } from '@/components/ui/mode-text';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { profile } from '@/content/profile';
import { proofChips } from '@/content/proof';
import { researchIdentity } from '@/content/research';
import { social } from '@/config/social';

const researchHero = {
  words: researchIdentity.headline.split(' '),
  positioning: 'The day job has change control. This is where I just try things.',
  body: researchIdentity.standfirst,
} as const;

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28"
    >
      <AmbientBackground />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-kicker uppercase tracking-[0.18em] text-ink-tertiary">
                <ModeText
                  platform={`${profile.name} · ${profile.role}`}
                  research={`${researchIdentity.handle} · ${researchIdentity.kicker}`}
                />
              </p>
            </Reveal>

            <div className="mt-6">
              <div className="dark:hidden">
                <HeadlineReveal words={profile.hero.words} />
              </div>
              <div className="hidden dark:block">
                <HeadlineReveal words={researchHero.words} />
              </div>
            </div>

            <Reveal delay={0.28}>
              <p className="mt-6 max-w-xl text-balance font-sans text-body-l font-medium text-ink-primary/90">
                <ModeText
                  platform={profile.hero.positioning}
                  research={researchHero.positioning}
                />
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 max-w-measure font-sans text-body text-ink-secondary">
                <ModeText platform={profile.hero.body} research={researchHero.body} />
              </p>
            </Reveal>

            <Reveal delay={0.44}>
              <div className="dark:hidden">
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Magnetic>
                    <ButtonLink href="#work">View work</ButtonLink>
                  </Magnetic>
                  <TextLink href="#writing">Read writing</TextLink>
                  <TextLink href="#contact" className="text-ink-secondary hover:text-accent">
                    Contact
                  </TextLink>
                </div>
              </div>
              <div className="hidden dark:block">
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Magnetic>
                    <ButtonLink href="#contact">Say hi (bugs welcome)</ButtonLink>
                  </Magnetic>
                  <TextLink href={social.github} external className="text-ink-secondary hover:text-accent">
                    GitHub
                  </TextLink>
                  <TextLink href={social.linkedin} external className="text-ink-secondary hover:text-accent">
                    LinkedIn
                  </TextLink>
                </div>
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

/** Mode-specific atmosphere: production calm by day, quiet notebook after hours. */
function AmbientBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="theme-atmosphere absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_28%,rgba(255,255,255,0.75),transparent_68%),linear-gradient(180deg,rgba(247,244,238,0.4),transparent_48%)] dark:bg-[radial-gradient(ellipse_60%_38%_at_50%_8%,rgba(178,155,105,0.05),transparent_70%),linear-gradient(180deg,rgba(6,7,9,0),rgba(6,7,9,0.8)_82%)]" />
      <motion.div
        className="absolute inset-x-0 top-24 h-48 bg-[linear-gradient(90deg,transparent,rgb(var(--accent)/0.08),transparent)] blur-3xl dark:hidden"
        animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="research-grain absolute inset-0" />
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

/** The trust-anchor portrait keeps its frame and swaps photos with the active mode. */
function Portrait() {
  return (
    <div className="relative mx-auto max-w-sm lg:max-w-none">
      <div
        aria-hidden
        className="theme-atmosphere absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/12 via-transparent to-transparent blur-2xl dark:from-accent/10"
      />
      <div className="theme-atmosphere relative overflow-hidden rounded-[1.75rem] border border-hairline-strong bg-bg-raised shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]">
        <div className="relative aspect-square w-full">
          <Image
            src="/images/me.png"
            alt={`Portrait of ${profile.name}`}
            width={640}
            height={640}
            priority
            sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 80vw"
            className="theme-atmosphere absolute inset-0 h-full w-full object-cover opacity-100 dark:opacity-0"
          />
          <Image
            src="/images/anmol-researcher.png"
            alt={`${profile.name} in Research Mode`}
            width={640}
            height={640}
            sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 80vw"
            className="theme-atmosphere absolute inset-0 h-full w-full object-cover opacity-0 dark:opacity-100"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base/25 via-transparent to-transparent"
        />
      </div>
    </div>
  );
}
