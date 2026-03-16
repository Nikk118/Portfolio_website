import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nikhil-yagik.netlify.app",
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      include: ["@emailjs/browser"],
    },
  },
});
