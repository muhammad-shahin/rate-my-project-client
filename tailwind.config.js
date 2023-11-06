/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00A9FF',
        primaryLight: '#00aaff6c',
        secondary: '#89CFF3',
        tertiary: '#977CFD',
        darkGray: '#605568',
        line: '#D5D5D5',
        purple: '#522B79',
        pink: '#A62E7F',
        gray: '#838383',
        lightBlack: '#2a2929',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
