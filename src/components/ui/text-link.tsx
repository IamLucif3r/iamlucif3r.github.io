import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  /** Show a trailing arrow to signal a destination. */
  arrow?: boolean;
}

const base =
  'group inline-flex items-center gap-1 text-accent transition-colors duration-fast ease-standard hover:text-accent-hover';

/** Understated but unmistakable link. */
export function TextLink({ href, children, className, external, arrow }: TextLinkProps) {
  const content = (
    <>
      <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-base after:ease-standard group-hover:after:w-full">
        {children}
      </span>
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-fast ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, className)}>
      {content}
    </Link>
  );
}
