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
        accent: "#06b6d4",       // cyan-500 — aurora teal
        "accent-hover": "#0891b2",
        "accent-2": "#8b5cf6",   // violet-500 — aurora purple
        surface: "#f0fdfa",      // very light teal
        "surface-2": "#faf5ff",  // very light lavender
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
