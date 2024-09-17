// @ts-check

import eslintPluginJSDoc from "eslint-plugin-jsdoc";
import typescriptEslint from "typescript-eslint";

/**
 * JSDoc eslint plugin configuration.
 *
 * https://github.com/gajus/eslint-plugin-jsdoc
 */
export const JSDOC_ESLINT_CONFIG = typescriptEslint.config(
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.cjs", "**/*.mjs"],
    extends: [eslintPluginJSDoc.configs["flat/recommended-typescript"]],
    rules: {
      "jsdoc/require-jsdoc": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "jsdoc/require-param": "off",
      "jsdoc/check-param-names": "off",
      "jsdoc/require-returns": "off",
    },
  },
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      "jsdoc/check-tag-names": "off",
      "jsdoc/no-types": "off",
    },
  },
);
