import { ENVIRONMENT_ESLINT_CONFIG } from "./environment.mjs";
import { ESLINT_CONFIG } from "./eslint.mjs";
import { JSDOC_ESLINT_CONFIG } from "./jsdoc.mjs";
import { PRETTIER_ESLINT_CONFIG } from "./prettier.mjs";
import { SIMPLE_IMPORT_SORT_ESLINT_CONFIG } from "./simple-import-sort.mjs";
import { TYPESCRIPT_ESLINT_CONFIG } from "./typescript.mjs";
import { UNUSED_IMPORTS_ESLINT_CONFIG } from "./unused-imports.mjs";

/**
 * Base project eslint configuration bundle.
 */
export const BASE_ESLINT_CONFIG = [
  ...ESLINT_CONFIG,
  ...TYPESCRIPT_ESLINT_CONFIG,
  ...ENVIRONMENT_ESLINT_CONFIG,
  ...JSDOC_ESLINT_CONFIG,
  ...SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  ...UNUSED_IMPORTS_ESLINT_CONFIG,
  ...PRETTIER_ESLINT_CONFIG,
];
