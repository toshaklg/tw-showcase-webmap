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
        bgPrimary: "rgb(var(--bg-primary) / <alpha-value>)",
        textPrimary: "rgb(var(--text-primary) / <alpha-value>)",
        textSecondary: "rgb(var(--text-secondary) / <alpha-value>)",
        iconPrimary: "rgb(var(--icon-primary) / <alpha-value>)",
        iconContrast: "rgb(var(--icon-contrast) / <alpha-value>)",
        iconDisabled: "rgb(var(--icon-disabled) / <alpha-value>)",
        tabShadowFrom: "rgb(var(--tab-shadow-from) / <alpha-value>)",
        tabShadowTo: "rgb(var(--tab-shadow-to) / <alpha-value>)",
        layerPrimary: "rgb(var(--layer-primary) / <alpha-value>)",
        hoverTint: "rgb(var(--hover-tint) / <alpha-value>)",
        hoverOutline: "rgb(var(--hover-outline) / <alpha-value>)",
        accentPrimary: "rgb(var(--accent-primary) / <alpha-value>)",
        accentSecondary: "rgb(var(--accent-secondary) / <alpha-value>)",
        accentDisabled: "rgb(var(--accent-disabled) / <alpha-value>)",

        shadowPrimary: "rgba(var(--shadow-primary), 0.7)",
      },
      boxShadow: {
        "halo": "0 0 5px .25em"
      }
    },
  },
  plugins: [],
}

