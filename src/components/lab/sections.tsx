import { ArrowUpRight, Github, Mail, Rss } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { NotesIndex } from '@/components/lab/notes-index';
import { labSignals } from '@/content/lab/identity';
import { toolshed } from '@/content/lab/projects';
import { getResearchArticles } from '@/lib/research-content';
import { social } from '@/config/social';

export function LabNotes() {
  // Drop note bodies: the index only needs titles and summaries.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const notes = getResearchArticles().map(({ bodyHtml, ...rest }) => rest);

  return (
    <Section id="notes" ariaLabel="Research notes" className="border-t border-hairline">
      <Reveal>
        <Kicker>Notes to self</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          Research notes, dead ends included.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <NotesIndex notes={notes} />
      </Reveal>
    </Section>
  );
}

export function Toolshed() {
  return (
    <Section id="toolshed" ariaLabel="Toolshed" className="border-t border-hairline">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <Kicker>Toolshed</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
              Small tools, written at odd hours, still useful.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <TextLink href={social.github} external arrow>
            Everything on GitHub
          </TextLink>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {toolshed.map((tool, i) => (
          <li key={tool.name} className="bg-bg-base">
            <Reveal delay={(i % 4) * 0.04} className="h-full">
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col p-6 transition-colors duration-base hover:bg-bg-raised"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-mono text-body text-ink-primary">{tool.name}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-ink-tertiary transition-colors group-hover:text-accent"
                    aria-hidden
                  />
                </span>
                <span className="mt-2 flex-1 font-sans text-caption text-ink-secondary">{tool.blurb}</span>
                <span className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-tertiary">
                  {tool.language}
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Signals() {
  return (
    <Section id="signals" ariaLabel="Signals" className="border-t border-hairline">
      <Reveal>
        <Kicker>Signals</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          Outside the notebook.
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {labSignals.map((signal, i) => (
          <li key={signal.label}>
            <Reveal delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-md border border-hairline bg-bg-raised p-6">
                <p className="font-mono text-caption text-ink-primary">{signal.label}</p>
                <p className="mt-2 flex-1 font-sans text-caption text-ink-secondary">{signal.detail}</p>
                {signal.href && (
                  <a
                    href={signal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-sans text-caption text-accent hover:text-accent-hover"
                  >
                    View
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function LabContact() {
  return (
    <Section id="contact" ariaLabel="Contact" className="border-t border-hairline">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal>
          <Kicker className="justify-center">Signal</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-balance font-sans text-display-xl text-ink-primary">
            Ping me — I usually respond.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-measure font-sans text-body-l text-ink-secondary">
            Found a bug in one of my tools, broke one of my models, or have a half-formed question
            about guardrails, eBPF, or containers? Send it.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={`mailto:${social.email}?subject=${encodeURIComponent('From the lab')}`}>
              <Mail className="h-4 w-4" aria-hidden />
              Say hi (bugs welcome)
            </ButtonLink>
            <ButtonLink href={social.github} external variant="secondary">
              <Github className="h-4 w-4" aria-hidden />
              Open an issue
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.22}>
          <a
            href="/lab/feed.xml"
            className="mt-10 inline-flex items-center gap-1.5 font-mono text-caption text-ink-tertiary hover:text-accent"
          >
            <Rss className="h-3.5 w-3.5" aria-hidden />
            Follow the notes via RSS
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
