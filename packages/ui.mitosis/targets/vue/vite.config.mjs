import { defineConfig } from "vite";
import vitePluginVue from "@vitejs/plugin-vue";
import vitePluginDts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vitePluginVue(), vitePluginDts({ include: "src" })],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
