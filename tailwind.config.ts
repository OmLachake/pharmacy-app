import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#151875",
        'navy-blue-light': '#080a4e',
        pink: "#fb2e86",
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        josan: ["Josefin Sans", "sans-serif"],
        rye: ["Rye", "cursive"],
      },
      screens: {
        md: "844px",
        xs: "450px",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
        6: "repeat(6,minxmax(0,10rem))",
      },
      gridRowEnd: {
        12: "12",
      },
    },

    container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
        },
    },
  },
};
export default config;
