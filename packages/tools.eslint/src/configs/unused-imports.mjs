import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import typescriptEslint from "typescript-eslint";

export const createUnusedImportsEslintConfig = () =>
  typescriptEslint.config({
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
    },
    // https://github.com/sweepline/eslint-plugin-unused-imports
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",
    },
  });
