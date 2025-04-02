/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'red': '#f80b01',
        'red-accent': '#f85c4d',
        'cream': 'var(--cream)'
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.8',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              marginBottom: '1rem',
              borderBottom: 'none',
            },
            h2: {
              borderBottom: 'none',
            },
            a: {
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
            },
            p: {
              lineHeight: '1.8',
            },
            li: {
              lineHeight: '1.7',
            },
            blockquote: {
              backgroundColor: 'rgba(248, 11, 1, 0.05)',
              padding: '1.5rem',
              borderLeftColor: '#f80b01',
            },
            hr: {
              borderColor: '#f80b01',
            }
          }
        }
      },
      spacing: {
        'section': '3rem',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
