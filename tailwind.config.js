/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeDown: "fadeDown 500ms ease-in-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        fill: "100% 100%",
      },
      colors: {
        grayText: "#4d4d4d",
      },
      screens: {
        "3xl": "1660px",
      },
      gridTemplateColumns: {
        footer: "1fr 3fr 3fr",
        tableRow: "repeat(1, 1fr)",
        tableCol: "0.7fr 2fr",
      },
      boxShadow: {
        modal: "0 3px 6px rgba(0,0,0,0.16)",
      },
      fontSize: {
        xl: [
          "1rem", //h5 16px
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        "2xl": [
          "1.125rem", //h4 18px
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        "3xl": [
          "1.25rem", ///h3 20px
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        "4xl": [
          "1.5rem", ///h2 24px
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        "5xl": [
          "1.75rem", //h1 28px
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        "6xl": [
          "3.5rem", //h1 - Hero 56px
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
