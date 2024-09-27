import { withActions } from "@storybook/addon-actions/decorator";
import { type Meta, type StoryObj } from "@storybook/html";

import { type WdsButtonComponent } from "./button.component";
import { DEFAULT_WDS_BUTTON_MODE, DEFAULT_WDS_BUTTON_TYPE, WDS_BUTTON_MODES, WDS_BUTTON_TYPES } from "./button.const";

export default {
  title: "Form / wds-button",
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
  argTypes: {
    label: {
      type: "string",
      control: { type: "text" },
    },
    type: {
      type: "string",
      control: { type: "select" },
      options: WDS_BUTTON_TYPES,
    },
    mode: {
      type: "string",
      control: { type: "select" },
      options: WDS_BUTTON_MODES,
    },
  },
  render: (args) => Object.assign(document.createElement("wds-button"), args),
} as Meta<WdsButtonComponent>;

export const Example: StoryObj<WdsButtonComponent> = {
  args: {
    label: "Button",
    type: DEFAULT_WDS_BUTTON_TYPE,
    mode: DEFAULT_WDS_BUTTON_MODE,
  },
};
