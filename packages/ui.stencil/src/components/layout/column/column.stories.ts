import { type Meta, type StoryObj } from "@storybook/html";

import { type ColumnComponent } from "./column.component";

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
        <wds-column size="2"><div class="box">Box 1</div></wds-column>
        <wds-column size="8"><div class="box">Box 1</div></wds-column>
        <wds-column size="2"><div class="box">Box 1</div></wds-column>
      </wds-container>
    `;
  },
} as Meta<ColumnComponent>;

export const Example: StoryObj<ColumnComponent> = {
  args: {},
};
