export interface NavItem {
  label: string;
  researchLabel: string;
  href: string;
  /** Where this item points in research mode (the notebook has its own sections). */
  researchHref: string;
  /** Marks the single primary call to action. */
  cta?: boolean;
}

/** Anchor links into the homepage narrative, in platform page order. */
export const navItems: NavItem[] = [
  { label: 'Projects', researchLabel: 'Workbench', href: '/#work', researchHref: '/#toolshed' },
  { label: 'Articles', researchLabel: 'Research', href: '/#writing', researchHref: '/#articles' },
  { label: 'About', researchLabel: '~/.whoami', href: '/#about', researchHref: '/#hero' },
  { label: 'Résumé', researchLabel: 'Resume', href: '/cv', researchHref: '/cv' },
  { label: 'Contact', researchLabel: 'Reach Out', href: '/#contact', researchHref: '/#contact', cta: true },
];

/**
 * Research mode reorders the same items to follow the notebook's page flow
 * (Research → Workbench → …), independent of platform's Projects-first order.
 */
export const researchNavItems: NavItem[] = [
  navItems[1], // Research (#articles)
  navItems[0], // Workbench (#toolshed)
  navItems[2], // ~/.whoami (#hero)
  navItems[3], // Resume (/cv)
  navItems[4], // Reach Out (#contact)
];
