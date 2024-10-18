import eslintConfigPrettier from "eslint-config-prettier";

/**
 * Prettier plugin configuration to remove formatting related rules from eslint.
 * @type {import('eslint').Linter.Config[]}
 */
export const PRETTIER_ESLINT_CONFIG = [eslintConfigPrettier];
