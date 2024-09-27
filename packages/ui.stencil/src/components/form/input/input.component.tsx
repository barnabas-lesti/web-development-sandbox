import { Component, h, Host, Listen, Prop, State } from "@stencil/core";

import { DEFAULT_INPUT_COMPONENT_TYPE } from "./input.const";
import { type InputComponentType } from "./input.types";

@Component({
  tag: "wds-input",
  styleUrl: "./input.component.scss",
  shadow: true,
  formAssociated: true,
})
export class InputComponent {
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop() label?: string;
  @Prop() type?: InputComponentType = DEFAULT_INPUT_COMPONENT_TYPE;

  @State() private isFocused = false;

  @Listen("focus")
  focusEventHandler() {
    this.isFocused = true;
  }

  @Listen("blur")
  blurEventHandler() {
    this.isFocused = false;
  }

  render() {
    return (
      <Host
        class={{
          "focused": this.isFocused,
          "has-value": !!this.value,
        }}
      >
        {this.label && <label>{this.label}</label>}
        <div class="input-wrapper">
          <input
            value={this.value}
            onInput={(event) => (this.value = (event.target as HTMLInputElement).value)}
            type={this.type}
          />
          <fieldset>
            <legend>{this.label && <span>{this.label}</span>}</legend>
          </fieldset>
        </div>
      </Host>
    );
  }
}
