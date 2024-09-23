import { Component, h, Prop } from "@stencil/core";

import { DEFAULT_BUTTON_COMPONENT_TYPE } from "./button.const";
import { type ButtonComponentType } from "./button.types";

@Component({
  tag: "wds-button",
  styleUrl: "./button.component.css",
  shadow: true,
  formAssociated: true,
})
export class ButtonComponent {
  @Prop() label?: string;

  @Prop() type?: ButtonComponentType = DEFAULT_BUTTON_COMPONENT_TYPE;

  render() {
    return <button type={this.type}>{this.label ? this.label : <slot />}</button>;
  }
}
