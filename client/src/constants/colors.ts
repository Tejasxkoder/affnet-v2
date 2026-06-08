export const COLORS = {
  bg: {
    primary: "bg-black",
    secondary: "bg-[#050505]",
    tertiary: "bg-[#0A0A0A]",
    overlay: "bg-black/40",
  },

  accent: {
    primary: "#C9A14A",
    light: "#d6ae57",
    dark: "#b8961d",
  },

  text: {
    primary: "text-white",
    secondary: "text-white/60",
    tertiary: "text-white/40",
    muted: "text-white/20",
  },

  border: {
    primary: "border-white/10",
    secondary: "border-white/5",
    accent: "border-[#C9A14A]/30",
    accentLight: "border-[#C9A14A]/20",
  },

  backdrop: {
    light: "bg-white/5",
    medium: "bg-white/10",
    dark: "bg-white/20",
  },

  accentBg: {
    light: "bg-[#C9A14A]/5",
    medium: "bg-[#C9A14A]/10",
    dark: "bg-[#C9A14A]/20",
  },

  variables: {
    primary: "var(--color-primary)",
    accent: "var(--color-accent)",
    accentLight: "var(--color-accent-light)",
    background: "var(--color-bg)",
    foreground: "var(--color-fg)",
  },
} as const;

export const CSS_VARIABLES = `
  :root {
    --color-primary: #000000;
    --color-accent: #C9A14A;
    --color-accent-light: #d6ae57;
    --color-bg: #0A0A0A;
    --color-fg: #ffffff;
  }
`;

export function getAccentColor(opacity: number): string {
  return `bg-[#C9A14A]/${opacity}`;
}

export function getWhiteColor(opacity: number, type: "text" | "bg" | "border" = "text"): string {
  return `${type}-white/${opacity}`;
}
