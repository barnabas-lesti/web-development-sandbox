// @ts-check

import { ESLINT_CONFIG } from "./configs/eslint.mjs";
import { JSDOC_ESLINT_CONFIG } from "./configs/jsdoc.mjs";
import { PRETTIER_ESLINT_CONFIG } from "./configs/prettier.mjs";
import { SIMPLE_IMPORT_SORT_ESLINT_CONFIG } from "./configs/simple-import-sort.mjs";
import { TYPESCRIPT_ESLINT_CONFIG } from "./configs/typescript.mjs";
import { UNUSED_IMPORTS_ESLINT_CONFIG } from "./configs/unused-imports.mjs";

export { ANGULAR_ESLINT_CONFIG } from "./configs/angular.mjs";
export { REACT_ESLINT_CONFIG } from "./configs/react.mjs";
export { RXJS_ESLINT_CONFIG } from "./configs/rxjs.mjs";
export { VUE_ESLINT_CONFIG } from "./configs/vue.mjs";
export { createEslintConfig } from "./utility.mjs";

/**
 * Commonly used workspace eslint configuration.
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
export const BASE_ESLINT_CONFIG = [
  ...ESLINT_CONFIG,
  ...TYPESCRIPT_ESLINT_CONFIG,
  ...JSDOC_ESLINT_CONFIG,
  ...SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  ...UNUSED_IMPORTS_ESLINT_CONFIG,
  ...PRETTIER_ESLINT_CONFIG,
];
