import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0D10',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#5FB3C7',
            fontSize: 92,
            fontWeight: 700,
            fontFamily: 'monospace',
            letterSpacing: -4,
          }}
        >
          {'>_'}
        </div>
      </div>
    ),
    { ...size },
  );
}
