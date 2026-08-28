import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { ModeText } from '@/components/ui/mode-text';
import { Reveal } from '@/components/motion/reveal';
import { profile } from '@/content/profile';

export function About() {
  return (
    <Section id="about" ariaLabel="About">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-lg bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-2xl"
              />
              <figure className="relative overflow-hidden rounded-lg border border-hairline bg-bg-raised p-2">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/anmol.jpg"
                    alt={`${profile.name} outdoors, in a candid portrait`}
                    width={480}
                    height={600}
                    sizes="(min-width: 1024px) 26rem, 80vw"
                    className="aspect-[4/5] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <Kicker>
              <ModeText platform="About" research="Identity" />
            </Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
              <ModeText
                platform={profile.about.headline}
                research="The same person, after the formal system diagram is closed."
              />
            </h2>
          </Reveal>

          <div className="mt-8 flex max-w-prose flex-col gap-5">
            {profile.about.body.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="font-sans text-body text-ink-secondary">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-hairline pt-8 font-mono text-caption text-ink-tertiary">
              <span>TryHackMe — Top 1% (0xD)</span>
              <span>DEF CON 9111 — Safe Mode volunteer</span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
