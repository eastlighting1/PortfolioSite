import { defineConfig } from "astro/config";

const site = "https://eastlighting.github.io";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repo === "eastlighting.github.io";
const base = isUserSite ? "/" : repo ? `/${repo}/` : "/";

export default defineConfig({
  site,
  base,
  output: "static"
});
