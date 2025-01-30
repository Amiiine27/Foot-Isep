import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#fff",
        backgroundDark: "#000",
        gl: "var(--green-light)",
        gd: "var(--green-dark)",
      },
      spacing: {
        "5px": "5px",
      },
      textShadow: {
        white: "0 0 10px #fff, 0 0 20px #fff", // Définition de l'ombre blanche
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-white": {
          textShadow: "0 0 10px #fff, 0 0 20px #fff",
        },
      });
    },
  ],
} satisfies Config;
