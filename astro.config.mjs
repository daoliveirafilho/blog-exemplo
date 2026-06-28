// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "astro/config";

export default defineConfig( {
site: "https://blog-exemplo.da-oliveira-filho-03d.workers.dev",
integrations: [mdx(), sitemap(), react()],
output: 'static',
vite: {
plugins: [tailwindcss()],
},
});
