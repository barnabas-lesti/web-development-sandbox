// @ts-check

import eslint from "@eslint/js";

/**
 * Base eslint configuration.
 *
 * https://eslint.org/docs/latest/use/configure/
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
export const ESLINT_CONFIG = [
  { ignores: ["node_modules", ".turbo", "dist"] },
  {
    extends: [eslint.configs.recommended],
    rules: {
      "eol-last": ["error", "always"],
      "default-param-last": ["error"],
      "no-trailing-spaces": ["error"],
      "arrow-spacing": ["error"],
      "prefer-const": ["error"],
      "no-console": ["error", { allow: ["debug", "warn", "error"] }],
      "no-restricted-syntax": [
        "error",
        { selector: "MethodDefinition[kind='set']", message: "Property setters are not allowed." },
        { selector: "MethodDefinition[kind='get']", message: "Property getters are not allowed." },
      ],
    },
  },
];
