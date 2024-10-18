import angularEslint from "angular-eslint";

import { convertConfigWithExtendsToFlatConfig } from "../utility/index.mjs";

/**
 * Angular framework related eslint configuration.
 * @type {import('eslint').Linter.Config[]}
 */
export const ANGULAR_ESLINT_CONFIG = convertConfigWithExtendsToFlatConfig(
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
);
