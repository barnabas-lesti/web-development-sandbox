// @ts-check

import { ESLINT_CONFIG } from "../base-configs/eslint.mjs";
import { JSDOC_ESLINT_CONFIG } from "../base-configs/jsdoc.mjs";
import { PRETTIER_ESLINT_CONFIG } from "../base-configs/prettier.mjs";
import { SIMPLE_IMPORT_SORT_ESLINT_CONFIG } from "../base-configs/simple-import-sort.mjs";
import { TYPESCRIPT_ESLINT_CONFIG } from "../base-configs/typescript.mjs";
import { UNUSED_IMPORTS_ESLINT_CONFIG } from "../base-configs/unused-imports.mjs";
import { createEslintConfig } from "../utility.mjs";

/**
 * JavaScript workspace eslint configuration.
 */
export const JAVASCRIPT_WORKSPACE_ESLINT_CONFIG = createEslintConfig(
  ESLINT_CONFIG,
  TYPESCRIPT_ESLINT_CONFIG,
  JSDOC_ESLINT_CONFIG,
  SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  UNUSED_IMPORTS_ESLINT_CONFIG,
  PRETTIER_ESLINT_CONFIG,
);
