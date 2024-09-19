import typescriptEslint from "typescript-eslint";

declare global {
  /**
   * Project specific eslint config type.
   */
  type ConfigWithExtends = typescriptEslint.ConfigWithExtends;
}
