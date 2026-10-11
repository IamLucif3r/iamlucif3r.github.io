import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { now } from '@/content/lab/identity';

const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });

/** What I'm on right now — a dated, three-line status. */
export function Now() {
  return (
    <section aria-label="Now" className="border-y border-hairline bg-bg-raised/50">
      <Container className="grid gap-6 py-10 lg:grid-cols-[12rem_1fr] lg:gap-10">
        <Reveal>
          <p className="font-mono text-caption uppercase tracking-[0.12em] text-accent">/now</p>
          <p className="mt-1 font-mono text-caption text-ink-tertiary">
            {monthFormatter.format(new Date(`${now.updated}-01T00:00:00`))}
          </p>
        </Reveal>
        <dl className="grid gap-6 md:grid-cols-3">
          {now.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <dt className="font-mono text-caption text-ink-primary">{item.label}</dt>
              <dd className="mt-2 font-sans text-caption text-ink-secondary">{item.detail}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
