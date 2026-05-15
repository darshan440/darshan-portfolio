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
        background: "#050505",
        foreground: "#f3f4f6",
        primary: {
          DEFAULT: "#8b5cf6", // Purple
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#0ea5e9", // Electric Blue
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ec4899", // Pink Highlight
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#27272a", // Zinc 800
          foreground: "#a1a1aa", // Zinc 400
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          foreground: "#f3f4f6",
        },
        border: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(266,74%,55%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(199,89%,48%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(330,81%,60%,0.15) 0px, transparent 50%)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
