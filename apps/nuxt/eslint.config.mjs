import {
  ESLINT_CONFIG,
  JSDOC_ESLINT_CONFIG,
  PRETTIER_ESLINT_CONFIG,
  SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  UNUSED_IMPORTS_ESLINT_CONFIG,
} from "@wds/tools.eslint";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  { ignores: [".output", ".nuxt"] },
  ...ESLINT_CONFIG,
  ...JSDOC_ESLINT_CONFIG,
  ...SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  ...UNUSED_IMPORTS_ESLINT_CONFIG,
  ...PRETTIER_ESLINT_CONFIG,
  {
    rules: {
      "no-undef": "off",
      "vue/no-multiple-template-root": "off",
      "vue/multi-word-component-names": "off",
    },
  },
);
