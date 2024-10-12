import { ANGULAR_WORKSPACE_ESLINT_CONFIG, createEslintConfig } from "@wds/tools.eslint";

export default createEslintConfig(
  {
    ignores: [".angular", "dist"],
  },
  ...ANGULAR_WORKSPACE_ESLINT_CONFIG,
);
