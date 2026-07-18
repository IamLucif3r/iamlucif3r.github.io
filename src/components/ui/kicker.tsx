import { cn } from '@/lib/cn';

/** Small mono label that introduces a chapter. */
export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'font-mono text-kicker uppercase text-ink-tertiary',
        'flex items-center gap-3',
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-hairline-strong" />
      {children}
    </p>
  );
}
