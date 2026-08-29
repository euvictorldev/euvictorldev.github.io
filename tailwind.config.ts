import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        graphite: "hsl(var(--graphite))",
        line: "hsl(var(--border))",
        "line-soft": "hsl(var(--border-soft))",
        primary: "hsl(var(--primary))",
        "primary-hot": "hsl(var(--primary-hot))",
        "primary-deep": "hsl(var(--primary-deep))",
        critical: "hsl(var(--critical))",
        warn: "hsl(var(--warn))",
        ok: "hsl(var(--ok))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        full: "0",
      },
    },
  },
  plugins: [],
} satisfies Config;
