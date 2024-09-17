import angularEslint from "angular-eslint";

export const ANGULAR_ESLINT_CONFIG = [
  { ignores: [".angular"] },
  ...angularEslint.configs.tsRecommended,
  {
    processor: angularEslint.processInlineTemplates,
    rules: {
      // https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin/docs/rules
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
];
