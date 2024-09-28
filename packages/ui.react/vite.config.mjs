import { defineConfig } from "vite";
import vitePluginReact from "@vitejs/plugin-react";
import vitePluginDts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vitePluginReact(),
    vitePluginDts({ include: "../ui.mitosis/dist/react/src" }),
  ],
  build: {
    lib: {
      entry: "../ui.mitosis/dist/react/src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
