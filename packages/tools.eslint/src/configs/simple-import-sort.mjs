// @ts-check

import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import typescriptEslint from "typescript-eslint";

/**
 * Simple import sort eslint plugin configuration.
 *
 * https://github.com/lydell/eslint-plugin-simple-import-sort
 */
export const SIMPLE_IMPORT_SORT_ESLINT_CONFIG = typescriptEslint.config({
  plugins: {
    "simple-import-sort": eslintPluginSimpleImportSort,
  },
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^@?\\w"],
          ["^@wds?\\w"],
          ["^@src?\\w"],
          ["^\\./", "^\\.\\./"],
          ["^/"],
          ["^.+\\.(css|scss)([?].*)?$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
});
