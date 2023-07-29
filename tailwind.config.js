/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        xl: "repeat(auto-fill, minmax(20rem, 1fr))",
        lg: "repeat(auto-fill, minmax(17rem, 1fr))",
        md: "repeat(auto-fill, minmax(15rem, 1fr))",
        sm: "repeat(auto-fill, minmax(15rem, 1fr))",

        show_xl: "repeat(auto-fill, minmax(15rem, 1fr))",
        show_lg: "repeat(auto-fill, minmax(10rem, 1fr))",
        show_md: "repeat(auto-fill, minmax(5rem, 1fr))",
        show_sm: "repeat(auto-fill, minmax(15rem, 1fr))",
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      lgg: { max: "950px" },

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
