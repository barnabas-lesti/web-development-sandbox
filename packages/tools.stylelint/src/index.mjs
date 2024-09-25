// @ts-check

/**
 * Base workspace stylelint configuration.
 *
 * https://stylelint.io/user-guide/rules
 * @type {import('stylelint').Config} */
export const BASE_WORKSPACE_STYLELINT_CONFIG = {
  extends: ["stylelint-config-recommended", "stylelint-scss", "stylelint-config-clean-order/error"],
  rules: {
    "no-empty-source": null,
    "color-no-hex": true,
    "color-named": "never",
  },
};
