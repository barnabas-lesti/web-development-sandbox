import { ANGULAR_ESLINT_PLUGIN_CONFIG, RXJS_ESLINT_PLUGIN_CONFIG } from "#plugins";

import { BASE_WORKSPACE_ESLINT_CONFIG } from "./base.mjs";

/**
 * Angular based workspace eslint configuration.
 * @type {import('#types').ConfigWithExtends[]}
 */
export const ANGULAR_WORKSPACE_ESLINT_CONFIG = [
  ...BASE_WORKSPACE_ESLINT_CONFIG,
  ...RXJS_ESLINT_PLUGIN_CONFIG,
  ...ANGULAR_ESLINT_PLUGIN_CONFIG,
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "off",
    },
  },
];
