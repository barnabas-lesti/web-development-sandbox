import typescriptEslint from "typescript-eslint";

import { CUSTOM_ENVIRONMENT_CONFIG } from "./custom-configs/environment.mjs";
import { CUSTOM_ESLINT_CONFIG } from "./custom-configs/eslint.mjs";
import { CUSTOM_IGNORES_CONFIG } from "./custom-configs/ignores.mjs";
import { CUSTOM_JSDOC_CONFIG } from "./custom-configs/jsdoc.mjs";
import { CUSTOM_PRETTIER_CONFIG } from "./custom-configs/prettier.mjs";
import { CUSTOM_SIMPLE_IMPORT_SORT_CONFIG } from "./custom-configs/simple-import-sort.mjs";
import { CUSTOM_TYPESCRIPT_CONFIG } from "./custom-configs/typescript.mjs";
import { CUSTOM_UNUSED_IMPORTS_CONFIG } from "./custom-configs/unused-imports.mjs";

/**
 * Project base eslint configuration.
 *
 * https://eslint.org/docs/latest/use/configure/
 */
export const BASE_ESLINT_CONFIG = typescriptEslint.config(
  ...CUSTOM_IGNORES_CONFIG,
  ...CUSTOM_ESLINT_CONFIG,
  ...CUSTOM_TYPESCRIPT_CONFIG,
  ...CUSTOM_ENVIRONMENT_CONFIG,
  ...CUSTOM_JSDOC_CONFIG,
  ...CUSTOM_SIMPLE_IMPORT_SORT_CONFIG,
  ...CUSTOM_UNUSED_IMPORTS_CONFIG,
  ...CUSTOM_PRETTIER_CONFIG,
);
