/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "28px",
      "3xl": "34px",
      "4xl": "44px",
      "5xl": "54px",
      "6xl": "66px",
    },
    colors: {
      background: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
        tertiary: "var(--color-background-tertiary)",
      },
      text: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      }
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
