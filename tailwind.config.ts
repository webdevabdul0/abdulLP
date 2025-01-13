import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        DEFAULT: "1px",
        sm: "0.5px",
        lg: "2px",
      },
      textStrokeColor: {
        DEFAULT: "#6366F1", // Default black stroke
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".stroke-text": {
          WebkitTextStroke: "1px #6366F1", // Change stroke width and color as needed
          color: "transparent", // Optional: Makes only the stroke visible
        },
      });
    },
  ],
} satisfies Config;
