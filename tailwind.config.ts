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
        // Dark base
        night: "#05080f",
        "night-card": "#0c1220",
        "night-border": "rgba(255,255,255,0.08)",
        // Aurora accents — used sparingly
        "aurora-green": "#34d399",  // emerald-400, classic aurora green
        "aurora-teal": "#22d3ee",   // cyan-400
        "aurora-purple": "#a78bfa", // violet-400
        // Primary interactive accent
        accent: "#34d399",
        "accent-hover": "#10b981",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
