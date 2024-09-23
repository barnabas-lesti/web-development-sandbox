import { type Meta, type StoryObj } from "@storybook/html";

import { type ButtonComponent } from "./button.component";
import { BUTTON_COMPONENT_TYPES, DEFAULT_BUTTON_COMPONENT_TYPE } from "./button.const";

export default {
  title: "wds-button",
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
  },
  render(args) {
    return `
      <wds-button
        type="${args.type}"
      >
        ${args.label}
      </wds-button>
    `;
  },
} as Meta<ButtonComponent>;

export const Example: StoryObj<ButtonComponent> = {
  args: {
    label: "Button",
    type: DEFAULT_BUTTON_COMPONENT_TYPE,
  },
};
