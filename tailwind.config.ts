/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      hidden: {
        display: "none",
      },
      lineHeight: {
        tight: ".8",
        normal: "1.5",
        loose: "2",
      },
      colors: {
        bone: "rgb(245,245,245,255)",
        aqua: "rgb(79, 186, 194)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "740px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
