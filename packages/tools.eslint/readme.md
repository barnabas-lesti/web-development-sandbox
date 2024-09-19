# Tools / Eslint

Eslint tool workspace where the project linter configuration is defined and can be consumed by consumers.

## Usage

1. Add `@wds/tools.eslint` development dependency to the consumer workspace.
2. Create a `eslint.config.mjs` file in the root of the workspace.
3. Based on the workspace framework type, import the appropriate workspace configuration, example for an Angular project, use the below content:

```js
import { ANGULAR_WORKSPACE_ESLINT_CONFIG } from "@wds/tools.eslint";

export default ANGULAR_WORKSPACE_ESLINT_CONFIG;
```

4. Add (or update) the `lint` and `lint:fix` scripts to the workspaces `package.json` file:

```json
{
  "scripts": {
    "lint": "prettier . --check && eslint .",
    "lint:fix": "prettier . --write && eslint . --fix"
  }
}
```

Workspaces should not need more configuration (or update) than the already defined workspace configurations, these are exported and can be found in the [src/index.mjs](./src/index.mjs) entry file.

_Note: The `eslint` package doesn't need to be added to the workspace as a dependency, it's automatically available when the tool is added to the workspace._

## Updating rules

The tool contains plugin configuration definitions in the [src/configs](./src/configs) folder. These configurations can be updated if needed, but **important** to note that modifications should be checked because the majority of the settings are shared and can be used by multiple workspaces.

For example if we want to change the linting rules for the `jsdoc` plugin, we can edit the [src/configs/jsdoc.mjs](./src/configs/jsdoc.mjs) file.
