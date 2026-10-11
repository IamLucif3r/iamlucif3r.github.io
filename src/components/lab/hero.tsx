import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { labIdentity } from '@/content/lab/identity';
import { social } from '@/config/social';
import { siteConfig } from '@/config/site';

const quickLinks = [
  { label: 'GitHub', href: social.github },
  { label: 'Hugging Face', href: social.huggingface },
  { label: 'Medium', href: social.medium },
  { label: 'TryHackMe', href: social.tryhackme },
];

export function LabHero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[88svh] items-center overflow-hidden pb-16 pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_38%_at_50%_8%,rgba(178,155,105,0.05),transparent_70%),linear-gradient(180deg,rgba(6,7,9,0),rgba(6,7,9,0.8)_82%)]" />
        <div className="research-grain absolute inset-0" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-kicker uppercase tracking-[0.18em] text-ink-tertiary">
                {labIdentity.handle} · {labIdentity.kicker}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance font-sans text-display-xl text-ink-primary">
                {labIdentity.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-balance font-sans text-body-l font-medium text-ink-primary/90">
                {labIdentity.positioning}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-5 max-w-measure font-sans text-body text-ink-secondary">
                {labIdentity.standfirst}
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink href="#projects">See what I’m building</ButtonLink>
                {quickLinks.map((link) => (
                  <TextLink
                    key={link.label}
                    href={link.href}
                    external
                    className="font-mono text-caption text-ink-secondary hover:text-accent"
                  >
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline-strong bg-bg-raised shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]">
                  <Image
                    src="/images/portrait-lab.webp"
                    alt={`${siteConfig.name}, after hours`}
                    width={1000}
                    height={1000}
                    priority
                    sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 80vw"
                    className="aspect-square w-full object-cover"
                  />
                  <p className="absolute bottom-3 left-3 rounded-full border border-hairline-strong bg-bg-base/70 px-3 py-1 font-mono text-[0.7rem] text-ink-secondary backdrop-blur">
                    $ whoami → {labIdentity.handle}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
