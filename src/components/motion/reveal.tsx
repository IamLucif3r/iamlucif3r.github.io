'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Reveals children with a gentle fade + rise as they enter the viewport.
 * Degrades to an instant, static render under reduced-motion.
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
  const reduce = useReducedMotion();
  const MotionTag = as === 'span' ? motion.span : motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

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
