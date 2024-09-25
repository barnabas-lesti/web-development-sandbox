import { type Meta, type StoryObj } from "@storybook/html";

import { type ContainerComponent } from "./container.component";

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
} as Meta<ContainerComponent>;

export const Example: StoryObj<ContainerComponent> = {
  args: {},
};
