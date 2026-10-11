import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Chip } from '@/components/ui/chip';
import { Reveal } from '@/components/motion/reveal';
import { TrustBoundaryDiagram } from '@/components/work/trust-boundary-diagram';
import { caseStudies } from '@/content/work/case-studies';
import type { CaseStudy } from '@/types';

export function CaseStudies() {
  const flagship = caseStudies.find((c) => c.flagship) ?? caseStudies[0];
  const rest = caseStudies.filter((c) => c !== flagship);

  return (
    <Section id="work" ariaLabel="Selected work">
      <Reveal>
        <Kicker>Selected work</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          A few things that survived contact with production.
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-4 max-w-measure font-sans text-body text-ink-secondary">
          Internal work, described at the level I can share publicly: the problem, the controls, and
          the outcome — without internal names or numbers.
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <article className="mt-14 rounded-md border border-hairline bg-bg-raised p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-caption uppercase tracking-[0.14em] text-accent">
                {flagship.eyebrow}
              </p>
              <h3 className="mt-4 font-sans text-h2 text-ink-primary">{flagship.title}</h3>
              <p className="mt-4 max-w-measure font-sans text-body text-ink-secondary">
                {flagship.summary}
              </p>
              <CaseStudyLink study={flagship} className="mt-8" />
            </div>
            {flagship.themes && (
              <div className="lg:col-span-5">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-tertiary">
                  Threat model covered
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {flagship.themes.map((theme) => (
                    <li key={theme}>
                      <Chip className="px-3 py-1 text-[0.75rem]">{theme}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <TrustBoundaryDiagram className="mt-10" />
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.06}>
            <article className="group relative flex h-full flex-col rounded-md border border-hairline bg-bg-raised p-6 transition-colors duration-base ease-standard hover:border-accent/40 sm:p-8">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
                {study.eyebrow}
              </p>
              <h3 className="mt-3 font-sans text-xl text-ink-primary">
                <Link
                  href={`/work/${study.slug}/`}
                  className="after:absolute after:inset-0 after:rounded-md focus-visible:outline-none"
                >
                  {study.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 font-sans text-caption text-ink-secondary">{study.summary}</p>
              <ul aria-label="Stack" className="mt-6 flex flex-wrap gap-1.5">
                {study.stack.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-ink-tertiary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden
                className="mt-6 inline-flex items-center gap-1 font-sans text-caption font-medium text-accent"
              >
                Read the case study
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-fast ease-standard group-hover:translate-x-0.5" />
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CaseStudyLink({ study, className }: { study: CaseStudy; className?: string }) {
  return (
    <Link
      href={`/work/${study.slug}/`}
      className={`group inline-flex items-center gap-1 font-sans text-body font-medium text-accent transition-colors duration-fast ease-standard hover:text-accent-hover ${className ?? ''}`}
    >
      Read the case study
      <ArrowRight
        className="h-4 w-4 transition-transform duration-fast ease-standard group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}
