import vitePluginReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginDts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vitePluginReact(), vitePluginDts({ include: "dist/mitosis/react/src" })],
  build: {
    lib: {
      entry: "dist/mitosis/react/src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    sourcemap: true,
    outDir: "dist/react",
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
