import { type Meta, type StoryObj } from "@storybook/html";

import { type WdsContainerComponent } from "./container.component";

import "./container.stories.css";

export default {
  title: "Layout / wds-container",
  parameters: {
    layout: "padded",
  },
  argTypes: {},
  render: (args) => {
    void args;
    return `
      <wds-container>
        <div class="box">Box</div>
      </wds-container>
    `;
  },
} as Meta<WdsContainerComponent>;

export const Example: StoryObj<WdsContainerComponent> = {
  args: {},
};
