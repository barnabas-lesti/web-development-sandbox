import { Component, h } from "@stencil/core";

@Component({
  tag: "sui-input",
  styleUrl: "input.component.css",
  shadow: true,
})
export class InputComponent {
  render() {
    return <slot />;
  }
}
