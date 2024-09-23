import { type Preview } from "@storybook/web-components";

import { defineCustomElements } from "@wds/ui.stencil/loader";

defineCustomElements(window);

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;
