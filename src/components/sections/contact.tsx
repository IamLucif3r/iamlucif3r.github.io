import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { Kicker } from '@/components/ui/kicker';
import { profile } from '@/content/profile';
import { social } from '@/config/social';

const intents = [
  { label: 'Discuss research', subject: 'Discuss research' },
  { label: 'Collaborate on security work', subject: 'Collaboration' },
];

function mailto(subject: string) {
  return `mailto:${social.email}?subject=${encodeURIComponent(subject)}`;
}

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact" className="py-section">
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <ButtonLink href={mailto(intents[0].subject)}>
                <Mail className="h-4 w-4" aria-hidden />
                {intents[0].label}
              </ButtonLink>
            </Magnetic>
            <ButtonLink href={mailto(intents[1].subject)} variant="secondary">
              {intents[1].label}
            </ButtonLink>
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
            <TextLink href={social.pwnspectrum} external className="inline-flex items-center gap-1.5">
              pwnspectrum
            </TextLink>
            <TextLink href="/cv">Résumé</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

