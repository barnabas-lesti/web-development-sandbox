import typescriptEslint from "typescript-eslint";

export const createTypescriptEslintConfig = () => {
  return typescriptEslint.config({
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: true,
      },
    },
    extends: [...typescriptEslint.configs.strict, ...typescriptEslint.configs.stylistic],
    // https://typescript-eslint.io/rules
    rules: {
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
    },
  });
};
