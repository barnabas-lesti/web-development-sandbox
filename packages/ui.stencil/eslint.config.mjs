import { createEslintConfig, STENCIL_WORKSPACE_ESLINT_CONFIG } from "@wds/tools.eslint";

export default createEslintConfig(
  {
    ignores: [".stencil", "dist", "loader"],
  },
  ...STENCIL_WORKSPACE_ESLINT_CONFIG,
);
