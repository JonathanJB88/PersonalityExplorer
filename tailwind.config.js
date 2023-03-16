/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#3C91E6', // (Sky Blue)
        secondary: '#F72585', // (Pink)
        tertiary: '#FFCA3A', // (Yellow)
        background: '#F8F9FA', // (Light Gray)
      },
      textColor: {
        primary: '#3C91E6', // (Sky Blue)
        secondary: '#F72585', // (Pink)
        tertiary: '#FFCA3A', // (Yellow)
        text: '#495057', // (Dark Gray)
      },
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
