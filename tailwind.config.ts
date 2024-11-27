import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA5455",
        "primary-foreground": "#fffafb",
        "base-100": "#FFFFFF",
        "base-200": "#F9F9F9",
        "base-300": "#F5F5F5",
        // "primary-foreground": "#fffafb",
      },
    },
  },
  plugins: [],
};
export default config;
