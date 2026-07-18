import type { SocialLink } from '@/types';

export const social = {
  email: 'sanmol016@gmail.com',
  github: 'https://github.com/IamLucif3r',
  linkedin: 'https://linkedin.com/in/anmolsinghyadav',
  medium: 'https://medium.com/@IamLucif3r',
} as const;

/** Ordered list used by the footer. */
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: social.github },
  { label: 'LinkedIn', href: social.linkedin },
  { label: 'Medium', href: social.medium },
  { label: 'Email', href: `mailto:${social.email}` },
];
