import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Chip } from '@/components/ui/chip';
import { TextLink } from '@/components/ui/text-link';
import { Reveal } from '@/components/motion/reveal';
import { Tilt } from '@/components/motion/tilt';
import { ProjectPreview } from '@/components/lab/project-preview';
import { labProjects } from '@/content/lab/projects';
import type { LabProject } from '@/types';

export function LabProjects() {
  const flagship = labProjects.find((p) => p.flagship) ?? labProjects[0];
  const live = labProjects.find((p) => p.embed && p !== flagship);
  const rest = labProjects.filter((p) => p !== flagship && p !== live);

  return (
    <Section id="projects" ariaLabel="Projects">
      <Reveal>
        <Kicker>Projects</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          Things I built because I wanted to know how they break.
        </h2>
      </Reveal>

      {/* Flagship: the abliteration research. */}
      <Reveal delay={0.1}>
        <article
          id={flagship.slug}
          className="mt-14 grid gap-10 rounded-md border border-accent/30 bg-bg-raised p-6 sm:p-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="font-mono text-caption uppercase tracking-[0.14em] text-accent">
              Featured research · {flagship.status}
            </p>
            <h3 className="mt-4 font-sans text-h2 text-ink-primary">{flagship.name}</h3>
            <p className="mt-4 font-sans text-body-l text-ink-primary/90">{flagship.tagline}</p>
            <p className="mt-4 max-w-measure font-sans text-body text-ink-secondary">
              {flagship.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {flagship.links.map((link) => (
                <TextLink key={link.href} href={link.href} external arrow>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            {flagship.stat && (
              <div className="rounded-md border border-hairline bg-bg-inset p-6">
                <p className="font-sans text-h2 tabular text-ink-primary">{flagship.stat.value}</p>
                <p className="mt-1 font-mono text-caption uppercase tracking-[0.1em] text-ink-tertiary">
                  {flagship.stat.label}
                </p>
              </div>
            )}
            <ul className="flex flex-wrap gap-2">
              {flagship.tags.map((tag) => (
                <li key={tag}>
                  <Chip>{tag}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      {/* The one that ships every day, live. */}
      {live && live.embed && (
        <div id={live.slug} className="mt-6 grid items-center gap-10 py-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-caption uppercase tracking-[0.14em] text-accent">{live.status}</p>
              <h3 className="mt-4 font-sans text-h2 text-ink-primary">{live.name}</h3>
              <p className="mt-4 font-sans text-body-l text-ink-secondary">{live.tagline}</p>
              <p className="mt-4 max-w-measure font-sans text-body text-ink-tertiary">{live.description}</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {live.links.map((link) => (
                  <TextLink key={link.href} href={link.href} external arrow>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <ProjectPreview
                src={live.embed}
                title={`${live.name} — live`}
                fallbackLabel={live.links[0]?.label}
              />
            </Reveal>
          </div>
        </div>
      )}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: LabProject }) {
  const primary = project.links[0];

  return (
    <Tilt max={5} className="h-full">
      <article
        id={project.slug}
        className="flex h-full flex-col rounded-md border border-hairline bg-bg-raised p-6 transition-colors duration-base ease-standard hover:border-accent/40"
      >
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-tertiary">
          {project.status}
        </p>
        <h3 className="mt-2 font-sans text-lg text-ink-primary">{project.name}</h3>
        <p className="mt-2 font-sans text-caption text-ink-secondary">{project.tagline}</p>
        <p className="mt-3 flex-1 font-sans text-caption text-ink-tertiary">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-ink-tertiary"
            >
              {tag}
            </li>
          ))}
        </ul>
        {primary ? (
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-6 inline-flex items-center gap-1 font-sans text-caption font-medium text-accent transition-colors duration-fast ease-standard hover:text-accent-hover"
          >
            {primary.label}
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-fast ease-standard group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden
            />
          </a>
        ) : (
          <p className="mt-6 font-mono text-caption text-ink-tertiary">Not public yet</p>
        )}
      </article>
    </Tilt>
  );
}
