// @ts-check

import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import typescriptEslint from "typescript-eslint";

/**
 * Unused imports eslint plugin configuration.
 *
 * https://github.com/sweepline/eslint-plugin-unused-imports
 */
export const UNUSED_IMPORTS_ESLINT_CONFIG = typescriptEslint.config({
  plugins: {
    "unused-imports": eslintPluginUnusedImports,
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
  },
});
