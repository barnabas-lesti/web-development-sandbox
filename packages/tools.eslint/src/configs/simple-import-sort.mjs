import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * Simple import sort eslint plugin configuration.
 *
 * https://github.com/lydell/eslint-plugin-simple-import-sort
 * @type {ConfigWithExtends[]}
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
