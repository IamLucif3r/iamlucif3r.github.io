import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { getResearchArticle, getResearchArticles } from '@/lib/research-content';
import { noteJsonLd } from '@/config/seo';

type Params = Promise<{ slug: string }>;

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export function generateStaticParams() {
  return getResearchArticles().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const found = getResearchArticle((await params).slug);
  if (!found) return {};
  const { note } = found;
  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: `/lab/notes/${note.slug}/` },
    openGraph: {
      type: 'article',
      title: note.title,
      description: note.summary,
      url: `/lab/notes/${note.slug}/`,
      publishedTime: note.date,
    },
  };
}

export default async function NotePage({ params }: { params: Params }) {
  const found = getResearchArticle((await params).slug);
  if (!found) notFound();
  const { note, newer, older } = found;

  return (
    <article className="pb-section pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(noteJsonLd(note)) }}
      />
      <Container className="max-w-prose">
        <Link
          href="/lab/#notes"
          className="inline-flex items-center gap-1.5 font-mono text-caption text-ink-tertiary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          All notes
        </Link>

        <header className="mt-10 border-b border-hairline pb-8">
          <p className="font-mono text-caption text-ink-tertiary">
            {note.categoryLabel} · <time dateTime={note.date}>{dateFormatter.format(new Date(note.date))}</time> ·{' '}
            {note.readingMinutes} min read
          </p>
          <h1 className="mt-4 text-balance font-sans text-h2 text-ink-primary">{note.title}</h1>
        </header>

        <div className="reader-prose mt-10" dangerouslySetInnerHTML={{ __html: note.bodyHtml }} />

        {note.href && (
          <a
            href={note.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-1.5 rounded-full border border-accent/50 px-5 py-2.5 font-sans text-caption text-ink-primary transition-colors hover:bg-accent hover:text-bg-base"
          >
            {note.hrefLabel ?? 'Full write-up'}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        )}

        <nav
          aria-label="More notes"
          className="mt-16 grid gap-6 border-t border-hairline pt-10 sm:grid-cols-2"
        >
          {older ? (
            <Link href={`/lab/notes/${older.slug}/`} className="group">
              <span className="flex items-center gap-1 font-mono text-caption text-ink-tertiary">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Older
              </span>
              <span className="mt-1 block font-sans text-body text-ink-primary group-hover:text-accent">
                {older.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/lab/notes/${newer.slug}/`} className="group sm:text-right">
              <span className="flex items-center gap-1 font-mono text-caption text-ink-tertiary sm:justify-end">
                Newer <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="mt-1 block font-sans text-body text-ink-primary group-hover:text-accent">
                {newer.title}
              </span>
            </Link>
          )}
        </nav>
      </Container>
    </article>
  );
}
