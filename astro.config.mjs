import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.shima.me",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", ru: "ru" } },
    }),
  ],
  server: { host: true, port: 4321 },
  devToolbar: { enabled: false },
  vite: { server: { allowedHosts: true } },
});
