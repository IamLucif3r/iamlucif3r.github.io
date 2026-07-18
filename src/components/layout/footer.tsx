import { Container } from '@/components/ui/container';
import { profile } from '@/content/profile';
import { socialLinks } from '@/config/social';

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-base text-ink-primary">{profile.name}</span>
          <span className="font-mono text-caption text-ink-tertiary">
            {profile.location}
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-sans text-caption text-ink-tertiary transition-colors duration-fast ease-standard hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-8">
        <p className="font-mono text-caption text-ink-tertiary/70">
          © {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>
      </Container>
    </footer>
  );
}
