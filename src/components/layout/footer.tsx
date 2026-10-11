import { Container } from '@/components/ui/container';
import { siteConfig, type Side } from '@/config/site';
import { labSocialLinks, workSocialLinks } from '@/config/social';

export function Footer({ side }: { side: Side }) {
  const links = side === 'lab' ? labSocialLinks : workSocialLinks;

  return (
    <footer className="border-t border-hairline py-12">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-sans text-base text-ink-primary">
            {side === 'lab' ? 'IamLucif3r' : siteConfig.name}
          </span>
          <span className="font-mono text-caption text-ink-tertiary">
            {side === 'lab' ? 'Notes, tools, and broken things · after hours' : `${siteConfig.role} · Mumbai, India`}
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => {
            const external = link.href.startsWith('http');
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="font-sans text-caption text-ink-tertiary transition-colors duration-fast ease-standard hover:text-accent"
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </Container>

      <Container className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-caption text-ink-tertiary">
          © {new Date().getFullYear()} {siteConfig.name}. Built with intent.
        </p>
        <p className="font-mono text-caption text-ink-tertiary">
          Press <kbd className="rounded border border-hairline-strong px-1.5 py-0.5">⌘K</kbd> to jump anywhere
        </p>
      </Container>
    </footer>
  );
}
