// @ts-check

import typescriptEslint from "typescript-eslint";

/**
 * Typescript eslint configuration.
 *
 * https://typescript-eslint.io/rules
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
export const TYPESCRIPT_ESLINT_CONFIG = [
  {
    files: ["**/*.{ts,tsx,vue}"],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
        project: true,
      },
    },
    extends: [...typescriptEslint.configs.strict, ...typescriptEslint.configs.stylistic],
    rules: {
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
    },
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
  },
];
