import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const site = (p: string) => fileURLToPath(new URL(`./src/site/${p}`, import.meta.url));

// The figures import the site's shared code by these names, so they stay identical to newt-interactive's copies.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": site("hooks.ts"),
      "@ui/controls": site("controls/index.ts"),
      "@lib/utils": site("utils.ts"),
      "next/dynamic": site("next-dynamic.tsx"),
    },
  },
});
