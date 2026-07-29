/** Identity + narrative copy. Public-safe: no private metrics, no internal architecture. */

export const profile = {
  name: 'Anmol Singh Yadav',
  role: 'Platform Security Engineer',
  location: 'Mumbai, India',
  email: 'sanmol016@gmail.com',

  /** The hero thesis — the single most important line on the site. */
  thesis: 'I study where systems break, then make those breakpoints expensive.',

  hero: {
    words: ['I', 'study', 'where', 'systems', 'break.'],
    positioning:
      'I work at the layer most people forget exists — right up until it\u2019s the reason something broke.',
    body: 'My work sits underneath the parts most teams look at directly: the kernel, the container boundary, the model\u2019s execution sandbox. I study how those layers fail, then design controls that make failure hard to reach, hard to hide, and expensive to exploit.',
  },

  /** About section. */
  about: {
    headline: 'What I actually do, in plain terms.',
    body: [
      'I\u2019m a Platform Security Engineer. In practice, that means Linux, containers, and Kubernetes \u2014 and lately, figuring out what happens when you let an LLM run commands on your behalf.',
      'Most of my work is about boundaries: what a process can reach, what a container can escape, what an agent can actually do versus what its prompt says it can do. eBPF and runtime tracing are usually how I find out the honest answer is \u201cmore than expected.\u201d',
      'I write in plain language on purpose. Security writing has a bad habit of sounding impressive instead of being useful, and I\u2019d rather be the second one.',
      'This page is the highlight reel. For the reasoning behind it, the writing section is a better use of your time than my LinkedIn headline.',
    ],
  },

  /** Contact section. */
  contact: {
    headline: 'Let’s talk about the parts that break.',
    body: 'Open to conversations on platform security, container and runtime isolation, eBPF, and AI security — as research, as talks, or as work.',
  },
} as const;
