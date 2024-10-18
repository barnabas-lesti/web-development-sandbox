import eslintPluginNext from "@next/eslint-plugin-next";

/**
 * NextJS framework configuration.
 * @type {import('eslint').Linter.Config[]}
 */
export const NEXT_ESLINT_CONFIG = [
  {
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs["core-web-vitals"].rules,
    },
  },
];
