// @ts-check

import typescriptEslint from "typescript-eslint";

/**
 * Utility function to merge and convert provided configurations to flat eslint config.
 * @param  {import('typescript-eslint').ConfigWithExtends[][]} configs Configuration array arguments.
 * @returns Finalized flat eslint config.
 */
export const createEslintConfig = (...configs) =>
  typescriptEslint.config(...configs.reduce((flatConfigs, config) => [...flatConfigs, ...config], []));
