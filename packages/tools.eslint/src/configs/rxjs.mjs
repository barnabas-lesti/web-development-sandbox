import eslintPluginRxJS from "eslint-plugin-rxjs";
import typescriptEslint from "typescript-eslint";

/**
 * RxJS framework related eslint configuration.
 * @type {import('eslint').Linter.Config[]}
 */
export const RXJS_ESLINT_CONFIG = [
  {
    files: ["**/*.{ts,tsx,vue}"],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      // @ts-ignore
      rxjs: eslintPluginRxJS,
    },
    rules: {
      ...eslintPluginRxJS.configs["recommended"].rules,
      "rxjs/no-ignored-subscription": "error",
    },
  },
];
