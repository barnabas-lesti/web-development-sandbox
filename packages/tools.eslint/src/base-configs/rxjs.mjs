import eslintPluginRxJS from "eslint-plugin-rxjs";
import typescriptEslint from "typescript-eslint";

/**
 * RxJS framework related eslint configuration.
 *
 * https://github.com/cartant/eslint-plugin-rxjs
 * @type {import('typescript-eslint').ConfigWithExtends[]}
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
      rxjs: eslintPluginRxJS,
    },
    rules: {
      ...eslintPluginRxJS.configs["recommended"].rules,
      "rxjs/no-ignored-subscription": "error",
    },
  },
];
