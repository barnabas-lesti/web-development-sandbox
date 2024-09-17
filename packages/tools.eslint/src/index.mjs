import { createEnvironmentEslintConfig } from "./configs/environment.mjs";
import { createEslintConfig } from "./configs/eslint.mjs";
import { createJsdocEslintConfig } from "./configs/jsdoc.mjs";
import { createPrettierEslintConfig } from "./configs/prettier.mjs";
import { createSimpleImportSortEslintConfig } from "./configs/simple-import-sort.mjs";
import { createTypescriptEslintConfig } from "./configs/typescript.mjs";
import { createUnusedImportsEslintConfig } from "./configs/unused-imports.mjs";

export { createAngularEslintConfig } from "./configs/angular.mjs";
export { createRxjsEslintConfig } from "./configs/rxjs.mjs";

export const createBaseEslintConfig = () => [
  ...createEslintConfig(),
  ...createTypescriptEslintConfig(),
  ...createEnvironmentEslintConfig(),
  ...createJsdocEslintConfig(),
  ...createSimpleImportSortEslintConfig(),
  ...createUnusedImportsEslintConfig(),
  ...createPrettierEslintConfig(),
];
