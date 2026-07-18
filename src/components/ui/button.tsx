import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** External links open in a new tab with safe rel. */
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-sans text-body font-medium transition-colors transition-transform duration-fast ease-standard select-none';

const variants: Record<Variant, string> = {
  primary:
    'rounded-full bg-accent px-7 py-3 text-bg-base hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-accent-press',
  secondary:
    'rounded-sm border border-hairline-strong px-5 py-2.5 text-ink-primary hover:border-accent hover:text-accent',
};

/** The site's only real button — rendered as a link (mailto / route / file). */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
  external,
  download,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  const isInternal = href.startsWith('/') && !download;

  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      download={download}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
