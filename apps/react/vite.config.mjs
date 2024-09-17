import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const DEFAULT_PORT = 3000;

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
  plugins: [react()],
});
