import { withActions } from "@storybook/addon-actions/decorator";
import { type Meta, type StoryObj } from "@storybook/html";

import { type ButtonComponent } from "./button.component";
import {
  BUTTON_COMPONENT_MODES,
  BUTTON_COMPONENT_TYPES,
  DEFAULT_BUTTON_COMPONENT_MODE,
  DEFAULT_BUTTON_COMPONENT_TYPE,
} from "./button.const";

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
      options: BUTTON_COMPONENT_TYPES,
    },
    mode: {
      type: "string",
      control: { type: "select" },
      options: BUTTON_COMPONENT_MODES,
    },
  },
  render: (args) => Object.assign(document.createElement("wds-button"), args),
} as Meta<ButtonComponent>;

export const Example: StoryObj<ButtonComponent> = {
  args: {
    label: "Button",
    type: DEFAULT_BUTTON_COMPONENT_TYPE,
    mode: DEFAULT_BUTTON_COMPONENT_MODE,
  },
};
