// @ts-check

import globals from "globals";
import typescriptEslint from "typescript-eslint";

/**
 * Eslint environment configuration.
 *
 * https://eslint.org/docs/latest/use/configure/language-options
 */
export const ENVIRONMENT_ESLINT_CONFIG = typescriptEslint.config({
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
});
