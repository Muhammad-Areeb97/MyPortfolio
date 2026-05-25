/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcdaff",
          300: "#8ec2ff",
          400: "#599fff",
          500: "#3380ff",
          600: "#1f63f0",
          700: "#1a4fd1",
          800: "#1a44a7",
          900: "#1b3d83",
        },
        accent: {
          400: "#7c8cff",
          500: "#6a78f5",
          600: "#5765e6",
        },
        ink: {
          50: "#f7f8fb",
          100: "#eef0f6",
          200: "#dde1ec",
          300: "#b8bfd2",
          400: "#8c93ac",
          500: "#666d87",
          600: "#4a5170",
          700: "#363c58",
          800: "#23283f",
          900: "#141828",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(20, 24, 40, 0.15)",
        glow: "0 0 0 1px rgba(51, 128, 255, 0.18), 0 20px 60px -20px rgba(51, 128, 255, 0.45)",
        card: "0 1px 2px rgba(20, 24, 40, 0.04), 0 8px 24px -10px rgba(20, 24, 40, 0.10)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(99, 122, 175, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 122, 175, 0.08) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(51, 128, 255, 0.18), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
    },
  },
  plugins: [],
};
