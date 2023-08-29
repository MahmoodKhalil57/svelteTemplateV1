/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: true,
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), require('tailwind-icones-plugin')],
}

