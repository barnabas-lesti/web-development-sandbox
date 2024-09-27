import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "wds-column",
  styleUrl: "./column.component.scss",
  shadow: true,
})
export class WdsColumnComponent {
  @Prop() size?: number;
  @Prop() sizeMd?: number;
  @Prop() sizeLg?: number;

  render() {
    return (
      <Host
        class={{
          ["sm-" + this.size]: !!this.size,
          ["md-" + this.sizeMd]: !!this.sizeMd,
          ["lg-" + this.sizeLg]: !!this.sizeLg,
        }}
      >
        <slot />
      </Host>
    );
  }
}
