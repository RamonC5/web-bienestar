import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, 
      colors: {
        background: 'var(--color-background)', // Background
        primary: 'var(--color-primary)',      // Mint Green
        secondary: 'var(--color-secondary)',  // Deep Teal
        color_text: 'var(--color-text)',            // Dark Gray
        hover: 'var(--color-hover)',          // Hover Color
        rating: 'var(--color-rating)',        // Rating color       // Rating color
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Reemplaza 'Roboto' con la fuente deseada
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
