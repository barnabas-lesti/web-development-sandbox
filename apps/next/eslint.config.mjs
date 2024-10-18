import {
  ESLINT_CONFIG,
  JSDOC_ESLINT_CONFIG,
  NEXT_ESLINT_CONFIG,
  PRETTIER_ESLINT_CONFIG,
  REACT_ESLINT_CONFIG,
  SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  TYPESCRIPT_ESLINT_CONFIG,
  UNUSED_IMPORTS_ESLINT_CONFIG,
} from "@wds/tools.eslint";

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  { ignores: [".next"] },
  ...ESLINT_CONFIG,
  ...TYPESCRIPT_ESLINT_CONFIG,
  ...JSDOC_ESLINT_CONFIG,
  ...SIMPLE_IMPORT_SORT_ESLINT_CONFIG,
  ...UNUSED_IMPORTS_ESLINT_CONFIG,
  ...REACT_ESLINT_CONFIG,
  ...NEXT_ESLINT_CONFIG,
  ...PRETTIER_ESLINT_CONFIG,
  {
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
];
