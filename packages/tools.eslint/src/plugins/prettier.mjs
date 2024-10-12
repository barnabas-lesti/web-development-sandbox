import eslintConfigPrettier from "eslint-config-prettier";

/**
 * Prettier plugin configuration to remove formatting related rules from eslint.
 * @type {import('#types').ConfigWithExtends[]}
 */
export const PRETTIER_ESLINT_PLUGIN_CONFIG = [
  // @ts-ignore
  eslintConfigPrettier,
];
