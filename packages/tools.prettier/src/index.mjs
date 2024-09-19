// @ts-check

/**
 * Base workspace prettier configuration.
 *
 * https://prettier.io/docs/en/options
 * @type {import("prettier").Options}
 */
export const BASE_WORKSPACE_PRETTIER_CONFIG = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "consistent",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "auto",
  singleAttributePerLine: true,
};
