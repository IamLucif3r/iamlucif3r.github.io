import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { profile } from '@/content/profile';

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-svh items-center pt-24"
    >
      {/* Barely-there centre vignette to focus the eye. No particles, no grid. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(255,255,255,0.035),transparent_70%)]"
      />
      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <Image
              src="/images/me.png"
              alt={`Portrait of ${profile.name}`}
              width={96}
              height={96}
              priority
              className="mb-10 h-24 w-24 rounded-full object-cover ring-1 ring-hairline-strong"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-8 font-mono text-kicker uppercase tracking-[0.18em] text-ink-tertiary">
              {profile.name} · {profile.role}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <h1 className="text-balance font-serif text-display-xl text-ink-primary">
              {profile.thesis}
            </h1>
          </Reveal>
        </div>
      </Container>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-ink-tertiary"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce [animation-duration:2s]" />
      </div>
    </section>
  );
}
