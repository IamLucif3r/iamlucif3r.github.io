import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { scratchArtifacts } from '@/content/research';

export function ResearchToolshed() {
  return (
    <Section id="toolshed" ariaLabel="Toolshed">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Kicker>Junk drawer</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
            Small scripts I wrote at 2 a.m. and never bothered to clean up.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col divide-y divide-hairline border-t border-hairline">
          {scratchArtifacts.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.05}>
              <article className="grid gap-4 py-7 sm:grid-cols-[12rem_1fr]">
                <div>
                  <p className="font-mono text-body text-ink-primary">{a.name}</p>
                  <p className="mt-1 font-mono text-caption text-ink-tertiary">{a.state}</p>
                </div>
                <div>
                  <p className="max-w-measure font-sans text-body text-ink-secondary">{a.blurb}</p>
                  {a.href && (
                    <div className="mt-3">
                      <TextLink href={a.href} external arrow className="text-caption">
                        {a.hrefLabel ?? 'View'}
                      </TextLink>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
