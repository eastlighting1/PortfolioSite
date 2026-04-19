import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroPwa from "@vite-pwa/astro";

const site = "https://eastlighting.github.io";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repo === "eastlighting.github.io";
const base = isUserSite ? "/" : repo ? `/${repo}/` : "/";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [
    sitemap(),
    astroPwa({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        theme_color: '#f4f1ea',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ]
});
