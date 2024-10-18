import typescriptEslint from "typescript-eslint";

import { convertConfigWithExtendsToFlatConfig } from "../utility/index.mjs";

/**
 * Typescript eslint configuration.
 * @type {import('eslint').Linter.Config[]}
 */
export const TYPESCRIPT_ESLINT_CONFIG = convertConfigWithExtendsToFlatConfig(
  {
    files: ["**/*.{ts,tsx,vue,js,cjs,mjs}"],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
        project: true,
        extraFileExtensions: [".vue"],
      },
    },
    extends: [...typescriptEslint.configs.strict, ...typescriptEslint.configs.stylistic],
    rules: {
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-extraneous-class": "off",
    },
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
);
