import globals from "globals";

export const CUSTOM_ENVIRONMENT_CONFIG = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
