import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  ignores: [".output", ".nuxt"],
  rules: {
    "vue/html-self-closing": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
  },
});
