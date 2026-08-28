import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Reveal } from '@/components/motion/reveal';
import { ArticlesPanel } from '@/components/research/articles-panel';
import { getResearchArticles } from '@/lib/research-content';

export function ResearchArticles() {
  const articles = getResearchArticles();

  return (
    <Section id="articles" ariaLabel="Research articles">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Kicker>Notes to self</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
            Research notes.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ArticlesPanel articles={articles} />
        </Reveal>
      </div>
    </Section>
  );
}
