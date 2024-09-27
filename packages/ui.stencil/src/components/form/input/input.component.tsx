import { Component, h, Host, Method, Prop, State } from "@stencil/core";

import { DEFAULT_INPUT_COMPONENT_TYPE } from "./input.const";
import { type InputComponentType, type InputComponentValidator } from "./input.types";

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
  @Prop() validators?: InputComponentValidator[] = [];

  @State() private isFocused = false;
  @State() private errorMessages: string[] = [];
  @State() private oldValue: string | undefined;

  @Method()
  async setValidators(validators: InputComponentValidator[]) {
    this.validators = validators;
  }

  private hasErrors(): boolean {
    return this.errorMessages.length > 0;
  }

  private onInputFocus() {
    this.isFocused = true;
  }

  private onInputBlur() {
    this.isFocused = false;
  }

  private onInputInput(event: InputEvent) {
    this.oldValue = this.value;
    this.value = (event.target as HTMLInputElement).value;
  }

  private onInputChange() {
    this.validateInput();
  }

  private validateInput(): void {
    this.errorMessages = [];
    for (const validator of this.validators) {
      if (!validator.validatorFunction(this.value, this.oldValue)) {
        this.errorMessages = [...this.errorMessages, validator.errorMessage];
      }
    }
  }

  render() {
    return (
      <Host
        class={{
          "has-value": !!this.value,
          "is-focused": this.isFocused,
          "is-invalid": this.hasErrors(),
        }}
      >
        {this.label && <label>{this.label}</label>}
        <div class="input-container">
          <input
            value={this.value}
            type={this.type}
            onInput={this.onInputInput.bind(this)}
            onChange={this.onInputChange.bind(this)}
            onFocus={this.onInputFocus.bind(this)}
            onBlur={this.onInputBlur.bind(this)}
          />
          <fieldset>
            <legend>{this.label && <span>{this.label}</span>}</legend>
          </fieldset>
        </div>
        {this.hasErrors() && (
          <div class="error-container">
            {this.errorMessages.map((errorMessage) => (
              <p>{errorMessage}</p>
            ))}
          </div>
        )}
      </Host>
    );
  }
}
