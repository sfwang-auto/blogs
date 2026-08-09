import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sfwang-auto.github.io",
  base: "/blogs",
  integrations: [sitemap()],
  vite: {
    // @ts-expect-error — @tailwindcss/vite types mismatch with Astro's bundled Vite; works fine at runtime
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  prefetch: {
    prefetchAll: true,
  },
});
