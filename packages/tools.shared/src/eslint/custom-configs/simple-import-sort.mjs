import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

const PROJECT_ID = "wds";

export const CUSTOM_SIMPLE_IMPORT_SORT_CONFIG = [
  {
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^@?\\w"], [`^@${PROJECT_ID}?\\w`], ["^\\./", "^\\.\\./"], ["^/"], ["^.+\\.(css|scss)([?].*)?$"]],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
];
