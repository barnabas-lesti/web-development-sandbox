// @ts-check

import { ANGULAR_ESLINT_CONFIG, BASE_ESLINT_CONFIG, createEslintConfig, RXJS_ESLINT_CONFIG } from "@wds/tools.eslint";

export default createEslintConfig(BASE_ESLINT_CONFIG, RXJS_ESLINT_CONFIG, ANGULAR_ESLINT_CONFIG);
