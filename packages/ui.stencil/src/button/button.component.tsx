import { Component, h } from "@stencil/core";

@Component({
  tag: "sui-button",
  styleUrl: "button.component.css",
  shadow: true,
})
export class ButtonComponent {
  render() {
    return <slot />;
  }
}
