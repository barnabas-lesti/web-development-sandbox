import { withActions } from "@storybook/addon-actions/decorator";
import { type Meta, type StoryObj } from "@storybook/html";

import { type WdsInputComponent } from "./input.component";
import { DEFAULT_WDS_INPUT_TYPE, WDS_INPUT_TYPES } from "./input.const";

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
      options: WDS_INPUT_TYPES,
    },
  },
  render: (args) => Object.assign(document.createElement("wds-input"), args),
} as Meta<WdsInputComponent>;

export const Example: StoryObj<WdsInputComponent> = {
  args: {
    label: "Lorem ipsum",
    value: "",
    type: DEFAULT_WDS_INPUT_TYPE,
  },
};
