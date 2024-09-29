import vitePluginVue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vitePluginDts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vitePluginVue(), vitePluginDts({ include: "dist/mitosis/vue/src" })],
  build: {
    lib: {
      entry: "dist/mitosis/vue/src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    outDir: "dist/vue",
    sourcemap: true,
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
