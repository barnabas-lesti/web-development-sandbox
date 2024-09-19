import typescriptEslint from "typescript-eslint";

/**
 * Utility function to merge and convert provided configurations to flat eslint config.
 * @param  {(ConfigWithExtends | ConfigWithExtends[])[]} configs Configuration array arguments.
 * @returns Finalized flat eslint config.
 */
export const createEslintConfig = (...configs) => {
  const compatibleConfigs = [];
  for (const config of configs) {
    compatibleConfigs.push(...(Array.isArray(config) ? config : [config]));
  }
  return typescriptEslint.config(...compatibleConfigs);
};
