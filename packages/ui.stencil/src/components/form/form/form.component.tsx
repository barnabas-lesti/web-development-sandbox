import { Component, h } from "@stencil/core";

import { createRequiredValidator } from "../input/input.functions";

@Component({
  tag: "wds-form",
  styleUrl: "./form.component.scss",
  shadow: true,
})
export class WdsFormComponent {
  render() {
    return (
      <form>
        <wds-container>
          <wds-column>
            <wds-input
              label="First name"
              validators={[createRequiredValidator()]}
            />
          </wds-column>
        </wds-container>
      </form>
    );
  }
}
