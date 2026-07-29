import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#5FB3C7',
            fontSize: 18,
            fontWeight: 700,
            fontFamily: 'monospace',
            letterSpacing: -1,
          }}
        >
          {'>_'}
        </div>
      </div>
    ),
    { ...size },
  );
}
