import type { Metadata } from 'next';
import { Download, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { profile } from '@/content/profile';
import {
  education,
  experience,
  recognition,
  resumeSummary,
  skills,
} from '@/content/resume';
import { projects } from '@/content/projects';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Résumé',
  description: `The professional record of ${profile.name}, ${profile.role}.`,
  alternates: { canonical: '/cv' },
};

export default function ResumePage() {
  return (
    <article className="pt-32">
      <Container className="max-w-prose">
        {/* Header */}
        <header className="border-b border-hairline pb-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-serif text-h2 text-ink-primary">{profile.name}</h1>
              <p className="mt-2 font-mono text-kicker uppercase text-ink-tertiary">
                {profile.role} · {profile.location}
              </p>
            </div>
            <ButtonLink href={siteConfig.resumePdf} variant="secondary" download>
              <Download className="h-4 w-4" aria-hidden />
              Download PDF
            </ButtonLink>
          </div>
          <p className="mt-8 font-sans text-body text-ink-secondary">{resumeSummary}</p>
        </header>

        {/* Experience */}
        <ResumeSection title="Experience">
          {experience.map((job) => (
            <div key={job.company} className="grid gap-4 sm:grid-cols-[10rem_1fr]">
              <p className="font-mono text-caption text-ink-tertiary">{job.period}</p>
              <div>
                <h3 className="font-serif text-xl text-ink-primary">{job.role}</h3>
                <p className="mt-1 font-sans text-body text-ink-secondary">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 font-sans text-body text-ink-secondary before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Selected Projects">
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div key={project.name} className="grid gap-4 sm:grid-cols-[10rem_1fr]">
                <p className="font-mono text-caption text-ink-tertiary">{project.name}</p>
                <div>
                  <p className="font-sans text-body text-ink-secondary">
                    {project.description}
                  </p>
                  {project.href && (
                    <div className="mt-2">
                      <TextLink href={project.href} external arrow className="text-caption">
                        {project.hrefLabel ?? 'View'}
                      </TextLink>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Skills">
          <div className="flex flex-col gap-4">
            {skills.map((group) => (
              <div key={group.label} className="grid gap-1 sm:grid-cols-[14rem_1fr]">
                <p className="font-mono text-caption text-ink-primary">{group.label}</p>
                <p className="font-sans text-body text-ink-secondary">{group.items}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          {education.map((edu) => (
            <div key={edu.institution} className="grid gap-4 sm:grid-cols-[10rem_1fr]">
              <p className="font-mono text-caption text-ink-tertiary">{edu.period}</p>
              <div>
                <h3 className="font-serif text-xl text-ink-primary">{edu.institution}</h3>
                <p className="mt-1 font-sans text-body text-ink-secondary">{edu.degree}</p>
                <p className="mt-1 font-sans text-body text-ink-tertiary">{edu.detail}</p>
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Recognition */}
        <ResumeSection title="Recognition">
          <div className="flex flex-col gap-4">
            {recognition.map((item) => (
              <div key={item.label} className="grid gap-1 sm:grid-cols-[14rem_1fr]">
                <p className="font-mono text-caption text-ink-primary">{item.label}</p>
                <p className="font-sans text-body text-ink-secondary">
                  {item.detail}
                  {item.href && (
                    <>
                      {' '}
                      <TextLink href={item.href} external className="text-caption">
                        Link
                      </TextLink>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Footer nav */}
        <div className="flex items-center justify-between border-t border-hairline py-10">
          <TextLink href="/">
            <span className="inline-flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" aria-hidden /> Back
            </span>
          </TextLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
            Get in touch
          </ButtonLink>
        </div>
      </Container>
    </article>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-hairline py-10">
      <h2 className="mb-8 font-mono text-kicker uppercase text-ink-tertiary">{title}</h2>
      {children}
    </section>
  );
}
