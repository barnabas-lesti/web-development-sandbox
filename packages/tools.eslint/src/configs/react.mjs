import eslintPluginReact from "eslint-plugin-react";
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
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react": eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": "error",
    },
  },
];
