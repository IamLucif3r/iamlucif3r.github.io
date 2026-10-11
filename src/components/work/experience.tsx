import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Reveal } from '@/components/motion/reveal';
import { profile } from '@/content/work/profile';
import { education } from '@/content/resume';

const timeline = [
  {
    period: 'Jan 2023 — Present',
    title: 'Platform Security Engineer',
    org: 'ISS STOXX · Technology Innovation Lab',
    detail:
      'Security architecture for the enterprise AI platform; container runtime isolation; eBPF runtime detection; SBOM-driven vulnerability intelligence; Kubernetes security assessment.',
  },
  ...education.map((edu) => ({
    period: edu.period,
    title: edu.degree,
    org: edu.institution,
    detail: edu.detail,
  })),
];

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience" className="border-t border-hairline">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker>Experience</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-sans text-h2 text-ink-primary">
              What I actually do, in plain terms.
            </h2>
          </Reveal>
          <div className="mt-6 flex flex-col gap-4">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 + i * 0.05}>
                <p className="font-sans text-body text-ink-secondary">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ol className="relative flex flex-col gap-10 border-l border-hairline-strong pl-8 lg:col-span-7 lg:mt-16">
          {timeline.map((item, i) => (
            <li key={item.title} className="relative">
              <Reveal delay={i * 0.06}>
                <span
                  aria-hidden
                  className="absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg-base bg-accent"
                />
                <p className="font-mono text-caption text-ink-tertiary">{item.period}</p>
                <h3 className="mt-2 font-sans text-xl text-ink-primary">{item.title}</h3>
                <p className="mt-1 font-sans text-body text-ink-secondary">{item.org}</p>
                <p className="mt-3 max-w-measure font-sans text-caption text-ink-tertiary">
                  {item.detail}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
