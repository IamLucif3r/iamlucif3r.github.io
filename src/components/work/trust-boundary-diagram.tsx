import { ArrowDown, ArrowRight, Lock } from 'lucide-react';
import { cn } from '@/lib/cn';

const nodes = [
  { label: 'Users', detail: 'people, federated identity' },
  { label: 'AI agents', detail: 'cloud-hosted, sandboxed' },
  { label: 'APIs', detail: 'governed tools' },
  { label: 'Enterprise data', detail: 'on-premises' },
];

const boundaries = ['Identity', 'Guardrails · tool governance', 'Gateway · edge · egress'];

/**
 * The flagship case study at a glance: every hop between users, agents, APIs,
 * and data crosses an enforced boundary. Rows on desktop, a column on mobile.
 */
export function TrustBoundaryDiagram({
  className,
  stacked = false,
}: {
  className?: string;
  /** Always a column — for narrow containers such as the case-study page. */
  stacked?: boolean;
}) {
  /** Row-layout classes, applied from `lg` unless stacked. */
  const row = (classes: string) => (stacked ? '' : classes);

  return (
    <figure className={cn('rounded-md border border-hairline bg-bg-inset p-5 sm:p-6', className)}>
      <ol className={cn('flex flex-col items-stretch gap-2', row('lg:flex-row lg:items-center'))}>
        {nodes.map((node, i) => (
          <li key={node.label} className="contents">
            <div className={cn('rounded-sm border border-hairline-strong bg-bg-raised px-4 py-3', row('lg:flex-1'))}>
              <p className="font-sans text-caption font-medium text-ink-primary">{node.label}</p>
              <p className="mt-0.5 font-mono text-[0.7rem] text-ink-tertiary">{node.detail}</p>
            </div>
            {i < boundaries.length && (
              <div className={cn('flex items-center gap-2 py-1 pl-4', row('lg:flex-col lg:gap-1 lg:py-0 lg:pl-0'))}>
                <ArrowDown className={cn('h-3.5 w-3.5 text-accent', row('lg:hidden'))} aria-hidden />
                {!stacked && <ArrowRight className="hidden h-3.5 w-3.5 text-accent lg:block" aria-hidden />}
                <span className={cn('flex items-center gap-1 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-accent', row('lg:max-w-[6.5rem] lg:text-center'))}>
                  <Lock className={cn('h-3 w-3 shrink-0', row('lg:hidden'))} aria-hidden />
                  <span className="sr-only">Boundary: </span>
                  {boundaries[i]}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 font-sans text-caption text-ink-tertiary">
        Every hop crosses an enforced boundary — identity, API, network, data, and execution controls.
      </figcaption>
    </figure>
  );
}
