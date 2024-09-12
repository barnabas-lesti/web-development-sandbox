import { BASE_ESLINT_CONFIG } from "@wds/tools.shared/eslint";

export default [...BASE_ESLINT_CONFIG, { ignores: [".angular"] }];
