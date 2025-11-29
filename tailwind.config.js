/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#1F2937",
        input: "#1F2937",
        ring: "#3B82F6",
        background: "#0D1117",
        foreground: "#F3F4F6",
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "#F3F4F6",
          hover: "#2563EB",
        },
        secondary: {
          DEFAULT: "#161B22",
          foreground: "#F3F4F6",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#F3F4F6",
        },
        muted: {
          DEFAULT: "#161B22",
          foreground: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#1F2937",
          foreground: "#F3F4F6",
        },
        popover: {
          DEFAULT: "#161B22",
          foreground: "#F3F4F6",
        },
        card: {
          DEFAULT: "#161B22",
          foreground: "#F3F4F6",
        },
        text: {
          primary: "#F3F4F6",
          secondary: "#9CA3AF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}