/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "base": "#f2f2f2",
        "base-content": "#161414",
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
