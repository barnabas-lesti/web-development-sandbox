import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * Simple import sort eslint plugin configuration.
 * @type {import('eslint').Linter.Config[]}
 */
export const SIMPLE_IMPORT_SORT_ESLINT_CONFIG = [
  {
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^@?\\w"],
            ["^#?\\w"],
            ["^@wds?\\w"],
            ["^@src?\\w"],
            ["^\\./", "^\\.\\./"],
            ["^/"],
            ["^.+\\.(css|scss)([?].*)?$"],
          ],
        },
      ],
    },
  },
];
