// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Build
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint"],
  telemetry: false,
  srcDir: "src",
  imports: {
    autoImport: false,
  },

  // App
  appConfig: {
    appName: "Nuxt",
  },
});
