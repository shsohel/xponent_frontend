/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      maxWidth: "60rem",
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "var(--blue)",
        secondary: "var(--warning)",
      },
    },
  },
  plugins: [],
};
