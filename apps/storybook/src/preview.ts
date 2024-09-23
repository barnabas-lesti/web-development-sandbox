import { withThemeByClassName } from "@storybook/addon-themes";
import { type Preview } from "@storybook/web-components";

import { defineCustomElements } from "@wds/ui.stencil/loader";

defineCustomElements(window);

import "./index.css";

export default {
  parameters: {
    backgrounds: { disable: true },
    layout: "centered",
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: "Dark",
      themes: {
        Light: "light",
        Dark: "dark",
      },
    }),
  ],
} satisfies Preview;
