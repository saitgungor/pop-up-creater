/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      spacing: {
        7.25: '1.8125rem',
        7.75: '1.9375rem',
        16.625: '4.15625rem',
        22.5: '5.625rem',
        41.75: '10.4375rem',
        75: '18.75rem',
        111.5: '27.857rem',
        120: '30rem',
        150: '37.5rem',
      },
    },
  },
  plugins: [],
};
