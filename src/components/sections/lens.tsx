import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Reveal } from '@/components/motion/reveal';
import { profile } from '@/content/profile';

export function Lens() {
  return (
    <Section ariaLabel="Who I am">
      <div className="mx-auto max-w-measure">
        <Reveal>
          <Kicker>The lens</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-balance font-serif text-h2 text-ink-primary">
            {profile.lens.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-sans text-body-l text-ink-secondary">
            {profile.lens.body}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
