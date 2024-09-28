/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  files: "src/**",
  targets: ["angular", "react", "vue"],
  dest: "targets",
  commonOptions: {
    typescript: true,
  },
  options: {
    angular: {
      standalone: true,
    },
    react: {
      typescript: true,
    },
    vue: { typescript: true, api: "composition" },
  },
};
