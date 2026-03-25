import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FDF8F3',
        blush: {
          50: '#FFFAF8',
          100: '#FBF0EC',
          200: '#F2D4CC',
          300: '#E8B4A8',
          400: '#D4907F',
          500: '#C07060',
          600: '#A05040',
        },
        sky: {
          50: '#EFF6FB',
          100: '#D6EBFA',
          200: '#A8CFE8',
          300: '#7AB8DC',
          400: '#5AA0C8',
          500: '#3E85B0',
        },
        warm: {
          50: '#FDF5F4',
          100: '#F5E8E7',
          200: '#E8D0CE',
          300: '#C4948F',
          400: '#9A6E69',
          500: '#7A5C58',
          600: '#5C4440',
          700: '#3D2E2B',
          800: '#2D1F1D',
        },
        lavender: {
          50: '#F5F3FA',
          100: '#EDE8F5',
          200: '#D8D0EA',
          300: '#B8AED0',
          400: '#9B90BC',
          500: '#7E72A8',
        },
        sand: '#E8D5B7',
      },
      boxShadow: {
        soft: '0 4px 30px rgba(180, 120, 100, 0.1)',
        medium: '0 8px 40px rgba(180, 120, 100, 0.15)',
        strong: '0 20px 60px rgba(180, 120, 100, 0.2)',
        glow: '0 0 40px rgba(212, 144, 127, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 9s ease-in-out infinite 1s',
        'spin-slow': 'spin 25s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
