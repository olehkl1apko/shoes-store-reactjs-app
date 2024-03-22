/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleYellow: "#EEFFA4",
        lavender: "#DDCEFD",
        paleGreen: "#DAFFA2",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }, // Adjust the floating height
        },
      },
      animation: {
        float: "float 4s infinite", // Adjust the duration
      },
    },
  },
  plugins: [aspectRatio],
};
