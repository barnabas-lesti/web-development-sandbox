// @ts-check

import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint";

/**
 * Prettier plugin configuration to remove formatting related rules from eslint.
 */
export const PRETTIER_ESLINT_CONFIG = typescriptEslint.config(eslintConfigPrettier);
