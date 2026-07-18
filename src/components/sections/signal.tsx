import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { signals } from '@/content/signals';

export function Signal() {
  return (
    <Section ariaLabel="Recognition">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Kicker>Recognized where it counts</Kicker>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2">
          {signals.map((signal, i) => (
            <Reveal key={signal.label} delay={i * 0.06} className="bg-bg-base">
              <div className="flex h-full flex-col gap-3 p-8">
                <p className="font-mono text-lg font-medium text-ink-primary">
                  {signal.label}
                </p>
                <p className="font-sans text-body text-ink-secondary">{signal.detail}</p>
                {signal.href && (
                  <div className="mt-1">
                    <TextLink href={signal.href} external arrow className="text-caption">
                      {signal.href.includes('medium')
                        ? 'Read on Medium'
                        : signal.href.includes('tryhackme')
                          ? 'View profile'
                          : 'Visit'}
                    </TextLink>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
