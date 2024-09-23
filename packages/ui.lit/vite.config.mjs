import { defineConfig } from "vite";

/**
 * Application build configuration.
 *
 * https://vitejs.dev/config/
 */
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    emptyOutDir: true,
  },
});
