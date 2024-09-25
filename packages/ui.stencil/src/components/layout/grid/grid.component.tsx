import { Component, h } from "@stencil/core";

@Component({
  tag: "wds-grid",
  styleUrl: "./grid.component.css",
  shadow: true,
})
export class GridComponent {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
