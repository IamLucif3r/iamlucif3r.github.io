import { social } from '@/config/social';
import { siteConfig } from '@/config/site';

/** JSON-LD Person schema — ideal for a personal / recognition site. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: `mailto:${social.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
    sameAs: [social.github, social.linkedin, social.medium],
  };
}
