import typescriptEslint from "typescript-eslint";

export const CUSTOM_TYPESCRIPT_CONFIG = [
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,
  {
    // https://typescript-eslint.io/rules
    rules: {
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
    },
  },
];
