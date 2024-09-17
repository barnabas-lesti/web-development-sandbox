import { ENVIRONMENT_ESLINT_CONFIG } from "./configs/environment.mjs";
import { ESLINT_CONFIG } from "./configs/eslint.mjs";
import { IGNORES_ESLINT_CONFIG } from "./configs/ignores.mjs";
import { JSDOC_ESLINT_CONFIG } from "./configs/jsdoc.mjs";
import { PRETTIER_ESLINT_CONFIG } from "./configs/prettier.mjs";
import { SIMPLE_IMPORT_SORT_ESLINT_CONFIG } from "./configs/simple-import-sort.mjs";
import { TYPESCRIPT_ESLINT_CONFIG } from "./configs/typescript.mjs";
import { UNUSED_IMPORTS_ESLINT_CONFIG } from "./configs/unused-imports.mjs";

/**
 * Project base eslint configuration.
 *
 * https://eslint.org/docs/latest/use/configure/
 */
export const BASE_ESLINT_CONFIG = [
  ...IGNORES_ESLINT_CONFIG,
  ...ESLINT_CONFIG,
  ...TYPESCRIPT_ESLINT_CONFIG,
  ...ENVIRONMENT_ESLINT_CONFIG,
  ...JSDOC_ESLINT_CONFIG,
  ...SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  ...UNUSED_IMPORTS_ESLINT_CONFIG,
  ...PRETTIER_ESLINT_CONFIG,
];
