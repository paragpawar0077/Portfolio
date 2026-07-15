/** @type {import('tailwindcss').Config} */
export default {
  // "class" strategy lets us default to dark mode and toggle it in JS
  // (see App.jsx) instead of following the OS setting.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "ui-monospace", "monospace"],
        display: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 4s ease infinite",
        "float": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { "background-position": "-200% center" },
          "100%": { "background-position": "200% center" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
