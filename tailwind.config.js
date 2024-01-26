/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte}', './node_modules/svelte-ux/**/*.{svelte,js}' , './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('svelte-ux/plugins/tailwind.cjs'),],
}

