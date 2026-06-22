/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:   ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hero:   ['Sriracha', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'float-slow':   'float-slow 12s ease-in-out infinite',
        'float-medium': 'float-medium 15s ease-in-out infinite',
        'float-fast':   'float-fast 10s ease-in-out infinite',
        'profile-float':'float-profile 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
