/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
