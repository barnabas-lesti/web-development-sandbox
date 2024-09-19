import eslintPluginVue from "eslint-plugin-vue";

/**
 * Vue framework eslint configuration.
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
export const VUE_ESLINT_CONFIG = [
  ...eslintPluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".vue"],
      },
    },
  },
];
