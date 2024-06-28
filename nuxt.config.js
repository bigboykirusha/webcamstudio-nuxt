import { defineNuxtConfig } from "nuxt/config";
import visualizer from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
  devtools: { enabled: false },
  ssr: true,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/styles/StyleGlobal.css",
    "@/assets/styles/StyleFonts.css",
    "@/assets/styles/style.css",
  ],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "../assets/icons/favicon.svg",
        },
      ],
    },
  },
  vite: {
    plugins: [visualizer({ open: false, gzipSize: true, brotliSize: true })],
  },
  build: {
    rollupOptions: {
      plugins: [
        terser({
          format: {
            comments: false,
          },
          compress: {
            drop_console: false,
          },
        }),
      ],
    },
  },
});
