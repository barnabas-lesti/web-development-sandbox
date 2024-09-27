import { type Meta, type StoryObj } from "@storybook/html";

import { type WdsColumnComponent } from "./column.component";

export default {
  title: "Layout / wds-column",
  parameters: {
    layout: "padded",
  },
  argTypes: {},
  render: (args) => {
    void args;
    return `
      <wds-container>
        <wds-column size-md="6" size-lg="4"><div class="box">Box 1</div></wds-column>
        <wds-column size-md="6" size-lg="4"><div class="box">Box 1</div></wds-column>
        <wds-column size-md="12" size-lg="4"><div class="box">Box 1</div></wds-column>
      </wds-container>
    `;
  },
} as Meta<WdsColumnComponent>;

export const Example: StoryObj<WdsColumnComponent> = {
  args: {},
};
