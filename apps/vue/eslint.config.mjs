import { createEslintConfig, VUE_WORKSPACE_ESLINT_CONFIG } from "@wds/tools.eslint";

export default createEslintConfig(
  {
    ignores: ["dist"],
  },
  ...VUE_WORKSPACE_ESLINT_CONFIG,
);
