import { Mail } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { profile } from '@/content/profile';
import { social } from '@/config/social';

export function Invitation() {
  return (
    <Section ariaLabel="Get in touch" className="py-section">
      <div className="mx-auto flex max-w-measure flex-col items-center text-center">
        <Reveal>
          <h2 className="text-balance font-serif text-display-xl text-ink-primary">
            {profile.invitation.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <ButtonLink href={`mailto:${social.email}`}>
              <Mail className="h-4 w-4" aria-hidden />
              Get in touch
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-caption">
            <TextLink href={social.linkedin} external>
              LinkedIn
            </TextLink>
            <TextLink href={social.github} external>
              GitHub
            </TextLink>
            <TextLink href="/cv">Résumé</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
