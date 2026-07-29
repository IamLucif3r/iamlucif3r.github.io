'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Kicker } from '@/components/ui/kicker';
import { Chip } from '@/components/ui/chip';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/cn';
import { capabilities } from '@/content/capabilities';

export function Capabilities() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  return (
    <Section ariaLabel="Capabilities">
      <Reveal>
        <Kicker>Capabilities</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-measure font-sans text-h2 text-ink-primary">
          Six problems. One recurring question: what shouldn’t be reachable?
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-col gap-1 lg:col-span-4"
          >
            {capabilities.map((group, i) => {
              const isActive = group.id === activeId;
              return (
                <button
                  key={group.id}
                  role="tab"
                  aria-selected={isActive}
                  data-cursor="pointer"
                  onMouseEnter={() => setActiveId(group.id)}
                  onFocus={() => setActiveId(group.id)}
                  onClick={() => setActiveId(group.id)}
                  className={cn(
                    'group flex items-center gap-4 rounded-md border border-transparent px-4 py-4 text-left transition-all duration-base ease-standard',
                    isActive
                      ? 'border-hairline bg-bg-raised opacity-100'
                      : 'opacity-55 hover:opacity-90',
                  )}
                >
                  <span className="font-mono text-caption text-ink-tertiary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'font-sans text-body font-medium transition-colors duration-base ease-standard',
                      isActive ? 'text-ink-primary' : 'text-ink-secondary',
                    )}
                  >
                    {group.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[16rem] lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: [0.2, 0.6, 0.2, 1] }}
                className="rounded-md border border-hairline bg-bg-inset p-8"
              >
                <h3 className="font-sans text-xl text-ink-primary">{active.title}</h3>
                <p className="mt-4 max-w-measure font-sans text-body text-ink-secondary">
                  {active.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
