/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0a",
          card: "#1a1a2e",
          hover: "#222240",
        },
        accent: {
          DEFAULT: "#e8a838",
          light: "#f0c060",
          dark: "#c08020",
          glow: "rgba(232, 168, 56, 0.3)",
        },
        text: {
          primary: "#f0ece2",
          secondary: "#8a8a9a",
          muted: "#5a5a6a",
        },
        border: {
          DEFAULT: "#2a2a3e",
          light: "#3a3a4e",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Noto Sans SC", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
