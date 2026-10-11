import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Reveal } from '@/components/motion/reveal';
import { capabilities } from '@/content/work/capabilities';

/** Static grid — every group visible at once, nothing hidden behind hover. */
export function Expertise() {
  return (
    <Section id="expertise" ariaLabel="Expertise" className="border-t border-hairline">
      <Reveal>
        <Kicker>Expertise</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          One recurring question: what shouldn’t be reachable?
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.05} className="h-full">
            <div className="flex h-full flex-col bg-bg-raised p-6 sm:p-8">
              <span className="font-mono text-caption text-ink-tertiary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-sans text-lg font-medium text-ink-primary">{group.title}</h3>
              <p className="mt-2 font-sans text-caption text-ink-secondary">{group.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.7rem] text-ink-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        <Reveal delay={capabilities.length * 0.05} className="h-full">
          <div className="flex h-full flex-col justify-end bg-bg-inset p-6 sm:p-8">
            <p className="font-sans text-caption text-ink-secondary">
              The full list, with context, lives on the résumé.
            </p>
            <Link
              href="/cv/"
              className="mt-3 font-sans text-caption font-medium text-accent hover:text-accent-hover"
            >
              View the web résumé →
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
