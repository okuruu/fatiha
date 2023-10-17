/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens : {
      'md' : '768px'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

