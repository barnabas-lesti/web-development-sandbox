import eslintPluginRxJS from "eslint-plugin-rxjs";
import typescriptEslint from "typescript-eslint";

export const createRxjsEslintConfig = () =>
  typescriptEslint.config({
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      rxjs: eslintPluginRxJS,
    },
    rules: {
      ...eslintPluginRxJS.configs["recommended"].rules,
      "rxjs/no-ignored-subscription": "error",
    },
  });
