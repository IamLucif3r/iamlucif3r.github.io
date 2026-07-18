import { cn } from '@/lib/cn';

/** Centered max-width wrapper with responsive gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-6 md:px-8', className)}>
      {children}
    </div>
  );
}
