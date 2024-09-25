import { Component, h, Prop } from "@stencil/core";

import { DEFAULT_BUTTON_COMPONENT_MODE, DEFAULT_BUTTON_COMPONENT_TYPE } from "./button.const";
import { type ButtonComponentMode, type ButtonComponentType } from "./button.types";

@Component({
  tag: "wds-button",
  styleUrl: "./button.component.css",
  shadow: true,
  formAssociated: true,
})
export class ButtonComponent {
  @Prop() label?: string;
  @Prop() type?: ButtonComponentType = DEFAULT_BUTTON_COMPONENT_TYPE;
  @Prop() mode?: ButtonComponentMode = DEFAULT_BUTTON_COMPONENT_MODE;

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
