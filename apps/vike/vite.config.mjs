import react from "@vitejs/plugin-react";
import { vavite } from "vavite";
import ssr from "vike/plugin";
import { defineConfig } from "vite";

const DEFAULT_PORT = 3000;

export default defineConfig({
  server: {
    port: DEFAULT_PORT,
  },
  buildSteps: [
    {
      name: "client",
    },
    {
      name: "server",
      config: {
        build: { ssr: true },
      },
    },
  ],

  plugins: [
    vavite({
      handlerEntry: "./src/server/index.ts",
      serveClientAssetsInDev: true,
    }),
    react(),
    ssr({ disableAutoFullBuild: true }),
  ],
});
