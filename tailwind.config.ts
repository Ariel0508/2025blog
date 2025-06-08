import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0027D5',
        secondary: '#6C757D',
        'gray-text': '#4B4B4B',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
} satisfies Config





