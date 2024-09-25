import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "wds-container",
  styleUrl: "./container.component.css",
  shadow: true,
})
export class ContainerComponent {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
