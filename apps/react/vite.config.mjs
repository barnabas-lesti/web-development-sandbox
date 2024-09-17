import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

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
    port: 3000,
  },
  plugins: [react()],
});
