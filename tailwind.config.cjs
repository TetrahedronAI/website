/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "base": "#0d0d0d",
        "base-content": "#f2f2f2",
        "primary": "#6CE5FF",
        "secondary": "#AF6CF2",
      },
      screens: {
        "mini": "275px",
        "tiny": "320px",
      }
    },
  },

  plugins: [],
};

module.exports = config;
