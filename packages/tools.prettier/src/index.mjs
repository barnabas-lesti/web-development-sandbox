/**
 * Base workspace prettier configuration.
 * @type {import("prettier").Options}
 */
const BASE_PRETTIER_CONFIG = {
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

/**
 * Factory function to create prettier configuration with the possibility override the project default.
 * @param  {import("prettier").Options} override Override optional configuration.
 * @returns {import("prettier").Options} Finalized config.
 */
export const createPrettierConfig = (override = {}) => ({
  ...BASE_PRETTIER_CONFIG,
  ...override,
});
