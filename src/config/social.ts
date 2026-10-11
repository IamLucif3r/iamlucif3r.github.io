import type { SocialLink } from '@/types';

export const social = {
  email: 'sanmol016@gmail.com',
  github: 'https://github.com/IamLucif3r',
  linkedin: 'https://www.linkedin.com/in/anmolsinghyadav',
  medium: 'https://medium.com/@IamLucif3r',
  huggingface: 'https://huggingface.co/IamLucif3r',
  tryhackme: 'https://tryhackme.com/p/IamLucif3r',
  pwnspectrum: 'https://feed.anmolsinghyadav.com/',
} as const;

/** Footer links on the work side. */
export const workSocialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: social.linkedin },
  { label: 'GitHub', href: social.github },
  { label: 'Medium', href: social.medium },
  { label: 'Email', href: `mailto:${social.email}` },
];

/** Footer links on the lab side. */
export const labSocialLinks: SocialLink[] = [
  { label: 'GitHub', href: social.github },
  { label: 'Hugging Face', href: social.huggingface },
  { label: 'Medium', href: social.medium },
  { label: 'TryHackMe', href: social.tryhackme },
  { label: 'RSS', href: '/lab/feed.xml' },
];
