/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skyPrimary: '#38BDF8',
        skyDeep: '#0284C7',
        skyLight: '#E0F2FE',
        skyPale: '#F0F9FF',
        white: '#FFFFFF',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        skyBorder: '#BAE6FD',
      },
      fontFamily: {
        karla: ['"Karla"', 'sans-serif'],
        pacifico: ['"Pacifico"', 'cursive'],
        ubuntu: ['"Ubuntu Mono"', 'monospace'],
        source: ['"Source Sans Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
