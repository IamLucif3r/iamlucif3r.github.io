import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

const palettes = {
  work: { bg: '#FBFAF7', ink: '#1B1D20', muted: '#646A72', accent: '#136773' },
  lab: { bg: '#07080A', ink: '#EEEFEB', muted: '#808991', accent: '#B29B69' },
} as const;

/** Shared Open Graph card for both sides of the site. */
export function ogCard({
  side,
  kicker,
  title,
  footer,
}: {
  side: keyof typeof palettes;
  kicker: string;
  title: string;
  footer: string;
}) {
  const c = palettes[side];
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: c.bg,
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', color: c.muted, fontSize: 26, letterSpacing: 4 }}>
          {kicker.toUpperCase()}
        </div>
        <div style={{ display: 'flex', color: c.ink, fontSize: 64, lineHeight: 1.12, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', width: 60, height: 4, backgroundColor: c.accent }} />
          <div style={{ display: 'flex', color: c.muted, fontSize: 26 }}>{footer}</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
