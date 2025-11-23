/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable manual dark mode via class
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fonts': ['Poppins', 'sans-serif'], // your class -> font-fonts
      },
    },
  },
  plugins: [],
};