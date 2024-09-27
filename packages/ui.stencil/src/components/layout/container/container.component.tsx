import { Component, h, Host, Prop } from "@stencil/core";

import { DEFAULT_WDS_CONTAINER_DIRECTION } from "./container.const";
import { type WdsContainerDirection } from "./container.types";

@Component({
  tag: "wds-container",
  styleUrl: "./container.component.scss",
  shadow: true,
})
export class WdsContainerComponent {
  @Prop() direction?: WdsContainerDirection = DEFAULT_WDS_CONTAINER_DIRECTION;
  render() {
    return (
      <Host class={this.direction}>
        <slot />
      </Host>
    );
  }
}
