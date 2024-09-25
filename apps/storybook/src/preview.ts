import { withThemeByClassName } from "@storybook/addon-themes";
import { type Preview } from "@storybook/web-components";

import { defineCustomElements } from "@wds/ui.stencil/loader";

import { DEFAULT_THEME_NAME, THEMES_MAP } from "./theme";

defineCustomElements();

export default {
  parameters: {
    backgrounds: { disable: true },
    layout: "centered",
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: DEFAULT_THEME_NAME,
      themes: THEMES_MAP,
    }),
  ],
} satisfies Preview;
