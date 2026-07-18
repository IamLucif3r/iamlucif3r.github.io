import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-svh items-center">
      <Container>
        <div className="mx-auto flex max-w-measure flex-col items-center text-center">
          <p className="font-mono text-kicker uppercase text-ink-tertiary">404</p>
          <h1 className="mt-6 font-serif text-h2 text-ink-primary">
            This page slipped through a seam.
          </h1>
          <p className="mt-4 font-sans text-body-l text-ink-secondary">
            The page you are looking for does not exist.
          </p>
          <div className="mt-10">
            <ButtonLink href="/">Return home</ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
