import { type Meta, type StoryObj } from "@storybook/html";

export default {
  title: "wds-button",
  component: "wds-button",
  argTypes: {},
  render() {
    return `<wds-button>Default</wds-button>`;
  },
} as Meta;

export const Primary: StoryObj = {
  args: {},
};
