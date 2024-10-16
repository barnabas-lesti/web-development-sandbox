import eslintPluginVue from "eslint-plugin-vue";

/**
 * Vue framework eslint configuration.
 * @type {import('eslint').Linter.Config[]}
 */
export const VUE_ESLINT_CONFIG = [
  ...eslintPluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    rules: {
      "vue/html-indent": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-self-closing": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multi-word-component-names": "off",
    },
  },
];
