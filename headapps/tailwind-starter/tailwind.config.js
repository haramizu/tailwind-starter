/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  safelist: [
    {
      pattern: /basis-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

