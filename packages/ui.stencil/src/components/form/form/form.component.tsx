import { Component, h } from "@stencil/core";

import { type InputComponentValidators } from "../input/input.types";

@Component({
  tag: "wds-form",
  styleUrl: "./form.component.scss",
  shadow: true,
})
export class FormComponent {
  firstNameInputValidators: InputComponentValidators = [
    {
      id: "required",
      errorMessage: "This field is required",
      validatorFunction(newValue: string) {
        return !!newValue;
      },
    },
  ];

  render() {
    return (
      <form>
        <wds-container>
          <wds-column>
            <wds-input
              label="First name"
              validators={this.firstNameInputValidators}
            />
          </wds-column>
        </wds-container>
      </form>
    );
  }
}
