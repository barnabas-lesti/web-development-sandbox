import { Component, h } from "@stencil/core";

@Component({
  tag: "sui-button",
  styleUrl: "button.component.css",
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
