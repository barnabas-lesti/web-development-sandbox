import { STENCIL_ESLINT_PLUGIN_CONFIG } from "#plugins";

import { BASE_WORKSPACE_ESLINT_CONFIG } from "./base.mjs";

/**
 * Stencil based workspace eslint configuration.
 * @type {import('#types').ConfigWithExtends[]}
 */
export const STENCIL_WORKSPACE_ESLINT_CONFIG = [...BASE_WORKSPACE_ESLINT_CONFIG, ...STENCIL_ESLINT_PLUGIN_CONFIG];
