import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Chip } from '@/components/ui/chip';
import { ButtonLink } from '@/components/ui/button';
import { TrustBoundaryDiagram } from '@/components/work/trust-boundary-diagram';
import { caseStudies, getCaseStudy } from '@/content/work/case-studies';
import { siteConfig } from '@/config/site';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}/` },
    openGraph: { title: study.title, description: study.summary, url: `/work/${study.slug}/` },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="pb-section pt-32">
      <Container className="max-w-prose">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 font-mono text-caption text-ink-tertiary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          Selected work
        </Link>

        <header className="mt-10 border-b border-hairline pb-10">
          <p className="font-mono text-caption uppercase tracking-[0.14em] text-accent">{study.eyebrow}</p>
          <h1 className="mt-4 text-balance font-sans text-h2 text-ink-primary">{study.title}</h1>
          <p className="mt-6 font-sans text-body-l text-ink-secondary">{study.summary}</p>
          <p className="mt-6 font-mono text-caption text-ink-tertiary">
            {siteConfig.role} · ISS STOXX · details generalised; specifics stay internal
          </p>
        </header>

        <Block title="The problem">
          <p className="font-sans text-body text-ink-secondary">{study.problem}</p>
        </Block>

        <Block title="The approach">
          <ol className="flex flex-col gap-4">
            {study.approach.map((step, i) => (
              <li key={step} className="grid grid-cols-[2rem_1fr] gap-2">
                <span className="font-mono text-caption text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-sans text-body text-ink-secondary">{step}</span>
              </li>
            ))}
          </ol>
          {study.flagship && <TrustBoundaryDiagram stacked className="mt-10" />}
        </Block>

        {study.themes && (
          <Block title="Threat model covered">
            <ul className="flex flex-wrap gap-2">
              {study.themes.map((theme) => (
                <li key={theme}>
                  <Chip className="px-3 py-1 text-[0.75rem]">{theme}</Chip>
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title="The outcome">
          <p className="border-l-2 border-accent pl-5 font-sans text-body-l text-ink-primary">{study.outcome}</p>
        </Block>

        <Block title="Stack">
          <p className="font-mono text-caption text-ink-secondary">{study.stack.join(' · ')}</p>
        </Block>

        <nav
          aria-label="More work"
          className="mt-4 flex flex-col gap-6 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link href={`/work/${next.slug}/`} className="group max-w-sm">
            <span className="font-mono text-caption uppercase tracking-[0.1em] text-ink-tertiary">Next case study</span>
            <span className="mt-1 flex items-center gap-1.5 font-sans text-body text-ink-primary group-hover:text-accent">
              {next.title}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </span>
          </Link>
          <ButtonLink href="/#contact" variant="secondary">
            Talk about this work
          </ButtonLink>
        </nav>
      </Container>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-hairline py-10">
      <h2 className="mb-6 font-mono text-kicker uppercase text-ink-tertiary">{title}</h2>
      {children}
    </section>
  );
}
