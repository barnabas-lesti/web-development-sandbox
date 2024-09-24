import { Component, h, Listen, Prop, State } from "@stencil/core";

@Component({
  tag: "wds-input",
  styleUrl: "./input.component.css",
  shadow: true,
  formAssociated: true,
})
export class InputComponent {
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop() label?: string;

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
      <div
        class={{
          "container": true,
          "focused": this.isFocused,
          "has-value": !!this.value,
        }}
      >
        {this.label && <label>{this.label}</label>}
        <div class="input-wrapper">
          <input
            value={this.value}
            onInput={(event) => (this.value = (event.target as HTMLInputElement).value)}
          />
          <fieldset>
            <legend>{this.label && <span>{this.label}</span>}</legend>
          </fieldset>
        </div>
      </div>
    );
  }
}
