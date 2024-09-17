// @ts-check

import globals from "globals";

/**
 * Eslint environment configuration.
 *
 * https://eslint.org/docs/latest/use/configure/language-options
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
export const ENVIRONMENT_ESLINT_CONFIG = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
