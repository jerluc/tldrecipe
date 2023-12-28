import { defineConfig } from "vite";

import { VitePWA } from "vite-plugin-pwa";
import Unfonts from "unplugin-fonts/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      fontsource: {
        families: [
          "Moirai One",
          {
            name: "Work Sans",
            weights: [100, 200, 300, 400, 500, 600, 700],
            styles: ["italic", "normal"],
          },
          {
            name: "Material Symbols Rounded",
            variable: true,
          },
        ],
      },
    }),
    VitePWA({
      // Web Manifest
      manifest: {
        name: "tl;drecipe",
        short_name: "tl;drecipe",
        description: "Read recipes, not life stories",
        theme_color: "#fbbf24",
        background_color: "#fbbf24",
        display: "standalone",
        orientation: "any",
        share_target: {
          action: "/recipe",
          method: "GET",
          enctype: "application/x-www-form-urlencoded",
          params: {
            title: "title",
            text: "text",
            url: "url",
          },
        },
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      // Service Worker
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
