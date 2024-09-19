import eslint from "@eslint/js";
import globals from "globals";

/**
 * Base eslint configuration.
 *
 * https://eslint.org/docs/latest/use/configure/
 * @type {ConfigWithExtends[]}
 */
export const ESLINT_CONFIG = [
  { ignores: [".turbo", "dist", "node_modules"] },
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
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
