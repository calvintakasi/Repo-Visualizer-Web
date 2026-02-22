import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "bg-primary": "hsl(var(--bg-primary))",
        "bg-secondary": "hsl(var(--bg-secondary))",
        "bg-card": "hsl(var(--bg-card))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        accent: "hsl(var(--accent))",
        "accent-glow": "hsl(var(--accent-glow))",
        "accent-secondary": "hsl(var(--accent-secondary))",
        "border-dim": "hsl(var(--border-dim))",
        "border-bright": "hsl(var(--border-bright))",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
