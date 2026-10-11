/**
 * Work side identity + narrative copy.
 * Public-safe: internal figures are generalised (see impact.ts), never quoted.
 */
export const profile = {
  name: 'Anmol Singh Yadav',
  role: 'AI Platform Security Engineer',
  location: 'Mumbai, India',
  email: 'sanmol016@gmail.com',

  /** The hero thesis — the single most important line on the site. */
  thesis: 'I study where systems break, then make those breakpoints expensive.',

  hero: {
    words: ['I', 'study', 'where', 'systems', 'break.'],
    positioning: 'Then I turn those attack paths into security controls that hold at production scale.',
    body: 'Platform security engineer at ISS STOXX’s Technology Innovation Lab. I design the security architecture for enterprise AI agents, harden the container runtime underneath them, and instrument the kernel to see what actually happens.',
    focus: ['AI platform security', 'Container isolation', 'eBPF runtime detection', 'Supply-chain security'],
  },

  /** Short first-person paragraph that opens the experience section. */
  about: [
    'Most of my work is about boundaries: what a process can reach, what a container can escape, what an agent can actually do versus what its prompt says it can do. eBPF and runtime tracing are usually how I find out the honest answer is “more than expected.”',
    'I write in plain language on purpose. Security writing has a bad habit of sounding impressive instead of being useful, and I’d rather be the second one.',
  ],

  contact: {
    headline: 'Let’s talk about the parts that break.',
    body: 'Open to conversations on AI platform security, agent isolation, container and runtime security, and eBPF — as work, as talks, or as research.',
  },
} as const;
