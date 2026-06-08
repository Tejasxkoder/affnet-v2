/**
 * @file tailwind.config.ts
 * @description Tailwind CSS configuration with centralized color theme and design system
 * @tags configuration, styling, tailwind, theme
 */

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * Custom color palette based on CSS variables
       * @tags colors, theme
       */
      colors: {
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        surface: "var(--surface)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        destructive: "var(--destructive)",
        border: "var(--border)",
      },
      /**
       * Custom background images with gradients
       * @tags gradients, effects
       */
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #C9A14A 0%, #d6ae57 100%)",
        "gradient-dark": "linear-gradient(135deg, #050505 0%, #0A0A0A 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      /**
       * Custom animations and transitions
       * @tags animations, motion
       */
      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-accent": "pulseAccent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseAccent: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 161, 74, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(201, 161, 74, 0)" },
        },
      },
      /**
       * Spacing scale for consistent layout
       * @tags spacing, layout
       */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      /**
       * Border radius presets
       * @tags borders, design-system
       */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      /**
       * Typography settings
       * @tags typography, fonts
       */
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
      /**
       * Shadow effects for depth
       * @tags shadows, effects
       */
      boxShadow: {
        accent: "0 0 20px rgba(201, 161, 74, 0.2)",
        "accent-glow": "0 0 40px rgba(201, 161, 74, 0.15)",
        "dark-md": "0 4px 6px rgba(0, 0, 0, 0.3)",
        "dark-lg": "0 10px 25px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
}

export default config
