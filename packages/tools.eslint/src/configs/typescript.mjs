// @ts-check

import typescriptEslint from "typescript-eslint";

/**
 * Typescript eslint configuration.
 *
 * https://typescript-eslint.io/rules
 */
export const TYPESCRIPT_ESLINT_CONFIG = typescriptEslint.config({
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: {
      project: true,
    },
  },
  extends: [...typescriptEslint.configs.strict, ...typescriptEslint.configs.stylistic],
  rules: {
    "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
  },
});
