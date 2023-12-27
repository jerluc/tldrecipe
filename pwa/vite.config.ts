import { defineConfig } from "vite";

import { VitePWA } from "vite-plugin-pwa";
import Unfonts from "unplugin-fonts/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: [
          { name: "Moirai One" },
          {
            name: "Work Sans",
            styles:
              "ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300",
          },
          {
            name: "Material Symbols Rounded",
            styles: "opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
          },
        ],
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
