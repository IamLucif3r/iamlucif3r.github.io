'use client';

import Image from 'next/image';
import { Download, Mail } from 'lucide-react';
import { m } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { profile } from '@/content/work/profile';
import { siteConfig } from '@/config/site';

export function WorkHero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[92svh] items-center overflow-hidden pb-20 pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_28%,rgba(255,255,255,0.75),transparent_68%),linear-gradient(180deg,rgba(247,244,238,0.4),transparent_48%)]" />
        <div className="absolute inset-x-0 top-24 h-48 bg-[linear-gradient(90deg,transparent,rgb(var(--accent)/0.08),transparent)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
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
              <p className="mt-5 max-w-measure font-sans text-body text-ink-secondary">
                {profile.hero.body}
              </p>
            </Reveal>

            <Reveal delay={0.44}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <ButtonLink href={siteConfig.resumePdf} download>
                    <Download className="h-4 w-4" aria-hidden />
                    Download résumé
                  </ButtonLink>
                </Magnetic>
                <ButtonLink href="#contact" variant="secondary">
                  <Mail className="h-4 w-4" aria-hidden />
                  Get in touch
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.52}>
              <ul
                aria-label="Focus areas"
                className="mt-12 flex flex-wrap gap-x-5 gap-y-2 font-mono text-caption text-ink-tertiary"
              >
                {profile.hero.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/12 via-transparent to-transparent blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline-strong bg-bg-raised shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/images/portrait-work.webp"
                    alt={`Portrait of ${profile.name}`}
                    width={1000}
                    height={1000}
                    priority
                    sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 80vw"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Staggered word-by-word headline reveal (reduced motion handled by MotionConfig). */
function HeadlineReveal({ words }: { words: readonly string[] }) {
  return (
    <m.h1
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
      className="text-balance font-sans text-display-xl text-ink-primary"
      aria-label={words.join(' ')}
    >
      {words.map((word, i) => (
        <m.span
          key={`${word}-${i}`}
          aria-hidden
          variants={{
            hidden: { opacity: 0, y: 26 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.6, 0.2, 1] } },
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </m.span>
      ))}
    </m.h1>
  );
}
