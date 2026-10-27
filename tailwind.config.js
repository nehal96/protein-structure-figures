/** Newt Interactive's tokens, trimmed to what the figures use. */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF7",
        // Must equal XR.card in src/figures/palette.ts, or label halos show as patches.
        card: "#F2F1ED",
        ink: {
          100: "#EEEDF2",
          200: "#DDDCE5",
          300: "#B1AFC0",
          400: "#8B88A0",
          500: "#6A687D",
          600: "#58546E",
          700: "#49465D",
          800: "#322F41",
          900: "#1A1825",
        },
        slate: {
          150: "#e9eef4",
        },
      },
      fontFamily: {
        body: ["avenir", "Inter", "sans-serif"],
        ui: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["Fira Mono", "ui-monospace", "Menlo", "Consolas", "monospace"],
        title: ["DM Serif Display", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "45rem",
      },
    },
  },
};
