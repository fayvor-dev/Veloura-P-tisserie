import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E6",
        vanilla: "#EEE2C4",
        butter: "#EFD9A2",
        caramel: "#BD7A3C",
        honey: "#D7A24C",
        peach: "#E7B79B",
        strawberry: "#BD5F54",
        espresso: "#4A2C1E",
        chocolate: "#231009",
        chocolate2: "#180A05",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        tightest2: "-0.04em",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(35, 16, 9, 0.12), inset 0 1px 1px rgba(255,255,255,0.4)",
        glassDark: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.08)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-18px,0) rotate(4deg)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
