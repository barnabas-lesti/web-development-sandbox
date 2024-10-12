import eslintPluginRxJS from "eslint-plugin-rxjs";
import typescriptEslint from "typescript-eslint";

/**
 * RxJS framework related eslint configuration.
 * @type {import('#types').ConfigWithExtends[]}
 */
export const RXJS_ESLINT_PLUGIN_CONFIG = [
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
