import { Component, h } from "@stencil/core";

@Component({
  tag: "wds-button",
  styleUrl: "button.component.css",
  shadow: true,
})
export class ButtonComponent {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
