import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

export const SIMPLE_IMPORT_SORT_ESLINT_CONFIG = [
  {
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    // https://github.com/lydell/eslint-plugin-simple-import-sort
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
  },
];
