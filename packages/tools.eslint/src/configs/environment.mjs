import globals from "globals";

export const ENVIRONMENT_ESLINT_CONFIG = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
