import { BASE_WORKSPACE_ESLINT_CONFIG, createEslintConfig } from "@wds/tools.eslint";

export default createEslintConfig(
  {
    ignores: [".angular", "dist"],
  },
  ...BASE_WORKSPACE_ESLINT_CONFIG,
);
