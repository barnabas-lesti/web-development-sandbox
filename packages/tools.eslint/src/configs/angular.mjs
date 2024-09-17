import angularEslint from "angular-eslint";
import typescriptEslint from "typescript-eslint";

export const createAngularEslintConfig = () =>
  typescriptEslint.config(
    { ignores: [".angular"] },
    {
      files: ["**/*.ts"],
      extends: [...angularEslint.configs.tsRecommended],
      processor: angularEslint.processInlineTemplates,
      // https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin/docs/rules
      rules: {
        "@angular-eslint/component-class-suffix": ["error", { suffixes: ["Component", "Container", "Page", "Modal"] }],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
    },
    {
      files: ["**/*.html"],
      extends: [...angularEslint.configs.templateRecommended, ...angularEslint.configs.templateAccessibility],
      // https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template/docs/rules
      rules: {
        "@angular-eslint/template/prefer-self-closing-tags": "error",
      },
    },
  );
