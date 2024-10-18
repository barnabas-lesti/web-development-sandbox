import eslintPluginJSDoc from "eslint-plugin-jsdoc";

import { convertConfigWithExtendsToFlatConfig } from "../utility/index.mjs";

/**
 * JSDoc eslint plugin configuration.
 * @type {import('eslint').Linter.Config[]}
 */
export const JSDOC_ESLINT_CONFIG = convertConfigWithExtendsToFlatConfig(
  {
    files: ["**/*.{ts,tsx,vue,js,cjs,mjs}"],
    extends: [eslintPluginJSDoc.configs["flat/recommended-typescript"]],
    rules: {
      "jsdoc/require-jsdoc": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx,vue}"],
    rules: {
      "jsdoc/require-param": "off",
      "jsdoc/check-param-names": "off",
      "jsdoc/require-returns": "off",
    },
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    rules: {
      "jsdoc/check-tag-names": "off",
      "jsdoc/no-types": "off",
    },
  },
);
