# Tools / Stylelint

Stylelint tool workspace where the project formatting configuration is defined and can be consumed by consumers.

## Usage

1. Add `@wds/tools.stylelint` development dependency to the consumer workspace.
2. Create a `stylelint.config.mjs` file in the root of the workspace with the below content:

```js
import { STYLELINT_CONFIG } from "@wds/tools.stylelint";

export default STYLELINT_CONFIG;
```

3. Add the `lint` and `lint:fix` scripts to the workspaces `package.json` file:

```json
{
  "scripts": {
    "lint": "stylelint \"**/*.{css,scss}\"",
    "lint:fix": "stylelint \"**/*.{css,scss}\" --fix"
  }
}
```

_Note: The `stylelint` package doesn't need to be added to the workspace as a dependency, it's automatically available when the tool is added to the workspace._

## Updating rules

The `STYLELINT_CONFIG` configuration object can be found in the [src/index.mjs](./src/index.mjs) file, it can be edited if formatting rules need to be changed.
