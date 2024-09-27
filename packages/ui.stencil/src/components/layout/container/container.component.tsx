import { Component, h, Host, Prop } from "@stencil/core";

import { DEFAULT_CONTAINER_COMPONENT_DIRECTIONS } from "./container.const";
import { type ContainerComponentDirection } from "./container.types";

@Component({
  tag: "wds-container",
  styleUrl: "./container.component.scss",
  shadow: true,
})
export class ContainerComponent {
  @Prop() direction?: ContainerComponentDirection = DEFAULT_CONTAINER_COMPONENT_DIRECTIONS;
  render() {
    return (
      <Host class={this.direction}>
        <slot />
      </Host>
    );
  }
}
