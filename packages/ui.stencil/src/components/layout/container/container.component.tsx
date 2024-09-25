import { Component, h } from "@stencil/core";

@Component({
  tag: "wds-container",
  styleUrl: "./container.component.css",
  shadow: true,
})
export class ContainerComponent {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
