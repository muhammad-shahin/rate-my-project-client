/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00A9FF',
        secondary: '#89CFF3',
        tertiary: '#A0E9FF',
        darkGray: '#605568',
        line: '#D5D5D5',
        purple: '#522B79',
        'pink': '#A62E7F',
        'gray': '#838383',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
