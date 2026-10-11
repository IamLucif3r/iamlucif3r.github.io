import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { Kicker } from '@/components/ui/kicker';
import { profile } from '@/content/work/profile';
import { social } from '@/config/social';

/** One mailto per intent, so the first email already says what it is about. */
const intents = [
  { label: 'A role or opportunity', subject: 'Opportunity' },
  { label: 'A talk or panel', subject: 'Speaking invitation' },
  { label: 'Security collaboration', subject: 'Collaboration' },
];

function mailto(subject: string) {
  return `mailto:${social.email}?subject=${encodeURIComponent(subject)}`;
}

export function WorkContact() {
  return (
    <Section id="contact" ariaLabel="Contact" className="border-t border-hairline">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal>
          <Kicker className="justify-center">Contact</Kicker>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 text-balance font-sans text-display-xl text-ink-primary">
            {profile.contact.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-measure font-sans text-body-l text-ink-secondary">
            {profile.contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-10 font-mono text-caption uppercase tracking-[0.1em] text-ink-tertiary">
            What’s it about?
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {intents.map((intent, i) =>
              i === 0 ? (
                <Magnetic key={intent.label}>
                  <ButtonLink href={mailto(intent.subject)}>
                    <Mail className="h-4 w-4" aria-hidden />
                    {intent.label}
                  </ButtonLink>
                </Magnetic>
              ) : (
                <ButtonLink key={intent.label} href={mailto(intent.subject)} variant="secondary">
                  {intent.label}
                </ButtonLink>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-caption">
            <TextLink href={social.linkedin} external className="inline-flex items-center gap-1.5">
              <Linkedin className="h-3.5 w-3.5" aria-hidden />
              LinkedIn
            </TextLink>
            <TextLink href={social.github} external className="inline-flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5" aria-hidden />
              GitHub
            </TextLink>
            <TextLink href={social.medium} external className="inline-flex items-center gap-1.5">
              <Rss className="h-3.5 w-3.5" aria-hidden />
              Medium
            </TextLink>
            <TextLink href="/cv/">Web résumé</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
