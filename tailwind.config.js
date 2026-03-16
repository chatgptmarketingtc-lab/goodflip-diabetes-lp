/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gf: {
          green: '#299D6B',
          'green-dark': '#1E7A52',
          'green-light': '#E8F5EE',
          dark: '#141413',
          red: '#D63A2F',
          warm: '#FAF9F5',
          gray: '#F5F5F5',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
