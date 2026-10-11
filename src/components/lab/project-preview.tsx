'use client';

import { useEffect, useRef, useState } from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * A live embed of the actual feed — not a mockup. Cross-origin iframes can't
 * report load failures reliably (the browser's own "can't be reached" page
 * still "loads"), so we fall back to a static card if the frame hasn't
 * signalled a real load within a few seconds.
 */
export function ProjectPreview({
  src,
  title,
  fallbackLabel,
}: {
  src: string;
  title: string;
  fallbackLabel?: string;
}) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const label = src.replace(/^https?:\/\//, '').replace(/\/$/, '');

  useEffect(() => {
    setStatus('loading');
    timeoutRef.current = setTimeout(() => {
      setStatus((current) => (current === 'loaded' ? current : 'error'));
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [src]);

  return (
    <div className="overflow-hidden rounded-md border border-hairline bg-bg-raised">
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span className="ml-3 truncate font-mono text-caption text-ink-tertiary">{label}</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-tertiary">
          <span
            aria-hidden
            className={status === 'loaded' ? 'h-1.5 w-1.5 rounded-full bg-emerald-400' : 'h-1.5 w-1.5 rounded-full bg-hairline-strong'}
          />
          live
        </span>
      </div>
      <div className="relative h-80 bg-bg-inset sm:h-[26rem]">
        {status !== 'error' && (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            className="absolute inset-0 h-full w-full border-0"
          />
        )}

        {status === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-6 w-6 animate-pulse rounded-full bg-hairline-strong" aria-hidden />
          </div>
        )}

        {status === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <AlertCircle className="h-5 w-5 text-ink-tertiary" aria-hidden />
            <p className="max-w-[24ch] font-sans text-caption text-ink-tertiary">
              Live preview isn&apos;t loading right now.
            </p>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-caption font-medium text-accent transition-colors duration-fast ease-standard hover:text-accent-hover"
            >
              {fallbackLabel ?? 'Open it directly'} ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
