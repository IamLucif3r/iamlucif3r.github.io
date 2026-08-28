import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { ModeText } from '@/components/ui/mode-text';
import { Reveal } from '@/components/motion/reveal';
import { proofChips, proofNote } from '@/content/proof';

export function Proof() {
  return (
    <Section ariaLabel="Proof and trust signals" className="border-t border-hairline">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Kicker>
            <ModeText platform="Receipts, not adjectives" research="Pinned evidence" />
          </Kicker>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofChips.map((chip, i) => {
            const content = (
              <>
                <p className="font-mono text-caption uppercase tracking-[0.06em] text-ink-primary">
                  {chip.label}
                </p>
                <p className="mt-2 font-sans text-caption text-ink-tertiary">{chip.detail}</p>
              </>
            );
            return (
              <Reveal key={chip.label} delay={i * 0.04}>
                {chip.href ? (
                  <a
                    href={chip.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="block h-full rounded-md border border-hairline bg-bg-raised p-5 transition-colors duration-base ease-standard hover:border-accent/50"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full rounded-md border border-hairline bg-bg-raised p-5">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 font-mono text-caption text-ink-tertiary">{proofNote}</p>
        </Reveal>
      </div>
    </Section>
  );
}

