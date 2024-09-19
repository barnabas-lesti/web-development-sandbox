import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const DEFAULT_PORT = 8080;

/**
 * Application build configuration.
 *
 * https://vitejs.dev/config/
 */
export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: DEFAULT_PORT,
  },
  preview: {
    port: DEFAULT_PORT,
  },
  plugins: [vue()],
});
