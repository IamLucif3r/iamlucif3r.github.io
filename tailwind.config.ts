import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0B0D10',
          raised: '#121519',
          inset: '#0E1013',
        },
        ink: {
          primary: '#ECEDEF',
          secondary: '#A2A8B0',
          tertiary: '#6B7178',
        },
        accent: {
          DEFAULT: '#6E93E6',
          hover: '#8AABF0',
          press: '#5A7FD4',
        },
        hairline: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.14)',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        kicker: ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.08em' }],
        'display-xl': [
          'clamp(2.5rem, 6vw, 5.5rem)',
          { lineHeight: '1.05', letterSpacing: '-0.01em' },
        ],
        'metric': [
          'clamp(3.5rem, 10vw, 7.5rem)',
          { lineHeight: '1', letterSpacing: '-0.02em' },
        ],
        'h2': [
          'clamp(1.875rem, 3.5vw, 2.75rem)',
          { lineHeight: '1.1', letterSpacing: '-0.005em' },
        ],
        'body-l': ['clamp(1.125rem, 1.4vw, 1.25rem)', { lineHeight: '1.6' }],
        'body': ['1.0625rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      spacing: {
        section: 'clamp(4.5rem, 12vh, 12.5rem)',
        'section-sm': 'clamp(4rem, 8vh, 6rem)',
      },
      maxWidth: {
        content: '1200px',
        measure: '42rem',
        prose: '45rem',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '260ms',
        slow: '420ms',
        reveal: '600ms',
      },
    },
  },
  plugins: [],
};

export default config;
