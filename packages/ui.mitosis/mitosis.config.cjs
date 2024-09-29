// @ts-check

/**
 * Mitosis compiler configuration.
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  files: "src/**",
  targets: ["angular", "react", "vue"],
  dest: "dist/mitosis",
  commonOptions: {
    typescript: true,
  },
  options: {
    angular: {
      standalone: true,
    },
    react: {},
    vue: { api: "composition" },
  },
};
