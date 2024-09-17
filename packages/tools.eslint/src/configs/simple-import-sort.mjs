import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import typescriptEslint from "typescript-eslint";

export const createSimpleImportSortEslintConfig = () =>
  typescriptEslint.config({
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
  });
