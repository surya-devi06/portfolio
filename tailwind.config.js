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
        themeLight: {
          body: '#FCF6F4',
          text: '#000000',
        },
        themeDark: {
          body: '#000000',
          text: '#FCF6F4',
        }
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
