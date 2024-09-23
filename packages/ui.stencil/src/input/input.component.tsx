import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "wds-input",
  styleUrl: "./input.component.css",
  shadow: true,
  formAssociated: true,
})
export class InputComponent {
  @Prop({ reflect: true, mutable: true }) value: string;

  render() {
    return (
      <input
        value={this.value}
        onInput={(event) => (this.value = (event.target as HTMLInputElement).value)}
      />
    );
  }
}
