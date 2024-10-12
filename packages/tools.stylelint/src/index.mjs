/**
 * Base workspace stylelint configuration.
 * @type {import('stylelint').Config} */
const BASE_STYLELINT_CONFIG = {
  extends: ["stylelint-config-recommended", "stylelint-config-standard-scss", "stylelint-config-clean-order/error"],
  rules: {
    "no-empty-source": null,
    "color-no-hex": true,
    "color-named": "never",
    "scss/operator-no-newline-after": null,
  },
};

/**
 * Factory function to create stylelint configuration with the possibility override the project default.
 * @param  {import('stylelint').Config} override Override optional configuration.
 * @returns {import('stylelint').Config} Finalized config.
 */
export const createStylelintConfig = (override = {}) => ({
  ...BASE_STYLELINT_CONFIG,
  ...override,
});
