import { defineConfig } from "vite";
import vitePluginReact from "@vitejs/plugin-react";
import vitePluginDts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vitePluginReact(), vitePluginDts({ include: "src" })],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});

void 0;
