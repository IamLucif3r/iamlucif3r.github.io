import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/container';

/** A homepage chapter. Emits a landmark and owns vertical rhythm. */
export function Section({
  id,
  className,
  containerClassName,
  bleed = false,
  children,
  ariaLabel,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** When true, skips the inner Container (full-bleed sections manage their own width). */
  bleed?: boolean;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('py-section', className)}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
