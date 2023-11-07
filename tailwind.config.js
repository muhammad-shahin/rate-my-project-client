/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        dark: '#07031d',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
