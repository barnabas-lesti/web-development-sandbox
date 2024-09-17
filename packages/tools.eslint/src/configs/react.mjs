import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";

/**
 * React framework eslint configuration.
 *
 * https://www.npmjs.com/package/eslint-plugin-react-hooks
 *
 * https://github.com/ArnaudBarre/eslint-plugin-react-refresh
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
export const REACT_ESLINT_CONFIG = [
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "error",
    },
  },
];
