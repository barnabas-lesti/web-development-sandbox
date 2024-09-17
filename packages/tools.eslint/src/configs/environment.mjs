import globals from "globals";
import typescriptEslint from "typescript-eslint";

export const createEnvironmentEslintConfig = () =>
  typescriptEslint.config({
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  });
