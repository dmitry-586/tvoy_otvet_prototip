import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5px 20px rgba(0, 0, 0, 0.05)",
      },
      height: {
        "screen-minus-72": "calc(100vh - 72px)",
      },
    },
  },
  plugins: [],
};
export default config;
