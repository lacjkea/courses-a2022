import dotenv from "dotenv";
dotenv.config();
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

export default defineConfig({
  site: process.env.SITE, //TODO: ikke testet
  integrations: [svelte()],
});
