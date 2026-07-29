import { cn } from '@/lib/cn';

/** A compact, elegant proof/tag chip. Optionally a link. */
export function Chip({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    'inline-flex items-center gap-2 rounded-full border border-hairline bg-bg-raised px-4 py-2 font-mono text-caption text-ink-secondary transition-colors duration-fast ease-standard',
    href && 'hover:border-accent/60 hover:text-ink-primary',
    className,
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-cursor="pointer">
        {children}
      </a>
    );
  }

  return <span className={classes}>{children}</span>;
}
