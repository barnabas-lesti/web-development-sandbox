import { BASE_WORKSPACE_ESLINT_CONFIG, createEslintConfig } from "@wds/tools.eslint";

export default createEslintConfig(
  {
    ignores: ["dist"],
  },
  ...BASE_WORKSPACE_ESLINT_CONFIG,
);
