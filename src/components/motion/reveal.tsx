'use client';

import { m } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Reveals children with a gentle fade + rise as they enter the viewport.
 * Reduced-motion users get the fade without the movement (via MotionConfig).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'span';
}) {
  const MotionTag = as === 'span' ? m.span : m.div;

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.6, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
