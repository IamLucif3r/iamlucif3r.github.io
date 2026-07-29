export const siteConfig = {
  name: 'Anmol Singh Yadav',
  role: 'Platform Security Engineer',
  url: 'https://anmolsinghyadav.com',
  locale: 'en_US',
  description:
    'Anmol Singh Yadav — Platform Security Engineer working at the seams of cloud-native, containerized, and AI-driven systems. Isolation-first security architecture, at production scale.',
  /** Path to the résumé PDF, referenced everywhere from one place. */
  resumePdf: '/resume/anmol-singh-yadav.pdf',
} as const;

/** Light by default; dark mode is a user-toggled, persisted preference. */
export const features = {
  lightMode: true,
} as const;
