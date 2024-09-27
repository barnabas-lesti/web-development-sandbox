import { withActions } from "@storybook/addon-actions/decorator";
import { type Meta, type StoryObj } from "@storybook/html";

import { type InputComponent } from "./input.component";
import { DEFAULT_INPUT_COMPONENT_TYPE, INPUT_COMPONENT_TYPES } from "./input.const";

export default {
  title: "Form / wds-input",
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ["input"],
    },
  },
  argTypes: {
    label: {
      type: "string",
      control: { type: "text" },
    },
    value: {
      type: "string",
      control: { type: "text" },
    },
    type: {
      type: "string",
      control: { type: "select" },
      options: INPUT_COMPONENT_TYPES,
    },
  },
  render: (args) => Object.assign(document.createElement("wds-input"), args),
} as Meta<InputComponent>;

export const Example: StoryObj<InputComponent> = {
  args: {
    label: "Lorem ipsum",
    value: "",
    type: DEFAULT_INPUT_COMPONENT_TYPE,
  },
};
