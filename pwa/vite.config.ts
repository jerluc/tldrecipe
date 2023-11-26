import { defineConfig } from "vite";

import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue(), VitePWA({ registerType: "autoUpdate" })],
});
