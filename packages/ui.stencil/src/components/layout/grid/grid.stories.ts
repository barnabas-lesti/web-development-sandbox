import { type Meta, type StoryObj } from "@storybook/html";

import { type GridComponent } from "./grid.component";

export default {
  title: "Layout / wds-grid",
  parameters: {
    layout: "padded",
  },
  argTypes: {},
  render: (args) => {
    void args;
    return `
      <wds-container>
        <wds-grid><div class="box">Box 1</div></wds-grid>
        <wds-grid><div class="box">Box 1</div></wds-grid>
        <wds-grid><div class="box">Box 1</div></wds-grid>
      </wds-container>
    `;
  },
} as Meta<GridComponent>;

export const Example: StoryObj<GridComponent> = {
  args: {},
};
