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
        border: "#E3DCD2",
        input: "#E3DCD2",
        ring: "#B5502E",
        background: "#FAF7F2",
        foreground: "#1F1B16",
        primary: {
          DEFAULT: "#B5502E",
          foreground: "#FAF7F2",
          hover: "#9D4426",
        },
        secondary: {
          DEFAULT: "#F0EBE3",
          foreground: "#1F1B16",
        },
        destructive: {
          DEFAULT: "#B23B3B",
          foreground: "#FAF7F2",
        },
        muted: {
          DEFAULT: "#F0EBE3",
          foreground: "#6B645C",
        },
        accent: {
          DEFAULT: "#E3DCD2",
          foreground: "#1F1B16",
        },
        popover: {
          DEFAULT: "#FAF7F2",
          foreground: "#1F1B16",
        },
        card: {
          DEFAULT: "#F5F1EA",
          foreground: "#1F1B16",
        },
        text: {
          primary: "#1F1B16",
          secondary: "#6B645C",
        },
      },
      borderRadius: {
        lg: "0.375rem",
        md: "0.25rem",
        sm: "0.125rem",
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
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
