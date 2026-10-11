import Link from 'next/link';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-svh items-center">
      <Container>
        <div className="mx-auto flex max-w-measure flex-col items-center text-center">
          <p className="font-mono text-kicker uppercase text-ink-tertiary">404</p>
          <h1 className="mt-6 font-sans text-h2 text-ink-primary">This page slipped through a seam.</h1>
          <p className="mt-4 font-sans text-body-l text-ink-secondary">
            The page you are looking for does not exist — or it moved in the v2 rebuild.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-accent px-7 py-3 font-sans text-body font-medium text-bg-base transition-colors hover:bg-accent-hover"
            >
              Work
            </Link>
            <Link
              href="/lab/"
              className="rounded-sm border border-hairline-strong px-5 py-3 font-sans text-body text-ink-primary transition-colors hover:border-accent hover:text-accent"
            >
              The lab
            </Link>
          </div>
          <p className="mt-8 font-mono text-caption text-ink-tertiary">or press ⌘K to search</p>
        </div>
      </Container>
    </main>
  );
}
