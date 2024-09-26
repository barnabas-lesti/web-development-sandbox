import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import typescriptEslint from "typescript-eslint";
import { fileURLToPath } from "url";

const BASE_DIRECTORY = path.dirname(path.join(fileURLToPath(import.meta.url), "../.."));

export const COMPAT = new FlatCompat({
  baseDirectory: BASE_DIRECTORY,
  resolvePluginsRelativeTo: BASE_DIRECTORY,
});

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
