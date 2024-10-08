// @ts-nocheck
// Need to disable type checking because vue plugin is un-compatible for some reason.

import eslintPluginVue from "eslint-plugin-vue";

/**
 * Vue framework eslint configuration.
 * @type {ConfigWithExtends[]}
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
