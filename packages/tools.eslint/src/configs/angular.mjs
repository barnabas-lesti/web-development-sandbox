// @ts-check

import angularEslint from "angular-eslint";

/**
 * Angular framework related eslint configuration.
 *
 * https://github.com/angular-eslint/angular-eslint
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
export const ANGULAR_ESLINT_CONFIG = [
  { ignores: [".angular"] },
  {
    files: ["**/*.ts"],
    extends: [...angularEslint.configs.tsRecommended],
    processor: angularEslint.processInlineTemplates,
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
    rules: {
      "@angular-eslint/template/prefer-self-closing-tags": "error",
    },
  },
];
