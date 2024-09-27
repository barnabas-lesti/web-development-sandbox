import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const DEFAULT_PORT = 3000;
const CUSTOM_ELEMENTS = ["wds-button", "wds-input", "wds-container", "wds-column"];
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
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => CUSTOM_ELEMENTS.includes(tag),
        },
      },
    }),
  ],
});
