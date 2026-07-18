import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { projects } from '@/content/projects';

export function Work() {
  const [primary, secondary] = projects;

  return (
    <Section ariaLabel="Selected work">
      {/* V5 — pwnspectrum: asymmetric split. */}
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <Reveal>
            <Kicker>Selected work</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-h2 text-ink-primary">{primary.name}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-sans text-body-l text-ink-secondary">
              {primary.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-measure font-sans text-body text-ink-tertiary">
              {primary.description}
            </p>
          </Reveal>
          {primary.href && (
            <Reveal delay={0.2}>
              <div className="mt-8">
                <TextLink href={primary.href} external arrow>
                  {primary.hrefLabel ?? 'Learn more'}
                </TextLink>
              </div>
            </Reveal>
          )}
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <ProjectPreview label="feed.anmolsinghyadav.com" />
          </Reveal>
        </div>
      </div>

      {/* V6 — Security Lab: lighter, centred. */}
      {secondary && (
        <div className="mt-section-sm border-t border-hairline pt-section-sm">
          <div className="mx-auto max-w-measure text-center">
            <Reveal>
              <Kicker className="justify-center">Practice</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-6 font-serif text-h2 text-ink-primary">{secondary.name}</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-sans text-body-l text-ink-secondary">
                {secondary.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-4 max-w-measure font-sans text-body text-ink-tertiary">
                {secondary.description}
              </p>
            </Reveal>
          </div>
        </div>
      )}
    </Section>
  );
}

/** A calm framed preview standing in for the live feed. */
function ProjectPreview({ label }: { label: string }) {
  return (
    <div className="overflow-hidden rounded-md border border-hairline bg-bg-raised">
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span className="ml-3 truncate font-mono text-caption text-ink-tertiary">
          {label}
        </span>
      </div>
      <div className="relative aspect-[3/2] p-6">
        <div className="flex h-full flex-col justify-center gap-4">
          <div className="h-2 w-1/3 rounded-full bg-accent/50" />
          <div className="h-2 w-2/3 rounded-full bg-hairline-strong" />
          <div className="h-2 w-1/2 rounded-full bg-hairline-strong" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-16 rounded-sm border border-hairline bg-bg-inset" />
            <div className="h-16 rounded-sm border border-hairline bg-bg-inset" />
            <div className="h-16 rounded-sm border border-hairline bg-bg-inset" />
          </div>
        </div>
      </div>
    </div>
  );
}
