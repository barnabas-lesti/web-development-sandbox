import { createEslintConfig, REACT_WORKSPACE_ESLINT_CONFIG } from "@wds/tools.eslint";

export default createEslintConfig(
  {
    ignores: ["dist"],
  },
  ...REACT_WORKSPACE_ESLINT_CONFIG,
);
