import { labIdentity } from '@/content/lab/identity';
import { ogCard, ogSize } from '@/lib/og';

export const alt = `The Lab — ${labIdentity.handle}`;
export const size = ogSize;
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function OpengraphImage() {
  return ogCard({
    side: 'lab',
    kicker: `${labIdentity.handle} · The Lab`,
    title: labIdentity.headline,
    footer: 'anmolsinghyadav.com/lab',
  });
}
