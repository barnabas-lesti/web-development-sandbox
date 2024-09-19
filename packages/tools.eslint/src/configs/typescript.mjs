import typescriptEslint from "typescript-eslint";

/**
 * Typescript eslint configuration.
 *
 * https://typescript-eslint.io/rules
 * @type {ConfigWithExtends[]}
 */
export const TYPESCRIPT_ESLINT_CONFIG = [
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
];
