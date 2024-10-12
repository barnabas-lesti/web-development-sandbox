import { VUE_ESLINT_PLUGIN_CONFIG } from "#plugins";

import { BASE_WORKSPACE_ESLINT_CONFIG } from "./base.mjs";

/**
 * Vue based workspace eslint configuration.
 * @type {import('#types').ConfigWithExtends[]}
 */
export const VUE_WORKSPACE_ESLINT_CONFIG = [...BASE_WORKSPACE_ESLINT_CONFIG, ...VUE_ESLINT_PLUGIN_CONFIG];
