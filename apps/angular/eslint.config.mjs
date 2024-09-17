import { createAngularEslintConfig, createBaseEslintConfig } from "@wds/tools.eslint";

export default [...createBaseEslintConfig(), ...createAngularEslintConfig()];
