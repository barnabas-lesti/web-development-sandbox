import eslintPluginJSDoc from "eslint-plugin-jsdoc";
import typescriptEslint from "typescript-eslint";

export const createJsdocEslintConfig = () =>
  typescriptEslint.config(
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.cjs", "**/*.mjs"],
      extends: [eslintPluginJSDoc.configs["flat/recommended-typescript"]],
      // https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules
      rules: {
        "jsdoc/require-jsdoc": "off",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "jsdoc/require-param": "off",
        "jsdoc/check-param-names": "off",
        "jsdoc/require-returns": "off",
      },
    },
    {
      files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
      rules: {
        "jsdoc/check-tag-names": "off",
        "jsdoc/no-types": "off",
      },
    },
  );
