import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { impact } from '@/content/work/impact';

/** Outcomes band. Scale words, not internal numbers. */
export function Impact() {
  return (
    <section aria-label="Impact" className="border-y border-hairline bg-bg-raised/60">
      <Container>
        <dl className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
          {impact.map((stat, i) => (
            <Reveal
              key={stat.value}
              delay={i * 0.06}
              className="py-8 lg:border-l lg:border-hairline lg:px-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="font-mono text-caption uppercase tracking-[0.08em] text-ink-tertiary">
                {stat.unit}
              </dt>
              <dd className="mt-2 text-balance font-sans text-2xl font-medium tracking-tight text-ink-primary">
                {stat.value}
              </dd>
              <dd className="mt-3 font-sans text-caption text-ink-secondary">{stat.context}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
