import { REACT_ESLINT_PLUGIN_CONFIG } from "#plugins";

import { BASE_WORKSPACE_ESLINT_CONFIG } from "./base.mjs";

/**
 * React based workspace eslint configuration.
 * @type {import('#types').ConfigWithExtends[]}
 */
export const REACT_WORKSPACE_ESLINT_CONFIG = [...BASE_WORKSPACE_ESLINT_CONFIG, ...REACT_ESLINT_PLUGIN_CONFIG];
