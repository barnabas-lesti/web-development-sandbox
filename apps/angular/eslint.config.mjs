import { BASE_ESLINT_CONFIG, RXJS_ESLINT_CONFIG } from "@wds/tools.eslint";

export default [...BASE_ESLINT_CONFIG, { ignores: [".angular"] }, ...RXJS_ESLINT_CONFIG];
