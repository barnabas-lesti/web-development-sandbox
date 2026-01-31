import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  root: "./src",
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "#features": fileURLToPath(new URL("./src/features", import.meta.url)),
    },
  },
  plugins: [vue()],
}));
