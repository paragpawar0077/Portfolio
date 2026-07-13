/** @type {import('tailwindcss').Config} */
export default {
  // "class" strategy lets us default to dark mode and toggle it in JS
  // (see App.jsx) instead of following the OS setting.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
