import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint";

export const createPrettierEslintConfig = () => typescriptEslint.config(eslintConfigPrettier);
