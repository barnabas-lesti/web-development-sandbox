import { Component, h, Prop } from "@stencil/core";

import { DEFAULT_WDS_BUTTON_MODE, DEFAULT_WDS_BUTTON_TYPE } from "./button.const";
import { type WdsButtonMode, type WdsButtonType } from "./button.types";

@Component({
  tag: "wds-button",
  styleUrl: "./button.component.scss",
  shadow: true,
  formAssociated: true,
})
export class WdsButtonComponent {
  @Prop() label?: string;
  @Prop() type?: WdsButtonType = DEFAULT_WDS_BUTTON_TYPE;
  @Prop() mode?: WdsButtonMode = DEFAULT_WDS_BUTTON_MODE;

  render() {
    return (
      <button
        type={this.type}
        class={this.mode}
      >
        {this.label ? this.label : <slot />}
      </button>
    );
  }
}
