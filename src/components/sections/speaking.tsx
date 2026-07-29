import { Mic } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { talks } from '@/content/speaking';

export function Speaking() {
  return (
    <Section id="speaking" ariaLabel="Speaking">
      <Reveal>
        <Kicker>Speaking</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          One talk so far. I’m told it went fine.
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-6">
        {talks.map((talk, i) => (
          <Reveal key={talk.title} delay={0.08 + i * 0.06}>
            <div className="grid gap-4 rounded-md border border-hairline bg-bg-raised p-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="flex items-center gap-2 sm:flex-col sm:items-start sm:gap-3">
                <Mic className="h-4 w-4 text-accent" aria-hidden />
                <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-tertiary">
                  {talk.event}
                </span>
              </div>
              <div>
                <h3 className="font-sans text-xl text-ink-primary">{talk.title}</h3>
                <p className="mt-3 max-w-measure font-sans text-body text-ink-secondary">
                  {talk.summary}
                </p>
                {talk.href && (
                  <div className="mt-4">
                    <TextLink href={talk.href} external arrow className="text-caption">
                      View talk
                    </TextLink>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

