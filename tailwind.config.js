/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        fillMain: "rgb(var(--fill-main) / <alpha-value>)",
        hoverMain: "rgb(var(--hover-main) / <alpha-value>)",
        textMain: "rgb(var(--text-main) / <alpha-value>)",
        textContrast: "rgb(var(--text-contrast) / <alpha-value>)",
        textSecondary: "rgb(var(--text-secondary) / <alpha-value>)",
        tabshadowfrom: "rgb(var(--tab-shadow-from) / <alpha-value>)",
        tabshadowto: "rgb(var(--tab-shadow-to) / <alpha-value>)",
        accentMain: "rgb(var(--accent-main) / <alpha-value>)",
        accentDark: "rgb(var(--accent-dark) / <alpha-value>)",
        accentPale: "rgb(var(--accent-pale) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}

