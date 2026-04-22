import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nikhilyagik.dev",
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      include: ["@emailjs/browser"],
    },
  },
});
