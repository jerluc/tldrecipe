import {
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset: {
    ...minimal2023Preset,
    maskable: {
      resizeOptions: { background: "#000000" },
      sizes: [512],
    },
  },
  images: ["public/icon.svg"],
});
