import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { pretendard: ["Pretendard", "sans-serif"] },
      colors: {
        brand: "#3692ff",
        banner: "#cfe5ff",
        lightGray: "#FCFCFC",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
export default config;
