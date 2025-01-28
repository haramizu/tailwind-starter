/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [],
  safelist: [
    `flex`,
    {
      pattern: /basis-/,
    },
    {
      pattern: /self-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
