// @ts-check

import { ANGULAR_ESLINT_CONFIG } from "./configs/angular.mjs";
import { ESLINT_CONFIG } from "./configs/eslint.mjs";
import { JSDOC_ESLINT_CONFIG } from "./configs/jsdoc.mjs";
import { PRETTIER_ESLINT_CONFIG } from "./configs/prettier.mjs";
import { REACT_ESLINT_CONFIG } from "./configs/react.mjs";
import { RXJS_ESLINT_CONFIG } from "./configs/rxjs.mjs";
import { SIMPLE_IMPORT_SORT_ESLINT_CONFIG } from "./configs/simple-import-sort.mjs";
import { TYPESCRIPT_ESLINT_CONFIG } from "./configs/typescript.mjs";
import { UNUSED_IMPORTS_ESLINT_CONFIG } from "./configs/unused-imports.mjs";
import { VUE_ESLINT_CONFIG } from "./configs/vue.mjs";
import { createEslintConfig } from "./utility.mjs";

/**
 * Common workspace eslint configuration.
 */
export const BASE_WORKSPACE_ESLINT_CONFIG = createEslintConfig(
  ESLINT_CONFIG,
  TYPESCRIPT_ESLINT_CONFIG,
  JSDOC_ESLINT_CONFIG,
  SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  UNUSED_IMPORTS_ESLINT_CONFIG,
  PRETTIER_ESLINT_CONFIG,
);

/**
 * Angular based workspace eslint configuration.
 */
export const ANGULAR_WORKSPACE_ESLINT_CONFIG = createEslintConfig(
  BASE_WORKSPACE_ESLINT_CONFIG,
  RXJS_ESLINT_CONFIG,
  ANGULAR_ESLINT_CONFIG,
  [
    {
      rules: {
        "@typescript-eslint/consistent-type-imports": "off",
      },
    },
  ],
);

/**
 * React based workspace eslint configuration.
 */
export const REACT_WORKSPACE_ESLINT_CONFIG = createEslintConfig(BASE_WORKSPACE_ESLINT_CONFIG, REACT_ESLINT_CONFIG);

/**
 * Vue based workspace eslint configuration.
 */
export const VUE_WORKSPACE_ESLINT_CONFIG = createEslintConfig(BASE_WORKSPACE_ESLINT_CONFIG, VUE_ESLINT_CONFIG);
