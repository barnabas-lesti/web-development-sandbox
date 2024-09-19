// @ts-check

import typescriptEslint from "typescript-eslint";

/**
 * @typedef {import('typescript-eslint').ConfigWithExtends} ConfigWithExtends
 */

/**
 * Utility function to merge and convert provided configurations to flat eslint config.
 * @param  {(ConfigWithExtends | ConfigWithExtends[])[]} configs Configuration array arguments.
 * @returns Finalized flat eslint config.
 */
export const createEslintConfig = (...configs) => typescriptEslint.config(...configs.reduce(reduceHandler, []));

/**
 * Config flattener reduce function handler.
 * @param {ConfigWithExtends[]} flatConfigs The accumulated flat array.
 * @param {ConfigWithExtends | ConfigWithExtends[]} config Current config to flatten.
 * @returns The updated array.
 */
const reduceHandler = (flatConfigs, config) => [...flatConfigs, ...(Array.isArray(config) ? config : [config])];
