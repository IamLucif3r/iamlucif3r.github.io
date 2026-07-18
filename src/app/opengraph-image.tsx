import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';
import { profile } from '@/content/profile';

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0B0D10',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', color: '#6B7178', fontSize: 28, letterSpacing: 4 }}>
          {siteConfig.name.toUpperCase()} · {siteConfig.role.toUpperCase()}
        </div>
        <div
          style={{
            display: 'flex',
            color: '#ECEDEF',
            fontSize: 60,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {profile.thesis}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', width: 60, height: 4, backgroundColor: '#6E93E6' }} />
          <div style={{ display: 'flex', color: '#A2A8B0', fontSize: 26 }}>
            anmolsinghyadav.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
