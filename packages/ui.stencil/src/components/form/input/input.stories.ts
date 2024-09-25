import { withActions } from "@storybook/addon-actions/decorator";
import { type Meta, type StoryObj } from "@storybook/html";

import { type InputComponent } from "./input.component";

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
  },
  render: (args) => Object.assign(document.createElement("wds-input"), args),
} as Meta<InputComponent>;

export const Example: StoryObj<InputComponent> = {
  args: {
    label: "Lorem ipsum",
    value: "",
  },
};
