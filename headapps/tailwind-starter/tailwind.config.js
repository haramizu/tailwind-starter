/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /basis-/,
    },
    {
      pattern: /self-/,
    },
    'flex',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
