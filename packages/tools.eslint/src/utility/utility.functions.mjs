import typescriptEslint from "typescript-eslint";

/**
 * Utility function to merge and convert provided configurations to flat eslint config.
 * @param  {(typescriptEslint.ConfigWithExtends)[]} configs Configuration arguments.
 * @returns {import('eslint').Linter.Config[]} Flat eslint config.
 */
export const convertConfigWithExtendsToFlatConfig = (...configs) => typescriptEslint.config(...configs);
