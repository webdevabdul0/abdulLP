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

      colors: {
        background: "var(--background)",
        primary: "rgba(var(--primary))",
        primaryText: "rgba(var(--primaryText))",
        textMuted: "rgba(var(--textMuted))",
        lightBorder: "rgba(var(--lightBorder))",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
