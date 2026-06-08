/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Neubrutalism Palette ── */
        ink:     '#0B0B0B',
        paper:   '#F5F0E8',
        yellow:  '#FFD600',
        orange:  '#FF6B2B',
        navy:    '#0A0F1E',
        white:   '#FFFFFF',
        muted:   '#6B7280',

        /* ── Legacy aliases (kept for compat) ── */
        bg:              '#0A0F1E',
        'bg-card':       '#111827',
        'bg-section':    '#0d1429',
        accent:          '#FFD600',
        'text-primary':  '#FFFFFF',
        'text-secondary':'#9CA3AF',
        border:          '#374151',
        'border-nav':    '#1f2937',
      },
      fontFamily: {
        bebas:    ['"Bebas Neue"', 'sans-serif'],
        grotesk:  ['"Space Grotesk"', 'sans-serif'],
        mono:     ['"JetBrains Mono"', 'monospace'],
        /* Legacy alias */
        inter:    ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        none:    '0px',
        DEFAULT: '0px',
        sm:      '0px',
        md:      '0px',
        lg:      '0px',
        xl:      '0px',
        '2xl':   '0px',
        '3xl':   '0px',
        full:    '0px',
      },
      boxShadow: {
        nb:      '4px 4px 0 #0B0B0B',
        'nb-sm': '2px 2px 0 #0B0B0B',
        'nb-lg': '6px 6px 0 #0B0B0B',
        'nb-yellow': '4px 4px 0 #FFD600',
        'nb-orange': '4px 4px 0 #FF6B2B',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        'slide-up': {
          '0%':   { transform: 'translateY(16px)', opacity: '1' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        'tick-in': {
          '0%':   { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        marquee:      'marquee 32s linear infinite',
        'marquee-rev':'marquee-rev 28s linear infinite',
        float:        'float 4s ease-in-out infinite',
        'slide-up':   'slide-up 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
