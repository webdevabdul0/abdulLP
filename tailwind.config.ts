import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
// @ts-expect-error
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

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

      borderImage: {
        "custom-gradient": `linear-gradient(90deg, 
          rgba(202, 223, 139, 1) 0%, 
          rgba(248, 252, 207, 1) 16.67%, 
          rgba(247, 208, 127, 1) 33.33%, 
          rgba(225, 126, 113, 1) 50%, 
          rgba(237, 92, 87, 1) 66.67%, 
          rgba(112, 154, 219, 1) 83.33%, 
          rgba(121, 193, 225, 1) 100%)`,
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }: any) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
    function ({
      addUtilities,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".stroke-text": {
          WebkitTextStroke: "1px #0070f3", // Change stroke width and color as needed
          color: "transparent", // Optional: Makes only the stroke visible
        },
      });
    },
  ],
} satisfies Config;
